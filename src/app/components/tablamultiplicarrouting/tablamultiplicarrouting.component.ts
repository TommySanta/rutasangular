import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-tablamultiplicarrouting',
  templateUrl: './tablamultiplicarrouting.component.html',
  styleUrl: './tablamultiplicarrouting.component.css'
})
export class TablamultiplicarroutingComponent {
  public numero !: number;
  tabla: number[] = [];
  constructor(private _activeRoute: ActivatedRoute
  ){}

  ngOnInit():void{
    this._activeRoute.params.subscribe((parametros: Params)=>{
      if(parametros['numero']!=null){
        this.numero= parseInt(parametros['numero']);
        this.generarTabla();
      }
    })
  }
  generarTabla(): void {
    this.tabla=[];
    for (let i = 1; i <= 10; i++) {
      this.tabla.push(i);
    }
  }

}
