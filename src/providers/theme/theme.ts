import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeProvider {

  private theme: BehaviorSubject<string>;

  constructor() {
    this.theme = new BehaviorSubject('dark-theme');
  }

  /**
   * Gets the selected theme
   */
  public getActiveTheme() {
    return this.theme.asObservable();
  }

  /**
   * Sets a Given Theme
   */
  public setActiveTheme(isNightMode: boolean) {
    if (isNightMode) {
      this.theme.next('dark-theme');
    } else {
      this.theme.next('light-theme');
    }
  }
}
