/// <reference path='fourslash.ts' />

////interface I {
////    method(a: number, b: string): boolean;
////    method(a: string, b: number): Function;
////    method(a: string): Function;
////}
////
////class C implements I {}

verify.codeFix({
    description: "Implement interface 'I'",
    // TODO: GH#18445 id:528 gh:529
    newFileContent:
`interface I {
    method(a: number, b: string): boolean;
    method(a: string, b: number): Function;
    method(a: string): Function;
}

class C implements I {\r
    method(a: number, b: string): boolean;\r
    method(a: string, b: number): Function;\r
    method(a: string): Function;\r
    method(a: any, b?: any) {\r
        throw new Error("Method not implemented.");\r
    }\r
}`,
});
