import { AppState } from './../../app/app.state';
import { ThemeProvider } from './../../providers/theme/theme';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private isNightMode: boolean = AppState.nightMode;
  private selectedCurrency: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ThemeProvider: ThemeProvider) {
  }

  /**
   * Toggling Application theme
   */
  toggleApplicationTheme() {
    AppState.nightMode = this.isNightMode;
    this.ThemeProvider.setActiveTheme(this.isNightMode);
  }
}
