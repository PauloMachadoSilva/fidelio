import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


 
@Component({
  selector: 'page-empresa',
  templateUrl: 'empresa.html'
})
export class EmpresaPage {
 
  constructor(public navCtrl: NavController,
             ) {
 
  }
 
  salvar ():void{
      alert('Salvo com sucesso!');
  }
  closeMe (): void {
    this.navCtrl.pop();
  }
}