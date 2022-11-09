/*
 * @FilePath: /nashi-experience/src/Styles/wah.ts
 * @author: Wibus
 * @Date: 2022-11-09 19:17:30
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-09 19:37:31
 * Coding With IU
 */
import nashi from '@akrc/nashi';
import { actions } from '../Components/actions';
import { button } from '../Components/button';
import { desc } from "../Components/desc"
import { item } from '../Components/item';
import { title } from "../Components/title"

export const wah = () => {
  const Title = title("Width & Height");
  const Description = desc("Set Width or Height of the element.")
  const Code = nashi.create("div")
    .css("width", "130px")
    .css("height", "130px")
    .css("margin-bottom", "15px")
    .css("background-color", "#f5f5f5")
    .css("border-radius", "5px")
    .css("display", "flex")
    .css("justify-content", "center")
    .css("align-items", "center")
    .css("text-align", "center")
    .css("box-shadow", "0 0 1px #000")
    .text(`pending...`)
  const Actions = actions();
  const Action1 = button("Get").click(() => {
    const width = Code.width();
    const height = Code.height();
    Code.text(`width: ${width} height: ${height}`)
  })
  const Action2 = button("Get Inner").click(() => {
    const width = Code.innerWidth();
    const height = Code.innerHeight();
    Code.text(`innerWidth: ${width} innerHeight: ${height}`)
  })
  Actions
    .append(Action1)
    .append(Action2)

  const row = item()
    .append(Title)
    .append(Description)
    .append(Code)
    .append(Actions);

  return row;

}