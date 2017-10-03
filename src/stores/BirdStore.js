import {observable, computed, action} from 'mobx';


class BirdStore {

   @observable visibility = false;
   @action changevisibility = () =>{
      this.visibility = !this.visibility;
   }
   
   @observable hide = true;

   @action changeHide = () => {
      this.hide = !this.hide;
   } 
   
}
const store = new BirdStore();
export default store;