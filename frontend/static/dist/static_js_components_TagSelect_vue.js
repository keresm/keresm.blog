"use strict";
(self["webpackChunkClub"] = self["webpackChunkClub"] || []).push([["static_js_components_TagSelect_vue"],{

/***/ "./static/js/components/TagSelect.vue":
/*!********************************************!*\
  !*** ./static/js/components/TagSelect.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TagSelect_vue_vue_type_template_id_5521d5d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagSelect.vue?vue&type=template&id=5521d5d0& */ "./static/js/components/TagSelect.vue?vue&type=template&id=5521d5d0&");
/* harmony import */ var _TagSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagSelect.vue?vue&type=script&lang=js& */ "./static/js/components/TagSelect.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TagSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagSelect_vue_vue_type_template_id_5521d5d0___WEBPACK_IMPORTED_MODULE_0__.render,
  _TagSelect_vue_vue_type_template_id_5521d5d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/js/components/TagSelect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/TagSelect.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/TagSelect.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./static/js/common/utils.js");
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
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    props: {
        id: {
            type: String,
            required: true,
        },
        initialValue: {
            type: String,
            required: false,
        },
        allowCreateNew: {
            type: Boolean,
            required: false,
            default: false,
        },
        allowMultiple: {
            type: Boolean,
            required: false,
            default: false,
        },
        validationRegExp: {
            type: String,
            required: false,
            default: null,
        },
        searchUrl: {
            type: String,
            required: true,
        },
        labelValidInput: String,
        labelInvalidInput: String,
        labelPrefixInput: String,
    },
    mounted() {
        if (this.$props.initialValue) {
            this.selectValue = {
                title: this.initialValue,
                isExist: true,
            }
            this.formValue = this.initialValue;
        }
    },
    data() {
        return {
            isValidInput: false,
            selectValue: null,
            formValue: null,
            options: [],
        };
    },
    computed: {
        validationRe() {
            if (!this.validationRegExp) {
                return null;
            }

            return new RegExp(this.validationRegExp);
        }
    },
    methods: {
        canSelect(option) {
            return option.isExist || this.isValidInput;
        },

        onInputChange(event) {
            if (!this.validationRe) {
                this.isValidInput = true;
                return;
            }

            if (this.validationRe.test(event.target.value)) {
                this.isValidInput = true;
                return;
            }

            this.isValidInput = false;
        },

        onInputBlur(event) {
            // clear old search results
            this.options = [];
        },

        onSearch(search, loading) {
            if (search.length >= 3) {
                loading(true);
                this.search(loading, search, this);
                return;
            }

            this.options = [];
        },

        search: (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(((loading, search, vm) => {
            fetch(`${vm.$props.searchUrl}${search}`)
                .then(response => response.json())
                .then(json => {
                    if (!json.tags) {
                        return;
                    }
                    vm.options = json.tags
                        .map(tag => ({
                            title: tag.name,
                            isExist: true,
                        }))
                    ;
                })
                .finally(() => {
                    loading(false);
                });

        }), 500),

        // value changed at item in dropdown
        onSelectValueChange(option) {
            if (!option) {
                this.formValue = null;
                return;
            }

            this.formValue = option.title || option;
        }
    },
});


/***/ }),

/***/ "./static/js/components/TagSelect.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./static/js/components/TagSelect.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TagSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagSelect.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/TagSelect.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TagSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/js/components/TagSelect.vue?vue&type=template&id=5521d5d0&":
/*!***************************************************************************!*\
  !*** ./static/js/components/TagSelect.vue?vue&type=template&id=5521d5d0& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagSelect_vue_vue_type_template_id_5521d5d0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagSelect_vue_vue_type_template_id_5521d5d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagSelect_vue_vue_type_template_id_5521d5d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagSelect.vue?vue&type=template&id=5521d5d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/TagSelect.vue?vue&type=template&id=5521d5d0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/TagSelect.vue?vue&type=template&id=5521d5d0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/TagSelect.vue?vue&type=template&id=5521d5d0& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "input-select" },
    [
      _c("input", {
        attrs: { type: "hidden", name: _vm.id },
        domProps: { value: _vm.formValue },
      }),
      _vm._v(" "),
      _c("v-select", {
        attrs: {
          taggable: _vm.allowCreateNew,
          multiple: _vm.allowMultiple,
          label: "title",
          placeholder: "",
          options: _vm.options,
          selectable: _vm.canSelect,
        },
        on: { input: _vm.onSelectValueChange, search: _vm.onSearch },
        scopedSlots: _vm._u([
          {
            key: "no-options",
            fn: function (ref) {
              var search = ref.search
              var searching = ref.searching
              var loading = ref.loading
              return [
                !searching || search.length < 3
                  ? [
                      _vm._v(
                        "\n                Начните набирать текст для поиска...\n            "
                      ),
                    ]
                  : [
                      _vm._v(
                        "\n                Ничего не найдено\n            "
                      ),
                    ],
              ]
            },
          },
          {
            key: "option",
            fn: function (ref) {
              var title = ref.title
              var isExist = ref.isExist
              return [
                _c(
                  "span",
                  [
                    !isExist
                      ? [_vm._v(_vm._s(_vm.labelPrefixInput))]
                      : _vm._e(),
                    _vm._v(
                      "\n                " + _vm._s(title) + "\n            "
                    ),
                  ],
                  2
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                !isExist
                  ? [
                      _c(
                        "span",
                        { staticClass: "vs__dropdown-option-secondary-text" },
                        [
                          !_vm.isValidInput
                            ? [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.labelInvalidInput) +
                                    "\n                    "
                                ),
                              ]
                            : [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.labelValidInput) +
                                    "\n                    "
                                ),
                              ],
                        ],
                        2
                      ),
                    ]
                  : _vm._e(),
              ]
            },
          },
          {
            key: "search",
            fn: function (ref) {
              var attributes = ref.attributes
              var events = ref.events
              return [
                _c(
                  "input",
                  _vm._g(
                    _vm._b(
                      {
                        staticClass: "vs__search",
                        on: { input: _vm.onInputChange, blur: _vm.onInputBlur },
                      },
                      "input",
                      attributes,
                      false
                    ),
                    events
                  )
                ),
              ]
            },
          },
        ]),
        model: {
          value: _vm.selectValue,
          callback: function ($$v) {
            _vm.selectValue = $$v
          },
          expression: "selectValue",
        },
      }),
    ],
    1
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
//# sourceMappingURL=static_js_components_TagSelect_vue.js.map