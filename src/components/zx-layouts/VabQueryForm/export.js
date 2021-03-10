import VabQueryForm from "^/zx-layouts/VabQueryForm";
import VabQueryFormTopPanel from "^/zx-layouts/VabQueryForm/VabQueryFormTopPanel";
import VabQueryFormBottomPanel from "^/zx-layouts/VabQueryForm/VabQueryFormBottomPanel";
import VabQueryFormLeftPanel from "^/zx-layouts/VabQueryForm/VabQueryFormLeftPanel";
import VabQueryFormRightPanel from "^/zx-layouts/VabQueryForm/VabQueryFormRightPanel";
export default {
  install(Vue) {
    Vue.component("vab-query-form", VabQueryForm);
    Vue.component("vab-query-form-left-panel", VabQueryFormLeftPanel);
    Vue.component("vab-query-form-right-panel", VabQueryFormRightPanel);
    Vue.component("vab-query-form-top-panel", VabQueryFormTopPanel);
    Vue.component("vab-query-form-bottom-panel", VabQueryFormBottomPanel);
  },
};
