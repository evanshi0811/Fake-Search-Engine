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
let date1 = "";
let date2 = "";
let date3 = "";
let date4 = "";
let date5 = "";
let date6 = "";
let date7 = "";
let date8 = "";
let settings = false;
let popup1 = false;
let popup2 = false;
let popup3 = false;
let popup4 = false;
let popup5 = false;
let popup6 = false;

if (document.cookie != "") {
    search_engine = getCookie("search_engine");
    name1 = getCookie("name1");
    name2 = getCookie("name2");
    name3 = getCookie("name3");
    name4 = getCookie("name4");
    name5 = getCookie("name5");
    name6 = getCookie("name6");
    ls1 = getCookie("ls1");
    ls2 = getCookie("ls2");
    ls3 = getCookie("ls3");
    ls4 = getCookie("ls4");
    ls5 = getCookie("ls5");
    ls6 = getCookie("ls6");
    type1 = getCookie("type1");
    type2 = getCookie("type2");
    type3 = getCookie("type3");
    type4 = getCookie("type4");
    type5 = getCookie("type5");
    type6 = getCookie("type6");
    history1 = getCookie("history1");
    history2 = getCookie("history2");
    history3 = getCookie("history3");
    history4 = getCookie("history4");
    history5 = getCookie("history5");
    history6 = getCookie("history6");
    history7 = getCookie("history7");
    history8 = getCookie("history8");
    date1 = getCookie("date1");
    date2 = getCookie("date2");
    date3 = getCookie("date3");
    date4 = getCookie("date4");
    date5 = getCookie("date5");
    date6 = getCookie("date6");
    date7 = getCookie("date7");
    date8 = getCookie("date8");
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

// Set cookies for each variable
function setCookies() {
    setCookie("search_engine", search_engine, 30);
    setCookie("name1", name1, 30);
    setCookie("name2", name2, 30);
    setCookie("name3", name3, 30);
    setCookie("name4", name4, 30);
    setCookie("name5", name5, 30);
    setCookie("name6", name6, 30);
    setCookie("ls1", ls1, 30);
    setCookie("ls2", ls2, 30);
    setCookie("ls3", ls3, 30);
    setCookie("ls4", ls4, 30);
    setCookie("ls5", ls5, 30);
    setCookie("ls6", ls6, 30);
    setCookie("type1", type1, 30);
    setCookie("type2", type2, 30);
    setCookie("type3", type3, 30);
    setCookie("type4", type4, 30);
    setCookie("type5", type5, 30);
    setCookie("type6", type6, 30);
    setCookie("history1", history1, 30);
    setCookie("history2", history2, 30);
    setCookie("history3", history3, 30);
    setCookie("history4", history4, 30);
    setCookie("history5", history5, 30);
    setCookie("history6", history6, 30);
    setCookie("history7", history7, 30);
    setCookie("history8", history8, 30);
    setCookie("date1", date1, 30);
    setCookie("date2", date2, 30);
    setCookie("date3", date3, 30);
    setCookie("date4", date4, 30);
    setCookie("date5", date5, 30);
    setCookie("date6", date6, 30);
    setCookie("date7", date7, 30);
    setCookie("date8", date8, 30);
}


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
    if (history1 == "") {
        document.querySelector("#history-text").classList.add("hidden");
        document.querySelector("#time1").classList.add("hidden");
        document.querySelector("#h1").classList.add("hidden");
    } else {
        document.querySelector("#history-text").classList.remove("hidden");
        document.querySelector("#time1").classList.remove("hidden");
        document.querySelector("#h1").classList.remove("hidden");
        document.querySelector("#time1").innerHTML = date1.substring(4, 21) + ":";
        document.querySelector("#h1").innerHTML = history1;
    }
    if (history1 == "") {
        document.querySelector("#time1").classList.add("hidden");
        document.querySelector("#h1").classList.add("hidden");
    } else {
        document.querySelector("#time1").classList.remove("hidden");
        document.querySelector("#h1").classList.remove("hidden");
        document.querySelector("#time1").innerHTML = date1.substring(4, 21) + ":";
        document.querySelector("#h1").innerHTML = history1;
    }
    if (history2 == "") {
        document.querySelector("#time2").classList.add("hidden");
        document.querySelector("#h2").classList.add("hidden");
    } else {
        document.querySelector("#time2").classList.remove("hidden");
        document.querySelector("#h2").classList.remove("hidden");
        document.querySelector("#time2").innerHTML = date2.substring(4, 21) + ":";
        document.querySelector("#h2").innerHTML = history2;
    }
    if (history3 == "") {
        document.querySelector("#time3").classList.add("hidden");
        document.querySelector("#h3").classList.add("hidden");
    } else {
        document.querySelector("#time3").classList.remove("hidden");
        document.querySelector("#h3").classList.remove("hidden");
        document.querySelector("#time3").innerHTML = date3.substring(4, 21) + ":";
        document.querySelector("#h3").innerHTML = history3;
    }
    if (history4 == "") {
        document.querySelector("#time4").classList.add("hidden");
        document.querySelector("#h4").classList.add("hidden");
    } else {
        document.querySelector("#time4").classList.remove("hidden");
        document.querySelector("#h4").classList.remove("hidden");
        document.querySelector("#time4").innerHTML = date4.substring(4, 21) + ":";
        document.querySelector("#h4").innerHTML = history4;
    }
    if (history5 == "") {
        document.querySelector("#time5").classList.add("hidden");
        document.querySelector("#h5").classList.add("hidden");
    } else {
        document.querySelector("#time5").classList.remove("hidden");
        document.querySelector("#h5").classList.remove("hidden");
        document.querySelector("#time5").innerHTML = date5.substring(4, 21) + ":";
        document.querySelector("#h5").innerHTML = history5;
    }
    if (history6 == "") {
        document.querySelector("#time6").classList.add("hidden");
        document.querySelector("#h6").classList.add("hidden");
    } else {
        document.querySelector("#time6").classList.remove("hidden");
        document.querySelector("#h6").classList.remove("hidden");
        document.querySelector("#time6").innerHTML = date6.substring(4, 21) + ":";
        document.querySelector("#h6").innerHTML = history6;
    }
    if (history7 == "") {
        document.querySelector("#time7").classList.add("hidden");
        document.querySelector("#h7").classList.add("hidden");
    } else {
        document.querySelector("#time7").classList.remove("hidden");
        document.querySelector("#h7").classList.remove("hidden");
        document.querySelector("#time7").innerHTML = date7.substring(4, 21) + ":";
        document.querySelector("#h7").innerHTML = history7;
    }
    if (history8 == "") {
        document.querySelector("#time8").classList.add("hidden");
        document.querySelector("#h8").classList.add("hidden");
    } else {
        document.querySelector("#time8").classList.remove("hidden");
        document.querySelector("#h8").classList.remove("hidden");
        document.querySelector("#time8").innerHTML = date8.substring(4, 21) + ":";
        document.querySelector("#h8").innerHTML = history8;
    }
    setCookies();
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
document.querySelector("#search-button").addEventListener("click", function(event) {
    event.preventDefault();
    if (document.querySelector("#search").value != "") {
        history8 = history7;
        history7 = history6;
        history6 = history5;
        history5 = history4;
        history4 = history3;
        history3 = history2;
        history2 = history1;
        history1 = document.querySelector("#search").value;
        date8 = date7;
        date7 = date6;
        date6 = date5;
        date5 = date4;
        date4 = date3;
        date3 = date2;
        date2 = date1;
        date1 = Date();
        setCookies();
        window.location.href = url(document.querySelector("#search").value);
    }
});

document.querySelector("#search").addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (document.querySelector("#search").value != "") {
            history8 = history7;
            history7 = history6;
            history6 = history5;
            history5 = history4;
            history4 = history3;
            history3 = history2;
            history2 = history1;
            history1 = document.querySelector("#search").value;
            date8 = date7;
            date7 = date6;
            date6 = date5;
            date5 = date4;
            date4 = date3;
            date3 = date2;
            date2 = date1;
            date1 = Date();
            setCookies();
            window.location.href = url(document.querySelector("#search").value);
        }
    }
});

document.querySelector("#h1").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = url(history1);
});
document.querySelector("#h2").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = url(history2);
});
document.querySelector("#h3").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = url(history3);
});
document.querySelector("#h4").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = url(history4);
});
document.querySelector("#h5").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = url(history5);
});
document.querySelector("#h6").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = url(history6);
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

document.querySelector("#settings-button").addEventListener('click', function(event) {
    document.querySelector("#search-form").classList.add("open-settings");
    settings = true;
    event.stopPropagation();
});

document.querySelector("#settingx").addEventListener('click', function(event) {
    document.querySelector("#search-form").classList.remove("open-settings");
    settings = false;
    set();
    event.stopPropagation();
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
    } else if (!document.querySelector("#search-form").contains(event.target) && settings) {
        event.preventDefault();
        document.querySelector("#search-form").classList.remove("open-settings");
        settings = false;
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

document.querySelector("#clear").addEventListener('click', function() {
    history1 = "";
    history2 = "";
    history3 = "";
    history4 = "";
    history5 = "";
    history6 = "";
    history7 = "";
    history8 = "";
    date1 = "";
    date2 = "";
    date3 = "";
    date4 = "";
    date5 = "";
    date6 = "";
    date7 = "";
    date8 = "";
    set();
});