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
        <div className='container'>
          <div className='row'>
            {
              this.props.recipes.map((recipe,index) => {
                return <div className="col-sm-1 col-6 col-md-4" key={index}>
                  <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-block">
                      <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>

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
