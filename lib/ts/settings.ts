
$(window).on("DOMContentLoaded", (event) => {
    initForms();
})

function initForms() {
  const [pathText, pathBtn] = $('.setting-row.path').children();
  if (!pathText || !pathBtn)
    return;

  $(pathBtn).on("click", (e) => {
    const inputValue = (pathText as HTMLInputElement).value;
    if (!inputValue.trim() || localStorage.getItem(inputValue.trim()))
      return;
    else
      localStorage.setItem(inputValue.trim(), inputValue);

    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs: any[]){
    //   chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"});  
    //   });
    // // chrome.tabs.sendMessage(0, "message");
    // // chrome.runtime.sendMessage("onSaveField", "hi");
  })
}


