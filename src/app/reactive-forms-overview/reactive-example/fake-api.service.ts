import { Injectable } from '@angular/core';

@Injectable()
export class FakeApiService {
  private colorMap = new Map<string, any[]>();
  private manufactureMap = new Map<string, any[]>();

  constructor() {
    this.colorMap.set('red', [
      { name: 'car one', color: 'red', manufacturer: 'ford' },
      { name: 'car two', color: 'red', manufacturer: 'ford' },
      { name: 'truck three', color: 'red', manufacturer: 'chevrolet' },
    ]);

    this.colorMap.set('black', [
      { name: 'car four', color: 'black', manufacturer: 'honda' },
      { name: 'truck five', color: 'black', manufacturer: 'honda' },
      { name: 'car six', color: 'black', manufacturer: 'ford' },
    ]);

    this.colorMap.set('green', [
      { name: 'car seven', color: 'green', manufacturer: 'hondai' },
      { name: 'truck eight', color: 'green', manufacturer: 'honda' },
      { name: 'car nine', color: 'green', manufacturer: 'chevrolet' },
    ]);

    this.manufactureMap.set('ford', [
      { name: 'car one', color: 'red', manufacturer: 'ford' },
      { name: 'car two', color: 'red', manufacturer: 'ford' },
      { name: 'car six', color: 'black', manufacturer: 'ford' },
    ]);

    this.manufactureMap.set('chevrolet', [
      { name: 'truck three', color: 'red', manufacturer: 'chevrolet' },
      { name: 'car nine', color: 'green', manufacturer: 'chevrolet' },
    ]);

    this.manufactureMap.set('honda', [
      { name: 'car four', color: 'black', manufacturer: 'honda' },
      { name: 'truck five', color: 'black', manufacturer: 'honda' },
      { name: 'truck eight', color: 'green', manufacturer: 'honda' },
    ]);

    this.manufactureMap.set('hondai', [
      { name: 'car seven', color: 'green', manufacturer: 'hondai' },
    ]);
  }

  getByManufacturer(name): Promise<any[]> {
    return Promise.resolve(this.manufactureMap.get(name));
  }

  getByColor(color): Promise<any[]> {

    return Promise.resolve(this.colorMap.get(color));
  }

  getByBoth(name, color): Promise<any[]> {
    const manufacturer = this.manufactureMap.get(name);

    if (!manufacturer) return this.resolveValueWithDelay([], 200);

    const items = manufacturer.filter(i => i.color === color);

    return this.resolveValueWithDelay(items, 200);
  }

  resolveValueWithDelay(val, delay) {
    return new Promise(resolve => {
      setTimeout( () => resolve(val), delay);
    });
  }
}
