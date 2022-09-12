var a = new Array("area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr");
function generateTree(elem) {
    var child = elem.firstElementChild;
    var ul = document.createElement('ul');
    while (child) {
        if (a.indexOf(child.tagName.toLowerCase()) !== -1) {
            console.log('Lonely tag', child.tagName);
            var flag = false;
        }
        else {
            console.log('Open', child.tagName);
            var flag = true;
        }
        var li = document.createElement('li');
        li.innerHTML = child.tagName;
        var list = generateTree(child);
        li.appendChild(list);
        ul.appendChild(li);
        if (flag) {
            console.log('Close', child.tagName);
        }
        child = child.nextElementSibling;
    }
    elem.appendChild(ul);
    document.getElementById('result').style.display = "none";
    return ul;
}