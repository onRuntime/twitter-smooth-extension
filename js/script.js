// Var
const hostname = window.location.hostname
const pathname = window.location.pathname

var unautorizedHostname = ['help.twitter.com', 'business.twitter.com', 'developer.twitter.com', 'about.twitter.com']
var unautorizedPathname = []
var authorization = true

// Script init
init()

function init() {
    // Authorized pathname/hostname
    unautorizedHostname.forEach(element => {
        if (element == hostname) {
            authorization = false
        }
    })
    unautorizedPathname.forEach(element => {
        if (pathname.includes(element)) {
            authorization = false
        }
    })
    if (authorization == true) build()
}

function build() {
    document.head.appendChild(createFontFace('Fira Sans', 'fonts/FiraSans-Regular.woff2'));
    console.log('loaded')
}


//Import font
function createFontFace(fontFamily, url) {
    var element = document.createElement('style');
    element.type = 'text/css';
    element.textContent = '@font-face { font-family: ' + fontFamily + '; src: url("'
        + getBrowser().extension.getURL(url)
        + '"); }';
    return element;
}

// Browser Detection
function getBrowser() {
    if (typeof chrome !== 'undefined') {
        if (typeof browser !== 'undefined') {
            return browser;
        } else {
            return chrome;
        }
    } else {
        return null;
    }
}