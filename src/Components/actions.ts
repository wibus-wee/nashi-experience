/*
 * @FilePath: /nashi-experience/src/Components/actions.ts
 * @author: Wibus
 * @Date: 2022-11-09 19:20:11
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 19:20:12
 * Coding With IU
 */

import nashi from '@akrc/nashi';

export const actions = () => {
  return nashi.create("div").css("display", "flex").css("gap", "1rem");
};