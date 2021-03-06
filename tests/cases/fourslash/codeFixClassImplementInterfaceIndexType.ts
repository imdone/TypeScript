/// <reference path='fourslash.ts' />

////interface I<X> {
////    x: keyof X;
////}
////class C<Y> implements I<Y> {[| |]}

verify.codeFix({
    description: "Implement interface 'I<Y>'",
    // TODO: GH#18445 id:629 gh:630
    newFileContent:
`interface I<X> {
    x: keyof X;
}
class C<Y> implements I<Y> {\r
    x: keyof Y;\r
}`,
});
