(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[2332],{"./projects/canopy/src/lib/card/docs/promotions/promotions.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,promotionsGeneralCard:()=>promotionsGeneralCard,promotionsGeneralMagazineLayout:()=>promotionsGeneralMagazineLayout,promotionsGeneralThreeCard:()=>promotionsGeneralThreeCard,promotionsGeneralTwoCard:()=>promotionsGeneralTwoCard});var _class,tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_grid_grid_module__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/canopy/src/lib/grid/grid.module.ts"),_spacing_padding_padding_module__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./projects/canopy/src/lib/spacing/padding/padding.module.ts"),_spacing_margin_margin_module__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./projects/canopy/src/lib/spacing/margin/margin.module.ts"),_button_button_module__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/button/button.module.ts"),_separator_separator_module__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./projects/canopy/src/lib/separator/separator.module.ts"),_card_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/card/card.module.ts"),_brand_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/brand-icon/brand-icons.interface.ts"),_brand_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/brand-icon/brand-icon.registry.ts"),_brand_icon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./projects/canopy/src/lib/brand-icon/brand-icon.module.ts"),_orientation__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./projects/canopy/src/lib/orientation/orientation.module.ts"),_shadow__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./projects/canopy/src/lib/shadow/shadow.module.ts");let GeneralPromotionCardComponent=((_class=class GeneralPromotionCardComponent{constructor(brandIconRegistry){this.brandIconRegistry=brandIconRegistry,this.orientation={sm:"vertical",md:"horizontal",lg:"horizontal"},this.brandIconRegistry.registerBrandIcon([_brand_icon__WEBPACK_IMPORTED_MODULE_1__.FX6,_brand_icon__WEBPACK_IMPORTED_MODULE_1__.UNB,_brand_icon__WEBPACK_IMPORTED_MODULE_1__.JkD])}}).ctorParameters=()=>[{type:_brand_icon__WEBPACK_IMPORTED_MODULE_2__.r}],_class.propDecorators={title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}],text:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}],buttonText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}],imgUrl:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}],iconName:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}],hasIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}],orientation:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}]},_class);GeneralPromotionCardComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"lg-card-general-promotion",template:'\n<lg-card\n  lgShadow\n  lgMarginBottom="lg"\n  [lgPadding]="hasIcon ? \'lg\' : \'none\'"\n  variant="promotion"\n  [lgOrientation]="orientation">\n  <lg-card-hero-img\n    [cover]="true"\n    [src]="hasIcon ? \'\' : imgUrl">\n    <lg-brand-icon *ngIf="hasIcon" [name]="iconName" size="xs"></lg-brand-icon>\n  </lg-card-hero-img>\n  <lg-card-content>\n    <h3 lgMarginBottom="xxs" class="lg-font--expressive">{{ title }}</h3>\n    <p lgMarginBottom="lg">{{ text }}</p>\n    <a href="#">{{ buttonText }}</a>\n  </lg-card-content>\n</lg-card>\n'})],GeneralPromotionCardComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Patterns/Promotions/Examples",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[GeneralPromotionCardComponent],imports:[_card_module__WEBPACK_IMPORTED_MODULE_5__.E,_button_button_module__WEBPACK_IMPORTED_MODULE_6__.h,_grid_grid_module__WEBPACK_IMPORTED_MODULE_7__.i,_spacing_padding_padding_module__WEBPACK_IMPORTED_MODULE_8__.X,_spacing_margin_margin_module__WEBPACK_IMPORTED_MODULE_9__.c,_shadow__WEBPACK_IMPORTED_MODULE_10__.q,_separator_separator_module__WEBPACK_IMPORTED_MODULE_11__.R,_brand_icon__WEBPACK_IMPORTED_MODULE_12__.Y,_orientation__WEBPACK_IMPORTED_MODULE_13__.R]})],parameters:{backgrounds:{default:"White Smoke"}}},promotionsGeneralCardStandAloneTemplate='\n<div lgContainer>\n  <div lgRow>\n    <div lgColSm="12">\n      <lg-card-general-promotion\n        [title]="title"\n        [text]="text"\n        [buttonText]="buttonText"\n        imgUrl="promo-card/general-promotion1.jpg"\n        [hasIcon]="hasIcon"\n        iconName="looking-ahead"\n        [orientation]="orientation">\n      </lg-card-general-promotion>\n    </div>\n  </div>\n</div>\n',promotionsGeneralCardTwoCardsTemplate='\n<div lgContainer>\n  <div lgRow>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="6"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion1.jpg"\n      [hasIcon]="hasIcon" iconName="looking-ahead"\n      [orientation]="orientation">\n    </lg-card-general-promotion>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="6"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion2.jpg"\n      [hasIcon]="hasIcon"\n      iconName="pension-pot"\n      [orientation]="orientation">\n    </lg-card-general-promotion>\n  </div>\n</div>\n',promotionsGeneralCardThreeCardsTemplate='\n<div lgContainer>\n  <div lgRow>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="4"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion1.jpg"\n      [hasIcon]="hasIcon" iconName="looking-ahead"\n      [orientation]="orientation">\n    </lg-card-general-promotion>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="4"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion2.jpg"\n      [hasIcon]="hasIcon"\n      iconName="pension-pot"\n      [orientation]="orientation">\n    </lg-card-general-promotion>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="4"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion3.jpg"\n      [hasIcon]="hasIcon"\n      iconName="calendar-appointment"\n      [orientation]="orientation">\n    </lg-card-general-promotion>\n  </div>\n</div>\n',promotionsGeneralCardMagazineLayoutTemplate='\n<div lgContainer>\n  <div lgRow>\n    <div lgCol="12">\n      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>\n    </div>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="4"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion1.jpg"\n      [hasIcon]="false"\n      iconName="looking-ahead"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="4"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion2.jpg"\n      [hasIcon]="false"\n      iconName="pension-pot"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="4"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion3.jpg"\n      [hasIcon]="false"\n      iconName="calendar-appointment"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n  </div>\n  <div lgRow>\n    <div lgCol="12">\n      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>\n    </div>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="6"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion1.jpg"\n      [hasIcon]="false"\n      iconName="looking-ahead"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="6"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion2.jpg"\n      [hasIcon]="false"\n      iconName="pension-pot"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n  </div>\n  <div lgRow>\n    <div lgCol="12">\n      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>\n    </div>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="4"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion1.jpg"\n      [hasIcon]="true"\n      iconName="looking-ahead"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="4"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion2.jpg"\n      [hasIcon]="true"\n      iconName="pension-pot"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="4"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion3.jpg"\n      [hasIcon]="true"\n      iconName="calendar-appointment"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n  </div>\n  <div lgRow>\n    <div lgCol="12">\n      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>\n    </div>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="6"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion1.jpg"\n      [hasIcon]="true"\n      iconName="looking-ahead"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n    <lg-card-general-promotion\n      lgColSm="12"\n      lgColLg="6"\n      [title]="title"\n      [text]="text"\n      [buttonText]="buttonText"\n      imgUrl="promo-card/general-promotion2.jpg"\n      [hasIcon]="true"\n      iconName="pension-pot"\n      [orientation]="{ sm: \'vertical\', md: \'horizontal\', lg: \'vertical\' }">\n    </lg-card-general-promotion>\n  </div>\n</div>\n',promotionsGeneralCard=(args=>({props:args,template:promotionsGeneralCardStandAloneTemplate,title:"Patterns/Card/Examples"})).bind({title:"Patterns/Card/Examples"});promotionsGeneralCard.storyName="Stand-alone card",promotionsGeneralCard.args={title:"Promotion Title here",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae. Cras at turpis sapien. Nunc pharetra felis vitae luctus mattis. Aenean eu velit viverra, iaculis sapien non, imperdiet ipsum.",buttonText:"Link or Button text",hasIcon:!1,orientation:{sm:"vertical",md:"horizontal",lg:"horizontal"}},promotionsGeneralCard.parameters={docs:{source:{code:promotionsGeneralCardStandAloneTemplate}}};const promotionsGeneralTwoCard=(args=>({props:args,template:promotionsGeneralCardTwoCardsTemplate,title:"Patterns/Card/Examples"})).bind({title:"Patterns/Card/Examples"});promotionsGeneralTwoCard.storyName="Two cards",promotionsGeneralTwoCard.args={title:"Promotion Title here",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae. Cras at turpis sapien. Nunc pharetra felis vitae luctus mattis. Aenean eu velit viverra, iaculis sapien non, imperdiet ipsum.",buttonText:"Link or Button text",hasIcon:!1,orientation:{sm:"vertical",md:"horizontal",lg:"vertical"}},promotionsGeneralTwoCard.parameters={docs:{source:{code:promotionsGeneralCardTwoCardsTemplate}}};const promotionsGeneralThreeCard=(args=>({props:args,template:promotionsGeneralCardThreeCardsTemplate,title:"Patterns/Card/Examples"})).bind({title:"Patterns/Card/Examples"});promotionsGeneralThreeCard.storyName="Three cards",promotionsGeneralThreeCard.args={title:"Promotion Title here",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae. Cras at turpis sapien. Nunc pharetra felis vitae luctus mattis. Aenean eu velit viverra, iaculis sapien non, imperdiet ipsum.",buttonText:"Link or Button text",hasIcon:!1,orientation:{sm:"vertical",md:"horizontal",lg:"vertical"}},promotionsGeneralThreeCard.parameters={docs:{source:{code:promotionsGeneralCardThreeCardsTemplate}}};const promotionsGeneralMagazineLayout=(args=>({props:args,template:promotionsGeneralCardMagazineLayoutTemplate,title:"Patterns/Card/Examples"})).bind({title:"Patterns/Card/Examples"});promotionsGeneralMagazineLayout.storyName="Magazine Layout",promotionsGeneralMagazineLayout.args={title:"Promotion Title here",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae. Cras at turpis sapien. Nunc pharetra felis vitae luctus mattis. Aenean eu velit viverra, iaculis sapien non, imperdiet ipsum.",buttonText:"Link or Button text"},promotionsGeneralMagazineLayout.parameters={docs:{source:{code:promotionsGeneralCardMagazineLayoutTemplate}}}},"./projects/canopy/src/lib/brand-icon/brand-icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>LgBrandIconModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_brand_icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/brand-icon/brand-icon.component.ts");let LgBrandIconModule=class LgBrandIconModule{};LgBrandIconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_brand_icon_component__WEBPACK_IMPORTED_MODULE_3__.K],exports:[_brand_icon_component__WEBPACK_IMPORTED_MODULE_3__.K]})],LgBrandIconModule)},"./projects/canopy/src/lib/grid/grid.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>LgGridModule});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgGridColDirective=((_class=class LgGridColDirective{set lgCol(columns){this.lgColClass=this.toggleColumnClass(`lg-col-xs-${columns}`,this.lgColClass)}set lgColSm(columns){this.lgColSmClass=this.toggleColumnClass(`lg-col-sm-${columns}`,this.lgColSmClass)}set lgColMd(columns){this.lgColMdClass=this.toggleColumnClass(`lg-col-md-${columns}`,this.lgColMdClass)}set lgColLg(columns){this.lgColLgClass=this.toggleColumnClass(`lg-col-lg-${columns}`,this.lgColLgClass)}set lgColOffset(columns){this.lgColOffsetClass=this.toggleColumnClass(`lg-col-xs-offset-${columns}`,this.lgColOffsetClass)}set lgColSmOffset(columns){this.lgColSmOffsetClass=this.toggleColumnClass(`lg-col-sm-offset-${columns}`,this.lgColSmOffsetClass)}set lgColMdOffset(columns){this.lgColMdOffsetClass=this.toggleColumnClass(`lg-col-md-offset-${columns}`,this.lgColMdOffsetClass)}set lgColLgOffset(columns){this.lgColLgOffsetClass=this.toggleColumnClass(`lg-col-lg-offset-${columns}`,this.lgColLgOffsetClass)}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}toggleColumnClass(newClass,oldClass){return oldClass&&this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}}).ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],_class.propDecorators={lgCol:[{type:core.Input}],lgColSm:[{type:core.Input}],lgColMd:[{type:core.Input}],lgColLg:[{type:core.Input}],lgColOffset:[{type:core.Input}],lgColSmOffset:[{type:core.Input}],lgColMdOffset:[{type:core.Input}],lgColLgOffset:[{type:core.Input}]},_class);var grid_container_directive_class;LgGridColDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgCol],[lgColSm],[lgColMd],[lgColLg]"})],LgGridColDirective);let LgGridContainerDirective=((grid_container_directive_class=class LgGridContainerDirective{constructor(){this.class=!0}}).propDecorators={class:[{type:core.HostBinding,args:["class.lg-container"]}]},grid_container_directive_class);var grid_row_directive_class;LgGridContainerDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgContainer]"})],LgGridContainerDirective);let LgGridRowDirective=((grid_row_directive_class=class LgGridRowDirective{constructor(){this.class=!0}}).propDecorators={class:[{type:core.HostBinding,args:["class.lg-row"]}]},grid_row_directive_class);LgGridRowDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgRow]"})],LgGridRowDirective);let LgGridModule=class LgGridModule{};LgGridModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgGridContainerDirective,LgGridColDirective,LgGridRowDirective],exports:[LgGridContainerDirective,LgGridColDirective,LgGridRowDirective]})],LgGridModule)},"./projects/canopy/src/lib/orientation/orientation.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>LgOrientationModule});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgOrientationDirective=((_class=class LgOrientationDirective{set lgOrientation(orientation){orientation&&(this.orientationClasses=this.toggleClasses(this.createNewOrientationClasses(orientation),this.orientationClasses))}get orientationClass(){return this.orientationClasses.length}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.orientationClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}createNewOrientationClasses(rules){const newClasses=[];return Object.keys(rules).forEach((key=>{newClasses.push(`lg-orientation--${key}--${rules[key]}`)})),newClasses}}).ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],_class.propDecorators={lgOrientation:[{type:core.Input}],orientationClass:[{type:core.HostBinding,args:["class.lg-orientation"]}]},_class);LgOrientationDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgOrientation]"})],LgOrientationDirective);let LgOrientationModule=class LgOrientationModule{};LgOrientationModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgOrientationDirective],exports:[LgOrientationDirective]})],LgOrientationModule)},"./projects/canopy/src/lib/separator/separator.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>LgSeparatorComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_separator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/separator/separator.component.scss?ngResource"),_separator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_separator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgSeparatorComponent=((_class=class LgSeparatorComponent{set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-separator--${this.variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-separator--${variant}`),this._variant=variant}get variant(){return this._variant}get roleAttr(){return this.hasRole?"separator":null}get ariaHidden(){return!this.hasRole||null}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.class=!0,this.variant="solid"}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class.propDecorators={hasRole:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-separator"]}],roleAttr:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.role"]}],ariaHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.aria-hidden"]}]},_class);LgSeparatorComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"lg-separator",template:"",encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,styles:[_separator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default()]})],LgSeparatorComponent)},"./projects/canopy/src/lib/separator/separator.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>LgSeparatorModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_separator_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/separator/separator.component.ts");let LgSeparatorModule=class LgSeparatorModule{};LgSeparatorModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_separator_component__WEBPACK_IMPORTED_MODULE_3__.r],exports:[_separator_component__WEBPACK_IMPORTED_MODULE_3__.r]})],LgSeparatorModule)},"./projects/canopy/src/lib/shadow/shadow.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LgShadowDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgShadowDirective=((_class=class LgShadowDirective{constructor(){this.class=!0}}).propDecorators={class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-shadow"]}]},_class);LgShadowDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgShadow]"})],LgShadowDirective)},"./projects/canopy/src/lib/shadow/shadow.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>LgShadowModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_shadow_directive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/shadow/shadow.directive.ts");let LgShadowModule=class LgShadowModule{};LgShadowModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({declarations:[_shadow_directive__WEBPACK_IMPORTED_MODULE_2__.Z],exports:[_shadow_directive__WEBPACK_IMPORTED_MODULE_2__.Z]})],LgShadowModule)},"./projects/canopy/src/lib/spacing/padding/padding.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LgPaddingModule});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),spacing_service=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgPaddingDirective=((_class=class LgPaddingDirective{set lgPaddingTop(padding){this.paddingTopClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-top"),this.paddingTopClasses)}set lgPaddingRight(padding){this.paddingRightClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-right"),this.paddingRightClasses)}set lgPaddingBottom(padding){this.paddingBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-bottom"),this.paddingBottomClasses)}set lgPaddingLeft(padding){this.paddingLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-left"),this.paddingLeftClasses)}set lgPaddingHorizontal(padding){this.lgPaddingLeft=padding,this.lgPaddingRight=padding}set lgPaddingVertical(padding){this.lgPaddingTop=padding,this.lgPaddingBottom=padding}set lgPadding(padding){this.paddingClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding"),this.paddingClasses)}constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.paddingTopClasses=[],this.paddingRightClasses=[],this.paddingBottomClasses=[],this.paddingLeftClasses=[],this.paddingClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}}).ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef},{type:spacing_service.i}],_class.propDecorators={lgPaddingTop:[{type:core.Input}],lgPaddingRight:[{type:core.Input}],lgPaddingBottom:[{type:core.Input}],lgPaddingLeft:[{type:core.Input}],lgPaddingHorizontal:[{type:core.Input}],lgPaddingVertical:[{type:core.Input}],lgPadding:[{type:core.Input}]},_class);LgPaddingDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"\n    [lgPadding],\n    [lgPaddingVertical],\n    [lgPaddingHorizontal],\n    [lgPaddingTop],\n    [lgPaddingRight],\n    [lgPaddingBottom],\n    [lgPaddingLeft]\n  "})],LgPaddingDirective);let LgPaddingModule=class LgPaddingModule{};LgPaddingModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgPaddingDirective],exports:[LgPaddingDirective]})],LgPaddingModule)},"./node_modules/rxjs/dist/esm5/internal/observable/interval.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>interval});var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_timer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function interval(period,scheduler){return void 0===period&&(period=0),void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.z),period<0&&(period=0),(0,_timer__WEBPACK_IMPORTED_MODULE_1__.H)(period,period,scheduler)}},"./node_modules/rxjs/dist/esm5/internal/observable/timer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>timer});var Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),isScheduler=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js");function timer(dueTime,intervalOrScheduler,scheduler){void 0===dueTime&&(dueTime=0),void 0===scheduler&&(scheduler=scheduler_async.P);var intervalDuration=-1;return null!=intervalOrScheduler&&((0,isScheduler.K)(intervalOrScheduler)?scheduler=intervalOrScheduler:intervalDuration=intervalOrScheduler),new Observable.y((function(subscriber){var due=function isValidDate(value){return value instanceof Date&&!isNaN(value)}(dueTime)?+dueTime-scheduler.now():dueTime;due<0&&(due=0);var n=0;return scheduler.schedule((function(){subscriber.closed||(subscriber.next(n++),0<=intervalDuration?this.schedule(void 0,intervalDuration):subscriber.complete())}),due)}))}},"./node_modules/rxjs/dist/esm5/internal/scheduler/async.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>async_async,z:()=>asyncScheduler});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),Action=function(_super){function Action(scheduler,work){return _super.call(this)||this}return(0,tslib_es6.ZT)(Action,_super),Action.prototype.schedule=function(state,delay){return void 0===delay&&(delay=0),this},Action}(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js").w0),intervalProvider={setInterval:function(handler,timeout){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];var delegate=intervalProvider.delegate;return(null==delegate?void 0:delegate.setInterval)?delegate.setInterval.apply(delegate,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args))):setInterval.apply(void 0,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args)))},clearInterval:function(handle){var delegate=intervalProvider.delegate;return((null==delegate?void 0:delegate.clearInterval)||clearInterval)(handle)},delegate:void 0},arrRemove=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"),AsyncAction=function(_super){function AsyncAction(scheduler,work){var _this=_super.call(this,scheduler,work)||this;return _this.scheduler=scheduler,_this.work=work,_this.pending=!1,_this}return(0,tslib_es6.ZT)(AsyncAction,_super),AsyncAction.prototype.schedule=function(state,delay){var _a;if(void 0===delay&&(delay=0),this.closed)return this;this.state=state;var id=this.id,scheduler=this.scheduler;return null!=id&&(this.id=this.recycleAsyncId(scheduler,id,delay)),this.pending=!0,this.delay=delay,this.id=null!==(_a=this.id)&&void 0!==_a?_a:this.requestAsyncId(scheduler,this.id,delay),this},AsyncAction.prototype.requestAsyncId=function(scheduler,_id,delay){return void 0===delay&&(delay=0),intervalProvider.setInterval(scheduler.flush.bind(scheduler,this),delay)},AsyncAction.prototype.recycleAsyncId=function(_scheduler,id,delay){if(void 0===delay&&(delay=0),null!=delay&&this.delay===delay&&!1===this.pending)return id;null!=id&&intervalProvider.clearInterval(id)},AsyncAction.prototype.execute=function(state,delay){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var error=this._execute(state,delay);if(error)return error;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},AsyncAction.prototype._execute=function(state,_delay){var errorValue,errored=!1;try{this.work(state)}catch(e){errored=!0,errorValue=e||new Error("Scheduled action threw falsy error")}if(errored)return this.unsubscribe(),errorValue},AsyncAction.prototype.unsubscribe=function(){if(!this.closed){var id=this.id,scheduler=this.scheduler,actions=scheduler.actions;this.work=this.state=this.scheduler=null,this.pending=!1,(0,arrRemove.P)(actions,this),null!=id&&(this.id=this.recycleAsyncId(scheduler,id,null)),this.delay=null,_super.prototype.unsubscribe.call(this)}},AsyncAction}(Action),dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0},Scheduler=function(){function Scheduler(schedulerActionCtor,now){void 0===now&&(now=Scheduler.now),this.schedulerActionCtor=schedulerActionCtor,this.now=now}return Scheduler.prototype.schedule=function(work,delay,state){return void 0===delay&&(delay=0),new this.schedulerActionCtor(this,work).schedule(state,delay)},Scheduler.now=dateTimestampProvider.now,Scheduler}(),asyncScheduler=new(function(_super){function AsyncScheduler(SchedulerAction,now){void 0===now&&(now=Scheduler.now);var _this=_super.call(this,SchedulerAction,now)||this;return _this.actions=[],_this._active=!1,_this}return(0,tslib_es6.ZT)(AsyncScheduler,_super),AsyncScheduler.prototype.flush=function(action){var actions=this.actions;if(this._active)actions.push(action);else{var error;this._active=!0;do{if(error=action.execute(action.state,action.delay))break}while(action=actions.shift());if(this._active=!1,error){for(;action=actions.shift();)action.unsubscribe();throw error}}},AsyncScheduler}(Scheduler))(AsyncAction),async_async=asyncScheduler},"./projects/canopy/src/lib/separator/separator.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-separator {\n  display: block;\n  margin: var(--space-lg) 0;\n}\n\n.lg-separator--solid {\n  border-top: solid var(--border-width) var(--separator-color);\n}\n\n.lg-separator--dotted {\n  border-top: dotted var(--separator-dotted-border-width) var(--color-charcoal);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);