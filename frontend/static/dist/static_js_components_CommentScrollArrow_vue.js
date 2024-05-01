"use strict";
(self["webpackChunkClub"] = self["webpackChunkClub"] || []).push([["static_js_components_CommentScrollArrow_vue"],{

/***/ "./static/js/components/CommentScrollArrow.vue":
/*!*****************************************************!*\
  !*** ./static/js/components/CommentScrollArrow.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentScrollArrow_vue_vue_type_template_id_d41cfa9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentScrollArrow.vue?vue&type=template&id=d41cfa9a& */ "./static/js/components/CommentScrollArrow.vue?vue&type=template&id=d41cfa9a&");
/* harmony import */ var _CommentScrollArrow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentScrollArrow.vue?vue&type=script&lang=js& */ "./static/js/components/CommentScrollArrow.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommentScrollArrow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentScrollArrow_vue_vue_type_template_id_d41cfa9a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CommentScrollArrow_vue_vue_type_template_id_d41cfa9a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/js/components/CommentScrollArrow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/CommentScrollArrow.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/CommentScrollArrow.vue?vue&type=script&lang=js& ***!
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: "CommentScrollArrow",
    data() {
        return {
            arrowDirection: "Down",
            scrollThrottleDelay: 150,
        };
    },
    methods: {
        getBodyTop() {
            return document.body.getBoundingClientRect().top;
        },
        getElementMargin(el) {
             const style = window.getComputedStyle(el);
             return parseInt(style.scrollMarginTop, 10);
         },
        scrollToElement(el, callback) {
            const oldHash = document.location.hash;
            const newHash = `#${el.id}`;
            if (oldHash === newHash) {
                // zero the hash so that there is no sticking if we are already on this element
                history.pushState(null, null, '');
            }

            document.documentElement.style.scrollBehavior = "smooth";

            const offset = el.getBoundingClientRect().top - this.getBodyTop() - this.getElementMargin(el);

            const onScroll = () => {
                const scrolledToElement = Math.abs(offset - window.pageYOffset) < 1;
                const scrolledToBottom = Math.abs(document.body.getBoundingClientRect().height - window.pageYOffset - window.innerHeight) < 1;
                if (scrolledToElement || (this.arrowDirection === "Down" && scrolledToBottom)) {
                    window.removeEventListener('scroll', onScroll);

                    document.documentElement.style.scrollBehavior = "auto";

                    if (callback) {
                        callback();
                    }
                }
            };

            window.addEventListener("scroll", onScroll);
            onScroll();

            document.location.replace(`#${el.id}`);
        },
        scrollExtreme(direction) {
            if (direction === "Down") {
                const postCommentsForm = document.getElementById("post-comments-form");
                const footer = document.getElementById("footer");

                const downTarget = postCommentsForm || footer;
                this.scrollToElement(downTarget);

                this.arrowDirection = "Up";
            } else {
                const topTarget = document.getElementById("app");
                this.scrollToElement(topTarget);

                this.arrowDirection = "Down";
            }
        },
        scrollToComment(direction) {
            let comments = document.querySelectorAll(
                 [
                     // Просто новые комментарии
                     ".comment.comment-is-new",
                     // Новые реплаи к старым комментариям
                     ".comment:not(.comment-is-new) > .comment-replies > .replies > .reply.comment-is-new",
                     // Новые реплаи на втором уровне к старым реплаям старых комментариев
                     ".comment:not(.comment-is-new) > .comment-replies > .replies > .reply:not(.comment-is-new) > .reply-replies > .replies > .reply.comment-is-new",
                     // Новые реплаи без родительского комментария
                     ".post-comments-list > .replies > .reply.comment-is-new",
                     // Новые реплаи на втором уровне к старым реплаям без родительского комментария
                     ".post-comments-list > .replies > .reply:not(.comment-is-new) > .reply.comment-is-new",
                     // Новые реплаи на втором уровне бэтлов
                     ".battle-comments .post-comments-list > .replies > .reply:not(.comment-is-new) > .reply-replies >.replies > .reply.comment-is-new",
                 ].join()
             );

            const bodyTop = this.getBodyTop();

            if (comments.length < 1) {
                // Новых нет, ищем начало блока комментариев и перебираем прочтённые комментарии
                comments = document.querySelectorAll("#post-comments-title, .comment");
            }

            if (comments.length < 1) {
                // Then post without comments
                return this.scrollExtreme(direction);
            }

            const position = window.scrollY + this.getElementMargin(comments[0]);

            // Убираем комментарии ниже или выше направления поиска
            const filteredComments = [...comments].filter((el) => {
                const elTop = el.getBoundingClientRect().top;
                const elTopMargin = this.getElementMargin(el);

                return (direction === "Down") ? elTop - elTopMargin > 2 : elTop < 0;
            });

            if (filteredComments.length < 1) {
                return this.scrollExtreme(direction);
            }

            // Находим ближайший комментарий
            const nearest = [...filteredComments].reduce((a, b) => {
                const atop = a.getBoundingClientRect().top - bodyTop;
                const btop = b.getBoundingClientRect().top - bodyTop;
                return Math.abs(btop - position) < Math.abs(atop - position) ? b : a;
            });

            /**
             * remove selected class from previous selected comment
             * do not delete immediately comment-scroll-selected class for override the target comment style
             */
            const alreadySelected = document.querySelector(".comment-scroll-selected");
            if (alreadySelected) {
                alreadySelected.classList.remove("comment-scroll-selected");
            }
            nearest.classList.add("comment-scroll-selected");

            const highlightComment = () => {
                nearest.classList.add("comment-scroll-animation");

                window.setTimeout(() => {
                     nearest.classList.remove("comment-scroll-animation");
                }, 500);
            };

            this.scrollToElement(nearest, highlightComment);
        },
        onArrowClickHandler() {
            if (event.shiftKey) {
                const direction = this.arrowDirection == "Up" ? "Down" : "Up";
                this.scrollToComment(direction);
            } else if (this.arrowDirection == "Up") {
                this.scrollExtreme(this.arrowDirection);
            } else {
                this.scrollToComment(this.arrowDirection);
            }
        },
        initOnPageScroll() {
            this.onPageScrollHandler = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.throttle)(() => {
                const bottomOfWindow = Math.abs(document.body.getBoundingClientRect().height - window.pageYOffset - window.innerHeight) < 1;
                const topOfWindow = window.pageYOffset === 0;

                if (bottomOfWindow) {
                    this.arrowDirection = "Up";
                }

                if (topOfWindow) {
                    this.arrowDirection = "Down";
                }
            }, this.scrollThrottleDelay);

            window.addEventListener("scroll", this.onPageScrollHandler);
        },
        initOnKeyUp() {
             this.keyUpHandler = (e) => {
                // ctrl-up/down для всех, а в macos и FF - ⇧⌃↑/↓
                const isFirefox = ("netscape" in window) && / rv:/.test(navigator.userAgent);
                if (!e.ctrlKey || (isFirefox && !e.shiftKey)
                    || ["ArrowDown", "ArrowUp", "Down", "Up"].indexOf(e.key) < 0) {
                    return;
                }

                e.preventDefault();
                this.arrowDirection = e.key.replace(/^Arrow/, "");
                this.scrollToComment(this.arrowDirection);
            };

            document.addEventListener("keyup", this.keyUpHandler);
        },
        initSelectedClassCleanerListener() {
            document.querySelector('#comments').addEventListener("click", (event) => {
                if (event.target.classList.contains("comment-header-date")) {
                    const selectedComment = event.target.closest(".comment-scroll-selected");
                    if (selectedComment) {
                        selectedComment.classList.remove("comment-scroll-selected");
                    }
                }
            }, false);
        },
        init() {
            this.initOnKeyUp();
            this.initOnPageScroll();
            this.initSelectedClassCleanerListener();
        }
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        document.removeEventListener("keyup", this.keyUpHandler);
        window.removeEventListener("scroll", this.onPageScrollHandler);
    },
});


