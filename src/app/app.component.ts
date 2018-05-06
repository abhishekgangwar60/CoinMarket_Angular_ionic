import { ThemeProvider } from './../providers/theme/theme';
import { MenuPageDeatils } from './../Common/app.constants';
import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { Nav, Platform, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activeTheme: any;
  pages: Array<any>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private themeProvider: ThemeProvider) {
    this.initializeApp();

    // Getting the theme configurations from theme provider
    this.themeProvider.getActiveTheme().subscribe(theme => this.activeTheme = theme);
    // defining value of menu pages
    this.pages = MenuPageDeatils.Pages;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * Opens Selected page
   * @param pageName 
   */
  openPage(pageName: string) {
    this.nav.push(pageName);
  }
}
