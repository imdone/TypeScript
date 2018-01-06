/// <reference path='fourslash.ts' />

////interface I { x: number; }
////export default class implements I {[| |]}

verify.codeFix({
    description: "Implement interface 'I'",
    // TODO: GH#18445 id:627 gh:628
    newFileContent:
`interface I { x: number; }
export default class implements I {\r
    x: number;\r
}`,
});
