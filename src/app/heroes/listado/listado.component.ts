import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Batman', 'Superman', 'Thor', 'Wonderwoman']
  heroeBorrado: string = '';
  
  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
