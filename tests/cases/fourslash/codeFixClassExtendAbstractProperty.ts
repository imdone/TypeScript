/// <reference path='fourslash.ts' />

////abstract class A {
////    abstract x: number;
////    abstract y: this;
////    abstract z: A;
////}
////
////class C extends A {}

verify.codeFix({
    description: "Implement inherited abstract class",
    // TODO: GH#18795 id:521 gh:522
    newFileContent:
`abstract class A {
    abstract x: number;
    abstract y: this;
    abstract z: A;
}

class C extends A {\r
    x: number;\r
    y: this;\r
    z: A;\r
}`
});
