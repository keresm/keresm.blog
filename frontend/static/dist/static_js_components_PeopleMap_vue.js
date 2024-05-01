"use strict";
(self["webpackChunkClub"] = self["webpackChunkClub"] || []).push([["static_js_components_PeopleMap_vue"],{

/***/ "./static/js/components/PeopleMap.vue":
/*!********************************************!*\
  !*** ./static/js/components/PeopleMap.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PeopleMap_vue_vue_type_template_id_4ad2e967___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleMap.vue?vue&type=template&id=4ad2e967& */ "./static/js/components/PeopleMap.vue?vue&type=template&id=4ad2e967&");
/* harmony import */ var _PeopleMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleMap.vue?vue&type=script&lang=js& */ "./static/js/components/PeopleMap.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PeopleMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PeopleMap_vue_vue_type_template_id_4ad2e967___WEBPACK_IMPORTED_MODULE_0__.render,
  _PeopleMap_vue_vue_type_template_id_4ad2e967___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/js/components/PeopleMap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/PeopleMap.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/PeopleMap.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_mapbox_ho__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-mapbox-ho */ "./node_modules/vue-mapbox-ho/dist/vue-mapbox.min.js");
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
    name: "PeopleMap",
    components: {
        MglMap: vue_mapbox_ho__WEBPACK_IMPORTED_MODULE_1__.MglMap,
        MglNavigationControl: vue_mapbox_ho__WEBPACK_IMPORTED_MODULE_1__.MglNavigationControl,
        MglGeolocateControl: vue_mapbox_ho__WEBPACK_IMPORTED_MODULE_1__.MglGeolocateControl,
        MglMarker: vue_mapbox_ho__WEBPACK_IMPORTED_MODULE_1__.MglMarker,
    },
    props: {
        geojson: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            accessToken: "pk.eyJ1IjoidmFzM2siLCJhIjoiY2thZ254NXVwMDhkbjJ5dDk5eGh5Y21wbyJ9.wYXG58PrErQfRHTflvdSfA",
            mapStyle: "mapbox://styles/vas3k/ckagmhzm90tkd1inu8pg76p9s/draft",
            coordinates: [18.3, 51.06],
            defaultAvatar: "https://i.vas3k.club/v.png",
        };
    },
    created() {
        this.mapbox = (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default());
    },
    methods: {
        onMapLoaded(event) {
            const map = event.map;
            const geojson = this.geojson;
            const defaultAvatar = this.defaultAvatar;
            const mapbox = this.mapbox;
            map.addSource("usersGeojson", {
                type: "geojson",
                data: this.geojson,
                cluster: true,
                clusterRadius: 25,
            });
            map.addLayer({
                id: "users",
                type: "circle",
                source: "usersGeojson",
                filter: ["!=", "cluster", true],
                paint: {
                    "circle-opacity": 0.0,
                },
            });

            let markers = {};
            let markersOnScreen = {};

            function updateMarkers() {
                let newMarkers = {};
                let features = map.querySourceFeatures("usersGeojson");

                for (let i = 0; i < features.length; i++) {
                    const coords = features[i].geometry.coordinates;
                    const props = features[i].properties;
                    const id = props.cluster_id || props.id;

                    let marker = markers[id];
                    if (!marker) {
                        if (props.cluster) {
                            // it's a cluster
                            let clusterElement = document.createElement("div");
                            clusterElement.classList.add("people-map-user-cluster");
                            clusterElement.innerText = props.point_count;
                            const clusterAvatar = getClusterAvatar(coords);
                            clusterElement.style.backgroundImage = "url('" + avatarOrDefault(clusterAvatar) + "')";
                            marker = new mapbox.Marker({ element: clusterElement }).setLngLat(coords);
                            clusterElement.addEventListener("click", function () {
                                map.flyTo({ center: coords, zoom: map.getZoom() + 2, offset: [200, 0] });
                            });
                        } else {
                            // it's a normal marker
                            let markerElement = document.createElement("a");
                            markerElement.href = props.url;
                            markerElement.target = "_blank";
                            markerElement.classList.add("people-map-user-marker");
                            markerElement.style.backgroundImage = "url('" + avatarOrDefault(props.avatar) + "')";
                            marker = new mapbox.Marker({ element: markerElement }).setLngLat(coords);
                        }
                    }
                    newMarkers[id] = marker;
                    markers[id] = marker;

                    if (!markersOnScreen[id]) marker.addTo(map);
                }

                // remove old markers from map
                for (let id in markersOnScreen) {
                    if (!newMarkers[id]) markersOnScreen[id].remove();
                }
                markersOnScreen = newMarkers;
            }

            function getClusterAvatar(coordinates) {
                let pointPixels = map.project(coordinates);
                const avatarFeature = geojson.features.find(function (el) {
                    if (!el.properties.avatar || el.properties.avatar === "null") return;
                    let elPixels = map.project(el.geometry.coordinates);
                    let pixelDistance = Math.sqrt(
                        Math.pow(elPixels.x - pointPixels.x, 2) + Math.pow(elPixels.y - pointPixels.y, 2)
                    );
                    return Math.abs(pixelDistance) <= 20;
                });
                return avatarFeature ? avatarFeature.properties.avatar : defaultAvatar;
            }

            function avatarOrDefault(avatar) {
                return avatar && avatar !== "null" ? avatar : defaultAvatar;
            }

            map.on("data", function (e) {
                if (e.sourceId !== "usersGeojson" || !e.isSourceLoaded) return;
                map.on("move", updateMarkers);
                map.on("moveend", updateMarkers);
                updateMarkers();
            });
        },
    },
});


/***/ }),

/***/ "./static/js/components/PeopleMap.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./static/js/components/PeopleMap.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PeopleMap.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/PeopleMap.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/js/components/PeopleMap.vue?vue&type=template&id=4ad2e967&":
/*!***************************************************************************!*\
  !*** ./static/js/components/PeopleMap.vue?vue&type=template&id=4ad2e967& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleMap_vue_vue_type_template_id_4ad2e967___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleMap_vue_vue_type_template_id_4ad2e967___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleMap_vue_vue_type_template_id_4ad2e967___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PeopleMap.vue?vue&type=template&id=4ad2e967& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/PeopleMap.vue?vue&type=template&id=4ad2e967&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/PeopleMap.vue?vue&type=template&id=4ad2e967&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./static/js/components/PeopleMap.vue?vue&type=template&id=4ad2e967& ***!
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
    "MglMap",
    {
      attrs: {
        accessToken: _vm.accessToken,
        mapStyle: _vm.mapStyle,
        maxZoom: 12,
        attributionControl: false,
        scrollZoom: false,
      },
      on: { load: _vm.onMapLoaded },
    },
    [
      _c("MglNavigationControl", { attrs: { position: "top-right" } }),
      _vm._v(" "),
      _c("MglGeolocateControl", { attrs: { position: "top-right" } }),
      _vm._v(" "),
      _vm._t("default"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=static_js_components_PeopleMap_vue.js.map