import React from 'react'
import styled from 'styled-components'
import { Image, Header} from 'semantic-ui-react'
import logo from '../../assets/informatique.svg'



//composant du menu de l'entéte du site constitué d'une image lien pour la catégorie
// d'un titre(lien) et de quelques liens de produits
//Données néccéssaires pour le composant: 
// la source de l'image décrivant la branche ,
// le titre de la branche,
// le nom de 5 produit de la branche en question 


const Styledheader = styled(Header)`
   &&&{
      margin-bottom: 3px;
   }
`;

//composant élément du menu de la barre du haut non stylé

const UnstyledSidebarMenuItem = (props) => {
   return(
      <div className={props.className} >
         <Image height={60} rounded src={logo} />
         <div>
            <Styledheader className={props.className} as='h4'>informatique</Styledheader>
            <p>product , product, product, product</p>
         </div>
      </div>
   );
};

//composant de la barre du haut avec des styles css appliqués


const SidebarMenuItem = styled(UnstyledSidebarMenuItem)`
   &&&&{
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 3px;
      padding:3px;
            

      
   }
`;


export default SidebarMenuItem;