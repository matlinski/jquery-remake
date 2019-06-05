
function S(obj) { //$() en jQuery
    return document.querySelector(obj);
}
console.log(S(".test"))

function SS(nlist) { //$$() en jQuery
    return document.querySelectorAll(nlist);
}
console.log(SS(".test"))

function attr(obj, attr, val){ // $.attr en jQuery
    obj.setAttribute(attr, val)
}

attr(S(".test"), "style", "color: red");

function val(obj, val){ // $.val en jQuery
    if(val === null || val === undefined) return obj.value
    else obj.value = val
}

console.log(val(S("input")))
val(S("input"), "hahaha")

function text(obj){ // $.text en jQuery
    return obj.innerText
}

console.log(text(S(".test")))

function html(obj, val){ // $.html en jQuery
    if(val === null || val === undefined) return obj.innerHTML
    else obj.innerHTML = val;
}
html(S(".test"), "dadasd")
console.log(html(S(".test")))

function each(nlist, func){ //$$.each(func) en jQuery
    for(var i = 0; i < nlist.length; i++){
        func(i)
    }
}
each(SS("input"), function(i){
    SS("input")[i].value = "prueba";
})

function css(obj, css){ //$.css(attr, value) en jQuery
    obj.setAttribute("style", css)
}

css(S(".test"), "padding: 3rem; background-color: red; margin-top: 40px")

function on(obj, event, func){ //$.on(event, func) en jQuery
    obj.addEventListener(event, func)
}
var testingFunc = function(){
    alert(text(S(".test")))
}
on(S(".test"), "click", testingFunc)

function off(obj, event, func){ //$.off(event, func) en jQuery
    obj.removeEventListener(event, func)
}

off(S(".test"), "click", testingFunc)

function prepend(obj, tag, text){ //$.prepend(event, func) en jQuery
    var node = document.createElement(tag);
    var textnode = document.createTextNode(text);
    console.log(node, textnode)
    node.appendChild(textnode);
    obj.insertBefore(node, obj.firstChild)
}
prepend(S("ul"), "li", "1")

function append(obj, tag, text){ //$.append(event, func) en jQuery
    var node = document.createElement(tag);
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    obj.appendChild(node)
}
append(S("ul"), "li", "3")

function show(obj, ms){//$.show(ms) en jQuery NEEDS CORRECTION
    obj.setAttribute("style", "transform: scale(0);transition: transform "+ms+"ms ease-in-out;");
    obj.style.transform = "scale(1)";
}
on(S(".show"), "click", function(){each(SS("img"),function(i){show(SS("img")[i], 200, i)})})

function hide(obj, ms){//$.hide(ms) en jQuery NEEDS CORRECTION
    obj.setAttribute("style", "transform: scale(1); transition: transform "+ms+"ms ease-in-out;");
    obj.style.transform = "scale(0)";
}
on(S(".show"), "click", function(){each(SS("img"),function(i){show(SS("img")[i], 200)})})
on(S(".hide"), "click", function(){each(SS("img"),function(i){hide(SS("img")[i], 200)})})