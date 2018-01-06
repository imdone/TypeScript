/// <reference path='fourslash.ts' />

////interface I {
////    x: number[];
////    y: Array<number>;
////    z: [number, string, I];
////}
////
////class C implements I {[| |]}

verify.codeFix({
    description: "Implement interface 'I'",
    // TODO: GH#18445 id:588 gh:589
    newFileContent:
`interface I {
    x: number[];
    y: Array<number>;
    z: [number, string, I];
}

class C implements I {\r
    x: number[];\r
    y: number[];\r
    z: [number, string, I];\r
}`,
});
