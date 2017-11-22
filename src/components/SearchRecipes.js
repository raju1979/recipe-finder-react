import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setRecipes} from './../actions';

class SearchRecipes extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    const ingredientsInput = this.refs.ingredients.value;
    const dishInput = this.refs.dish.value;
    console.log(ingredientsInput,dishInput);

    const url = `http://www.recipepuppy.com/api/?i=${ingredientsInput}&q=${dishInput}`;
    console.log(url)

    fetch(url,{
      method:'GET'
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      this.props.setRecipes(json.results);
    });

  }//

  render(){
    return(
      <div className="searchContainer">

        <form className="form-inline justify-content-center" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="staticEmail2" className="sr-only">Email</label>
          <input type="text" className="form-control" placeholder="ingredients" ref='ingredients'/>
          </div>
          <div className="form-group mx-sm-3">
            <label htmlFor="inputPassword2" className="sr-only">Password</label>
          <input type="text" className="form-control"  placeholder="recipe" ref='dish' />
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>

      </div>
    )
  }
}

function mapDispatchToState(dispatch){
  return bindActionCreators({setRecipes},dispatch);
}

export default connect(null,mapDispatchToState)(SearchRecipes);
