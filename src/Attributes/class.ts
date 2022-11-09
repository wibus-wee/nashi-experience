/*
 * @FilePath: /nashi-experience/src/Attributes/class.ts
 * @author: Wibus
 * @Date: 2022-11-09 14:14:33
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 19:20:35
 * Coding With IU
 */

import nashi from '@akrc/nashi';
import { actions } from '../Components/actions';
import { button } from '../Components/button';
import { desc } from '../Components/desc';
import { input } from '../Components/input';

import { item } from '../Components/item';
import { res } from '../Components/res';
import { title } from '../Components/title';


export const classes = () => {
  const Title = title('xClass()');
  const Description = desc("Try to add 'red' into the input box.");
  const Input = input();
  const Code = res("Default")
  const Actions = actions();
  const Action1 = button("Check").click(() => {
    const className = Input.prop("value");
    Code.text(`I have ${className}? \`${Code.hasClass(className)}\``);
  });
  const Action2 = button("Toggle").click(() => {
    const className = Input.prop("value");
    Code.toggleClass(className);
    
  });
  const Action3 = button("+").click(() => {
    const className = Input.prop("value");
    Code.addClass(className);
  });
  const Action4 = button("-").click(() => {
    const className = Input.prop("value");
    Code.removeClass(className);
  });
  Actions.append(Action1).append(Action2).append(Action3).append(Action4);

  const row = item()
    .append(Title)
    .append(Description)
    .append(Code)
    .append(Input)
    .append(Actions);

  return row;
}