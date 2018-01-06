//// [commentInNamespaceDeclarationWithIdentifierPathName.ts]
namespace hello.hi.world
{
    function foo() {}

    // TODO , blah id:395 gh:396
}

//// [commentInNamespaceDeclarationWithIdentifierPathName.js]
var hello;
(function (hello) {
    var hi;
    (function (hi) {
        var world;
        (function (world) {
            function foo() { }
            // TODO , blah id:394 gh:395
        })(world = hi.world || (hi.world = {}));
    })(hi = hello.hi || (hello.hi = {}));
})(hello || (hello = {}));
