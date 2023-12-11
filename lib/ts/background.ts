import { eventMessages, contextTypes } from "./constant.js";
// types of clicked element


var menus = chrome.contextMenus,
  storage = chrome.storage;

chrome.runtime.onInstalled.addListener(function () {
  loadContextMenuOptions();
  chrome.runtime.onMessage.addListener(onReceiveSaveMessage);
});

chrome.contextMenus.onClicked.addListener(contextClickd);

function contextClickd(info: chrome.contextMenus.OnClickData) {
    
}

function onReceiveSaveMessage([message, data]: [eventMessages, string?], sender: chrome.runtime.MessageSender, onResponse: () => void): boolean | undefined{
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
  })
}

interface ContextArguments {
  title: string,
  id?: string,
  parent?: string,
  contexts?: [contextTypes]
}

function addNewContext(title: string) {
  const ides = title.trim().toLowerCase();
  if (!storage.local.get(ides))
    storage.local.set({ides: title})

  storage.local.get([], (items) => {
    console.log(items); // not right
  })
}

function createContext({title, id, parent, contexts}: ContextArguments) {
  menus.create({
    title: title,
    id: id ?? title.trim().toLowerCase(),
    parentId: parent,
    contexts: contexts
  })
}
