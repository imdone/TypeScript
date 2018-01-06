/// <reference path='fourslash.ts' />

////class C {
////    method() {
////        this.foo = 10;
////    }
////}

verify.codeFix({
    description: "Add index signature for property 'foo'",
    index: 1,
    // TODO: GH#18445 id:513 gh:514
    newFileContent: `class C {
    [x: string]: number;\r
    method() {
        this.foo = 10;
    }
}`
});
