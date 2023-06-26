import {Component} from '@angular/core'

@Component({

    selector: 'app-contador',
    template:`
    <H1>{{titulo}}</H1>
    <h3><strong>{{base}}</strong></h3>
    <button (click)="acumular(base)">{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">{{base}}</button>
    `


})
export class ContadorComponent{
    titulo: string = 'contador APP';
    numero: number=10;
    base: number=5;
  
  /*sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }*/
  
  
  acumular(valor:number){
    this.numero+=valor;
  
  }
}