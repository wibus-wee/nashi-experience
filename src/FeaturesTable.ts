/*
 * @FilePath: /nashi-playground/src/FeaturesTable.ts
 * @author: Wibus
 * @Date: 2022-11-09 13:41:11
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 13:53:48
 * Coding With IU
 */

import nashi from '@akrc/nashi';

const ArrtibuteFeature = () => {
  // grid 布局 每行三列
  const grid = nashi.create("div")
    .css("display", "grid")
    .css("grid-template-columns", "repeat(3, 1fr)")
    .css("gap", "1rem")
    .css("margin", "1rem 0");
  // 第一行
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

  const row1Code = nashi
    .create("code")
    .text("Hello, Nashi!")
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
      row1Code.text("Hello, 🍐!")
      row1Action.text("Clicked!")
    });

  row1.append(row1Title).append(row1Description).append(row1Code).append(row1Action)

  return grid.append(row1);
};

export const FeaturesTable = () => {
  const table = nashi.create("div").css("max-width", "800px").css("margin", "0 auto").css("margin-top", "4rem");
  table.append(ArrtibuteFeature());
  return table;
};