import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {
heroes: string[]=['AMERICA','spiderman', 'hironman', 'goku', 'pegaso'];
heroeBorrado: string='';

borrarHeroe(){
this.heroeBorrado=this.heroes.shift() || '';
console.log();

}


}
