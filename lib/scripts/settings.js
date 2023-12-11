import { eventMessages } from "./constant.js";
$(window).on("DOMContentLoaded", (event) => {
    initForms();
});
function initForms() {
    const [pathText, pathBtn] = $('.setting-row.path').children();
    if (!pathText || !pathBtn)
        return;
    $(pathBtn).on("click", (e) => {
        const inputValue = pathText.value;
        if (!inputValue.trim())
            return;
        else
            sendMessage(eventMessages.created, inputValue);
    });
}
function sendMessage(message, fieldName) {
    chrome.runtime.sendMessage(chrome.runtime.id, [message, fieldName]);
}
