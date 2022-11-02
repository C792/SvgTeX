// import remderElem from "./Render"
const renderMath = function(elem, options) {
    if (!elem) {
        throw new Error("No element provided to render");
    }

    const optionsCopy = {};

    // Object.assign(optionsCopy, option)
    for (const option in options) {
        if (options.hasOwnProperty(option)) {
            optionsCopy[option] = options[option];
        }
    }

    // default options
    optionsCopy.delimiters = optionsCopy.delimiters || [
        {left: "$$", right: "$$", display: true},
        {left: "\\(", right: "\\)", display: false},
        // LaTeX uses $…$, but it ruins the display of normal `$` in text:
        // {left: "$", right: "$", display: false},
        // $ must come after $$

        // Render AMS environments even if outside $$…$$ delimiters.
        {left: "\\begin{equation}", right: "\\end{equation}", display: true},
        {left: "\\begin{align}", right: "\\end{align}", display: true},
        {left: "\\begin{alignat}", right: "\\end{alignat}", display: true},
        {left: "\\begin{gather}", right: "\\end{gather}", display: true},
        {left: "\\begin{CD}", right: "\\end{CD}", display: true},

        {left: "\\[", right: "\\]", display: true},
    ];
    optionsCopy.ignoredTags = optionsCopy.ignoredTags || [
        "script", "noscript", "style", "textarea", "pre", "code", "option",
    ];
    optionsCopy.ignoredClasses = optionsCopy.ignoredClasses || [];
    optionsCopy.errorCallback = optionsCopy.errorCallback || console.error;

    // Enable sharing of global macros defined via `\gdef` between different
    // math elements within a single call to `renderMathInElement`.
    optionsCopy.macros = optionsCopy.macros || {};

    renderElem(elem, optionsCopy);
};

function out() {
    // header라는 id를 가지고 있는 <h1> 태그를 찾아 변수에 저장합니다.
    var element = document.getElementById("result")
    const t = document.getElementById('mathinput').value;
    // document.getElementById("result").innerText = m;
    // 요소의 콘텐츠를 변경합니다.
    element.innerText = "\\[" + t + "\\]";
    renderMathInElement(document.body);
    // 요소의 콘텐츠를 출력합니다.
    // document.write(element.innerText);
}

function printName() {
    const name = document.getElementById('n').value;
    document.getElementById("r").innerText = "\\( " + name + " \\)";
    renderMathInElement(document.body);
}
// var t = "x^2 + y^2 = 1";