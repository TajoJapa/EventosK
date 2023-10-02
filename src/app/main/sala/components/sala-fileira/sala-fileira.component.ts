import { Component, Input } from '@angular/core';

@Component({
  selector: 'sala-fileira',
  templateUrl: './sala-fileira.component.html',
  styleUrls: ['./sala-fileira.component.scss']
})
export class SalaFileiraComponent {
  public _fileira!: any
  public setores!: any;


  @Input() set fileira(value: any) {
    this._fileira = value
      this.separaSetor(value)
  }

 private separaSetor(fileira: any){
  let setores: Array<any> = []
  fileira.assentos.forEach((val: any) => {
    if(!setores[val.setor]){
      setores[val.setor] = []
    }
    
    setores[val.setor].push(val)
  })
  this.setores = setores
 } 
}
