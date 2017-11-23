import React from 'react';

import {connect} from 'react-redux';

import RecipeItem from './RecipeItem';

class FavoriteRecipeList extends React.Component {
  render(){
    return(
      <div className='recipeListOuter'>
        <div className='container'>
          <div className='row'>
            {
              this.props.favoriteRecipes.map((recipe,index) => {
                return <div className="col-md-4" key={index}>
                    <RecipeItem recipe={recipe} showFavorite={false}/>

                </div>
              })
            }
          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return state;
}


export default connect(mapStateToProps,null)(FavoriteRecipeList);
