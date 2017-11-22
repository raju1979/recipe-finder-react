import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Header = function(props){

  console.log(props)
  return(
    <div className='nav'>
      <h4 className='p-0 m-0'>Recipe Finder</h4>
      {
        props.favoriteRecipes.length > 0 &&
        <span><Link to="/favorite">Favorite</Link></span>
      }
    </div>
  )
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps,null)(Header);
