document.addEventListener("submit", function(event) {
    event.preventDefault();
    if (document.querySelector("#search").value != "") {
        window.location.href = url(document.querySelector("#search").value);
    }
});

function url(search) {
    console.log();
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
