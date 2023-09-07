"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[5225,2581],{"./projects/canopy/src/lib/breadcrumb/docs/breadcrumb.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,ellipsis:()=>ellipsis,threeItems:()=>threeItems});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_icon_icon_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/icon/icon.module.ts"),_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb.module.ts"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb.component.ts"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb-item/breadcrumb-item.interface.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumb/Examples",component:___WEBPACK_IMPORTED_MODULE_1__.H,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_icon_icon_module__WEBPACK_IMPORTED_MODULE_2__.r,_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__.B]})],argTypes:{variant:{options:[___WEBPACK_IMPORTED_MODULE_4__.D.light,___WEBPACK_IMPORTED_MODULE_4__.D.dark],description:"The colour variant for use on light or dark backgrounds",table:{type:{summary:[___WEBPACK_IMPORTED_MODULE_4__.D.light,___WEBPACK_IMPORTED_MODULE_4__.D.dark]},defaultValue:{summary:___WEBPACK_IMPORTED_MODULE_4__.D.dark}},control:{type:"select"}},attr:{table:{disable:!0}},class:{table:{disable:!0}},role:{table:{disable:!0}},ngAfterContentChecked:{table:{disable:!0}},crumbs:{table:{disable:!0}},ellipsis:{table:{disable:!0}}}},template='\n<lg-breadcrumb [variant]="variant">\n  <lg-breadcrumb-item>\n    <a href="#">\n      <lg-icon [name]="\'home\'"></lg-icon>\n      Home\n    </a>\n  </lg-breadcrumb-item>\n  <lg-breadcrumb-item>\n    <a href="#">Products</a>\n  </lg-breadcrumb-item>\n  <lg-breadcrumb-item>\n    <a href="#">Pension Annuity</a>\n  </lg-breadcrumb-item>\n</lg-breadcrumb>\n',threeItems=(args=>({props:args,template})).bind({});threeItems.storyName="Three items",threeItems.args={variant:___WEBPACK_IMPORTED_MODULE_4__.D.dark},threeItems.parameters={docs:{source:{code:template}}};const ellipisTemplate='\n<lg-breadcrumb [variant]="variant">\n  <lg-breadcrumb-item>\n    <a href="#">\n      <lg-icon [name]="\'home\'"></lg-icon>\n      Home\n    </a>\n  </lg-breadcrumb-item>\n\n  \x3c!-- Epllipsis --\x3e\n  <lg-breadcrumb-item-ellipsis></lg-breadcrumb-item-ellipsis>\n\n  <lg-breadcrumb-item>\n    <a href="#">Products</a>\n  </lg-breadcrumb-item>\n  <lg-breadcrumb-item>\n    <a href="#">Pension Annuity</a>\n  </lg-breadcrumb-item>\n</lg-breadcrumb>\n',ellipsis=(args=>({props:args,template:ellipisTemplate})).bind({});ellipsis.storyName="More than three items",ellipsis.args={variant:___WEBPACK_IMPORTED_MODULE_4__.D.dark},ellipsis.parameters={docs:{source:{code:ellipisTemplate}}}},"./projects/canopy/src/lib/breadcrumb/breadcrumb-item-ellipsis/breadcrumb-item-ellipsis.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>LgBreadcrumbItemEllipsisComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgBreadcrumbItemEllipsisComponent=class LgBreadcrumbItemEllipsisComponent{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.class=!0}set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-breadcrumb-item-ellipsis--${this.variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-breadcrumb-item-ellipsis--${variant}`),this._variant=variant}get variant(){return this._variant}};LgBreadcrumbItemEllipsisComponent.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgBreadcrumbItemEllipsisComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-breadcrumb-item-ellipsis"]}]},LgBreadcrumbItemEllipsisComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-breadcrumb-item-ellipsis",template:'<span class="lg-breadcrumb-item-ellipsis__wrapper">\n  <lg-icon [name]="\'overflow-horizontal\'"></lg-icon>\n</span>\n\n<span class="lg-breadcrumb-item-ellipsis__caret-wrapper">\n  <lg-icon\n    [name]="\'caret-right\'"\n    class="lg-breadcrumb-item__icon lg-breadcrumb-item__icon-forward"\n  ></lg-icon>\n</span>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-breadcrumb-item-ellipsis {\n  margin-right: var(--space-sm);\n  display: none;\n  align-items: center;\n}\n.lg-breadcrumb-item-ellipsis__wrapper, .lg-breadcrumb-item-ellipsis__caret-wrapper {\n  align-items: center;\n  display: flex;\n}\n.lg-breadcrumb-item-ellipsis--light {\n  color: var(--breadcrumb-light-color);\n}\n.lg-breadcrumb-item-ellipsis--dark {\n  color: var(--breadcrumb-dark-color);\n}\n@media (min-width: 48rem) {\n  .lg-breadcrumb-item-ellipsis {\n    display: flex;\n  }\n}"]})],LgBreadcrumbItemEllipsisComponent)},"./projects/canopy/src/lib/breadcrumb/breadcrumb-item/breadcrumb-item.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>LgBreadcrumbItemComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),icons_interface=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts");let LgBreadcrumbItemComponent=class LgBreadcrumbItemComponent{constructor(renderer,hostElement,cd){this.renderer=renderer,this.hostElement=hostElement,this.cd=cd,this._showBackChevron=!1,this._showForwardChevron=!1,this._isSmScreenFeaturedItem=!1,this._hideIcons=!1,this.icons=icons_interface,this.class=!0}set hideIcons(hideIcons){this._hideIcons=hideIcons,this.cd.detectChanges()}get hideIcons(){return this._hideIcons}set isSmScreenFeaturedItem(isSmScreenFeaturedItem){this._isSmScreenFeaturedItem=isSmScreenFeaturedItem,this.cd.detectChanges()}get isSmScreenFeaturedItem(){return this._isSmScreenFeaturedItem}set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-breadcrumb-item--${this.variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-breadcrumb-item--${variant}`),this._variant=variant}get variant(){return this._variant}set showBackChevron(showBackChevron){this._showBackChevron=showBackChevron,this.cd.detectChanges()}get showBackChevron(){return this._showBackChevron}set showForwardChevron(showForwardChevron){this._showForwardChevron=showForwardChevron,this.cd.detectChanges()}get showForwardChevron(){return this._showForwardChevron}};LgBreadcrumbItemComponent.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef},{type:core.ChangeDetectorRef}],LgBreadcrumbItemComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-breadcrumb-item"]}]},LgBreadcrumbItemComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-breadcrumb-item",template:'<div\n  class="lg-breadcrumb-item__container"\n  [ngClass]="{\n    \'lg-breadcrumb-item__container--visible-sm\': isSmScreenFeaturedItem,\n    \'lg-breadcrumb-item__container--hide-icons\': hideIcons\n  }"\n>\n  <span class="lg-breadcrumb-item__icon-wrapper" *ngIf="showBackChevron">\n    <lg-icon\n      [name]="\'caret-left\'"\n      class="lg-breadcrumb-item__icon lg-breadcrumb-item__icon-backward"\n    ></lg-icon>\n  </span>\n\n  <span class="lg-breadcrumb-item__content">\n    <span class="lg-visually-hidden">{{ index + 1 }}.</span>\n    <ng-content></ng-content>\n  </span>\n\n  <span class="lg-breadcrumb-item__icon-wrapper" *ngIf="showForwardChevron">\n    <lg-icon\n      [name]="\'caret-right\'"\n      class="lg-breadcrumb-item__icon lg-breadcrumb-item__icon-forward"\n    ></lg-icon>\n  </span>\n</div>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-breadcrumb-item {\n  align-items: center;\n}\n.lg-breadcrumb-item__container {\n  display: none;\n  margin-right: var(--space-xxs);\n}\n@media (min-width: 48rem) {\n  .lg-breadcrumb-item__container {\n    display: flex;\n  }\n}\n.lg-breadcrumb-item__container--visible-sm {\n  display: flex;\n}\n.lg-breadcrumb-item__container--hide-icons .lg-breadcrumb-item__content .lg-icon {\n  display: none;\n}\n@media (min-width: 48rem) {\n  .lg-breadcrumb-item__container--hide-icons .lg-breadcrumb-item__content .lg-icon {\n    display: inline;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-breadcrumb-item .lg-icon {\n    display: inline;\n  }\n}\n.lg-breadcrumb-item__content .lg-icon {\n  margin-right: var(--space-xxs);\n}\n.lg-breadcrumb-item a {\n  text-decoration: underline;\n  border-bottom: 0;\n  padding: 0;\n}\n.lg-breadcrumb-item a:hover {\n  border-bottom: 0;\n  box-shadow: none;\n  background-color: transparent;\n  color: inherit;\n}\n.lg-breadcrumb-item a:active, .lg-breadcrumb-item a:focus-visible, .lg-breadcrumb-item a:focus-visible:hover {\n  background-color: transparent;\n  color: inherit;\n}\n.lg-breadcrumb-item a:focus-visible, .lg-breadcrumb-item a:focus-visible:hover {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-breadcrumb-item a,\n.lg-breadcrumb-item span {\n  display: flex;\n  align-items: center;\n}\n.lg-breadcrumb-item--light {\n  color: var(--breadcrumb-light-color);\n}\n.lg-breadcrumb-item--light a,\n.lg-breadcrumb-item--light span {\n  color: var(--breadcrumb-light-color);\n}\n.lg-breadcrumb-item--dark {\n  color: var(--breadcrumb-dark-color);\n}\n.lg-breadcrumb-item--dark a,\n.lg-breadcrumb-item--dark span {\n  color: var(--breadcrumb-dark-color);\n}\n.lg-breadcrumb-item--dark a:focus-visible {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n  background-color: transparent;\n}\n.lg-breadcrumb-item__icon-backward {\n  margin-right: var(--space-xxs);\n}\n.lg-breadcrumb-item__icon-backward.lg-icon {\n  display: inline;\n}\n.lg-breadcrumb-item__icon-forward {\n  margin-left: var(--space-xxs);\n}\n.lg-breadcrumb-item__icon-wrapper .lg-breadcrumb-item__icon-forward {\n  display: none;\n}\n@media (min-width: 48rem) {\n  .lg-breadcrumb-item__icon-wrapper .lg-breadcrumb-item__icon-forward {\n    display: flex;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-breadcrumb-item__icon-wrapper .lg-breadcrumb-item__icon-backward {\n    display: none;\n  }\n}"]})],LgBreadcrumbItemComponent)},"./projects/canopy/src/lib/breadcrumb/breadcrumb-item/breadcrumb-item.interface.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var BreadcrumbVariant;__webpack_require__.d(__webpack_exports__,{D:()=>BreadcrumbVariant}),function(BreadcrumbVariant){BreadcrumbVariant.light="light",BreadcrumbVariant.dark="dark"}(BreadcrumbVariant||(BreadcrumbVariant={}))},"./projects/canopy/src/lib/breadcrumb/breadcrumb.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>LgBreadcrumbComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),breadcrumb_item_ellipsis_component=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb-item-ellipsis/breadcrumb-item-ellipsis.component.ts"),breadcrumb_item_component=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb-item/breadcrumb-item.component.ts"),breadcrumb_item_interface=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb-item/breadcrumb-item.interface.ts");let LgBreadcrumbComponent=class LgBreadcrumbComponent{constructor(){this._variant=breadcrumb_item_interface.D.dark,this.contentHasInit=!1,this.class=!0,this.attr="breadcrumb",this.role="navigation"}set variant(variant){this._variant=variant,this.contentHasInit&&this.setVariantOnChildren()}get variant(){return this._variant}ngAfterContentChecked(){this.setVariantOnChildren(),this.setCrumbProperties(),this.contentHasInit=!0}setVariantOnChildren(){this.crumbs.forEach((crumb=>crumb.variant=this.variant)),this.ellipsis.forEach((ellipsisItem=>ellipsisItem.variant=this.variant))}setCrumbProperties(){this.crumbs.forEach(((crumb,index)=>{const totalCrumbCount=this.crumbs.length;crumb.index=index,crumb.hideIcons=2===totalCrumbCount&&!index,crumb.showBackChevron=totalCrumbCount>1,crumb.showForwardChevron=index+1!==totalCrumbCount,crumb.isSmScreenFeaturedItem=!index&&1===totalCrumbCount||index+2===totalCrumbCount}))}};LgBreadcrumbComponent.propDecorators={variant:[{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-breadcrumb"]}],attr:[{type:core.HostBinding,args:["attr.aria-label"]}],role:[{type:core.HostBinding,args:["attr.role"]}],crumbs:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>breadcrumb_item_component.u)),{descendants:!0}]}],ellipsis:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>breadcrumb_item_ellipsis_component.P)),{descendants:!0}]}]},LgBreadcrumbComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-breadcrumb",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-breadcrumb {\n  list-style-type: none;\n  display: flex;\n  margin-bottom: var(--component-margin);\n}"]})],LgBreadcrumbComponent)},"./projects/canopy/src/lib/breadcrumb/breadcrumb.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>LgBreadcrumbModule});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_icon_module__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./projects/canopy/src/lib/icon/icon.module.ts"),_icon_icon_registry__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts"),_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),_breadcrumb_item_ellipsis_breadcrumb_item_ellipsis_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb-item-ellipsis/breadcrumb-item-ellipsis.component.ts"),_breadcrumb_item_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb-item/breadcrumb-item.component.ts"),_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb.component.ts");let LgBreadcrumbModule=class LgBreadcrumbModule{constructor(registry){this.registry=registry,this.registry.registerIcons([_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__.lgIconHome,_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__.lgIconCaretLeft,_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__.lgIconCaretRight,_icon_icons_interface__WEBPACK_IMPORTED_MODULE_0__.lgIconOverflowHorizontal])}};LgBreadcrumbModule.ctorParameters=()=>[{type:_icon_icon_registry__WEBPACK_IMPORTED_MODULE_1__.v}],LgBreadcrumbModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({declarations:[_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.H,_breadcrumb_item_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_5__.u,_breadcrumb_item_ellipsis_breadcrumb_item_ellipsis_component__WEBPACK_IMPORTED_MODULE_6__.P],exports:[_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.H,_breadcrumb_item_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_5__.u,_breadcrumb_item_ellipsis_breadcrumb_item_ellipsis_component__WEBPACK_IMPORTED_MODULE_6__.P],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,_icon_icon_module__WEBPACK_IMPORTED_MODULE_8__.r]})],LgBreadcrumbModule)},"./projects/canopy/src/lib/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>LgIconModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let LgIconModule=class LgIconModule{};LgIconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r],exports:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r]})],LgIconModule)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);