import nashi from '@akrc/nashi';
import { HomePage } from './HomePage';


const App = () => {
  const app = nashi.create('div');
  // HomePage Component
  app.append(HomePage());
  return app;
};


const app = App();
const root = nashi("#root")
root.append(app);