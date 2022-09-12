var checked = new Array();
function print() {
    var e = document.getElementById("first");
    var x = e.firstChild;
    var y = e.lastChild;
    var len = -1;
    var elements = new Array();
    move_around(e);
    function move_around(el) {
        if (len == e.childElementCount) {
            return 0;
        }
        elements.push(el);
        (el == "head" || el == "body") ? checked.push(el) : 0;
        if (check(el)) {
            move_around(el.firstChild);
        }
        else if (check(el)) {
            move_around(el.nextSibling);
        }
        else {
            move_around.apply(el.previosSibling);
        }
    }
}

function check(elem) {
    if ((elem.childElementCount > 0) && !(checked.includes(elem)) && (elem != '#text')) {
        return true;
    }
    else if ((elem.nextSibling) != null) {
        return true;
    }
    return false;
}