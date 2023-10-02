import { Component, Input } from '@angular/core';

@Component({
  selector: 'sala-cadeira',
  templateUrl: './sala-cadeira.component.html',
  styleUrls: ['./sala-cadeira.component.scss']
})
export class SalaCadeiraComponent {
  @Input() assento!: string
  @Input() tipo: 'NORMAL' | 'OBESO' | 'PMR' | 'CADEIRANTE' = 'NORMAL'
  @Input() fileira!: string
  @Input() setor!: number
  @Input() reservado!: boolean
  @Input() reserva: any
  @Input() chave: any

  public selecionaCadeira(event: any){
    alert(this.chave)
  }
}
