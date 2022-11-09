/*
 * @FilePath: /nashi-playground/src/Components/input.ts
 * @author: Wibus
 * @Date: 2022-11-09 14:20:40
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 17:23:09
 * Coding With IU
 */

import nashi from '@akrc/nashi';

export const input = () => {
  return nashi.create("input")
    .css("padding", "0.5rem")
    .css("font-size", "1rem")
    .css("font-family", "sans-serif")
    .css("border", "none")
    .css("border-radius", "0.5rem")
    .css("box-shadow", "0 0 0 1px rgba(0,0,0,0.1)")
    .css("outline", "none")
    .css("margin-bottom", "1rem");
}