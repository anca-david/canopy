"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[9841],{"./projects/canopy/src/lib/link-menu/docs/link-menu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,standardLinkMenu:()=>standardLinkMenu});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_link_menu_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/link-menu/link-menu.module.ts"),_link_menu_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/link-menu/link-menu.component.ts");const template='\n<lg-link-menu>\n  <a href="#" *ngFor="let item of menuItems" [attr.target]="item.target">\n    <lg-link-menu-item>\n      <lg-link-menu-item-heading>{{ item.title }}</lg-link-menu-item-heading>\n      <lg-link-menu-item-content *ngIf="item.description">\n        {{ item.description }}\n      </lg-link-menu-item-content>\n    </lg-link-menu-item>\n  </a>\n</lg-link-menu>',__WEBPACK_DEFAULT_EXPORT__={title:"Components/Link menu/Examples",component:_link_menu_component__WEBPACK_IMPORTED_MODULE_1__.a,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_link_menu_module__WEBPACK_IMPORTED_MODULE_2__.$]})],argTypes:{class:{table:{disable:!0}}}};const standardLinkMenu=(args=>({props:args,template})).bind({});standardLinkMenu.storyName="Link menu",standardLinkMenu.args={menuItems:[{title:"Change your bank details",description:"Changes may take up to an hour",target:null},{title:"Plan for retirement",description:"",target:null},{title:"Life Insurance",description:"Learn more",target:"_blank"}]},standardLinkMenu.parameters={docs:{source:{code:template}}}},"./projects/canopy/src/lib/link-menu/link-menu.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>LgLinkMenuComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgLinkMenuComponent=class LgLinkMenuComponent{constructor(){this.class=!0}};LgLinkMenuComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-link-menu"]}]},LgLinkMenuComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-link-menu",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-link-menu {\n  display: flex;\n  flex-direction: column;\n}\n.lg-link-menu a {\n  flex: 1;\n  text-decoration: underline;\n  border-bottom: 0;\n  padding: 0;\n  text-decoration: none;\n  color: var(--link-menu-link-color);\n  border-bottom: var(--border-width) solid var(--link-menu-link-border-color);\n  display: block;\n  padding: var(--space-sm) var(--space-sm) var(--space-xs);\n  width: 100%;\n}\n.lg-link-menu a:hover {\n  border-bottom: 0;\n  box-shadow: none;\n  background-color: transparent;\n  color: inherit;\n}\n.lg-link-menu a:active, .lg-link-menu a:focus-visible, .lg-link-menu a:focus-visible:hover {\n  background-color: transparent;\n  color: inherit;\n}\n.lg-link-menu a:focus-visible, .lg-link-menu a:focus-visible:hover {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n@media (min-width: 48rem) {\n  .lg-link-menu a {\n    padding: var(--space-sm);\n  }\n}\n@media (min-width: 64rem) {\n  .lg-link-menu a {\n    padding: var(--space-sm) var(--space-xs);\n  }\n}\n.lg-link-menu a:visited {\n  color: var(--link-menu-link-color);\n  border-bottom: var(--border-width) solid var(--link-menu-link-border-color);\n  text-decoration: none;\n}\n.lg-link-menu a:active, .lg-link-menu a:hover, .lg-link-menu a:focus-visible {\n  margin-bottom: calc(var(--border-width) - var(--link-menu-link-border-width-lg));\n}\n.lg-link-menu a:active, .lg-link-menu a:focus-visible {\n  color: var(--link-menu-link-active-color);\n  border-bottom: var(--link-menu-link-border-width-lg) solid var(--link-menu-link-active-color);\n}\n.lg-link-menu a:hover {\n  color: var(--link-menu-link-hover-color);\n  border-bottom: var(--link-menu-link-border-width-lg) solid var(--link-menu-link-hover-color);\n}"]})],LgLinkMenuComponent)},"./projects/canopy/src/lib/link-menu/link-menu.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>LgLinkMenuModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),icon_module=__webpack_require__("./projects/canopy/src/lib/icon/icon.module.ts"),icon_registry=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts"),icons_interface=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),variant_module=__webpack_require__("./projects/canopy/src/lib/variant/variant.module.ts"),card_module=__webpack_require__("./projects/canopy/src/lib/card/card.module.ts"),link_menu_component=__webpack_require__("./projects/canopy/src/lib/link-menu/link-menu.component.ts");let LgLinkMenuItemComponent=class LgLinkMenuItemComponent{constructor(elementRef){this.elementRef=elementRef,this.class=!0,this.openInANewTab=!1}ngOnInit(){if(this.elementRef){const parent=this.elementRef.nativeElement.parentElement,tag=parent?.tagName;"A"===tag?this.openInANewTab="_blank"===parent.getAttribute("target"):console.warn(`expected 'lg-link-menu-item' parent to be an HTML Anchor but got ${tag}`)}}};LgLinkMenuItemComponent.ctorParameters=()=>[{type:core.ElementRef}],LgLinkMenuItemComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-link-menu-item"]}]},LgLinkMenuItemComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-link-menu-item",template:'<div class="lg-link-menu-item__container">\n  <ng-content select="lg-link-menu-item-heading"></ng-content>\n  <ng-content select="lg-link-menu-item-content"></ng-content>\n</div>\n<div class="lg-link-menu-item__icon-container">\n  <lg-icon [name]="!openInANewTab ? \'chevron-right\' : \'link-external\'" class="lg-font-size-0-8"></lg-icon>\n  <span *ngIf="openInANewTab" class="lg-visually-hidden"> opens in a new tab</span>\n</div>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-link-menu-item {\n  display: flex;\n  justify-content: space-between;\n}\n.lg-link-menu-item__container {\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 48rem) {\n  .lg-link-menu-item__container {\n    padding-right: var(--space-sm);\n  }\n}\n.lg-link-menu-item__icon-container {\n  position: relative;\n  padding-right: var(--space-sm);\n}\n@media (min-width: 48rem) {\n  .lg-link-menu-item__icon-container {\n    padding-right: var(--space-sm);\n  }\n}\n@media (min-width: 64rem) {\n  .lg-link-menu-item__icon-container {\n    padding-right: var(--space-xs);\n  }\n}\n.lg-link-menu-item__icon-container .lg-icon {\n  position: absolute;\n  right: 0;\n}"]})],LgLinkMenuItemComponent);let LgLinkMenuItemHeadingComponent=class LgLinkMenuItemHeadingComponent{constructor(){this.class=!0}};LgLinkMenuItemHeadingComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-link-menu-item-heading"]}]},LgLinkMenuItemHeadingComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-link-menu-item-heading",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".lg-link-menu-item-heading {\n  font-size: var(--text-fs-1-size);\n  font-weight: var(--text-fs-1-weight--strong);\n  padding-right: var(--space-xxxs);\n}"]})],LgLinkMenuItemHeadingComponent);let LgLinkMenuItemContentComponent=class LgLinkMenuItemContentComponent{constructor(){this.class=!0}};LgLinkMenuItemContentComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-link-menu-item-content"]}]},LgLinkMenuItemContentComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-link-menu-item-content",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".lg-link-menu-item-content {\n  padding-top: var(--space-xxs);\n  font-size: var(--text-fs--8-size);\n  line-height: var(--text-base-line-height);\n}"]})],LgLinkMenuItemContentComponent);const components=[link_menu_component.a,LgLinkMenuItemComponent,LgLinkMenuItemHeadingComponent,LgLinkMenuItemContentComponent];let LgLinkMenuModule=class LgLinkMenuModule{constructor(iconRegistry){this.iconRegistry=iconRegistry,this.iconRegistry.registerIcons([icons_interface.lgIconChevronRight,icons_interface.lgIconLinkExternal])}};LgLinkMenuModule.ctorParameters=()=>[{type:icon_registry.v}],LgLinkMenuModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,icon_module.r,variant_module.K,card_module.E],declarations:[...components],exports:[...components]})],LgLinkMenuModule)},"./projects/canopy/src/lib/variant/variant.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>LgVariantModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgVariantDirective=class LgVariantDirective{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}set lgVariant(variant){this.variantClass=this.toggleClass(`lg-variant--${variant}`,this.variantClass)}toggleClass(newClass,oldClass){return oldClass&&this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}};LgVariantDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgVariantDirective.propDecorators={lgVariant:[{type:core.Input}]},LgVariantDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgVariant]"})],LgVariantDirective);let LgVariantModule=class LgVariantModule{};LgVariantModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgVariantDirective],exports:[LgVariantDirective]})],LgVariantModule)}}]);