///<reference path="fourslash.ts" />

// Error: Having more function parameters than entries in the dependency array

// @allowNonTsExtensions: true
// @Filename: Foo.js
//// define('mod1', ['a'], /**/function(a, b) {
//// 	
//// });

// TODO: what should happen? id:800 gh:801
goTo.marker();