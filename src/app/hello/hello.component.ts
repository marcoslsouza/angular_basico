import { Component} from '@angular/core';

@Component({
    selector: 'hello', 
    templateUrl: './hello.component.html'
})
export class HelloComponent {

    //private nome : string;
    public clientes : Cliente[];

    constructor() {
        //this.nome = 'Marcos';
        let fulano = new Cliente('Maria', 20);
        let cicrano = new Cliente('João', 22);
        let outro = new Cliente('Marcos', 39);
        this.clientes = [fulano, cicrano, outro];
    }

}

class Cliente {
    constructor(public nome : string, public idade : number) {
    }
}