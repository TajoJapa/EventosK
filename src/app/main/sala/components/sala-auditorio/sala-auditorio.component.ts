import { Component } from '@angular/core';

@Component({
  selector: 'sala-auditorio',
  templateUrl: './sala-auditorio.component.html',
  styleUrls: ['./sala-auditorio.component.scss']
})
export class SalaAuditorioComponent {
  public listaAssentos: any = this.getListaAssentos()

  getListaAssentos(){
    return {
      terreo: [
        {
          fileira: 'M',
          ordem: 1,
          assentos: [
 
          ]
        },
        {
          fileira: 'L',
          ordem: 2,
          assentos: [
 
          ]
        },
        {
          fileira: 'K',
          ordem: 3,
          assentos: [
 
          ]
        },
        {
          fileira: 'J',
          ordem: 4,
          assentos: [
 
          ]
        },
        {
          fileira: 'I',
          ordem: 5,
          assentos: [
 
          ]
        },
        {
          fileira: 'H',
          ordem: 6,
          assentos: [
            {
              fileira:"H",
              cadeira:"34",
              tipoCadeira:"PMR",
              chave:"H34",
              ordem:1,
            },
          ]
        },
        {
          fileira: 'G',
          ordem: 7,
          assentos: [
 
          ]
        },
        {
          fileira: 'F',
          ordem: 8,
          assentos: [
 
          ]
        },
        {
          fileira: 'E',
          ordem: 9,
          assentos: [
 
          ]
        },
        {
          fileira: 'D',
          ordem: 10,
          assentos: [
 
          ]
        },
        {
          fileira: 'C',
          ordem: 11,
          assentos: [
 
          ]
        },
        {
          fileira: 'B',
          ordem: 12,
          assentos: [
 
          ]
        },
        {
          fileira: 'A',
          ordem: 13,
          assentos: [
            {
              fileira:"A",
              cadeira:"20",
              tipoCadeira:"NORMAL",
              chave:"A20",
              ordem:1
            },
            {
              fileira:"A",
              cadeira:"18",
              tipoCadeira:"NORMAL",
              chave:"A18",
              ordem:2
            },
            {
              fileira:"A",
              cadeira:"16",
              tipoCadeira:"NORMAL",
              chave:"A16",
              ordem:3
            },
            {
              fileira:"A",
              cadeira:"14",
              tipoCadeira:"NORMAL",
              chave:"A14",
              ordem:4
            },
            {
              fileira:"A",
              cadeira:"12",
              tipoCadeira:"NORMAL",
              chave:"A12",
              ordem:5
            },
            {
              fileira:"A",
              cadeira:"10",
              tipoCadeira:"OBESO",
              chave:"A10",
              ordem:6
            },
            {
              fileira:"A",
              cadeira:"08",
              tipoCadeira:"NORMAL",
              chave:"A08",
              ordem:7
            },
            {
              fileira:"A",
              cadeira:"06",
              tipoCadeira:"NORMAL",
              chave:"A06",
              ordem:8
            },
            {
              fileira:"A",
              cadeira:"04",
              tipoCadeira:"NORMAL",
              chave:"A04",
              ordem:9
            },
            {
              fileira:"A",
              cadeira:"02",
              tipoCadeira:"NORMAL",
              chave:"A02",
              ordem:10
            },
            {
              fileira:"A",
              cadeira:"01",
              tipoCadeira:"NORMAL",
              chave:"A01",
              ordem:11
            },
            {
              fileira:"A",
              cadeira:"03",
              tipoCadeira:"NORMAL",
              chave:"A03",
              ordem:12
            },
            {
              fileira:"A",
              cadeira:"05",
              tipoCadeira:"NORMAL",
              chave:"A05",
              ordem:13
            },
            {
              fileira:"A",
              cadeira:"07",
              tipoCadeira:"NORMAL",
              chave:"A07",
              ordem:14
            },
            {
              fileira:"A",
              cadeira:"09",
              tipoCadeira:"NORMAL",
              chave:"A09",
              ordem:15
            },
            {
              fileira:"A",
              cadeira:"11",
              tipoCadeira:"NORMAL",
              chave:"A11",
              ordem:16
            },
            {
              fileira:"A",
              cadeira:"13",
              tipoCadeira:"OBESO",
              chave:"A13",
              ordem:17
            },
            {
              fileira:"A",
              cadeira:"15",
              tipoCadeira:"NORMAL",
              chave:"A15",
              ordem:18
            },
            {
              fileira:"A",
              cadeira:"17",
              tipoCadeira:"NORMAL",
              chave:"A17",
              ordem:19
            },
            {
              fileira:"A",
              cadeira:"19",
              tipoCadeira:"NORMAL",
              chave:"A19",
              ordem:20
            },
            {
              fileira:"A",
              cadeira:"21",
              tipoCadeira:"NORMAL",
              chave:"A21",
              ordem:21
            },
            {
              fileira:"A",
              cadeira:"23",
              tipoCadeira:"NORMAL",
              chave:"A23",
              ordem:22
            },
            {
              fileira:"A",
              cadeira:"25",
              tipoCadeira:"NORMAL",
              chave:"A25",
              ordem:23
            },
          ]
        }
      ],
      mezanino: [
        {
          fileira: 'P',
          ordem: 1,
          assentos: [
            {
              fileira:"P",
              cadeira:"34",
              tipoCadeira:"NORMAL",
              chave:"P34",
              ordem:1
            },
            {
              fileira:"P",
              cadeira:"32",
              tipoCadeira:"NORMAL",
              chave:"P32",
              ordem:2
            },
          ]
        },
        {
          fileira: 'O',
          ordem: 2,
          assentos: [
            {
              fileira:"O",
              cadeira:"36",
              tipoCadeira:"NORMAL",
              chave:"O36",
              ordem:1
            },
            {
              fileira:"O",
              cadeira:"34",
              tipoCadeira:"NORMAL",
              chave:"O34",
              ordem:2
            },
          ]
        }
      ]
    }
  }
}
