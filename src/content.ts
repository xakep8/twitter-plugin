import {
  observer,
  newButtonElement,
  updateMainTweetText,
} from "./utils";


const addButton = (toolBar: Element) => {
  if (document.querySelector("#fetch-button") === null) {
    const div = document.createElement("div");
    div.id = "fetch-button";
    const mainTweetImage = newButtonElement(
      "Fetch Tweet Text",
      updateMainTweetText
    );
    div.append(mainTweetImage);
    toolBar.parentNode?.append(div);
  }
};

observer('[data-testid="toolBar"]', (toolBar) => {
  addButton(toolBar);
});
