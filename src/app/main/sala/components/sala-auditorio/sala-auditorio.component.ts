import { Component } from '@angular/core';
import { SalaCadeiraService } from '../../services/sala-cadeira.service';

@Component({
  selector: 'sala-auditorio',
  templateUrl: './sala-auditorio.component.html',
  styleUrls: ['./sala-auditorio.component.scss']
})
export class SalaAuditorioComponent {
  public listaAssentos: any = {}

  constructor(
    private _serviceSalaCadeira: SalaCadeiraService,
  ){
    this.getListaAssentos()
  }

  getListaAssentos(){
    return this._serviceSalaCadeira.find().subscribe(data => {
      this.listaAssentos = data
    })
  }
}
