import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button,  Sidebar } from 'semantic-ui-react';
import SidebarMenu from './SidebarMenu';
import styled from 'styled-components';
import changeVisibility from '../../actions/headerActions';
import { bindActionCreators } from 'redux';



const Styledp = styled.div`
{
   height: 2000px; 
}
`;


const div = styled.div`
   {
      background-color: #EEF4ED;  
   }
`;




class SiteHeader extends Component {
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
// composant definissant l'entète du site avec le menu de l'entète

   toggleVisibility = () => {
      // methode pour changer la visibilité du menu de l'entete
        this.props.changeVisibility();
   }
//
   render(){
      return(
         <div>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            <Sidebar.Pushable as={div}>
               <Sidebar as={SidebarMenu} animation="overlay" direction="top" visible={this.props.visibility} wide >
                  <SidebarMenu/>

               </Sidebar>
               <Sidebar.Pusher>
                  <Styledp/>                  
               </Sidebar.Pusher>
            </Sidebar.Pushable>
         </div>
      );
   }
}


export default SiteHeader;


