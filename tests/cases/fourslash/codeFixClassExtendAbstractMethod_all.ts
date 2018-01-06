/// <reference path='fourslash.ts' />

////abstract class A {
////    abstract m(): void;
////}
////class B extends A {}
////class C extends A {}

verify.codeFixAll({
    fixId: "fixClassDoesntImplementInheritedAbstractMember",
    // TODO: GH#18445 id:784 gh:785
    newFileContent:
`abstract class A {
    abstract m(): void;
}
class B extends A {\r
    m(): void {\r
        throw new Error("Method not implemented.");\r
    }\r
}
class C extends A {\r
    m(): void {\r
        throw new Error("Method not implemented.");\r
    }\r
}`,
});
