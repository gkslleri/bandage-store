import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';

export default function PageContent() {
  return (
    <main className='flex-1'>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/shop">
            <ShopPage />
          </Route>
        </Switch>
    </main>
  );
}