/***/ }),

/***/ "./static/js/components/CommentScrollArrow.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./static/js/components/CommentScrollArrow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_CommentScrollArrow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentScrollArrow.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/CommentScrollArrow.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentScrollArrow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/js/components/CommentScrollArrow.vue?vue&type=template&id=d41cfa9a&":
/*!************************************************************************************!*\
  !*** ./static/js/components/CommentScrollArrow.vue?vue&type=template&id=d41cfa9a& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentScrollArrow_vue_vue_type_template_id_d41cfa9a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentScrollArrow_vue_vue_type_template_id_d41cfa9a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentScrollArrow_vue_vue_type_template_id_d41cfa9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentScrollArrow.vue?vue&type=template&id=d41cfa9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/CommentScrollArrow.vue?vue&type=template&id=d41cfa9a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/CommentScrollArrow.vue?vue&type=template&id=d41cfa9a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/CommentScrollArrow.vue?vue&type=template&id=d41cfa9a& ***!
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
  return _c("span", {
    staticClass: "comment-scroll-arrow",
    class: {
      "arrow-up": _vm.arrowDirection === "Up",
    },
    on: {
      click: function ($event) {
        $event.preventDefault()
        return _vm.onArrowClickHandler($event)
      },
    },
  })
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
//# sourceMappingURL=static_js_components_CommentScrollArrow_vue.js.map