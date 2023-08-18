/*! For license information please see widget.js.LICENSE.txt */
System.register(["jimu-core/react","esri/layers/FeatureLayer","jimu-ui","esri/identity/OAuthInfo","esri/identity/IdentityManager"],(function(e,t){var r={},n={},o={},a={},s={};return{setters:[function(e){r.Component=e.Component,r.default=e.default},function(e){n.default=e.default},function(e){o.Button=e.Button,o.Modal=e.Modal,o.ModalBody=e.ModalBody,o.ModalFooter=e.ModalFooter,o.ModalHeader=e.ModalHeader,o.NumericInput=e.NumericInput,o.TextArea=e.TextArea,o.TextInput=e.TextInput},function(e){a.default=e.default},function(e){s.default=e.default}],execute:function(){e((()=>{var e={112:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(81),o=r.n(n),a=r(645),s=r.n(a)()(o());s.push([e.id,"#actions button{width:150px}\n",""]);const l=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);n&&s[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},s=[],l=0;l<e.length;l++){var i=e[l],u=n.base?i[0]+n.base:i[0],c=a[u]||0,d="".concat(u," ").concat(c);a[u]=c+1;var p=r(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,n);n.byIndex=l,t.splice(l,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var l=r(a[s]);t[l].references--}for(var i=n(e,o),u=0;u<a.length;u++){var c=r(a[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=i}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},380:e=>{"use strict";e.exports=s},263:e=>{"use strict";e.exports=a},818:e=>{"use strict";e.exports=n},315:e=>{"use strict";e.exports=r},726:e=>{"use strict";e.exports=o}},t={};function l(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,l),o.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="",l.nc=void 0;var i={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(i),l.d(i,{__set_webpack_public_path__:()=>X,default:()=>z});var e=l(379),t=l.n(e),r=l(795),n=l.n(r),o=l(569),a=l.n(o),s=l(565),u=l.n(s),c=l(216),d=l.n(c),p=l(589),f=l.n(p),h=l(112),m={};m.styleTagTransform=f(),m.setAttributes=u(),m.insert=a().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var g=l(315),y=function(){return y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},y.apply(this,arguments)};function v(e){return"string"!=typeof e||"/"===(e=e.trim())[e.length-1]&&(e=e.slice(0,-1)),e}var E=function(e,t){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},E(e,t)},O=function(){return O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},O.apply(this,arguments)};function b(e,t,r){var n=O(O({params:{}},r),e);return n.params=t.reduce((function(t,r){return(e[r]||"boolean"==typeof e[r])&&(t[r]=e[r]),t}),n.params),["params","httpMethod","rawResponse","authentication","portal","fetch","maxUrlLength","headers"].reduce((function(e,t){return n[t]&&(e[t]=n[t]),e}),{})}function T(e){return Object.keys(e).some((function(t){var r=e[t];if(!r)return!1;switch(r&&r.toParam&&(r=r.toParam()),r.constructor.name){case"Array":case"Object":case"Date":case"Function":case"Boolean":case"String":case"Number":return!1;default:return!0}}))}function w(e){var t={};return Object.keys(e).forEach((function(r){var n,o,a=e[r];if(a&&a.toParam&&(a=a.toParam()),a||0===a||"boolean"==typeof a||"string"==typeof a){var s;switch(a.constructor.name){case"Array":var l=null===(o=null===(n=a[0])||void 0===n?void 0:n.constructor)||void 0===o?void 0:o.name;s="Array"===l?a:"Object"===l?JSON.stringify(a):a.join(",");break;case"Object":s=JSON.stringify(a);break;case"Date":s=a.valueOf();break;case"Function":s=null;break;case"Boolean":s=a+"";break;default:s=a}(s||0===s||"string"==typeof s||Array.isArray(s))&&(t[r]=s)}})),t}function C(e,t){return Array.isArray(t)&&t[0]&&Array.isArray(t[0])?t.map((function(t){return C(e,t)})).join("&"):encodeURIComponent(e)+"="+encodeURIComponent(t)}function S(e){var t=w(e);return Object.keys(t).map((function(e){return C(e,t[e])})).join("&")}var R=function(e,t,r,n,o){e=e||"UNKNOWN_ERROR",t=t||"UNKNOWN_ERROR_CODE",this.name="ArcGISRequestError",this.message="UNKNOWN_ERROR_CODE"===t?e:t+": "+e,this.originalMessage=e,this.code=t,this.response=r,this.url=n,this.options=o};R.prototype=Object.create(Error.prototype),R.prototype.constructor=R;var I="@esri/arcgis-rest-js",x={httpMethod:"POST",params:{f:"json"}},A=function(e){function t(t,r,n,o,a){void 0===t&&(t="AUTHENTICATION_ERROR"),void 0===r&&(r="AUTHENTICATION_ERROR_CODE");var s=e.call(this,t,r,n,o,a)||this;return s.name="ArcGISAuthError",s.message="AUTHENTICATION_ERROR_CODE"===r?t:r+": "+t,s}return function(e,t){function r(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.retry=function(e,t){var r=this;void 0===t&&(t=3);var n=0,o=function(a,s){e(r.url,r.options).then((function(e){var t=O(O({},r.options),{authentication:e});return n+=1,k(r.url,t)})).then((function(e){a(e)})).catch((function(e){"ArcGISAuthError"===e.name&&n<t?o(a,s):"ArcGISAuthError"===e.name&&n>=t?s(r):s(e)}))};return new Promise((function(e,t){o(e,t)}))},t}(R);function k(e,t){void 0===t&&(t={params:{f:"json"}});var r=O(O(O({httpMethod:"POST"},x),t),{params:O(O({},x.params),t.params),headers:O(O({},x.headers),t.headers)}),n=[],o=[];if(r.fetch||"undefined"==typeof fetch?(n.push("`fetch`"),o.push("`node-fetch`")):r.fetch=fetch.bind(Function("return this")()),"undefined"==typeof Promise&&(n.push("`Promise`"),o.push("`es6-promise`")),"undefined"==typeof FormData&&(n.push("`FormData`"),o.push("`isomorphic-form-data`")),!r.fetch||"undefined"==typeof Promise||"undefined"==typeof FormData)throw new Error("`arcgis-rest-request` requires a `fetch` implementation and global variables for `Promise` and `FormData` to be present in the global scope. You are missing "+n.join(", ")+". We recommend installing the "+o.join(", ")+" modules at the root of your application to add these to the global scope. See https://bit.ly/2KNwWaJ for more info.");var a=r.httpMethod,s=r.authentication,l=r.rawResponse,i=O({f:"json"},r.params),u=null,c={method:a,credentials:r.credentials||"same-origin"};return r.headers&&r.headers["X-Esri-Auth-Client-Id"]&&e.indexOf("/oauth2/platformSelf")>-1&&(c.credentials="include"),(s?s.getToken(e,{fetch:r.fetch}).catch((function(t){return t.url=e,t.options=r,u=t,Promise.resolve("")})):Promise.resolve("")).then((function(t){t.length&&(i.token=t),s&&s.getDomainCredentials&&(c.credentials=s.getDomainCredentials(e));var n={};if("GET"===c.method){i.token&&r.hideToken&&"undefined"==typeof window&&(n["X-Esri-Authorization"]="Bearer "+i.token,delete i.token);var o=""===S(i)?e:e+"?"+S(i);r.maxUrlLength&&o.length>r.maxUrlLength||i.token&&r.hideToken?(c.method="POST",t.length&&r.hideToken&&(i.token=t,delete n["X-Esri-Authorization"])):e=o}var a=new RegExp("/items/.+/updateResources").test(e);return"POST"===c.method&&(c.body=function(e,t){var r=T(e)||t,n=w(e);if(r){var o=new FormData;return Object.keys(n).forEach((function(e){if("undefined"!=typeof Blob&&n[e]instanceof Blob){var t=n.fileName||n[e].name||e;o.append(e,n[e],t)}else n[e].constructor&&"ReadStream"===n[e].constructor.name&&Number.isInteger(n.dataSize)?o.append(e,n[e],{knownLength:n.dataSize}):o.append(e,n[e])})),o}return S(e)}(i,a)),c.headers=O(O({},n),r.headers),"undefined"!=typeof window||c.headers.referer||(c.headers.referer=I),T(i)||a||(c.headers["Content-Type"]="application/x-www-form-urlencoded"),r.fetch(e,c)})).then((function(t){if(!t.ok){var n=t.status,o=t.statusText;throw new R(o,"HTTP "+n,t,e,r)}if(l)return t;switch(i.f){case"json":case"geojson":return t.json();case"html":case"text":return t.text();default:return t.blob()}})).then((function(t){if("json"!==i.f&&"geojson"!==i.f||l)return t;var n=function(e,t,r,n,o){if(e.code>=400){var a=e.message,s=e.code;throw new R(a,s,e,t,n)}if(e.error){var l=e.error,i=(a=l.message,s=l.code,l.messageCode),u=i||s||"UNKNOWN_ERROR_CODE";if(498===s||499===s||"GWM_0003"===i||400===s&&"Unable to generate token."===a)throw o||new A(a,u,e,t,n);throw new R(a,u,e,t,n)}if("failed"===e.status||"failure"===e.status){a=void 0,s="UNKNOWN_ERROR_CODE";try{a=JSON.parse(e.statusMessage).message,s=JSON.parse(e.statusMessage).code}catch(t){a=e.statusMessage||e.message}throw new R(a,s,e,t,n)}return e}(t,e,0,r,u);if(u){var o=e.toLowerCase().split(/\/rest(\/admin)?\/services\//)[0];r.authentication.federatedServers[o]={token:[],expires:new Date(Date.now()+864e5)},u=null}return n}))}function M(e){return k(v(e.url)+"/addFeatures",b(e,["features","gdbVersion","returnEditMoment","rollbackOnFailure"],{params:y({},e.params)}))}function N(e){return k(v(e.url)+"/deleteFeatures",b(e,["where","objectIds","gdbVersion","returnEditMoment","rollbackOnFailure"],{params:y({},e.params)}))}var j=l(818),L=l(726);class D extends g.Component{constructor(e){super(e),this.toggleOpen=()=>{this.setState({open:!this.state.open})},this.close=()=>{this.props.addLayer(this.state.title,this.state.url,this.state.scope,this.state.source,this.state.description,this.state.categoryId,this.state.renderer),this.toggleOpen()},this.state={title:null,url:null,scope:null,source:null,description:null,categoryId:-1,renderer:null,open:!1}}render(){return g.default.createElement("div",null,g.default.createElement(L.Button,{onClick:this.toggleOpen},"Add Layer"),g.default.createElement(L.Modal,{isOpen:this.state.open,onClosed:function(){},onEnter:function(){},onExit:function(){},onOpened:function(){},toggle:this.toggleOpen},g.default.createElement(L.ModalHeader,{toggle:this.toggleOpen},"Add Layer"),g.default.createElement(L.ModalBody,null,g.default.createElement(L.TextInput,{className:"mb-3",placeholder:"Enter Layer Title...",onAcceptValue:e=>this.setState({title:e})}),g.default.createElement(L.TextInput,{className:"mb-3",placeholder:"Enter Layer URL...",onAcceptValue:e=>this.setState({url:e})}),g.default.createElement(L.TextInput,{className:"mb-3",placeholder:"Enter Layer Scope...",onAcceptValue:e=>this.setState({scope:e})}),g.default.createElement(L.TextInput,{className:"mb-3",placeholder:"Enter Layer Source...",onAcceptValue:e=>this.setState({source:e})}),g.default.createElement(L.TextArea,{className:"mb-3",placeholder:"Enter Layer Description...",onAcceptValue:e=>this.setState({description:e})}),g.default.createElement("label",null,"Enter Category ID:"," ",g.default.createElement(L.NumericInput,{onAcceptValue:e=>this.setState({categoryId:+e})})),g.default.createElement(L.TextArea,{className:"mb-3",placeholder:"Enter Layer Renderer (Optional)...",onAcceptValue:e=>this.setState({renderer:e})}),g.default.createElement(L.TextArea,{className:"mb-3",placeholder:"Enter Layer Filter (Optional)...",onAcceptValue:e=>this.setState({renderer:e})})),g.default.createElement(L.ModalFooter,null,g.default.createElement(L.Button,{onClick:this.close},"Save"))))}}const U=D;class _ extends g.Component{constructor(e){super(e),this.toggleOpen=()=>{this.setState({open:!this.state.open})},this.close=()=>{this.props.deleteLayer(this.state.id),this.toggleOpen()},this.state={id:null,open:!1}}render(){return g.default.createElement("div",null,g.default.createElement(L.Button,{onClick:this.toggleOpen},"Delete Layer"),g.default.createElement(L.Modal,{isOpen:this.state.open,onClosed:function(){},onEnter:function(){},onExit:function(){},onOpened:function(){},toggle:this.toggleOpen},g.default.createElement(L.ModalHeader,{toggle:this.toggleOpen},"Delete Layer"),g.default.createElement(L.ModalBody,null,g.default.createElement("label",null,"Enter Object ID:"," ",g.default.createElement(L.NumericInput,{onAcceptValue:e=>this.setState({id:+e})}))),g.default.createElement(L.ModalFooter,null,g.default.createElement(L.Button,{onClick:this.close},"Save"))))}}const P=_;class B extends g.Component{constructor(e){super(e),this.toggleOpen=()=>{this.setState({open:!this.state.open})},this.close=()=>{this.props.deleteTemplate(this.state.id),this.toggleOpen()},this.state={id:null,open:!1}}render(){return g.default.createElement("div",null,g.default.createElement(L.Button,{onClick:this.toggleOpen},"Delete Template"),g.default.createElement(L.Modal,{isOpen:this.state.open,onClosed:function(){},onEnter:function(){},onExit:function(){},onOpened:function(){},toggle:this.toggleOpen},g.default.createElement(L.ModalHeader,{toggle:this.toggleOpen},"Delete Template"),g.default.createElement(L.ModalBody,null,g.default.createElement("label",null,"Enter Object ID:"," ",g.default.createElement(L.NumericInput,{onAcceptValue:e=>this.setState({id:+e})}))),g.default.createElement(L.ModalFooter,null,g.default.createElement(L.Button,{onClick:this.close},"Save"))))}}const F=B;class V extends g.Component{constructor(e){super(e),this.toggleOpen=()=>{this.setState({open:!this.state.open})},this.close=()=>{this.props.addCategory(this.state.title),this.toggleOpen()},this.state={title:null,open:!1}}render(){return g.default.createElement("div",null,g.default.createElement(L.Button,{onClick:this.toggleOpen},"Add Category"),g.default.createElement(L.Modal,{isOpen:this.state.open,onClosed:function(){},onEnter:function(){},onExit:function(){},onOpened:function(){},toggle:this.toggleOpen},g.default.createElement(L.ModalHeader,{toggle:this.toggleOpen},"Add Category"),g.default.createElement(L.ModalBody,null,g.default.createElement(L.TextInput,{className:"mb-3",placeholder:"Enter Category Title...",onAcceptValue:e=>this.setState({title:e})})),g.default.createElement(L.ModalFooter,null,g.default.createElement(L.Button,{onClick:this.close},"Save"))))}}const H=V;class J extends g.Component{constructor(e){super(e),this.toggleOpen=()=>{this.setState({open:!this.state.open})},this.close=()=>{this.props.deleteCategory(this.state.id),this.toggleOpen()},this.state={id:null,open:!1}}render(){return g.default.createElement("div",null,g.default.createElement(L.Button,{onClick:this.toggleOpen},"Delete Category"),g.default.createElement(L.Modal,{isOpen:this.state.open,onClosed:function(){},onEnter:function(){},onExit:function(){},onOpened:function(){},toggle:this.toggleOpen},g.default.createElement(L.ModalHeader,{toggle:this.toggleOpen},"Delete Category"),g.default.createElement(L.ModalBody,null,g.default.createElement("label",null,"Enter Object ID:"," ",g.default.createElement(L.NumericInput,{onAcceptValue:e=>this.setState({id:+e})}))),g.default.createElement(L.ModalFooter,null,g.default.createElement(L.Button,{onClick:this.close},"Save"))))}}const W=J;var G=l(263),q=l(380),K=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function s(e){try{i(n.next(e))}catch(e){a(e)}}function l(e){try{i(n.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}i((n=n.apply(e,t||[])).next())}))};class Z extends g.Component{constructor(){super(...arguments),this.addLayer=(e,t,r,n,o,a,s,l)=>K(this,void 0,void 0,(function*(){var i,u;try{let c={TITLE:e,URL:t,SCOPE:r,SOURCE:n,DESCRIPTION:o,CATEGORYID:a,RENDERER:s||void 0,FILTER:l||void 0},d=yield M({url:this.props.config.layerTableUrl,features:[{attributes:c}],params:{token:yield this.getToken()}});if(!(null===(i=d.addResults[0])||void 0===i?void 0:i.success))throw new Error(null===(u=d.addResults[0])||void 0===u?void 0:u.error);alert("Successfully added layer!")}catch(e){console.error(e),alert("Error adding layer, please try again!")}})),this.deleteLayer=e=>K(this,void 0,void 0,(function*(){var t,r,n,o;try{let a=yield this.templateLayerRelationships.queryFeatures({where:"LAYERID = '"+e+"'",outFields:["OBJECTID"]}),s=[];for(let e of a.features)s.push(e.attributes.OBJECTID);if(s.length>0){let e=yield N({url:this.props.config.templateLayerRelationshipsUrl,objectIds:s,params:{token:yield this.getToken()}});if(!(null===(t=e.deleteResults[0])||void 0===t?void 0:t.success))throw alert("Error deleting template layer relationships, please try again!"),new Error(null===(r=e.deleteResults[0])||void 0===r?void 0:r.error)}let l=yield N({url:this.props.config.layerTableUrl,objectIds:[e],params:{token:yield this.getToken()}});if(!(null===(n=l.deleteResults[0])||void 0===n?void 0:n.success))throw new Error(null===(o=l.deleteResults[0])||void 0===o?void 0:o.error);alert("Successfully deleted layer!")}catch(e){console.error(e),alert("Error deleting layer, please try again!")}})),this.deleteTemplate=e=>K(this,void 0,void 0,(function*(){var t,r,n,o;try{let a=yield this.templateLayerRelationships.queryFeatures({where:"TEMPLATEID = '"+e+"'",outFields:["OBJECTID"]}),s=[];for(let e of a.features)s.push(e.attributes.OBJECTID);if(s.length>0){let e=yield N({url:this.props.config.templateLayerRelationshipsUrl,objectIds:s,params:{token:yield this.getToken()}});if(!(null===(t=e.deleteResults[0])||void 0===t?void 0:t.success))throw alert("Error deleting template layer relationships, please try again!"),new Error(null===(r=e.deleteResults[0])||void 0===r?void 0:r.error)}let l=yield N({url:this.props.config.templateTableUrl,objectIds:[e],params:{token:yield this.getToken()}});if(!(null===(n=l.deleteResults[0])||void 0===n?void 0:n.success))throw new Error(null===(o=l.deleteResults[0])||void 0===o?void 0:o.error);alert("Successfully deleted template!")}catch(e){console.error(e),alert("Error deleting template, please try again!")}})),this.addCategory=e=>K(this,void 0,void 0,(function*(){var t,r;try{let n=yield M({url:this.props.config.categoryTableUrl,features:[{attributes:{TITLE:e}}],params:{token:yield this.getToken()}});if(!(null===(t=n.addResults[0])||void 0===t?void 0:t.success))throw new Error(null===(r=n.addResults[0])||void 0===r?void 0:r.error);alert("Successfully added category!")}catch(e){console.error(e),alert("Error adding layer, please try again!")}})),this.deleteCategory=e=>K(this,void 0,void 0,(function*(){var t,r;try{let n=yield N({url:this.props.config.categoryTableUrl,objectIds:[e],params:{token:yield this.getToken()}});if(!(null===(t=n.deleteResults[0])||void 0===t?void 0:t.success))throw new Error(null===(r=n.deleteResults[0])||void 0===r?void 0:r.error);alert("Successfully deleted category!")}catch(e){console.error(e),alert("Error deleting category, please try again!")}})),this.getToken=()=>K(this,void 0,void 0,(function*(){const e=new G.default({appId:"eS2vUdIZbHaVOrDz",flowType:"auto",popup:!1});q.default.registerOAuthInfos([e]);let t=yield q.default.checkSignInStatus(e.portalUrl+"/sharing");return t||(t=yield q.default.getCredential(e.portalUrl+"/sharing")),t.token}))}componentDidMount(){try{this.templateTable=new j.default({url:this.props.config.templateTableUrl}),this.layerTable=new j.default({url:this.props.config.layerTableUrl}),this.categoryTable=new j.default({url:this.props.config.categoryTableUrl}),this.templateLayerRelationships=new j.default({url:this.props.config.templateLayerRelationshipsUrl})}catch(e){return console.error(e),void alert("Error connecting to database, please try again!")}}render(){return g.default.createElement("div",{id:"actions"},g.default.createElement(U,{addLayer:this.addLayer}),g.default.createElement(P,{deleteLayer:this.deleteLayer}),g.default.createElement(F,{deleteTemplate:this.deleteTemplate}),g.default.createElement(H,{addCategory:this.addCategory}),g.default.createElement(W,{deleteCategory:this.deleteCategory}))}}const z=Z;function X(e){l.p=e}})(),i})())}}}));