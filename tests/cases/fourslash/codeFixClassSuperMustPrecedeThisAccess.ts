/// <reference path='fourslash.ts' />

////class Base{
////}
////class C extends Base{
////    private a:number;
////    constructor() {[|
////        this.a = 12;
////        super();
////    |]}
////}
// TODO: GH#18445 id:602 gh:603
verify.rangeAfterCodeFix(`
        super();\r
        this.a = 12;
    `, /*includeWhiteSpace*/ true);
