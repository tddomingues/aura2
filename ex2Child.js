import { LightningElement, api } from 'lwc';

export default class child_oppsdaconta extends LightningElement {
    @api ide;
    @api nome;
    @api fase;
    @api valor;
}
