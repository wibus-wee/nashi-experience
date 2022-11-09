/*
 * @FilePath: /nashi-experience/src/HomePage.ts
 * @author: Wibus
 * @Date: 2022-11-09 13:39:37
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 19:12:07
 * Coding With IU
 */
import nashi from '@akrc/nashi';

export const HomePage = () => {
  let btnColor = { color: "#fff", backgroundColor: "#000" };

  const title = nashi.create("h1").text("🍐 Nashi + TS Experience")
  title
    .css("font-size", "2rem")
    .css("text-align", "center")
    .css("margin-top", "2rem")
    .css("margin-bottom", "2rem")
    .css("font-weight", "bold")
    .css("font-family", "sans-serif")

  const description = nashi
    .create("p")
    .text("The modern jQuery alternative.")
    .css("text-align", "center")
    .css("font-size", "1.2rem")
    .css("font-family", "sans-serif")

  const button = nashi
    .create("button")
    .text("Click me!")
    .css("display", "block")
    .css("margin", "0 auto")
    .css("margin-top", "2rem")
    .css("padding", "1rem")
    .css("font-size", "1.2rem")
    .css("font-family", "sans-serif")
    .css("border", "none")
    .css("border-radius", "0.5rem")
    .css("background-color", btnColor.backgroundColor)
    .css("color", btnColor.color)
    .css("cursor", "pointer")
    .css("outline", "none")
    .on("click", () => {
      alert("Hello, Nashi!")
      btnColor = { color: "#fff", backgroundColor: "#007bff" }
      button.css("background-color", btnColor.backgroundColor)
      button.css("color", btnColor.color)
      button.text("Clicked!")
    })

  const page = nashi.create("div")
    .append(title)
    .append(description)
    .append(button)
  return page
};