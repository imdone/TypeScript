/// <reference path='fourslash.ts' />

//// interface I<T extends string> {
////    x: T;
//// }
////
//// class C implements I<number> { } 

verify.codeFixAvailable();

// TODO: (arozga) Don't know how to instantiate in codeFix id:530 gh:531
// if instantiation is invalid.
// verify.not.codeFixAvailable();