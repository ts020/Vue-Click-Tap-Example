class Platform {
  constructor() {
    this.resize();
  }
  resize() {
    this.lastUpdate = new Date();
    const width = window.innerWidth;
    this.isChange = this.width !== width;
    this.width = width;
    this.height = window.innerHeight;

    this.isPC = 1024 < width;
    this.isTablet = 460 < width && width < 1024;
    this.isPhone = width < 460;
  }
}
const platForm = new Platform();
let key;
window.onresize = () => {
  clearTimeout(key);
  key = setTimeout(() => {
    platForm.resize();
  }, 500);
};

let installed = false;
export default {
  install(Vue) {
    if (installed) {
      return;
    }
    installed = true;
    Vue.util.defineReactive(Vue.prototype, "$navigator", platForm);
  }
};
