import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface IStorageHelper {
    set(key: string, value: any): Promise<boolean>;
    get(key: string): Promise<any>;
    remove(key: string): Promise<boolean>;
    destroy();
}

@Injectable()
export class GlobalStorage implements IStorageHelper {
    private static instance: GlobalStorage;

    constructor(private storage: Storage) {
        return GlobalStorage.instance = GlobalStorage.instance || this;
    }

    set(key: string, value: any): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            this.storage.set(key, value).then(response => {
                resolve(true);
            })
        });
    }

    get(key: string): Promise<any> {
        return this.storage.get(key);
    }

    remove(key: string): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            this.storage.remove(key).then(response => {
                resolve(true);
            })
        });
    }

    destroy() {
        this.storage.clear();
    }

}