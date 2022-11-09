import nashi from '@akrc/nashi';
import { FeaturesTable } from './FeaturesTable';
import { HomePage } from './HomePage';


const App = () => {
  const app = nashi.create('div');
  // HomePage Component
  app.append(HomePage());
  // FeaturesTable Component
  app.append(FeaturesTable())
  return app;
};


const app = App();
const root = nashi("#root")
root.append(app);