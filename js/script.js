//default variable values
let search_engine = "Google";
let name1 = "";
let name2 = "";
let name3 = "";
let name4 = "";
let name5 = "";
let name6 = "";
let ls1 = "";
let ls2 = "";
let ls3 = "";
let ls4 = "";
let ls5 = "";
let ls6 = "";
let type1 = "link";
let type2 = "link";
let type3 = "link";
let type4 = "link";
let type5 = "link";
let type6 = "link";
let history1 = "";
let history2 = "";
let history3 = "";
let history4 = "";
let history5 = "";
let history6 = "";
let history7 = "";
let history8 = "";
let popup1 = false;
let popup2 = false;
let popup3 = false;
let popup4 = false;
let popup5 = false;
let popup6 = false;

//COOKIE STUFF HERE

//set webpage with appropriate variables
window.addEventListener("load", set());

function set() {
    if (search_engine == "Google") {
        document.querySelector("#google").checked = true;
    } else if (search_engine == "Bing") {
        document.querySelector("#bing").checked = true;
    } else if (search_engine == "Youtube") {
        document.querySelector("#youtube").checked = true;
    } else if (search_engine == "Yahoo") {
        document.querySelector("#yahoo").checked = true;
    } else if (search_engine == "Yandex") {
        document.querySelector("#yandex").checked = true;
    } else if (search_engine == "DuckDuckGo") {
        document.querySelector("#duckduckgo").checked = true;
    } else if (search_engine == "Baidu") {
        document.querySelector("#baidu").checked = true;
    } else if (search_engine == "Ecosia") {
        document.querySelector("#ecosia").checked = true;
    }
    document.querySelector("#lb1").innerHTML = name1;
    document.querySelector("#lb2").innerHTML = name2;
    document.querySelector("#lb3").innerHTML = name3;
    document.querySelector("#lb4").innerHTML = name4;
    document.querySelector("#lb5").innerHTML = name5;
    document.querySelector("#lb6").innerHTML = name6;
    emptycheck();
    document.querySelector("#name1").value = name1;
    document.querySelector("#name2").value = name2;
    document.querySelector("#name3").value = name3;
    document.querySelector("#name4").value = name4;
    document.querySelector("#name5").value = name5;
    document.querySelector("#name6").value = name6;
    document.querySelector("#ls1").value = ls1;
    document.querySelector("#ls2").value = ls2;
    document.querySelector("#ls3").value = ls3;
    document.querySelector("#ls4").value = ls4;
    document.querySelector("#ls5").value = ls5;
    document.querySelector("#ls6").value = ls6;
    if (type1 == "link") {
        document.querySelector("#link1").checked = true;
    } else if (type1 == "search") {
        document.querySelector("#search1").checked = true;
    }
    if (type2 == "link") {
        document.querySelector("#link2").checked = true;
    } else if (type2 == "search") {
        document.querySelector("#search2").checked = true;
    }
    if (type3 == "link") {
        document.querySelector("#link3").checked = true;
    } else if (type3 == "search") {
        document.querySelector("#search3").checked = true;
    }
    if (type4 == "link") {
        document.querySelector("#link4").checked = true;
    } else if (type4 == "search") {
        document.querySelector("#search4").checked = true;
    }
    if (type5 == "link") {
        document.querySelector("#link5").checked = true;
    } else if (type5 == "search") {
        document.querySelector("#search5").checked = true;
    }
    if (type6 == "link") {
        document.querySelector("#link6").checked = true;
    } else if (type6 == "search") {
        document.querySelector("#search6").checked = true;
    }
}

function emptycheck() {
    if (name1 == "") {
        document.querySelector("#lb1").innerHTML = "Empty";
        document.querySelector("#lb1").style.fontStyle = "italic";
    } else {
        document.querySelector("#lb1").style.fontStyle = "normal";
    }
    if (name2 == "") {
        document.querySelector("#lb2").innerHTML = "Empty";
        document.querySelector("#lb2").style.fontStyle = "italic";
    } else {
        document.querySelector("#lb2").style.fontStyle = "normal";
    }
    if (name3 == "") {
        document.querySelector("#lb3").innerHTML = "Empty";
        document.querySelector("#lb3").style.fontStyle = "italic";
    } else {
        document.querySelector("#lb3").style.fontStyle = "normal";
    }
    if (name4 == "") {
        document.querySelector("#lb4").innerHTML = "Empty";
        document.querySelector("#lb4").style.fontStyle = "italic";
    } else {
        document.querySelector("#lb4").style.fontStyle = "normal";
    }
    if (name5 == "") {
        document.querySelector("#lb5").innerHTML = "Empty";
        document.querySelector("#lb5").style.fontStyle = "italic";
    } else {
        document.querySelector("#lb5").style.fontStyle = "normal";
    }
    if (name6 == "") {
        document.querySelector("#lb6").innerHTML = "Empty";
        document.querySelector("#lb6").style.fontStyle = "italic";
    } else {
        document.querySelector("#lb6").style.fontStyle = "normal";
    }
}

