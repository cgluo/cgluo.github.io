const state = {
  apps: [],
  query: "",
  tag: "all",
};

const els = {
  title: document.getElementById("site-title"),
  subtitle: document.getElementById("site-subtitle"),
  count: document.getElementById("count"),
  toolbar: document.getElementById("toolbar"),
  search: document.getElementById("search"),
  filters: document.getElementById("filters"),
  status: document.getElementById("status"),
  grid: document.getElementById("grid"),
};

function encodePath(value) {
  return String(value)
    .split("/")
    .filter(Boolean)
    .map((part) => encodeURIComponent(part))
    .join("/");
}

function appHref(app) {
  const folder = encodePath(app.folder);
  const entry = String(app.entry || "index.html").trim();
  if (!entry || entry === "index.html") {
    return `./apps/${folder}/`;
  }
  return `./apps/${folder}/${encodePath(entry)}`;
}

function coverUrl(app) {
  const cover = String(app.cover || "").trim();
  if (!cover) return "";
  if (/^(https?:)?\/\//.test(cover) || cover.startsWith("/") || cover.startsWith("./") || cover.startsWith("../")) {
    return cover;
  }
  return `./apps/${encodePath(app.folder)}/${encodePath(cover)}`;
}

function hashHue(text) {
  let hash = 0;
  for (const char of text) {
    hash = (hash * 31 + char.codePointAt(0)) >>> 0;
  }
  return hash % 360;
}

function initial(name) {
  const chars = [...String(name).trim()];
  return chars[0] || "•";
}

function tagsOf(app) {
  return Array.isArray(app.tags) ? app.tags.map(String).map((tag) => tag.trim()).filter(Boolean) : [];
}

function matches(app) {
  if (state.tag !== "all" && !tagsOf(app).includes(state.tag)) return false;
  const query = state.query.trim().toLowerCase();
  if (!query) return true;
  const haystack = [app.name, app.description || "", ...tagsOf(app)].join(" ").toLowerCase();
  return haystack.includes(query);
}

function renderFilters() {
  const tags = [...new Set(state.apps.flatMap(tagsOf))];
  els.filters.replaceChildren();
  els.filters.hidden = tags.length === 0;
  if (!tags.length) return;

  for (const tag of ["all", ...tags]) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.dataset.tag = tag;
    button.textContent = tag === "all" ? "全部" : tag;
    button.setAttribute("aria-pressed", String(state.tag === tag));
    button.addEventListener("click", () => {
      state.tag = tag;
      render();
    });
    els.filters.append(button);
  }
}

function renderCard(app) {
  const href = appHref(app);
  const article = document.createElement("article");
  article.className = "card";

  const link = document.createElement("a");
  link.className = "card-link";
  link.href = href;
  if (app.newTab) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  const cover = document.createElement("div");
  cover.className = "cover";
  const image = coverUrl(app);
  if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = "";
    cover.append(img);
  } else {
    const hue = hashHue(String(app.name || app.folder));
    cover.style.background = `linear-gradient(145deg, hsl(${hue} 62% 42%), hsl(${(hue + 48) % 360} 48% 22%))`;
    const mark = document.createElement("span");
    mark.className = "mark";
    mark.textContent = initial(app.name || app.folder);
    cover.append(mark);
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h2");
  title.textContent = app.name;
  body.append(title);

  if (app.description) {
    const description = document.createElement("p");
    description.textContent = app.description;
    body.append(description);
  }

  const tags = tagsOf(app);
  if (tags.length) {
    const list = document.createElement("ul");
    list.className = "tags";
    for (const tag of tags) {
      const item = document.createElement("li");
      item.textContent = tag;
      list.append(item);
    }
    body.append(list);
  }

  const path = document.createElement("p");
  path.className = "path";
  path.textContent = href.replace(/^\.\//, "");
  body.append(path);

  link.append(cover, body);

  const open = document.createElement("a");
  open.className = "open-tab";
  open.href = href;
  open.target = "_blank";
  open.rel = "noopener noreferrer";
  open.textContent = "新标签打开";
  open.setAttribute("aria-label", `在新标签页打开 ${app.name}`);

  article.append(link, open);
  return article;
}

function render() {
  const visible = state.apps.filter(matches);
  els.count.hidden = false;
  els.count.textContent = `${visible.length} / ${state.apps.length} 个子网页`;
  renderFilters();

  const empty = visible.length === 0;
  els.grid.hidden = empty;
  els.status.hidden = !empty;
  els.grid.replaceChildren(...visible.map(renderCard));
  if (state.apps.length === 0) {
    els.status.textContent = "还没有可展示的子网页。在 apps.json 中添加 folder 与 name 即可。";
  } else if (empty) {
    els.status.textContent = "没有匹配的子网页。";
  }
}

function showError(message) {
  els.toolbar.hidden = true;
  els.grid.hidden = true;
  els.status.hidden = false;
  els.status.textContent = message;
}

async function load() {
  if (location.protocol === "file:") {
    showError("当前以文件方式打开，无法读取 apps.json。请使用本地静态服务预览，例如 python3 -m http.server。");
    return;
  }

  try {
    const response = await fetch("./apps.json", { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const title = data.site?.title || "作品集";
    document.title = title;
    els.title.textContent = title;
    els.subtitle.textContent = data.site?.subtitle || "";
    state.apps = (Array.isArray(data.apps) ? data.apps : []).filter((app) => {
      return app && app.folder && app.name && app.hidden !== true;
    });
    els.toolbar.hidden = false;
    render();
  } catch (error) {
    console.error(error);
    showError("无法读取 apps.json。请确认文件存在，并通过 HTTP 服务访问本页。");
  }
}

els.search.addEventListener("input", () => {
  state.query = els.search.value;
  render();
});

load();
