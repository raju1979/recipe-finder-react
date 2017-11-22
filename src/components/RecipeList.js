import React from 'react';

import {connect} from 'react-redux'

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props);
    return(
      <div className='recipeListOuter'>
        hh
      </div>
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps,null)(RecipeList);
