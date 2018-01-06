/// <reference path='fourslash.ts' />

////interface I<X> {
////    x: { readonly [K in keyof X]: X[K] };
////}
////class C<Y> implements I<Y> {}

verify.codeFix({
    description: "Implement interface 'I<Y>'",
    // TODO: GH#18445 id:553 gh:554
    newFileContent:
`interface I<X> {
    x: { readonly [K in keyof X]: X[K] };
}
class C<Y> implements I<Y> {\r
    x: { readonly [K in keyof X]: Y[K]; };\r
}`,
});