//Search Stuff
document.addEventListener("submit", function(event) {
    event.preventDefault();
    if (document.querySelector("#search").value != "") {
        window.location.href = url(document.querySelector("#search").value);
    }
});

document.querySelector("#search").addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (document.querySelector("#search").value != "") {
            window.location.href = url(document.querySelector("#search").value);
        }
    }
});

function url(search) {
    if (document.querySelector("#google").checked) {
        return ('https://www.google.com/search?q=' + search);
    } else if (document.querySelector("#bing").checked) {
        return ('https://www.bing.com/search?q=' + search);
    } else if (document.querySelector("#youtube").checked) {
        return ('https://www.youtube.com/results?search_query=' + search);
    } else if (document.querySelector("#yahoo").checked) {
        return ('https://search.yahoo.com/search?p=' + search);
    } else if (document.querySelector("#yandex").checked) {
        return ('https://yandex.com/search/?text=' + search);
    } else if (document.querySelector("#duckduckgo").checked) {
        return ('https://duckduckgo.com/?q=' + search);
    } else if (document.querySelector("#baidu").checked) {
        return ('https://www.baidu.com/s?wd=' + search);
    } else if (document.querySelector("#ecosia").checked) {
        return ('https://www.ecosia.org/search?q=' + search);
    }
}

document.querySelector("#search-form").addEventListener('change', function() {
    if (document.querySelector("#google").checked) {
        search_engine = "Google";
    } else if (document.querySelector("#bing").checked) {
        search_engine = "Bing";
    } else if (document.querySelector("#youtube").checked) {
        search_engine = "Youtube";
    } else if (document.querySelector("#yahoo").checked) {
        search_engine = "Yahoo";
    } else if (document.querySelector("#yandex").checked) {
        search_engine = "Yandex";
    } else if (document.querySelector("#duckduckgo").checked) {
        search_engine = "DuckDuckGo";
    } else if (document.querySelector("#baidu").checked) {
        search_engine = "Baidu";
    } else if (document.querySelector("#ecosia").checked) {
        search_engine = "Ecosia";
    }
});


//Shortcut Stuff
window.addEventListener('click', function(event) {
    if (!document.querySelector("#popup1").contains(event.target) && popup1) {
        event.preventDefault();
        document.querySelector("#popup1").classList.remove("popup-clicked");
        popup1 = false;
        set();
    } else if (!document.querySelector("#popup2").contains(event.target) && popup2) {
        event.preventDefault();
        document.querySelector("#popup2").classList.remove("popup-clicked");
        popup2 = false;
        set();
    } else if (!document.querySelector("#popup3").contains(event.target) && popup3) {
        event.preventDefault();
        document.querySelector("#popup3").classList.remove("popup-clicked");
        popup3 = false;
        set();
    } else if (!document.querySelector("#popup4").contains(event.target) && popup4) {
        event.preventDefault();
        document.querySelector("#popup4").classList.remove("popup-clicked");
        popup4 = false;
        set();
    } else if (!document.querySelector("#popup5").contains(event.target) && popup5) {
        event.preventDefault();
        document.querySelector("#popup5").classList.remove("popup-clicked");
        popup5 = false;
        set();
    } else if (!document.querySelector("#popup6").contains(event.target) && popup6) {
        event.preventDefault();
        document.querySelector("#popup6").classList.remove("popup-clicked");
        popup6 = false;
        set();
    }
});

document.querySelector("#eb1").addEventListener('click', function(event) {
    document.querySelector("#popup1").classList.add("popup-clicked");
    popup1 = true;
    event.stopPropagation();
});

