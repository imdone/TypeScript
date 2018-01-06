/// <reference path='fourslash.ts' />

////class C extends Object {
////    constructor() {}
////}
////class D extends Object {
////    constructor() {}
////}

verify.codeFixAll({
    fixId: "constructorForDerivedNeedSuperCall",
    // TODO: GH#18445 id:794 gh:795
    newFileContent: `class C extends Object {
    constructor() {\r
        super();\r
    }
}
class D extends Object {
    constructor() {\r
        super();\r
    }
}`,
});
