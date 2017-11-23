import React from 'react';

import voca from 'voca';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {favoriteRecipes} from './../actions';

import noThumbnail from '../img/img_404.png';

class RecipeItem extends React.Component {

  constructor(props) {
    super(props);
    this.addToFavorite = this.addToFavorite.bind(this);
    this.state ={
      favorited:false
    }
  }

  addToFavorite(e,recipe){
    e.preventDefault();
    console.log(this.props);
    this.setState({
      favorited:true
    })
    this.props.favoriteRecipes(recipe)
  }


  render(){
    let recipe = this.props.recipe;
    return(
      <div className="card">
        <img className="card-img-top" src={recipe.thumbnail || noThumbnail} alt="Card image cap" />
        <div className="card-block">
          <h6 className="card-title">{recipe.title}</h6>
        <p className="card-text">{voca.first(recipe.ingredients,50)}</p>
        <div className='card-footer'>
          {
            this.props.showFavorite ?
            this.state.favorited ?
            <a><i className="fa fa-heart" aria-hidden="true"></i></a>
            :
            <a onClick={(e) => this.addToFavorite(e,recipe)}><i className="fa fa-heart-o" aria-hidden="true"></i></a>
            :<a></a>
        }
          <a href={recipe.href} target='_blank' className="card-link">Link</a>
        </div>
        </div>
      </div>
    )

  }

}

function mapDispatchToState(dispatch){
  return bindActionCreators({favoriteRecipes},dispatch);
}

export default connect(null,mapDispatchToState)(RecipeItem);
