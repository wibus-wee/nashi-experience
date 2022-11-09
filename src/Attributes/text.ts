import nashi from '@akrc/nashi';
import { title } from '../Components/title';
import { button } from '../Components/button';
import { item } from '../Components/item';
import { res } from '../Components/res';
import { desc } from '../Components/desc';


export const text = () => {
  const Title = title('text()');
  const Description = desc("Set & Get the text content of the element.")
  const Hidden = nashi.create("p").text("Hello, Nashi!").css("display", "none");
  const Code = res(Hidden.text())
  const Action = button("Click Me", () => {
    Code.text("Hello, 🍐!") // Set the text content of the element.
    Action.text("Clicked!")
  })

  const row = item()
    .append(Title)
    .append(Description)
    .append(Code)
    .append(Action);
  return row;
}