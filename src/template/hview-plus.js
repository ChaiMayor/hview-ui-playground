import hp from "hview-plus";
import { getCurrentInstance } from "vue";
// // @ts-ignore
// import pkg from "../../package.json";
// const ver = pkg.version;

export let installed = false;

await loadStyle();

export function installHviewUI() {
  if (installed) return;
  const instance = getCurrentInstance();
  instance.appContext.app.use(hp);
  installed = true;
}

export function loadStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    // link.href = `https://unpkg.com/hview-plus@${ver}/theme-chalk/style.css`;
    link.href = `https://unpkg.com/hview-plus@1.3.15/theme-chalk/style.css`;
    link.addEventListener("load", resolve);
    link.addEventListener("error", reject);
    document.body.append(link);
  });
}
