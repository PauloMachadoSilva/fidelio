import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EmpresaPage } from './../pages/cadastro/empresas/empresa';
import { UsuarioPage } from '../pages/cadastro/usuarios/usuario';
import { ContextMenu } from '../components/context-menu/context-menu';

import { androidConfig } from './../config/android.config';
import { iosConfig } from './../config/ios.config';
import { PaisesProvider } from './../providers/providers';
import { HttpModule } from '@angular/http';


//import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ContextMenu,
    EmpresaPage,
    UsuarioPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
          //Configurações de plataformas
          android: androidConfig,
          ios: iosConfig
      }
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ContextMenu,
    EmpresaPage,
    UsuarioPage,    
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //Geolocation,
    PaisesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
