/// <reference path='fourslash.ts' />

////abstract class A<T> {
////    abstract f(x: T): T;
////}
////
////class C extends A<number> {}

verify.codeFix({
    description: "Implement inherited abstract class",
    // TODO: GH#18795 id:582 gh:583
    newFileContent:
`abstract class A<T> {
    abstract f(x: T): T;
}

class C extends A<number> {\r
    f(x: number): number {\r
        throw new Error("Method not implemented.");\r
    }\r
}`
});
