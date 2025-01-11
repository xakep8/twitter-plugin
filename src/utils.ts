export const observer = (
    selector: string,
    callback: (element: Element) => void
) => {
    const targetNode = document.querySelector("#react-root");
    if (!targetNode) {
        throw new Error("React root element not found");
    }
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === "childList") {
                const element = document.querySelector(selector);
                if (element) {
                    callback(element);
                    observer.disconnect();
                    break;
                }
            }
        }
    });
    observer.observe(targetNode, { childList: true, subtree: true });
};

export const newButtonElement = (
    buttonText: string,
    handleClick: () => void
) => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = buttonText;
    buttonElement.addEventListener("click", () => handleClick());
    buttonElement.className = "fetch-button";

    return buttonElement;
};

export const fetchTweetText = () => {
    const tweetText = document.querySelector(
        '[data-testid="tweetText"]'
    )?.textContent;
    return tweetText;
};


export const updateMainTweetText = () => {
    const tweetText = fetchTweetText();
    alert(tweetText);
    updateReplyTextArea(tweetText || "");
};


export const updateReplyTextArea = (tweetText: string) => {
    const replyTextArea = document.querySelectorAll(
        '[data-text="true"], [data-testid="tweetTextarea_0"]'
    )[0];
    if (replyTextArea) {
        (replyTextArea as HTMLElement).focus();
        document.execCommand("insertHTML", false, tweetText ? tweetText : "");
    }
};