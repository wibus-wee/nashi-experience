/*
 * @FilePath: /nashi-experience/src/Components/button.ts
 * @author: Wibus
 * @Date: 2022-11-09 14:20:43
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 20:06:37
 * Coding With IU
 */

import nashi from '@akrc/nashi';

export const button = (text: string, onClick?: () => void) => {
  return nashi
  .create("button")
  .text(text)
  .css("padding", "0.3em 0.5em")
  .css("font-size", "1em")
  .css("font-weight", "500")
  .css("font-family", "inherit")
  .css("border", "1px solid #007bff")
  .css("border-radius", "8px")
  .css("background-color", "#007bff")
  .css("color", "#fff")
  .css("cursor", "pointer")
  .css("outline", "none")
  .on("click", () => {
    if (onClick) onClick();
  });
}