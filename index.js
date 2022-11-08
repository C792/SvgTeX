function out() {
    var element = document.getElementById("result")
    const t = document.getElementById('mathinput').value;
    // document.getElementById("result").innerText = m;
    
    element.innerText = "\\[" + t + "\\]";
    renderMathInElement(document.body);
}