document.querySelector("#x1").addEventListener('click', function(event) {
    document.querySelector("#popup1").classList.remove("popup-clicked");
    popup1 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#eb2").addEventListener('click', function(event) {
    document.querySelector("#popup2").classList.add("popup-clicked");
    popup2 = true;
    event.stopPropagation();
});

document.querySelector("#x2").addEventListener('click', function(event) {
    document.querySelector("#popup2").classList.remove("popup-clicked");
    popup2 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#eb3").addEventListener('click', function(event) {
    document.querySelector("#popup3").classList.add("popup-clicked");
    popup3 = true;
    event.stopPropagation();
});

document.querySelector("#x3").addEventListener('click', function(event) {
    document.querySelector("#popup3").classList.remove("popup-clicked");
    popup3 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#eb4").addEventListener('click', function(event) {
    document.querySelector("#popup4").classList.add("popup-clicked");
    popup4 = true;
    event.stopPropagation();
});

document.querySelector("#x4").addEventListener('click', function(event) {
    document.querySelector("#popup4").classList.remove("popup-clicked");
    popup4 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#eb5").addEventListener('click', function(event) {
    document.querySelector("#popup5").classList.add("popup-clicked");
    popup5 = true;
    event.stopPropagation();
});

document.querySelector("#x5").addEventListener('click', function(event) {
    document.querySelector("#popup5").classList.remove("popup-clicked");
    popup5 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#eb6").addEventListener('click', function(event) {
    document.querySelector("#popup6").classList.add("popup-clicked");
    popup6 = true;
    event.stopPropagation();
});

document.querySelector("#x6").addEventListener('click', function(event) {
    document.querySelector("#popup6").classList.remove("popup-clicked");
    popup6 = false;
    set();
    event.stopPropagation();
});


document.querySelector("#lb1").addEventListener('click', function(event) {
    if (ls1 == "") {
        event.preventDefault();
    } else {
        if (type1 == "link") {
            window.location.href = ls1;
        } else if (type1 == "search") {
            window.location.href = url(ls1);
        }
    }
});

document.querySelector("#lb2").addEventListener('click', function(event) {
    if (ls2 == "") {
        event.preventDefault();
    } else {
        if (type2 == "link") {
            window.location.href = ls2;
        } else if (type2 == "search") {
            window.location.href = url(ls2);
        }
    }
});

document.querySelector("#lb3").addEventListener('click', function(event) {
    if (ls3 == "") {
        event.preventDefault();
    } else {
        if (type3 == "link") {
            window.location.href = ls3;
        } else if (type3 == "search") {
            window.location.href = url(ls3);
        }
    }
});

document.querySelector("#lb4").addEventListener('click', function(event) {
    if (ls4 == "") {
        event.preventDefault();
    } else {
        if (type4 == "link") {
            window.location.href = ls4;
        } else if (type4 == "search") {
            window.location.href = url(ls4);
        }
    }
});

document.querySelector("#lb5").addEventListener('click', function(event) {
    if (ls5 == "") {
        event.preventDefault();
    } else {
        if (type5 == "link") {
            window.location.href = ls5;
        } else if (type5 == "search") {
            window.location.href = url(ls5);
        }
    }
});

document.querySelector("#lb6").addEventListener('click', function(event) {
    if (ls6 == "") {
        event.preventDefault();
    } else {
        if (type6 == "link") {
            window.location.href = ls6;
        } else if (type6 == "search") {
            window.location.href = url(ls6);
        }
    }
});

document.querySelector("#save1").addEventListener('click', function(event) {
    if (document.querySelector("#name1").value == "" || document.querySelector("#ls1").value == "") {
        alert("Please fill Shortcut Name and URL/Search before saving.");
    } else {
        name1 = document.querySelector("#name1").value;
        ls1 = document.querySelector("#ls1").value;
        if (document.querySelector("#link1").checked) {
            type1 = "link";
        } else if (document.querySelector("#search1").checked) {
            type1 = "search";
        }
        document.querySelector("#popup1").classList.remove("popup-clicked");
        popup1 = false;
        set();
        event.stopPropagation();
    }
});

