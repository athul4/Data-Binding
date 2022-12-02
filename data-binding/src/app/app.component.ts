import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  imagePath = '/assets/images/sample.jpg';
  defaultVal = 'Athul';
  
  passValueToComponent(e:any){
    console.log(e.target.value);
  }
}
