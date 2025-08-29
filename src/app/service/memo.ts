import { Injectable } from '@angular/core';
import { OneMemoryInfo } from '../interfaces/onememory';

@Injectable({
  providedIn: 'root'
})



export class MemoService {
  
  //per afinar la ruta path de les imatges 
  //  readonly baseUrl = 'https://angular.dev/assets/imatges/tutorials/common';

  protected memoInfoList: OneMemoryInfo[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `assets/imatges/im_01.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
       photo: `assets/imatges/im_02.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
       photo: `assets/imatges/im_03.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `assets/imatges/im_04.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
       photo: `assets/imatges/im_05.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
       photo: `assets/imatges/im_06.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
       photo: `assets/imatges/im_07.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
       photo: `assets/imatges/im_08.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
       photo: `assets/imatges/im_09.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
       photo: `assets/imatges/im_10.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
  
  getAllMemo(): OneMemoryInfo[] {
    return this.memoInfoList;
  }
  getMemoById(id: number): OneMemoryInfo | undefined {
    return this.memoInfoList.find((memo) => memo.id === id);
  }

  
}
