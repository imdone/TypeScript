/// <reference path='fourslash.ts' />

////abstract class A {
////    public abstract x: number;
////}
////
////class C extends A {[| |]}

verify.codeFix({
    description: "Implement inherited abstract class",
    // TODO: GH#18445 id:549 gh:550
    newFileContent:
`abstract class A {
    public abstract x: number;
}

class C extends A {\r
    public x: number;\r
}`,
});
