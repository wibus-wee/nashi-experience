/*
 * @FilePath: /nashi-playground/src/Components/title.ts
 * @author: Wibus
 * @Date: 2022-11-09 14:20:34
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 14:21:34
 * Coding With IU
 */
import nashi from "@akrc/nashi";

export const title = (text: string) => {
  return nashi.create("h3")
    .text(text)
    .css("font-size", "1.2rem")
    .css("font-weight", "bold")
    .css("font-family", "sans-serif");
};