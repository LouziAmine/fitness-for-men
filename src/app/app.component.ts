import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'fitness-for-men';
  imageUrl: string = 'assets/image/www.PNG';


  textInput: string = '';

  // onInputChange(): void {
  //   // Display an alert with the current text input value
  //   alert('Text input value: ' + this.textInput);
  // }

  // goToNextStep(): void {
  //   // Add logic to navigate to the next step
  //   //console.log('Moving to the next step...');
  //   // You can add router navigation logic here if you're using Angular Router
  //
  //   alert('Text input value: ' + this.textInput);
  // }

}
