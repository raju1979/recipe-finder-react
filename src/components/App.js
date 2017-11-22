import React from 'react';

import{BrowserRouter,Switch,Route} from 'react-router-dom';

import Header from './Header';
// import RecipeListPage from './RecipeListPage';
import NotFoundPage from './NotFoundPage';
import FavoriteRecipeList from './FavoriteRecipeList';
import Home from './Home';

class App extends React.Component{
  render(){
    return(
      <div className='outerContainer'>

        <BrowserRouter>
          <div>
            <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/favorite" component={FavoriteRecipeList} />

                <Route component={NotFoundPage} />
              </Switch>
          </div>

        </BrowserRouter>
      </div>
    )
  }
}

export default App;
