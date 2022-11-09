/*
 * @FilePath: /nashi-playground/src/Components/res.ts
 * @author: Wibus
 * @Date: 2022-11-09 17:19:16
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 17:19:16
 * Coding With IU
 */
import nashi from '@akrc/nashi';

export const res = (text: string) => {
  return nashi
    .create("code")
    .text(text) // Get the text content of the element.
    .css("font-size", "1rem")
    .css("font-family", "sans-serif")
    .css("font-weight", "bold")
    .css("color", "#007bff")
    .css("margin-bottom", "1rem")
}