/* 公共引入,勿随意修改,修改时需经过确认 */
import Vue from "vue";
import "./element";
import "./support";
import "@/styles/vab.scss";
import "@/remixIcon";
import "@/colorfulIcon";
import "@/config/permission";
import "@/utils/errorLog";
import "./vabIcon";
import "./fbComponents";

import Vab from "@/utils/vab";
import VabDrag from "^/zx-layouts/Drag";
import VabPermissions from "^/zx-layouts/Permissions";
import VabQueryForm from "^/zx-layouts/VabQueryForm/export";

Vue.use(Vab);
Vue.use(VabPermissions);
Vue.use(VabDrag);
Vue.use(VabQueryForm);
