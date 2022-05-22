import { Component } from '@angular/core';
import { Character, Characters, ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fist-app';
  name = 'Robert';
  // generar una lista de 10 elementos
  lista = Array.from(Array(10)).map((_, i) => `Elemento ${i}`);
  constructor(private charactersService: ConfigService) {
    this.showCharactes();
  }
  visible = true;
  alternarVisibilidad() {
    this.visible = !this.visible;
  }
  characters: Character[] = [];
  showCharactes() {
    this.charactersService
      .getCharacters()
      .subscribe((data: Characters) => (this.characters = data.results));
  }
}
