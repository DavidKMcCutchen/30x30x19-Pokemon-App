import { Component } from '@angular/core';


@Component({
  selector: 'pokemon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Pokemon';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'pokemon', icon: 'view_list', title: 'Pokemon'}
  ]
}
