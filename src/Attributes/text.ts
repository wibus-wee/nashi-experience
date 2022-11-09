import nashi from '@akrc/nashi';


export const text = () => {
  // text()
  const row1 = nashi.create("div")
    .css("display", "flex")
    .css("align-items", "center")
    .css("justify-content", "space-between")
    .css("padding", "2rem")
    .css("border-radius", "0.5rem")
    .css("background-color", "#f5f5f5")
    .css("flex-direction", "column");
  const row1Title = nashi.create("h3")
    .text("Attribute text()")
    .css("font-size", "1.2rem")
    .css("font-weight", "bold")
    .css("font-family", "sans-serif");
  const row1Description = nashi.create("p")
    .text("Set & Get the text content of the element.")
    .css("font-size", "1rem")
    .css("font-family", "sans-serif");

  const row1Hidden = nashi.create("p").text("Hello, Nashi!").css("display", "none");

  const row1Code = nashi
    .create("code")
    .text(row1Hidden.text()) // Get the text content of the element.
    .css("font-size", "1rem")
    .css("font-family", "sans-serif")
    .css("font-weight", "bold")
    .css("color", "#007bff")
    .css("margin-bottom", "1rem")

  const row1Action = nashi
    .create("button")
    .text("Click me!")
    .css("padding", "0.5rem")
    .css("font-size", "1rem")
    .css("font-family", "sans-serif")
    .css("border", "none")
    .css("border-radius", "0.5rem")
    .css("background-color", "#007bff")
    .css("color", "#fff")
    .css("cursor", "pointer")
    .css("outline", "none")
    .on("click", () => {
      row1Code.text("Hello, 🍐!") // Set the text content of the element.
      row1Action.text("Clicked!")
    });

  row1.append(row1Title).append(row1Description).append(row1Code).append(row1Action)
  return row1
}