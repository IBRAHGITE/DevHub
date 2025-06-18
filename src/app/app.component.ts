import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { liste } from './models/mock-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'miniForum';
  data = liste;
  constructor(){
    localStorage.setItem('comment',JSON.stringify(this.data))
  }
  ngOnInit(): void {
    const user = prompt("Veuillez saisir votre nom svp")
    console.log(user);

    localStorage.setItem('user',JSON.stringify(user))
  }
}
