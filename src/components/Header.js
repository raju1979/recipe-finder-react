import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {withRouter} from 'react-router-dom';

class Header extends React.Component{

  currentRoute = '';

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log(`Current route is `,this.props.history.location.pathname );
      console.log(`on route change :: ${this.props.location.pathname}`);
      this.currentRoute = this.props.history.location.pathname;
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
      this.unlisten();
  }

  render(){
    console.log(this.props.favoriteRecipes.length);
    console.log(this.props.history.location.pathname);
    return(

        <div className='nav'>
          <h4 className='p-0 m-0'>Recipe Finder</h4>
          {
            (this.props.favoriteRecipes.length > 0 && this.currentRoute !== '/favorite') &&
            <span><Link to="/favorite">Favorite</Link></span>
          }
          {
            (this.props.favoriteRecipes.length=== 0 && this.currentRoute !== '/') &&
            <span><Link to="/">Home</Link></span>
          }
        </div>
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps,null)(withRouter(Header));
