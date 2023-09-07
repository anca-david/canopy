"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[8701,2581],{"./projects/canopy/src/styles/docs/link/link.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,links:()=>links,linksInlineMessages:()=>linksInlineMessages});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_lib_alert__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/alert/alert.module.ts"),_lib_spacing__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/spacing/margin/margin.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Link/Examples",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_lib_alert__WEBPACK_IMPORTED_MODULE_1__.H,_lib_spacing__WEBPACK_IMPORTED_MODULE_2__.c]})]},standardTemplate='\nLorem ipsum dolor sit amet, consectetur adipiscing elit <a href="#">inline link example</a> and <a href="#" style="display: inline-block">inline block link example</a>\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n',links=(()=>({template:standardTemplate})).bind({});links.storyName="Standard",links.parameters={docs:{source:{code:standardTemplate}}};const linksInlineMessagesTemplate='\n<lg-alert variant="generic" lgMarginTop="lg">Example of <a href="#">link text</a> within an alert.</lg-alert>\n<lg-alert variant="info">Example of <a href="#">link text</a> within an alert.</lg-alert>\n<lg-alert variant="success">Example of <a href="#">link text</a> within an alert.</lg-alert>\n<lg-alert variant="error">Example of <a href="#">link text</a> within an alert.</lg-alert>\n',linksInlineMessages=(()=>({template:linksInlineMessagesTemplate})).bind({});linksInlineMessages.storyName="Within inline messages",linksInlineMessages.parameters={docs:{source:{code:linksInlineMessagesTemplate}}}},"./projects/canopy/src/lib/alert/alert.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>LgAlertComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgAlertComponent=class LgAlertComponent{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.showIcon=!0,this.class=!0,this.variant="generic"}set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-variant--${this._variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-variant--${variant}`),this._variant=variant}get variant(){return this._variant}get role(){if("info"!==this.variant&&"generic"!==this.variant)return"alert"}};LgAlertComponent.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgAlertComponent.propDecorators={showIcon:[{type:core.Input}],variant:[{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-alert"]}],role:[{type:core.HostBinding,args:["attr.role"]}]},LgAlertComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-alert",template:'<div\n  *ngIf="showIcon && variant !== \'generic\'"\n  [ngSwitch]="variant"\n  class="lg-alert__icon"\n>\n  <lg-icon *ngSwitchCase="\'error\'" name="crossmark-spot-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'info\'" name="information-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'warning\'" name="warning-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'success\'" name="checkmark-spot-fill"></lg-icon>\n</div>\n\n<div>\n  <ng-content></ng-content>\n</div>\n',encapsulation:core.ViewEncapsulation.None,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-alert {\n  display: flex;\n  margin-bottom: var(--component-margin);\n  padding: var(--space-sm);\n}\n.lg-alert h1,\n.lg-alert h2,\n.lg-alert h3,\n.lg-alert h4,\n.lg-alert h5,\n.lg-alert h6 {\n  font-size: var(--text-fs-1-size);\n  font-weight: var(--font-weight-bold);\n  line-height: var(--text-base-line-height);\n}\n.lg-alert__icon {\n  margin-right: var(--space-xs);\n}"]})],LgAlertComponent)},"./projects/canopy/src/lib/alert/alert.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>LgAlertModule});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_icon_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/icon/icon.module.ts"),_icon_icon_registry__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts"),_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),_variant_variant_module__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/variant/variant.module.ts"),_alert_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/canopy/src/lib/alert/alert.component.ts");let LgAlertModule=class LgAlertModule{constructor(iconRegistry){this.iconRegistry=iconRegistry,this.iconRegistry.registerIcons([_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__.lgIconCrossmarkSpotFill,_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__.lgIconInformationFill,_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__.lgIconWarningFill,_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__.lgIconCheckmarkSpotFill])}};LgAlertModule.ctorParameters=()=>[{type:_icon_icon_registry__WEBPACK_IMPORTED_MODULE_1__.v}],LgAlertModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_icon_icon_module__WEBPACK_IMPORTED_MODULE_5__.r,_variant_variant_module__WEBPACK_IMPORTED_MODULE_6__.K],declarations:[_alert_component__WEBPACK_IMPORTED_MODULE_7__.n],exports:[_alert_component__WEBPACK_IMPORTED_MODULE_7__.n]})],LgAlertModule)},"./projects/canopy/src/lib/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>LgIconModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let LgIconModule=class LgIconModule{};LgIconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r],exports:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r]})],LgIconModule)},"./projects/canopy/src/lib/spacing/margin/margin.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>LgMarginModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),spacing_service=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgMarginDirective=class LgMarginDirective{constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.marginTopClasses=[],this.marginRightClasses=[],this.marginBottomClasses=[],this.marginLeftClasses=[],this.marginClasses=[]}set lgMarginTop(margin){this.marginTopClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-top"),this.marginTopClasses)}set lgMarginRight(margin){this.marginRightClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-right"),this.marginRightClasses)}set lgMarginBottom(margin){this.marginBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-bottom"),this.marginBottomClasses)}set lgMarginLeft(margin){this.marginLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-left"),this.marginLeftClasses)}set lgMarginHorizontal(margin){this.lgMarginLeft=margin,this.lgMarginRight=margin}set lgMarginVertical(margin){this.lgMarginTop=margin,this.lgMarginBottom=margin}set lgMargin(margin){this.marginClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin"),this.marginClasses)}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}};LgMarginDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef},{type:spacing_service.i}],LgMarginDirective.propDecorators={lgMarginTop:[{type:core.Input}],lgMarginRight:[{type:core.Input}],lgMarginBottom:[{type:core.Input}],lgMarginLeft:[{type:core.Input}],lgMarginHorizontal:[{type:core.Input}],lgMarginVertical:[{type:core.Input}],lgMargin:[{type:core.Input}]},LgMarginDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"\n    [lgMargin],\n    [lgMarginVertical],\n    [lgMarginHorizontal],\n    [lgMarginTop],\n    [lgMarginRight],\n    [lgMarginBottom],\n    [lgMarginLeft]\n  "})],LgMarginDirective);let LgMarginModule=class LgMarginModule{};LgMarginModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgMarginDirective],exports:[LgMarginDirective]})],LgMarginModule)},"./projects/canopy/src/lib/spacing/spacing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>SpacingService});var BreakpointValues,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");!function(BreakpointValues){BreakpointValues.xs="0",BreakpointValues.sm="20rem",BreakpointValues.md="48rem",BreakpointValues.lg="64rem",BreakpointValues.xl="80rem",BreakpointValues.xxl="90rem"}(BreakpointValues||(BreakpointValues={}));let DynamicStyleService=class DynamicStyleService{constructor(){this.styleTag=null,this.selectors=[],this.mediaQueries={},this.addStyleTag()}addRules(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.filter((r=>!this.selectors.includes(r.selector))).map((r=>{this.selectors.push(r.selector),styleTagCache+=`.${r.selector}{${r.declaration}}`})),this.styleTag.innerHTML=styleTagCache}addRulesToMediaQuery(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.map((r=>{if(this.mediaQueries[r.breakpoint]||(styleTagCache+=this.createMediaQuery(r.breakpoint)),this.mediaQueries[r.breakpoint].includes(r.selector))return;this.mediaQueries[r.breakpoint].push(r.selector);const rule=`.${r.selector}{${r.declaration}}`;styleTagCache=this.insertRuleInsideMediaQuery(styleTagCache,r.breakpoint,rule,r.addAtStart)})),this.styleTag.innerHTML=styleTagCache}insertRuleInsideMediaQuery(cssString,breakpoint,rule,atStart=!1){const search=`@media(min-width:${breakpoint}){`;let index=cssString.indexOf(search);if(-1===index)return console.warn("Media query not found in string, cannot add rule."),cssString;if(index+=search.length,atStart)return cssString.substring(0,index)+`${rule}`+cssString.substring(index);let balance=0,pos=null;for(let i=index;i<cssString.length;i++){const char=cssString[i];if("{"===char?balance++:"}"===char&&balance--,-1===balance){pos=i;break}}return null===pos?(console.warn("Cannot add rule to media query in CSS string, invalid CSS string"),cssString):cssString.substring(0,pos)+`${rule}`+cssString.substring(pos)}addStyleTag(){this.styleTag=document.createElement("style"),this.styleTag.type="text/css",document.getElementsByTagName("head")[0].appendChild(this.styleTag)}createMediaQuery(breakpoint){if(!this.mediaQueries[breakpoint])return this.mediaQueries[breakpoint]=[],`@media(min-width:${breakpoint}){}`}};var SpacingValues;DynamicStyleService.ctorParameters=()=>[],DynamicStyleService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],DynamicStyleService),function(SpacingValues){SpacingValues.none="0",SpacingValues.xxxs="0.25rem",SpacingValues.xxs="0.5rem",SpacingValues.xs="0.75rem",SpacingValues.sm="1rem",SpacingValues.md="1.5rem",SpacingValues.lg="2rem",SpacingValues.xl="2.5rem",SpacingValues.xxl="3rem",SpacingValues.xxxl="4.5rem",SpacingValues.xxxxl="9rem"}(SpacingValues||(SpacingValues={}));let SpacingService=class SpacingService{constructor(dynamicStyleService){this.dynamicStyleService=dynamicStyleService}createNewClasses(spacing,cssProperty){const newClasses=[],responsiveSpacingRules=[];if(!spacing)return[];if("object"==typeof spacing)Object.keys(spacing).forEach((key=>{const selector=`lg-${cssProperty.replace("-","__")}--${key}--${spacing[key]}`;responsiveSpacingRules.push({selector,declaration:`${cssProperty}:${SpacingValues[spacing[key]]}!important`,breakpoint:BreakpointValues[key]}),newClasses.push(selector)})),this.dynamicStyleService.addRulesToMediaQuery(responsiveSpacingRules);else{const selector=`lg-${cssProperty.replace("-","__")}--${spacing}`;this.dynamicStyleService.addRules([{selector,declaration:`${cssProperty}:${SpacingValues[spacing]}!important`}]),newClasses.push(selector)}return newClasses}};SpacingService.ctorParameters=()=>[{type:DynamicStyleService}],SpacingService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],SpacingService)},"./projects/canopy/src/lib/variant/variant.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>LgVariantModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgVariantDirective=class LgVariantDirective{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}set lgVariant(variant){this.variantClass=this.toggleClass(`lg-variant--${variant}`,this.variantClass)}toggleClass(newClass,oldClass){return oldClass&&this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}};LgVariantDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgVariantDirective.propDecorators={lgVariant:[{type:core.Input}]},LgVariantDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgVariant]"})],LgVariantDirective);let LgVariantModule=class LgVariantModule{};LgVariantModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgVariantDirective],exports:[LgVariantDirective]})],LgVariantModule)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);