import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { GlobalStorage } from './global.storage';

@NgModule({
    providers: [
        GlobalStorage
    ],
    imports: [
        IonicStorageModule.forRoot({
            name: 'CoinMarket',
            driverOrder: ['indexeddb', 'websql']
        })
    ]
})
export class GlobalStorageModule { }