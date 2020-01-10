import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  public static sessionStorage = {
    set(key: string, value: any) {
      sessionStorage.setItem(key, JSON.stringify(value));
    },
    get(key: string) {
      const jsonString = sessionStorage.getItem(key);
      if (jsonString && jsonString != 'undefined' && jsonString != 'null') {
        return JSON.parse(jsonString);
      }
      return null;
    },
    remove(key: string) {
      sessionStorage.removeItem(key);
    },
    clear() {
      sessionStorage.clear();
    }
  };

  public static localStorage = {
    set(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    get(key: string) {
      const jsonString = sessionStorage.getItem(key);
      if (jsonString && jsonString != 'undefined' && jsonString != 'null') {
        return JSON.parse(jsonString);
      }
      return null;
    },
    remove(key: string) {
      localStorage.removeItem(key);
    },
    clear() {
      localStorage.clear();
    }
  };
}
