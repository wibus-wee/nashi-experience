import nashi from '@akrc/nashi';

export const item = () => {

  const item = nashi.create("div")
    .css("display", "flex")
    .css("align-items", "center")
    .css("justify-content", "space-between")
    .css("padding", "2rem")
    .css("border-radius", "0.5rem")
    .css("background-color", "#f5f5f5")
    .css("flex-direction", "column");

  return item

}