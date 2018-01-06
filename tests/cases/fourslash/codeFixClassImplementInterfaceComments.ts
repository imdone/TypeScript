/// <reference path='fourslash.ts' />

// @lib: es2017

////namespace N {
////    /**enum prefix */
////    export enum /**enum identifier prefix */ E /**open-brace prefix*/ {
////    /* literal prefix */ a /** comma prefix */,
////    /* literal prefix */ b /** comma prefix */,
////    /* literal prefix */ c
////    /** close brace prefix */ }
////    /** interface prefix */
////    export interface /**interface name prefix */ I /**open-brace prefix*/ {
////    /** property prefix */ a /** colon prefix */: /** enum literal prefix 1*/ E /** dot prefix */. /** enum literal prefix 2*/a;
////    /** property prefix */ b /** colon prefix */: /** enum prefix */ E;
////    /**method signature prefix */foo /**open angle prefix */< /**type parameter name prefix */ X /** closing angle prefix */> /**open paren prefix */(/** parameter prefix */ a/** colon prefix */: /** parameter type prefix */ X /** close paren prefix */) /** colon prefix */: /** return type prefix */ string /** semicolon prefix */;
////        /**close-brace prefix*/ }
/////**close-brace prefix*/ }
////class C implements N.I {}

verify.codeFix({
    description: "Implement interface 'N.I'",
    // TODO: GH#18445 id:787 gh:788
    newFileContent:
`namespace N {
    /**enum prefix */
    export enum /**enum identifier prefix */ E /**open-brace prefix*/ {
    /* literal prefix */ a /** comma prefix */,
    /* literal prefix */ b /** comma prefix */,
    /* literal prefix */ c
    /** close brace prefix */ }
    /** interface prefix */
    export interface /**interface name prefix */ I /**open-brace prefix*/ {
    /** property prefix */ a /** colon prefix */: /** enum literal prefix 1*/ E /** dot prefix */. /** enum literal prefix 2*/a;
    /** property prefix */ b /** colon prefix */: /** enum prefix */ E;
    /**method signature prefix */foo /**open angle prefix */< /**type parameter name prefix */ X /** closing angle prefix */> /**open paren prefix */(/** parameter prefix */ a/** colon prefix */: /** parameter type prefix */ X /** close paren prefix */) /** colon prefix */: /** return type prefix */ string /** semicolon prefix */;
        /**close-brace prefix*/ }
/**close-brace prefix*/ }
class C implements N.I {\r
    /** property prefix */ a /** colon prefix */: N.E.a;\r
    /** property prefix */ b /** colon prefix */: N.E;\r
    /**method signature prefix */ foo /**open angle prefix */<X>(a: X): string {\r
        throw new Error("Method not implemented.");\r
    }\r
}`,
});
