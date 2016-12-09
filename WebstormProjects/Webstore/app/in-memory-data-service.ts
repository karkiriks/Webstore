import {InMemoryDbService} from "angular-in-memory-web-api";
/**
 * Created by RIKS on 12/8/16.
 */

export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    let products = [
      { id: 11, name: 'iPhone 7' },
      { id: 12, name: 'iPhone 7 Plus' },
      { id: 13, name: 'iPad' },
      { id: 14, name: 'iPad Air' },
      { id: 15, name: 'iPad Pro' },
      { id: 16, name: 'Macbook Pro' },
      { id: 17, name: 'Macbook Air' },
      { id: 18, name: 'Mac Mini' },
      { id: 19, name: 'iWatch' },
      { id: 20, name: 'Apple TV' }
    ];
    return {products};
  }

}
