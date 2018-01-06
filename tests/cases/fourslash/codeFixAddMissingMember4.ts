/// <reference path='fourslash.ts' />

// @checkJs: true
// @allowJs: true

// @Filename: a.js
////class C {
////    constructor() {
////    }
////    method() {
////        this.foo === 10;
////    }
////}

verify.codeFix({
    description: "Initialize property 'foo' in the constructor",
    index: 0,
    // TODO: GH#18445 id:510 gh:511
    newFileContent: `class C {
    constructor() {\r
        this.foo = undefined;\r
    }
    method() {
        this.foo === 10;
    }
}`
});
