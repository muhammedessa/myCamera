import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    
loggedin= false;

constructor(public fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
       console.log(this.loggedin) ;
  }
     
    
  logInGoogle(){
 
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res =>{
    console.log(res)
               this.loggedin=true;
        console.log(this.loggedin);
       
        }) 

  }
    
logout(){
    this.fire.auth.signOut();
     this.loggedin= false;
    console.log(this.loggedin);
}   
    
    
    

}
