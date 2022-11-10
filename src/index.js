function out() {
    var element = document.getElementById("result")
    const t = document.getElementById('mathinput').value;
    // document.getElementById("result").innerText = m;
    
    element.innerText = "\\[" + t + "\\]";
    renderMathInElement(document.body);
}

function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }