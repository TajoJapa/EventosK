import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaRoutingModule } from './sala-routing.module';
import { SalaAuditorioComponent } from './components/sala-auditorio/sala-auditorio.component';
import { SalaCadeiraComponent } from './components/sala-cadeira/sala-cadeira.component';
import { SalaPageComponent } from './page/sala-page/sala-page.component';
import { SalaFileiraComponent } from './components/sala-fileira/sala-fileira.component';
import { SalaCadeiraService } from './services/sala-cadeira.service';


@NgModule({
  declarations: [
    SalaAuditorioComponent,
    SalaCadeiraComponent,
    SalaPageComponent,
    SalaFileiraComponent
  ],
  imports: [
    CommonModule,
    SalaRoutingModule
  ],
  exports:[
    SalaPageComponent
  ],
  providers:[
    SalaCadeiraService
  ]
})
export class SalaModule { }
