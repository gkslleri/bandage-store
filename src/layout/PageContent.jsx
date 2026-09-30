import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default function PageContent() {
  return (
    <main className='flex-1'>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
    </main>
  );
}
