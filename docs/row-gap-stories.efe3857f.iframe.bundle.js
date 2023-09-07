"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[9622,9736],{"./projects/canopy/src/lib/spacing/row-gap/docs/row-gap.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,rowGap:()=>rowGap});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_card__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/card/card.module.ts"),_spacing_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.module.ts"),_grid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/grid/grid.module.ts"),_row_gap_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/spacing/row-gap/row-gap.module.ts");const spaces=["undefined","none","xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl","xxxxl"];let LgRowGapStoryComponent=class LgRowGapStoryComponent{};LgRowGapStoryComponent.propDecorators={rowGap:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]},LgRowGapStoryComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"lg-row-gap-story",template:'\n    <div lgContainer>\n      <div lgRow [lgRowGap]="rowGap">\n        <div lgColLg="4" lgCol="12">\n          <lg-card lgMarginBottom="none">\n            <lg-card-content>\n              <p><strong>The row-gap directive</strong></p>\n              <p>Resize the viewport to see it in action</p>\n              <p>\n                <code>row-gap: {{ rowGap | json }}</code>\n              </p>\n            </lg-card-content>\n          </lg-card>\n        </div>\n        <div lgColLg="4" lgCol="12">\n          <lg-card lgMarginBottom="none">\n            <lg-card-content>\n              <p><strong>The row-gap directive</strong></p>\n              <p>Resize the viewport to see it in action</p>\n              <p>\n                <code>row-gap: {{ rowGap | json }}</code>\n              </p>\n            </lg-card-content>\n          </lg-card>\n        </div>\n        <div lgColLg="4" lgCol="12">\n          <lg-card lgMarginBottom="none">\n            <lg-card-content>\n              <p><strong>The row-gap directive</strong></p>\n              <p>Resize the viewport to see it in action</p>\n              <p>\n                <code>row-gap: {{ rowGap | json }}</code>\n              </p>\n            </lg-card-content>\n          </lg-card>\n        </div>\n      </div>\n    </div>\n  '})],LgRowGapStoryComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Helpers/Directives/Row gap/Examples",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[LgRowGapStoryComponent],imports:[_row_gap_module__WEBPACK_IMPORTED_MODULE_3__.x,_card__WEBPACK_IMPORTED_MODULE_4__.E,_spacing_module__WEBPACK_IMPORTED_MODULE_5__.B,_grid__WEBPACK_IMPORTED_MODULE_6__.i]})],parameters:{a11y:{disable:!0},backgrounds:{default:"Super Blue"}},argTypes:{rowGap:{control:{type:"select"},description:"The row-gap to apply to the element.",options:spaces,table:{type:{summary:spaces}}}}},rowGap=(args=>({props:args,template:'\n<lg-row-gap-story [rowGap]="rowGap"></lg-row-gap-story>\n'})).bind({});rowGap.storyName="Row gap",rowGap.args={rowGap:"sm"},rowGap.parameters={docs:{source:{code:null}}}},"./projects/canopy/src/lib/grid/grid.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>LgGridModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgGridColDirective=class LgGridColDirective{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}set lgCol(columns){this.lgColClass=this.toggleColumnClass(`lg-col-xs-${columns}`,this.lgColClass)}set lgColSm(columns){this.lgColSmClass=this.toggleColumnClass(`lg-col-sm-${columns}`,this.lgColSmClass)}set lgColMd(columns){this.lgColMdClass=this.toggleColumnClass(`lg-col-md-${columns}`,this.lgColMdClass)}set lgColLg(columns){this.lgColLgClass=this.toggleColumnClass(`lg-col-lg-${columns}`,this.lgColLgClass)}set lgColOffset(columns){this.lgColOffsetClass=this.toggleColumnClass(`lg-col-xs-offset-${columns}`,this.lgColOffsetClass)}set lgColSmOffset(columns){this.lgColSmOffsetClass=this.toggleColumnClass(`lg-col-sm-offset-${columns}`,this.lgColSmOffsetClass)}set lgColMdOffset(columns){this.lgColMdOffsetClass=this.toggleColumnClass(`lg-col-md-offset-${columns}`,this.lgColMdOffsetClass)}set lgColLgOffset(columns){this.lgColLgOffsetClass=this.toggleColumnClass(`lg-col-lg-offset-${columns}`,this.lgColLgOffsetClass)}toggleColumnClass(newClass,oldClass){return oldClass&&this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}};LgGridColDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgGridColDirective.propDecorators={lgCol:[{type:core.Input}],lgColSm:[{type:core.Input}],lgColMd:[{type:core.Input}],lgColLg:[{type:core.Input}],lgColOffset:[{type:core.Input}],lgColSmOffset:[{type:core.Input}],lgColMdOffset:[{type:core.Input}],lgColLgOffset:[{type:core.Input}]},LgGridColDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgCol],[lgColSm],[lgColMd],[lgColLg]"})],LgGridColDirective);let LgGridContainerDirective=class LgGridContainerDirective{constructor(){this.class=!0}};LgGridContainerDirective.propDecorators={class:[{type:core.HostBinding,args:["class.lg-container"]}]},LgGridContainerDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgContainer]"})],LgGridContainerDirective);let LgGridRowDirective=class LgGridRowDirective{constructor(){this.class=!0}};LgGridRowDirective.propDecorators={class:[{type:core.HostBinding,args:["class.lg-row"]}]},LgGridRowDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgRow]"})],LgGridRowDirective);let LgGridModule=class LgGridModule{};LgGridModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgGridContainerDirective,LgGridColDirective,LgGridRowDirective],exports:[LgGridContainerDirective,LgGridColDirective,LgGridRowDirective]})],LgGridModule)},"./projects/canopy/src/lib/spacing/margin/margin.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>LgMarginModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),spacing_service=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgMarginDirective=class LgMarginDirective{constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.marginTopClasses=[],this.marginRightClasses=[],this.marginBottomClasses=[],this.marginLeftClasses=[],this.marginClasses=[]}set lgMarginTop(margin){this.marginTopClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-top"),this.marginTopClasses)}set lgMarginRight(margin){this.marginRightClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-right"),this.marginRightClasses)}set lgMarginBottom(margin){this.marginBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-bottom"),this.marginBottomClasses)}set lgMarginLeft(margin){this.marginLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-left"),this.marginLeftClasses)}set lgMarginHorizontal(margin){this.lgMarginLeft=margin,this.lgMarginRight=margin}set lgMarginVertical(margin){this.lgMarginTop=margin,this.lgMarginBottom=margin}set lgMargin(margin){this.marginClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin"),this.marginClasses)}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}};LgMarginDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef},{type:spacing_service.i}],LgMarginDirective.propDecorators={lgMarginTop:[{type:core.Input}],lgMarginRight:[{type:core.Input}],lgMarginBottom:[{type:core.Input}],lgMarginLeft:[{type:core.Input}],lgMarginHorizontal:[{type:core.Input}],lgMarginVertical:[{type:core.Input}],lgMargin:[{type:core.Input}]},LgMarginDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"\n    [lgMargin],\n    [lgMarginVertical],\n    [lgMarginHorizontal],\n    [lgMarginTop],\n    [lgMarginRight],\n    [lgMarginBottom],\n    [lgMarginLeft]\n  "})],LgMarginDirective);let LgMarginModule=class LgMarginModule{};LgMarginModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgMarginDirective],exports:[LgMarginDirective]})],LgMarginModule)},"./projects/canopy/src/lib/spacing/padding/padding.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>LgPaddingModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),spacing_service=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgPaddingDirective=class LgPaddingDirective{constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.paddingTopClasses=[],this.paddingRightClasses=[],this.paddingBottomClasses=[],this.paddingLeftClasses=[],this.paddingClasses=[]}set lgPaddingTop(padding){this.paddingTopClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-top"),this.paddingTopClasses)}set lgPaddingRight(padding){this.paddingRightClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-right"),this.paddingRightClasses)}set lgPaddingBottom(padding){this.paddingBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-bottom"),this.paddingBottomClasses)}set lgPaddingLeft(padding){this.paddingLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-left"),this.paddingLeftClasses)}set lgPaddingHorizontal(padding){this.lgPaddingLeft=padding,this.lgPaddingRight=padding}set lgPaddingVertical(padding){this.lgPaddingTop=padding,this.lgPaddingBottom=padding}set lgPadding(padding){this.paddingClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding"),this.paddingClasses)}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}};LgPaddingDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef},{type:spacing_service.i}],LgPaddingDirective.propDecorators={lgPaddingTop:[{type:core.Input}],lgPaddingRight:[{type:core.Input}],lgPaddingBottom:[{type:core.Input}],lgPaddingLeft:[{type:core.Input}],lgPaddingHorizontal:[{type:core.Input}],lgPaddingVertical:[{type:core.Input}],lgPadding:[{type:core.Input}]},LgPaddingDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"\n    [lgPadding],\n    [lgPaddingVertical],\n    [lgPaddingHorizontal],\n    [lgPaddingTop],\n    [lgPaddingRight],\n    [lgPaddingBottom],\n    [lgPaddingLeft]\n  "})],LgPaddingDirective);let LgPaddingModule=class LgPaddingModule{};LgPaddingModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgPaddingDirective],exports:[LgPaddingDirective]})],LgPaddingModule)},"./projects/canopy/src/lib/spacing/row-gap/row-gap.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>LgRowGapModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LgRowGapDirective=class LgRowGapDirective{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.classPrefix="lg-row-gap--",this.defaultGap="sm",this.lgRowGapClass=`${this.classPrefix}${this.defaultGap}`}set lgRowGap(gap){const newClass=`${this.classPrefix}${gap||this.defaultGap}`;this.lgRowGapClass=this.toggleClass(newClass,this.lgRowGapClass)}toggleClass(newClass,oldClass){return this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}};LgRowGapDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgRowGapDirective.propDecorators={lgRowGap:[{type:core.Input}]},LgRowGapDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgRowGap]"})],LgRowGapDirective);let LgRowGapModule=class LgRowGapModule{};LgRowGapModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[LgRowGapDirective],imports:[common.CommonModule],exports:[LgRowGapDirective]})],LgRowGapModule)},"./projects/canopy/src/lib/spacing/spacing.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>LgSpacingModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_margin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/spacing/margin/margin.module.ts"),_padding__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/spacing/padding/padding.module.ts"),_row_gap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/spacing/row-gap/row-gap.module.ts");let LgSpacingModule=class LgSpacingModule{};LgSpacingModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_margin__WEBPACK_IMPORTED_MODULE_3__.c,_padding__WEBPACK_IMPORTED_MODULE_4__.X,_row_gap__WEBPACK_IMPORTED_MODULE_5__.x],exports:[_margin__WEBPACK_IMPORTED_MODULE_3__.c,_padding__WEBPACK_IMPORTED_MODULE_4__.X,_row_gap__WEBPACK_IMPORTED_MODULE_5__.x]})],LgSpacingModule)},"./projects/canopy/src/lib/spacing/spacing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>SpacingService});var BreakpointValues,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");!function(BreakpointValues){BreakpointValues.xs="0",BreakpointValues.sm="20rem",BreakpointValues.md="48rem",BreakpointValues.lg="64rem",BreakpointValues.xl="80rem",BreakpointValues.xxl="90rem"}(BreakpointValues||(BreakpointValues={}));let DynamicStyleService=class DynamicStyleService{constructor(){this.styleTag=null,this.selectors=[],this.mediaQueries={},this.addStyleTag()}addRules(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.filter((r=>!this.selectors.includes(r.selector))).map((r=>{this.selectors.push(r.selector),styleTagCache+=`.${r.selector}{${r.declaration}}`})),this.styleTag.innerHTML=styleTagCache}addRulesToMediaQuery(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.map((r=>{if(this.mediaQueries[r.breakpoint]||(styleTagCache+=this.createMediaQuery(r.breakpoint)),this.mediaQueries[r.breakpoint].includes(r.selector))return;this.mediaQueries[r.breakpoint].push(r.selector);const rule=`.${r.selector}{${r.declaration}}`;styleTagCache=this.insertRuleInsideMediaQuery(styleTagCache,r.breakpoint,rule,r.addAtStart)})),this.styleTag.innerHTML=styleTagCache}insertRuleInsideMediaQuery(cssString,breakpoint,rule,atStart=!1){const search=`@media(min-width:${breakpoint}){`;let index=cssString.indexOf(search);if(-1===index)return console.warn("Media query not found in string, cannot add rule."),cssString;if(index+=search.length,atStart)return cssString.substring(0,index)+`${rule}`+cssString.substring(index);let balance=0,pos=null;for(let i=index;i<cssString.length;i++){const char=cssString[i];if("{"===char?balance++:"}"===char&&balance--,-1===balance){pos=i;break}}return null===pos?(console.warn("Cannot add rule to media query in CSS string, invalid CSS string"),cssString):cssString.substring(0,pos)+`${rule}`+cssString.substring(pos)}addStyleTag(){this.styleTag=document.createElement("style"),this.styleTag.type="text/css",document.getElementsByTagName("head")[0].appendChild(this.styleTag)}createMediaQuery(breakpoint){if(!this.mediaQueries[breakpoint])return this.mediaQueries[breakpoint]=[],`@media(min-width:${breakpoint}){}`}};var SpacingValues;DynamicStyleService.ctorParameters=()=>[],DynamicStyleService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],DynamicStyleService),function(SpacingValues){SpacingValues.none="0",SpacingValues.xxxs="0.25rem",SpacingValues.xxs="0.5rem",SpacingValues.xs="0.75rem",SpacingValues.sm="1rem",SpacingValues.md="1.5rem",SpacingValues.lg="2rem",SpacingValues.xl="2.5rem",SpacingValues.xxl="3rem",SpacingValues.xxxl="4.5rem",SpacingValues.xxxxl="9rem"}(SpacingValues||(SpacingValues={}));let SpacingService=class SpacingService{constructor(dynamicStyleService){this.dynamicStyleService=dynamicStyleService}createNewClasses(spacing,cssProperty){const newClasses=[],responsiveSpacingRules=[];if(!spacing)return[];if("object"==typeof spacing)Object.keys(spacing).forEach((key=>{const selector=`lg-${cssProperty.replace("-","__")}--${key}--${spacing[key]}`;responsiveSpacingRules.push({selector,declaration:`${cssProperty}:${SpacingValues[spacing[key]]}!important`,breakpoint:BreakpointValues[key]}),newClasses.push(selector)})),this.dynamicStyleService.addRulesToMediaQuery(responsiveSpacingRules);else{const selector=`lg-${cssProperty.replace("-","__")}--${spacing}`;this.dynamicStyleService.addRules([{selector,declaration:`${cssProperty}:${SpacingValues[spacing]}!important`}]),newClasses.push(selector)}return newClasses}};SpacingService.ctorParameters=()=>[{type:DynamicStyleService}],SpacingService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],SpacingService)}}]);