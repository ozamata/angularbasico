import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
    
  private _personajes:Personaje[]=[
    {nombre:'goku',
    poder:1110},
    {nombre:'vegeta',
    poder:3444},
  ];

  get personajes():Personaje[] {
    return [...this._personajes];
  }


    constructor(){
    }
    agregarPersonaje(personaje:Personaje){
      this._personajes.push(personaje);

    }


}