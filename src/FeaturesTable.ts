/*
 * @FilePath: /nashi-experience/src/FeaturesTable.ts
 * @author: Wibus
 * @Date: 2022-11-09 13:41:11
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 20:17:58
 * Coding With IU
 */

import nashi from '@akrc/nashi';
import { classes } from './Attributes/class';
import { html } from './Attributes/html';
import { text } from './Attributes/text';
import { wah } from './Styles/wah';

const AttributeFeature = () => {

  const grid = nashi.create("div")
    .css("display", "grid")
    .css("grid-template-columns", "repeat(4, 1fr)")
    .css("gap", "1rem")
    .css("margin", "1rem 0");

  return grid
    .append(text())
    .append(classes())
    .append(html())
    .append(wah())
};

export const FeaturesTable = () => {
  const table = nashi.create("div").css("max-width", "1300px").css("margin", "0 auto").css("margin-top", "4rem");
  table.append(AttributeFeature());
  return table;
};