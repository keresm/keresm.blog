"use strict";
(self["webpackChunkClub"] = self["webpackChunkClub"] || []).push([["static_js_components_UserAvatarInput_vue"],{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/UserAvatarInput.vue?vue&type=style&index=0&id=0ded6440&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/UserAvatarInput.vue?vue&type=style&index=0&id=0ded6440&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/js/components/UserAvatarInput.vue":
/*!**************************************************!*\
  !*** ./static/js/components/UserAvatarInput.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserAvatarInput_vue_vue_type_template_id_0ded6440_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAvatarInput.vue?vue&type=template&id=0ded6440&scoped=true& */ "./static/js/components/UserAvatarInput.vue?vue&type=template&id=0ded6440&scoped=true&");
/* harmony import */ var _UserAvatarInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAvatarInput.vue?vue&type=script&lang=js& */ "./static/js/components/UserAvatarInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserAvatarInput_vue_vue_type_style_index_0_id_0ded6440_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAvatarInput.vue?vue&type=style&index=0&id=0ded6440&scoped=true&lang=css& */ "./static/js/components/UserAvatarInput.vue?vue&type=style&index=0&id=0ded6440&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserAvatarInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserAvatarInput_vue_vue_type_template_id_0ded6440_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserAvatarInput_vue_vue_type_template_id_0ded6440_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0ded6440",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/js/components/UserAvatarInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/UserAvatarInput.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/UserAvatarInput.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//

const FILE_READER_STATE = {
    EMPTY: 0,
    LOADING: 1,
    DONE: 2,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: "UserAvatarInput",
    props: {
        // To allow "click-to-activate" on avatar
        inputId: {
            type: String,
            required: true,
        },
        // For preview
        currentAvatar: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            inputElement: null,
            imageData: null,
            fileReader: null,
            error: null,
        };
    },
    methods: {
        subscribeToInput(ele) {
            ele.addEventListener("change", (e) => {
                let file = e.target.files[0];
                if (file) {
                    this.handleFile(file);
                } else {
                    this.imageData = null;
                    this.fileReader = null;
                    this.error = null;
                }
            });
        },
        async handleFile(file) {
            if (this.fileReader) {
                this.fileReader.abort();
                // reset state
                this.imageData = null;
                this.error = null;
                this.progress = 0;
            }
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.addEventListener("loadend", (ev) => {
                this.imageData = fileReader.result;
            });
            fileReader.addEventListener("error", (ev) => {
                this.error = fileReader.error;
            });
        },
        init() {
            // Find related input in DOM
            this.inputElement = document.querySelector("#" + this.inputId);

            // Assign listeners
            if (this.inputElement) {
                this.subscribeToInput(this.inputElement);
            }
        },
    },
    computed: {
        avatarStyle() {
            if (!this.imageData && !this.currentAvatar) {
                return null;
            }
            return `background-image: url(${this.imageData || this.currentAvatar})`;
        },
    },
    mounted() {
        // Vue recreates elements, so using mounted hook instead of 'created'.
        this.init();
    },
});


/***/ }),

/***/ "./static/js/components/UserAvatarInput.vue?vue&type=style&index=0&id=0ded6440&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./static/js/components/UserAvatarInput.vue?vue&type=style&index=0&id=0ded6440&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_1_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatarInput_vue_vue_type_style_index_0_id_0ded6440_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAvatarInput.vue?vue&type=style&index=0&id=0ded6440&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/UserAvatarInput.vue?vue&type=style&index=0&id=0ded6440&scoped=true&lang=css&");


/***/ }),

/***/ "./static/js/components/UserAvatarInput.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./static/js/components/UserAvatarInput.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatarInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAvatarInput.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/UserAvatarInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatarInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/js/components/UserAvatarInput.vue?vue&type=template&id=0ded6440&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./static/js/components/UserAvatarInput.vue?vue&type=template&id=0ded6440&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatarInput_vue_vue_type_template_id_0ded6440_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatarInput_vue_vue_type_template_id_0ded6440_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatarInput_vue_vue_type_template_id_0ded6440_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAvatarInput.vue?vue&type=template&id=0ded6440&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/UserAvatarInput.vue?vue&type=template&id=0ded6440&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/UserAvatarInput.vue?vue&type=template&id=0ded6440&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/UserAvatarInput.vue?vue&type=template&id=0ded6440&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    { staticClass: "user-avatar-input", attrs: { for: _vm.inputId } },
    [
      _c("div", {
        staticClass: "avatar profile-user-avatar",
        style: _vm.avatarStyle,
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);
//# sourceMappingURL=static_js_components_UserAvatarInput_vue.js.map