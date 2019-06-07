
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
    return obj
}

attr(S(".test"), "style", "color: red");

function val(obj, val){ // $.val en jQuery
    if(val === null || val === undefined) return obj.value
    else obj.value = val
    return obj
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
    return obj;
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
    return obj.setAttribute("style", css)
}

css(S(".test"), "padding: 3rem; background-color: red; margin-top: 40px")

function on(obj, event, func){ //$.on(event, func) en jQuery
    return obj.addEventListener(event, func)
}
var testingFunc = function(){
    alert(text(S(".test")))
}
on(S(".test"), "click", testingFunc)

function off(obj, event, func){ //$.off(event, func) en jQuery
    return obj.removeEventListener(event, func)
}

off(S(".test"), "click", testingFunc)

function prepend(obj, tag, text){ //$.prepend(tag, text) en jQuery
    var node = document.createElement(tag);
    var textnode = document.createTextNode(text);
    console.log(node, textnode)
    node.appendChild(textnode);
    return obj.insertBefore(node, obj.firstChild)
}
prepend(S("ul"), "li", "1")

function append(obj, tag, text){ //$.append(tag, text) en jQuery
    var node = document.createElement(tag);
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    return obj.appendChild(node)
}
append(S("ul"), "li", "3")

function removeAttr(obj, attr){ //$.removeAttr(attr) en jQuery
    return obj.removeAttribute(attr)
}

removeAttr(S(".test"), "style");

function addClass(obj, className){ //$.addClass(className) en jQuery
    return obj.classList.add(className)
}

addClass(S(".test"), "blue");

function removeClass(obj, className){ //$.removeClass(className) en jQuery
    return obj.classList.remove(className)
 }

 removeClass(S(".test"), "blue");

 function toggleClass(obj, className){ //$.toggleClass(className) en jQuery
    return obj.classList.toggle(className)
 }

 on(S("#lol"), "click",function(){ toggleClass(S(".test"), "blue")})

 function hasClass(obj, className){ //$.hasClass(className) en jQuery
    return (obj.getAttribute("class").match(className)) ?true :false;
 }
 console.log(hasClass(S("div"), "test2"))

 function width(obj){ //$.width() en jQuery
    return  Number(window.getComputedStyle(obj, null).getPropertyValue("width").split("px").join(""));
 }
 console.log(width(S(".box")))

 function height(obj){ //$.height() en jQuery
   return  Number(window.getComputedStyle(obj, null).getPropertyValue("height").split("px").join(""));
}
console.log(height(S(".box")))

 function innerWidth(obj){ //$.innerWidth() en jQuery
    return  obj.offsetWidth;
 }
 console.log(innerWidth(S(".box")))

 function innerHeight(obj){ //$.innerHeight() en jQuery
   return  obj.offsetHeight;
}
console.log(innerHeight(S(".box")))

 function outerWidth(obj){ //$.outerWidth() en jQuery
     var margin = 0;
     margin += Number(window.getComputedStyle(obj).marginLeft.split("px").join(""))
     margin += Number(window.getComputedStyle(obj).marginRight.split("px").join(""))     
    return  obj.offsetWidth + margin;
 }
 console.log(outerWidth(S(".box")))

 function outerHeight(obj){ //$.outerHeight() en jQuery
    var margin = 0;
    margin += Number(window.getComputedStyle(obj).marginBottom.split("px").join(""))
    margin += Number(window.getComputedStyle(obj).marginTop.split("px").join(""))    
    return  obj.offsetHeight + margin;
}
console.log(outerHeight(S(".box")))

function offset(obj, top, left){ //$.offset(top, left) en jQuery
    return css(obj, "position: relative; top: "+top+"; left: "+left+";")
}
offset(S(".box"), "50px", "120px")

function offsetParent(obj, top, left){ //$.offsetParent(top, left) en jQuery
    return css(obj.parentNode, "position: relative; top: "+top+"; left: "+left+";")
}
offsetParent(S(".box"), "50px", "120px")

function position(obj){ //$.offsetParent(top, left) en jQuery
    var position = {}
    position.top = obj.getBoundingClientRect().top
    position.left = obj.getBoundingClientRect().left
    return position
}
console.log(position(S(".box")))

function clone(obj) {
    return Object.assign({}, obj);
  }
var test = {a: 234};
var test2 = clone(test);
console.log(test)
console.log(test2)

test.a = 432;
console.log(test)
console.log(test2)

function wrap(obj, html){
    html = html.split("><");
    var temp = html.pop();
    obj.outerHTML = html[0]+">"+obj.outerHTML+"<"+temp;
    return obj
}
wrap(S(".test"), '<div class="blue"></div>')

function appendTo(obj, parent){ 
    parent.appendChild(obj)
    return obj;
}
appendTo(S(".test"), S("ul"))

function prependTo(obj, parent){ 
    parent.insertBefore(obj, parent.firstChild)
}
prependTo(S(".test"), S("ul"))