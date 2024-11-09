import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { CnpjService } from './cnpj.service';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css']
})
export class CnpjComponent implements OnInit {
  @Input() titleHome = 'Consultando CNPJ';
  buscacnpj: string = '';
  buscar: boolean = false;

  constructor(
    private cnpjService: CnpjService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Buscando CNPJ');
  }

  buscarCNPJ(buscacnpj: any, form: any) {
    if (buscacnpj !== null && buscacnpj !== '') {
      this.cnpjService.consultaCNPJ(buscacnpj).subscribe({
        next: (dados: any) => {
          this.buscar = true;
          setTimeout(() => {
            this.populaCNPJForm(dados, form);
          }, 100);
        },
        error: () => {
          this.resetaCNPJForm(form);
          this.buscar = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Atenção',
            detail: 'Erro ao buscar CNPJ!'
          });
        }
      });
    }
  }

  populaCNPJForm(dados: any, formulario: any) {
    formulario.form.patchValue({
      razaoSocial: dados.razao_social,
      nomeFantasia: dados.nome_fantasia,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.municipio,
      estado: dados.uf
    });
  }

  resetaCNPJForm(formulario: any) {
    formulario.form.patchValue({
      razaoSocial: null,
      nomeFantasia: null,
      logradouro: null,
      bairro: null,
      cidade: null,
      estado: null
    });
    this.buscar = false;
  }
}
