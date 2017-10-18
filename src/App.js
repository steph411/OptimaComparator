import React, { Component } from 'react';
import SiteHeader from './components/header/SiteHeader';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import changeVisibility from './actions/headerActions';


const Styledp = styled.div`
   {
      height: 2000px; 
   }
`;

class App extends Component{

   render(){
      return(
         <div  className="App">
            <SiteHeader  
            changeVisibility={this.props.changeVisibility} 
            visibility={this.props.reducer.visibility} />
            <Styledp/>
         </div>

      );
   }
}


const mapStateToProps = (store) => {
    return {
        reducer: store
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeVisibility }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

