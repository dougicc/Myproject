import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myVar = 'this is my text';
  todos = ['Buy Milk','Learn Ionic'];
  newTodo = '';
  myImage = null;

  constructor(private router: Router, private camera: Camera ) {


  }

   captureImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myImage = base64Image;
    }, (err) => {
      // Handle error
     });
   }
  
  

  addTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
    console.log('todos: ',this.todos);

  }
openPage() {
  this.router.navigateByUrl('details')
}

foo() {
  return 'Hello Angular';
}
}
