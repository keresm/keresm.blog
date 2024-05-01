"use strict";
(self["webpackChunkClub"] = self["webpackChunkClub"] || []).push([["static_js_components_InputLengthCounter_vue"],{

/***/ "./static/js/components/InputLengthCounter.vue":
/*!*****************************************************!*\
  !*** ./static/js/components/InputLengthCounter.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputLengthCounter_vue_vue_type_template_id_22058b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputLengthCounter.vue?vue&type=template&id=22058b3c& */ "./static/js/components/InputLengthCounter.vue?vue&type=template&id=22058b3c&");
/* harmony import */ var _InputLengthCounter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputLengthCounter.vue?vue&type=script&lang=js& */ "./static/js/components/InputLengthCounter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputLengthCounter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputLengthCounter_vue_vue_type_template_id_22058b3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _InputLengthCounter_vue_vue_type_template_id_22058b3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/js/components/InputLengthCounter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/InputLengthCounter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/InputLengthCounter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils.js */ "./static/js/common/utils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: "InputLengthCounter",
    props: {
        minLength: {
            type: Number,
            default: 0,
        },
        delay: {
            type: Number,
            default: 300,
        },
        element: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            counter: null,
            $target: null,
        };
    },
    mounted() {
        this.$target = document.querySelector(this.element);
        if (!this.$target) {
            return console.warn(`${this.element} is not found.`);
        }

        if (!(this.$target instanceof HTMLTextAreaElement) && !(this.$target instanceof HTMLInputElement)) {
            return console.warn(`${this.element} is not an input element.`);
        }

        this.counter = this.$target.value.length;

        this.throttledCounterHandler = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.throttle)((e) => {
            this.counter = e.target.value.length;
        }, this.delay);

        this.$target.addEventListener("keyup", this.throttledCounterHandler);
    },
    beforeDestroy() {
        if (this.$target) {
            this.$target.removeEventListener("keyup", this.throttledCounterHandler);
        }
    },
});



/***/ }),

/***/ "./static/js/components/InputLengthCounter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./static/js/components/InputLengthCounter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_InputLengthCounter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputLengthCounter.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/InputLengthCounter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_InputLengthCounter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/js/components/InputLengthCounter.vue?vue&type=template&id=22058b3c&":
/*!************************************************************************************!*\
  !*** ./static/js/components/InputLengthCounter.vue?vue&type=template&id=22058b3c& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputLengthCounter_vue_vue_type_template_id_22058b3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputLengthCounter_vue_vue_type_template_id_22058b3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputLengthCounter_vue_vue_type_template_id_22058b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputLengthCounter.vue?vue&type=template&id=22058b3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/InputLengthCounter.vue?vue&type=template&id=22058b3c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/InputLengthCounter.vue?vue&type=template&id=22058b3c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/InputLengthCounter.vue?vue&type=template&id=22058b3c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "span",
    {
      class: {
        bad: _vm.counter < _vm.minLength,
        good: _vm.counter >= _vm.minLength,
      },
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.counter < _vm.minLength
        ? _c("span", { key: "poop" }, [_vm._v("💩")])
        : _vm._e(),
      _vm._v(" "),
      _vm.counter >= _vm.minLength && _vm.counter < _vm.minLength + 100
        ? _c("span", { key: "ok" }, [_vm._v("🙂")])
        : _vm._e(),
      _vm._v(" "),
      _vm.counter >= _vm.minLength + 100 && _vm.counter < _vm.minLength + 300
        ? _c("span", { key: "cool" }, [_vm._v("😎")])
        : _vm._e(),
      _vm._v(" "),
      _vm.counter >= _vm.minLength + 300 && _vm.counter < _vm.minLength + 500
        ? _c("span", { key: "awesome" }, [_vm._v("🚀")])
        : _vm._e(),
      _vm._v(" "),
      _vm.counter >= _vm.minLength + 500
        ? _c("span", { key: "star" }, [_vm._v("💎🚀👍")])
        : _vm._e(),
      _vm._v(
        "\n    " + _vm._s(_vm.counter !== null ? _vm.counter : "-") + "\n    "
      ),
      _vm.counter < _vm.minLength
        ? _c("span", [_vm._v(" / " + _vm._s(_vm.minLength))])
        : _vm._e(),
    ],
    2
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
//# sourceMappingURL=static_js_components_InputLengthCounter_vue.js.map