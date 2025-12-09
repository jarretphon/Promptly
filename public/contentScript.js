chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "copy_to_textarea") {

        let textarea = document.getElementById("prompt-textarea");
        textarea.focus();
        textarea.innerText += msg.content;
        
        // Move the cursor to the end of the textarea
        const range = document.createRange();
        range.selectNodeContents(textarea);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
});
