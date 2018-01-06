/// <reference path='fourslash.ts' />

////interface I {
////    [x: number]: I;
////}
////class C implements I {}

verify.codeFix({
    description: "Implement interface 'I'",
    // TODO: GH#18445 id:788 gh:789
    newFileContent:
`interface I {
    [x: number]: I;
}
class C implements I {\r
    [x: number]: I;\r
}`,
});
