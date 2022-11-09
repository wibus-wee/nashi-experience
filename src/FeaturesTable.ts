/*
 * @FilePath: /nashi-playground/src/FeaturesTable.ts
 * @author: Wibus
 * @Date: 2022-11-09 13:41:11
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 17:17:12
 * Coding With IU
 */

import nashi from '@akrc/nashi';
import { addAndRemoveAndHasClass } from './Attributes/class';
import { text } from './Attributes/text';

const AttributeFeature = () => {

  const grid = nashi.create("div")
    .css("display", "grid")
    .css("grid-template-columns", "repeat(3, 1fr)")
    .css("gap", "1rem")
    .css("margin", "1rem 0");

  return grid
    .append(text())
    .append(addAndRemoveAndHasClass())
};

export const FeaturesTable = () => {
  const table = nashi.create("div").css("max-width", "800px").css("margin", "0 auto").css("margin-top", "4rem");
  table.append(AttributeFeature());
  return table;
};