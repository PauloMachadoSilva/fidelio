import { LoginPage } from './../login/login';
import { NavController, AlertController, ActionSheetController, MenuController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';

@Component({
    selector: 'page-main',
    templateUrl: 'tabs.html'
  })
  export class TabsPage {
      firstAccess = true;
  
      tab1Root = HomePage;
  
      loaded = false;
      tabIndex = 0;
  
      constructor (
          public navCtrl: NavController,
          public alertCtrl: AlertController,
          public actionSheetCtrl: ActionSheetController,
          public menuCtrl: MenuController,

      ) {
  
      }

       /**
     * Confirm logout
     * @author Paulo Eduardo
     */
    confirmLogout (): void {
        let confirm = this.alertCtrl.create({
            title: 'Logout',
            message: 'Deseja sair da aplicação e voltar para a tela de login?',
            buttons: [
                {
                    text: 'Não',
                    handler: () => {

                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        this.logout();
                    }
                }
            ]
        });

        confirm.present();
    }

    close (): void {
        this.navCtrl.setRoot(TabsPage);
    }
    /**
     * Logout user
     * @author  Paulo Eduardo 
     */
    logout (): void {
        
        this.navCtrl.setRoot(LoginPage);
         
    }
}