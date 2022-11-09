/*
 * @FilePath: /nashi-experience/src/Attributes/html.ts
 * @author: Wibus
 * @Date: 2022-11-09 14:14:45
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 19:17:00
 * Coding With IU
 */

import { button } from '../Components/button';
import { desc } from '../Components/desc';
import { input } from '../Components/input';
import { item } from '../Components/item';
import { res } from '../Components/res';
import { title } from '../Components/title';

export const html = () => {
  const Title = title('html()');
  const Description = desc("Change the innerHTML of the element.");
  const Code = res("Nashiii");
  const Input = input()
  const Action = button("Try it").click(() => {
    const value = Input.prop("value");
    Code.html(value);
  })
  const row = item()
    .append(Title)
    .append(Description)
    .append(Code)
    .append(Input)
    .append(Action);

  return row;
};