/// <reference path='fourslash.ts' />


////interface I {
////    [x: number]: I;
////    [y: string]: I;
////}
////
////class C implements I {}

verify.codeFix({
    description: "Implement interface 'I'",
    // TODO: GH#18445 id:552 gh:553
    newFileContent:
`interface I {
    [x: number]: I;
    [y: string]: I;
}

class C implements I {\r
    [x: number]: I;\r
    [y: string]: I;\r
}`,
});
