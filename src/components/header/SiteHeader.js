import React,{Component} from 'react';
import {inject, observer} from 'mobx-react';
import { Button,  Sidebar} from 'semantic-ui-react'
import SidebarMenu from './SidebarMenu'
import styled from 'styled-components'



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


@inject('BirdStore')
@observer

class SiteHeader extends Component{
//composant definissant l'entète du site avec le menu de l'entète

   toggleVisibility = () => {

      //methode pour changer la visibilité du menu de l'entete

      this.props.BirdStore.changevisibility();
   }
//
   render(){
      return(
         <div>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            <Sidebar.Pushable as={div}>
               <Sidebar as={SidebarMenu} animation='overlay' direction='top' visible={this.props.BirdStore.visibility} wide >
                  <SidebarMenu></SidebarMenu>
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