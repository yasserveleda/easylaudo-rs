import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as printJS from 'print-js';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  formCadastro: FormGroup;
  controls = {
    latitude: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required]),
    data: new FormControl('', [Validators.required]),
    nomeImovel: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    cad: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    objetivo: new FormControl('', [Validators.required]),
    tipoImovel: new FormControl('', [Validators.required]),
    pavimentos: new FormControl('', [Validators.required]),
    areaTerreno: new FormControl('', [Validators.required]),
    areaEdificacao: new FormControl('', [Validators.required]),
    imovelUrbanoRural: new FormControl('', [Validators.required]),
    tipologia: new FormControl('', [Validators.required]),
    escritura: new FormControl('', [Validators.required]),
    classificacao: new FormControl('', [Validators.required]),
    observacao: new FormControl('', [Validators.required]),
  };

  srcMap = '';
  mapVisible = false;

  constructor() {
    this.formCadastro = new FormGroup(this.controls);
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.showPosition(longitude, latitude);
      });
    } else {
      console.log("No support for geolocation")
    }
  }

  showPosition(Longitude: number, Latitude: number) {
    this.formCadastro.controls['latitude'].setValue(Latitude);
    this.formCadastro.controls['longitude'].setValue(Longitude);
    const urlMap = `https://www.google.com/maps/embed/v1/view?key=AIzaSyAO2zml3apjy20ZHKkM3g8owMWosl9483s&center=${Latitude},${Longitude}&zoom=18&maptype=satellite`;
    this.srcMap = urlMap;
    this.mapVisible = true;
  }

  print(): void {
    // printJS('printable', 'html');
    printJS({
      printable: 'laudo-download',
      type: 'html',
      style: '#laudo-download h1{text-align:center}#laudo-download .table{margin:80px auto 0;width:968px;border-bottom:1px solid}#laudo-download .table .inline{display:flex}#laudo-download .table .inline .row{border-right:none;width:100%}#laudo-download .table .inline .row.classificacao{min-height:35px;height:auto}#laudo-download .table .inline .row.classificacao:first-child{width:30px}#laudo-download .table .inline .row.classificacao:last-child{width:100%}#laudo-download .table .inline .row:last-child{border-right:1px solid}#laudo-download .table .row{border:1px solid;border-bottom:none;height:35px;padding:0 10px}#laudo-download .table .row h3{font-weight:500;margin:0}#laudo-download .table .row h3 span{font-weight:400}#laudo-download .table .row.destruida{background-color:red}'
    })
  }

}
