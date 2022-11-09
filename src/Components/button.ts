/*
 * @FilePath: /nashi-playground/src/Components/button.ts
 * @author: Wibus
 * @Date: 2022-11-09 14:20:43
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 17:23:40
 * Coding With IU
 */

import nashi from '@akrc/nashi';

export const button = (text: string, onClick?: () => void) => {
  return nashi
  .create("button")
  .text(text)
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
    if (onClick) onClick();
  });
}