import React from 'react';

import {connect} from 'react-redux';



import RecipeItem from './RecipeItem';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  componentDidMount() {

  }

  addToFavorite(e,recipe){
    e.preventDefault();
    console.log(this.props);
    this.props.favoriteRecipes(recipe)
  }

  render(){
    console.log(this.props);
    return(
      <div className='recipeListOuter'>
        <div className='container'>
          <div className='row'>
            {
              this.props.recipes.map((recipe,index) => {
                return <div className="col-md-4" key={index}>
                    <RecipeItem recipe={recipe} showFavorite={true}/>

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



export default connect(mapStateToProps,null)(RecipeList);
