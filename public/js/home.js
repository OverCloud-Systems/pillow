const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const Snorlax = async () => {
    await sleep(5000)
    console.log('\n'.repeat('50'));
    console.log(' ______ __ __ __                 \n' +
        '|   __ \\__|  |  |.-----.--.--.--.\n' +
        '|    __/  |  |  ||  _  |  |  |  |\n' +
        '|___|  |__|__|__||_____|________|')
    console.log('\n'.repeat('30'));
}

Snorlax()

console.log(' ______ __ __ __                 \n' +
    '|   __ \\__|  |  |.-----.--.--.--.\n' +
    '|    __/  |  |  ||  _  |  |  |  |\n' +
    '|___|  |__|__|__||_____|________|');




/* Chosing Ultraviolet or Aero */

function uv() {
    console.log('uv work');
    /*
    const iframe = document.getElementById("stealth");
    const main = document.querySelector('main') || {};
    const input = document.getElementById("name");
    iframe.style.display = "initial";
    main.style.display = "none";
    iframe.setAttribute("src", "https://www.example.com" + input.value);
    */
}

const form = document.querySelector('form');
const input = document.querySelector('input');
const engine = localStorage.getItem('engine');
if (engine === null) {
    localStorage.setItem('engine', 'Brave');
    engine = localStorage.getItem('engine');
}

input.placeholder = `${''.concat("Search with ", engine)}`;

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
            
        if (!isUrl(url))
            if (engine === "Brave") {
                url = 'https://search.brave.com/search?q=' + url;
            } else if (engine === "Google") {
                url = 'https://google.com/search?q=' + url;
            } else if (engine === "DuckDuckGo") {
                url = 'https://duckduckgo.com/search?q=' + url;
            } else if (engine === "Bing") {
                url = 'https://bing.com/search?q=' + url;
            } else if (engine === "Boogle") {
                url = 'https://sites.google.com/search/butter-dog-search?query=' + url;
            }
        else if (!(url.startsWith('https://') || url.startsWith('http://')))
            url = 'http://' + url;
        
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

    function isUrl(val = ''){
        if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
        return false;
    };

// console.log(localStorage.getItem("corrosion"))

var theme = localStorage.getItem("theme") || "OverCloud";
if (theme === "Google") {
    if (!window.location.href.includes("google.html")) {
        window.location.replace("google.html");
    }
}

/*
if(localStorage.getItem("corrosion") === 'true') {
    const search = document.getElementById('search');
    search.removeAttribute("action");
    search.removeAttribute("method");
    search.setAttribute("onsubmit", "corrosion(); return false;");
} else {
    const search = document.getElementById('search');
    search.removeAttribute("action");
    search.removeAttribute("method");
    search.setAttribute("onsubmit", "womginx(); return false;");
}
*/

/* Title stuff */

var title = localStorage.getItem("title")
var favicon = localStorage.getItem("favicon")

if (localStorage.hasOwnProperty("title")) {
    document.title = title;
    try {window.top.postMessage(`title-${title}`, '*')} catch (err) {console.log("No iframe found.");}
} else {
    try {window.top.postMessage(`title-default`, '*')} catch (err) {console.log("No iframe found.");}
}

if (localStorage.hasOwnProperty("favicon")) {
    document.querySelector("link[rel='shortcut icon']").href = favicon;
    try {window.top.postMessage(`favicon-${favicon}`, '*')} catch (err) {console.log("No iframe found.");}
} else {
    try {window.top.postMessage(`favicon-default`, '*')} catch (err) {console.log("No iframe found.");}
}