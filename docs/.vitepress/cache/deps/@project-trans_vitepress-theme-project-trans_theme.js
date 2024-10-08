// node_modules/.pnpm/@project-trans+vitepress-theme-project-trans@0.4.1727925065_@algolia+client-search@4.24.0_@ba_7cp6vwp7n2a3qu4ecnoxs3oak4/node_modules/@project-trans/vitepress-theme-project-trans/dist/theme.mjs
import DefaultTheme from "vitepress/theme-without-fonts";

// node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/constants.mjs
var InjectionKey = Symbol("vitepress-nolebase-enhanced-readabilities");
var LayoutMode = ((LayoutMode2) => {
  LayoutMode2[LayoutMode2["FullWidth"] = 1] = "FullWidth";
  LayoutMode2[LayoutMode2["Original"] = 3] = "Original";
  LayoutMode2[LayoutMode2["SidebarWidthAdjustableOnly"] = 4] = "SidebarWidthAdjustableOnly";
  LayoutMode2[LayoutMode2["BothWidthAdjustable"] = 5] = "BothWidthAdjustable";
  return LayoutMode2;
})(LayoutMode || {});
var SpotlightStyle = ((SpotlightStyle2) => {
  SpotlightStyle2[SpotlightStyle2["Under"] = 1] = "Under";
  SpotlightStyle2[SpotlightStyle2["Aside"] = 2] = "Aside";
  return SpotlightStyle2;
})(SpotlightStyle || {});

// node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/index.mjs
import NolebaseEnhancedReadabilitiesMenu from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/Menu.vue";
import NolebaseEnhancedReadabilitiesScreenMenu from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/ScreenMenu.vue";
import LayoutSwitch from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/LayoutSwitch.vue";
import LayoutSwitchContentLayoutMaxWidthSlider from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/LayoutSwitchContentLayoutMaxWidthSlider.vue";
import LayoutSwitchPageLayoutMaxWidthSlider from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/LayoutSwitchPageLayoutMaxWidthSlider.vue";
import ScreenLayoutSwitch from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/ScreenLayoutSwitch.vue";
import Spotlight from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/Spotlight.vue";
import ScreenSpotlight from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/ScreenSpotlight.vue";
import SpotlightStyles from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/SpotlightStyles.vue";
var components = {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
  NolebaseEnhancedReadabilitiesLayoutSwitch: LayoutSwitch,
  NolebaseEnhancedReadabilitiesScreenLayoutSwitch: ScreenLayoutSwitch,
  NolebaseEnhancedReadabilitiesSpotlight: Spotlight,
  NolebaseEnhancedReadabilitiesSpotlightStyles: SpotlightStyles,
  NolebaseEnhancedReadabilitiesScreenSpotlight: ScreenSpotlight
};
var NolebaseEnhancedReadabilitiesPlugin = {
  install(app, options) {
    if (typeof options !== "undefined" && typeof options === "object")
      app.provide(InjectionKey, options);
    for (const key of Object.keys(components))
      app.component(key, components[key]);
  }
};

// node_modules/.pnpm/@project-trans+vitepress-theme-project-trans@0.4.1727925065_@algolia+client-search@4.24.0_@ba_7cp6vwp7n2a3qu4ecnoxs3oak4/node_modules/@project-trans/vitepress-theme-project-trans/dist/theme.mjs
import {
  NolebaseGitChangelogPlugin
} from "@nolebase/vitepress-plugin-git-changelog/client";
import "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-enhanced-readabilities@2.5.0_@algolia+client-search@4.24.0_postcss_ti2jjz2pujxu6n34eoymnv64wa/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/style.css";
import "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-git-changelog@2.5.0_@algolia+client-search@4.24.0_postcss@8.4.47_s_xso54bsf54jzfqcasqwcfjj5tq/node_modules/@nolebase/vitepress-plugin-git-changelog/dist/client/style.css";
import "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@nolebase+vitepress-plugin-highlight-targeted-heading@2.5.0_@algolia+client-search@4.24.0_pos_y2d7dhkcpeosbcewswl4fx2zoy/node_modules/@nolebase/vitepress-plugin-highlight-targeted-heading/dist/client/style.css";
import Layout from "C:/GitHub/Leetfs/study-wiki/node_modules/.pnpm/@project-trans+vitepress-theme-project-trans@0.4.1727925065_@algolia+client-search@4.24.0_@ba_7cp6vwp7n2a3qu4ecnoxs3oak4/node_modules/@project-trans/vitepress-theme-project-trans/dist/Layout.vue";
var theme_default = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      spotlight: {
        defaultToggle: true
      }
    });
    app.use(NolebaseGitChangelogPlugin, {
      locales: {
        "zh-CN": {
          lastEditedDateFnsLocaleName: "zhCN"
        }
      }
    });
  }
};
export {
  theme_default as default
};
//# sourceMappingURL=@project-trans_vitepress-theme-project-trans_theme.js.map
