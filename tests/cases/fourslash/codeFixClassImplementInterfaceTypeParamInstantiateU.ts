/// <reference path='fourslash.ts' />

////interface I<T> { x: T; }
////class C<U> implements I<U> {}

verify.codeFix({
    description: "Implement interface 'I<U>'",
    // TODO: GH#18445 id:557 gh:557
    newFileContent:
`interface I<T> { x: T; }
class C<U> implements I<U> {\r
    x: U;\r
}`
});