document.querySelector("#save2").addEventListener('click', function(event) {
    if (document.querySelector("#name2").value == "" || document.querySelector("#ls2").value == "") {
        alert("Please fill Shortcut Name and URL/Search before saving.");
    } else {
        name2 = document.querySelector("#name2").value;
        ls2 = document.querySelector("#ls2").value;
        if (document.querySelector("#link2").checked) {
            type2 = "link";
        } else if (document.querySelector("#search2").checked) {
            type2 = "search";
        }
        document.querySelector("#popup2").classList.remove("popup-clicked");
        popup2 = false;
        set();
        event.stopPropagation();
    }
});

document.querySelector("#save3").addEventListener('click', function(event) {
    if (document.querySelector("#name3").value == "" || document.querySelector("#ls3").value == "") {
        alert("Please fill Shortcut Name and URL/Search before saving.");
    } else {
        name3 = document.querySelector("#name3").value;
        ls3 = document.querySelector("#ls3").value;
        if (document.querySelector("#link3").checked) {
            type3 = "link";
        } else if (document.querySelector("#search3").checked) {
            type3 = "search";
        }
        document.querySelector("#popup3").classList.remove("popup-clicked");
        popup3 = false;
        set();
        event.stopPropagation();
    }
});

document.querySelector("#save4").addEventListener('click', function(event) {
    if (document.querySelector("#name4").value == "" || document.querySelector("#ls4").value == "") {
        alert("Please fill Shortcut Name and URL/Search before saving.");
    } else {
        name4 = document.querySelector("#name4").value;
        ls4 = document.querySelector("#ls4").value;
        if (document.querySelector("#link4").checked) {
            type4 = "link";
        } else if (document.querySelector("#search4").checked) {
            type4 = "search";
        }
        document.querySelector("#popup4").classList.remove("popup-clicked");
        popup4 = false;
        set();
        event.stopPropagation();
    }
});

document.querySelector("#save5").addEventListener('click', function(event) {
    if (document.querySelector("#name5").value == "" || document.querySelector("#ls5").value == "") {
        alert("Please fill Shortcut Name and URL/Search before saving.");
    } else {
        name5 = document.querySelector("#name5").value;
        ls5 = document.querySelector("#ls5").value;
        if (document.querySelector("#link5").checked) {
            type5 = "link";
        } else if (document.querySelector("#search5").checked) {
            type5 = "search";
        }
        document.querySelector("#popup5").classList.remove("popup-clicked");
        popup5 = false;
        set();
        event.stopPropagation();
    }
});

document.querySelector("#save6").addEventListener('click', function(event) {
    if (document.querySelector("#name6").value == "" || document.querySelector("#ls6").value == "") {
        alert("Please fill Shortcut Name and URL/Search before saving.");
    } else {
        name6 = document.querySelector("#name6").value;
        ls6 = document.querySelector("#ls6").value;
        if (document.querySelector("#link6").checked) {
            type6 = "link";
        } else if (document.querySelector("#search6").checked) {
            type6 = "search";
        }
        document.querySelector("#popup6").classList.remove("popup-clicked");
        popup6 = false;
        set();
        event.stopPropagation();
    }
});

document.querySelector("#delete1").addEventListener('click', function(event) {
    name1 = "";
    ls1 = "";
    type1 = "link";
    document.querySelector("#popup1").classList.remove("popup-clicked");
    popup1 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#delete2").addEventListener('click', function(event) {
    name2 = "";
    ls2 = "";
    type2 = "link";
    document.querySelector("#popup2").classList.remove("popup-clicked");
    popup2 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#delete3").addEventListener('click', function(event) {
    name3 = "";
    ls3 = "";
    type3 = "link";
    document.querySelector("#popup3").classList.remove("popup-clicked");
    popup3 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#delete4").addEventListener('click', function(event) {
    name4 = "";
    ls4 = "";
    type4 = "link";
    document.querySelector("#popup4").classList.remove("popup-clicked");
    popup4 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#delete5").addEventListener('click', function(event) {
    name5 = "";
    ls5 = "";
    type5 = "link";
    document.querySelector("#popup5").classList.remove("popup-clicked");
    popup5 = false;
    set();
    event.stopPropagation();
});

document.querySelector("#delete6").addEventListener('click', function(event) {
    name6 = "";
    ls6 = "";
    type6 = "link";
    document.querySelector("#popup6").classList.remove("popup-clicked");
    popup6 = false;
    set();
    event.stopPropagation();
});