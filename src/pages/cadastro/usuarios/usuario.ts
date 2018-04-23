import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


 
@Component({
  selector: 'page-ususario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage {
 
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