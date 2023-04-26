import { LightningElement, api } from 'lwc';

export default class ex2_linkagem extends LightningElement {
    @api primeironome;
    @api sobrenome;
    @api idade;
    @api email;
    @api classificacao;
    @api empresa;
    @api receitaanual;
}
