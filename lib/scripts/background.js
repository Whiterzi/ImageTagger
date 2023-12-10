"use strict";
// types of clicked element
var contexts = [
    'page',
    'selection',
    'link',
    'editable',
    'image',
    'video',
    'audio'
];
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: "titile",
        contexts: ['image', 'page'],
        id: "cccc"
    });
});
chrome.contextMenus.onClicked.addListener(contextClickd);
function contextClickd(info) {
}
chrome.runtime.onMessage.addListener(onReceiveSaveMessage);
function onReceiveSaveMessage(message, sender, onResponse) {
    console.log("memege");
    return false;
}
