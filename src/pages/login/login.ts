import { HomePage } from './../home/home';
import { TabsPage } from './../tabs/tabs';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage{

    constructor(
        public navCtrl: NavController,
    )
    {

    }

    login ():void{
        this.navCtrl.setRoot(HomePage);
    }
}