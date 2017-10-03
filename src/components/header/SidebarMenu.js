import React from 'react'
import {Grid} from 'semantic-ui-react'
import SidebarMenuItem from './SidebarMenuItem'
import styled from 'styled-components'



//composant menu de la barre du haut constitué d'une grille de composants SidebarMenuItem
//à qui doivent etre passés en props les données dont ils ont besoin (image, titre, produits)

const menu = (props) => {
   return(
      <div  className={props.className}>
         <Grid columns={5} divided padded > 
            <Grid.Row streched>
               <Grid.Column>
                  <SidebarMenuItem />
               </Grid.Column>
               <Grid.Column>
                  <SidebarMenuItem />
               </Grid.Column>
               <Grid.Column>
                  <SidebarMenuItem />
               </Grid.Column>
               <Grid.Column>
                  <SidebarMenuItem />
               </Grid.Column>
               <Grid.Column>
                  <SidebarMenuItem />
               </Grid.Column>
            </Grid.Row>
            <Grid.Row>
               <Grid.Column>
                  <SidebarMenuItem />
               </Grid.Column>
               <Grid.Column>
                  <SidebarMenuItem />
               </Grid.Column>
               <Grid.Column>
                  <SidebarMenuItem  />
               </Grid.Column>
               <Grid.Column>
                  <SidebarMenuItem />
               </Grid.Column>
               <Grid.Column>
                  <SidebarMenuItem />
               </Grid.Column>
            </Grid.Row>
         </Grid>
      </div>
   );
};


//composant final sidebar menu avec les styles appliqués

const SidebarMenu = styled(menu)`
   &&&{
         z-index: 100;
         background-color: #8DA9C4;
         height: 300px;
         width: 100%;
   }
` ;


export default SidebarMenu;