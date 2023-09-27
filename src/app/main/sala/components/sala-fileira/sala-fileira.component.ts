import { Component, Input } from '@angular/core';

@Component({
  selector: 'sala-fileira',
  templateUrl: './sala-fileira.component.html',
  styleUrls: ['./sala-fileira.component.scss']
})
export class SalaFileiraComponent {
  @Input() fileira!: any
}
