/// <reference path='fourslash.ts' />

////interface I<T> { x: T; }
////class C<T> implements I<T> {}

verify.codeFix({
    description: "Implement interface 'I<T>'",
    // TODO: GH#18445 id:600 gh:601
    newFileContent:
`interface I<T> { x: T; }
class C<T> implements I<T> {\r
    x: T;\r
}`
});
