import {
  observer,
  newButtonElement,
  updateMainTweetText,
} from "./utils";


const addButton = (toolBar: Element) => {
  if (document.querySelector("#fetch-button") === null) {
    const div = document.createElement("div");
    div.id = "fetch-button";
    const fetchButton = newButtonElement(
      "Fetch Tweet Text",
      updateMainTweetText
    );
    div.append(fetchButton);
    toolBar.parentNode?.append(div);
    console.log("Button added");
  }
};

observer('[data-testid="toolBar"]', (toolBar) => {
  addButton(toolBar);
});