import { eventMessages, contextTypes } from "./constant.js";
// types of clicked element
var menus = chrome.contextMenus, storage = chrome.storage;
chrome.runtime.onInstalled.addListener(function () {
    loadContextMenuOptions();
    chrome.runtime.onMessage.addListener(onReceiveSaveMessage);
});
chrome.contextMenus.onClicked.addListener(contextClickd);
function contextClickd(info) {
}
function onReceiveSaveMessage([message, data], sender, onResponse) {
    switch (message) {
        case eventMessages.created:
            if (data)
                addNewContext(data);
            return true;
        default: return false;
    }
}
function loadContextMenuOptions() {
    createContext({
        title: "ImageTagger",
        id: "__mainEntry__",
        contexts: [contextTypes.image]
    });
}
function addNewContext(title) {
    const ides = title.trim().toLowerCase();
    if (!storage.local.get(ides))
        storage.local.set({ ides: title });
    storage.local.get([], (items) => {
        console.log(items); // not right
    });
}
function createContext({ title, id, parent, contexts }) {
    menus.create({
        title: title,
        id: id !== null && id !== void 0 ? id : title.trim().toLowerCase(),
        parentId: parent,
        contexts: contexts
    });
}
