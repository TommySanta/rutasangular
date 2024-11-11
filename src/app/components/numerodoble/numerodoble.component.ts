import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css'
})
export class NumerodobleComponent {
  public numero !: number;
  public doble !: number
  constructor(private _activeRoute: ActivatedRoute
    , private _router: Router
  ){}

  goToHome():void{
    this._router.navigate(["/"]);
  }
  redirect(num: number):void{
    this._router.navigate(["/doble",num])
  }
  ngOnInit():void{
    this._activeRoute.params.subscribe((parametros: Params)=>{
      if(parametros['numero']!=null){
        this.numero= parseInt(parametros['numero']);
        this.doble = this.numero *2;
      }
    })
  }

}
