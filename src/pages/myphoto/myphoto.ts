import { Component   } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import * as firebase from 'firebase/app';
import {environment } from '../../environments/environment';
import { Camera, CameraOptions } from '@ionic-native/camera';
 
/**
 * Generated class for the MyphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myphoto',
  templateUrl: 'myphoto.html',
})
export class MyphotoPage {
  loggedin= false;  
    mySelectedPhoto;
    loading;
    currentPhoto ;
    imgSource;

constructor( public loadingCtrl:LoadingController ,public camera:Camera ,public navCtrl: NavController, public navParams: NavParams) {
      firebase.initializeApp(environment.firebase);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyphotoPage');
  }
    
    
takePhoto(){
const options: CameraOptions = {
    quality : 100,
    targetHeight:200,
    targetWidth:200,
    destinationType : this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) =>{
    this.loading = this.loadingCtrl.create({
        content: "Taking photo wait ..."
         });
  this.loading.present();
this.mySelectedPhoto = this.dataURLtoBlob('data:image/jpeg;base64,'+imageData);
    this.upload();
        
        },(err)=>{
    console.log(err);
        });


}

    
    
dataURLtoBlob(myURL){
    let binary = atob(myURL.split(',')[1]);
let array = [];
for (let i = 0 ; i < binary.length;i++){
    array.push(binary.charCodeAt(i));
}
    return new Blob([new Uint8Array(array)],{type:'image/jpeg'});
}    
    
    
upload(){
if(this.mySelectedPhoto){
    var uploadTask = firebase.storage().ref().child('images/myphoto.jpg').put(this.mySelectedPhoto);
    uploadTask.then(this.onSuccess,this.onErrors);
}
}    
    
onSuccess=(snapshot)=>{
    this.currentPhoto = snapshot.downloadURL;
    this.loading.dismiss();
} 
    
onErrors=(error)=>{
    console.log(error);
    this.loading.dismiss();
}   
    
getMyURL(){
    firebase.storage().ref().child('images/myphoto.jpg').getDownloadURL().then((url)=>{
        this.imgSource = url;
        })
}
    
    
    
    
    
    
 logInGoogle(){
 var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(res =>{
    console.log(res)
               this.loggedin=true;
        console.log(this.loggedin);
       
        })

  }
    
//logout(){
//   firebase.auth().signOut();
//     this.loggedin= false;
//    console.log(this.loggedin);
//}       
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}










