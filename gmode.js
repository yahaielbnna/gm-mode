
/**
 * @param {string|object} button 
 * @param {object} light 
 * @param {object} dark 
 * @param {string} appContainer
 * @param {boolean} isLight 
 */
function GMode(button, light, dark, appContainer = 'body', isLight = true) {
    try {
        let el;
        if (typeof button == "string") {
            el = document.querySelector(button);
        } else if (typeof button == "object") {
            el = button;
        }
        if (el == null) {
            gmode_error_code_warn();
            console.warn(
                `Oh! We couldn't find --- [ ${button} ] ---- in the page, please try to check your spelling or check the existence of this element in the page`
            );
        } else {
            let body = document.body,
                data = {},
                lastBodyClass;
            appContainer !== 'body' ? body = document.querySelector(appContainer) : null;
            isLight ? body.dataset.GMode = 'light' : body.dataset.GMode = 'dark';

            localStorage.getItem('GMODE') && localStorage.getItem('GMODE') == 'light' ? __Config_GMODE_LIGHT__() : __Config_GMODE_DARK__();

            __Config_GMODE()

            el.addEventListener('click', _ => {
                body.dataset.GMode == 'light' ? __Config_GMODE_DARK__() : __Config_GMODE_LIGHT__();

                __Config_GMODE()
            })
            function __Config_GMODE_LIGHT__() {
                data = light;
                body.dataset.GMode = 'light';
                lastBodyClass = dark.class;
                if (data.attr) {
                    __Config_GMODE_Attributes__(data.attr, dark.attr)
                }
            }
            function __Config_GMODE_DARK__() {
                data = dark;
                body.dataset.GMode = 'dark';
                lastBodyClass = light.class;
                if (data.attr) {
                    __Config_GMODE_Attributes__(data.attr, light.attr)
                }
            }
            function __Config_GMODE_Attributes__(New__, Old__) {
                for (const [attrName, attrValue] of Object.entries(Old__)) {
                    body.removeAttribute(attrName);
                }

                for (const [attrName, attrValue] of Object.entries(New__)) {
                    body.setAttribute(attrName, attrValue);
                }
            }
            function __Config_GMODE() {
                gmode_append_css__(data.StyleSrc);
                body.classList.remove(lastBodyClass);
                body.classList.add(data.class);

                if (data.button) {
                    let BTNinnerhtml = data.button.innerhtml,
                        BTNclass = data.button.class,
                        BTNattr = data.button.attr;
                    if (BTNinnerhtml) {
                        el.innerHTML = BTNinnerhtml;
                    }
                    if (BTNclass) {
                        if (typeof BTNclass == 'string') {
                            el.classList.add(BTNinnerhtml);
                        } else {
                            BTNclass.forEach(cls => {
                                el.classList.add(cls);
                            });
                        }
                    }
                    if (BTNattr) {
                        for (const [attrName, attrValue] of Object.entries(BTNattr)) {
                            el.setAttribute(attrName, attrValue);
                        }
                    }
                }
                localStorage.setItem('GMODE', body.dataset.GMode);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

function gmode_error_code_warn() {
    return console.warn(
        "%cgmode " + "%csay that you have an " + "%cerror " + "%cin your code !",
        "font-weight: bold;font-size:20px",
        "",
        "color:red;font-weight: bold;font-size:20px",
        ""
    );
}
/**
 * 
 * @param {string} src 
 */
function gmode_append_css__(src) {
    let oldFile = document.querySelector('link[data-gmfile]');
    if (oldFile) {
        oldFile.remove();
    }
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = src;
    link.dataset.gmfile = src;
    head.appendChild(link);
}