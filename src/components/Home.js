import React from 'react';

import SearchRecipes from "./SearchRecipes";
import RecipeList from "./RecipeList";

export class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className='homePageContainer'>
        <SearchRecipes />
        <RecipeList />
      </div>
    )
  }
}

export default Home;
