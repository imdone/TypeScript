/// <reference path='fourslash.ts' />


////interface I { x: number; }
////new class implements I {};

verify.codeFix({
    description: "Implement interface 'I'",
    // TODO: GH#18445 id:551 gh:552
    newFileContent:
`interface I { x: number; }
new class implements I {\r
    x: number;\r
};`,
});
