/*
 * @FilePath: /nashi-playground/src/Components/desc.ts
 * @author: Wibus
 * @Date: 2022-11-09 14:20:37
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 17:16:24
 * Coding With IU
 */
import nashi from "@akrc/nashi";

export const desc = (text: string) => {
  return nashi.create("p")
    .text(text)
    .css("font-size", "1rem")
    .css("font-family", "sans-serif");
};