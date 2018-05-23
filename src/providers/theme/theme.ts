import { GlobalStorage } from './../../helpers/storage/global.storage';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeProvider {

  private theme: BehaviorSubject<string>;

  constructor(private globalStorage: GlobalStorage) {
    this.theme = new BehaviorSubject('dark-theme');
  }

  /**
   * Gets the selected theme
   */
  public getActiveTheme() {
    this.globalStorage.get("ApplicationMode").then((res) => {
      if (res === "NightMode") {
        this.theme.next('dark-theme');
      } else {
        this.theme.next('light-theme');
      }
    })
    return this.theme.asObservable();
  }

  /**
   * Sets a Given Theme
   */
  public setActiveTheme(isNightMode: boolean) {
    if (isNightMode) {
      this.globalStorage.set("ApplicationMode", "NightMode").then((res) => {
        this.theme.next('dark-theme');
      })
    } else {
      this.globalStorage.set("ApplicationMode", "DayMode").then((res) => {
        this.theme.next('light-theme');
      })
    }
  }
}
