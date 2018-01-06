/// <reference path="fourslash.ts" />

//// [|let t: XXX/*0*/.I;|]

// @Filename: ./module.ts
//// export module XXX { id:614 gh:615
////    export interface I {
////    }
//// }

verify.importFixAtPosition([
`import { XXX } from "./module";

let t: XXX.I;`
]);