import React, { Component } from 'react';
//import './App.css';
import {inject, observer} from 'mobx-react';
import SiteHeader from './components/header/SiteHeader';
import styled from 'styled-components'


const Styledp = styled.div`
   {
      height: 2000px; 
   }
`;

@inject('BirdStore')
@observer
class App extends Component{

   render(){
      return(
         <div  className="App">
            <SiteHeader/>
            <Styledp/>
         </div>

      );
   }
}

export default App;
