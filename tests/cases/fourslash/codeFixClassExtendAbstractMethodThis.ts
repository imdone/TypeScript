/// <reference path='fourslash.ts' />

////abstract class A {
////    abstract f(): this;
////}
////
////class C extends A {}

verify.codeFix({
    description: "Implement inherited abstract class",
    // TODO: GH#18795 id:624 gh:625
    newFileContent:
`abstract class A {
    abstract f(): this;
}

class C extends A {\r
    f(): this {\r
        throw new Error("Method not implemented.");\r
    }\r
}`
});
