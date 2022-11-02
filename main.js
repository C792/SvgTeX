const katex = require('katex');
var t = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
    throwOnError: false
});

console.log(t)