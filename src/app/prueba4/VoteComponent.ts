import { EventEmitter } from "@angular/core";

export class VoteComponent{
    votosTotales= 0;
    votosCambiados = new EventEmitter();

    sumarVoto(){
        this.votosTotales ++;
        this.votosCambiados.emit(this.votosTotales);
    }

}