import { Injectable } from '@angular/core';

declare const window: any;

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  private scriptLoadedPromise: Promise<boolean>;

  constructor() {
    // Create a Promise that resolves when the script is loaded
    
    this.scriptLoadedPromise = new Promise<boolean>((resolve, reject) => {
      if (!window.OlvyUtils) {
      const script = document.createElement('script');
      script.src = 'https://app.olvy.co/scriptV2.js';
      script.onload = () => {
        // The script is loaded, so resolve the Promise
        resolve(true);
      };
      script.onerror = () => {
        // There was an error loading the script, so reject the Promise
        reject(new Error('Failed to load script.'));
      };
      document.body.appendChild(script);
    }
    });
  }

  async getUtils(): Promise<any> {
    if (window.OlvyUtils) {
      return window.OlvyUtils;
    }
    else{
       // Wait for the script to load before returning the utils object
    await this.scriptLoadedPromise;
    return window.OlvyUtils;
    }
  }
}

