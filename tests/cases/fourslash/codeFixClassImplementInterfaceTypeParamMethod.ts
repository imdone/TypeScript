/// <reference path='fourslash.ts' />

////interface I {
////    f<T extends number>(x: T);
////}
////class C implements I {}

verify.codeFix({
    description: "Implement interface 'I'",
    newFileContent:
    // TODO: GH#18445 id:793 gh:794
`interface I {
    f<T extends number>(x: T);
}
class C implements I {\r
    f<T extends number>(x: T) {\r
        throw new Error("Method not implemented.");\r
    }\r
}`,
});
