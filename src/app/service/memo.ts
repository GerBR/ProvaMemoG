import { Injectable } from '@angular/core';
import { OneMemoryInfo } from '../interfaces/onememory';

@Injectable({
  providedIn: 'root'
})

export class MemoService {
  
  //per afinar la ruta path de les imatges 
  protected memoInfoList: OneMemoryInfo[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `assets/imatges/nino01.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
       photo: `assets/imatges/AnimalsCap_min06.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
       photo: `assets/imatges/ram_05.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];
  
  getAllMemo(): OneMemoryInfo[] {
    return this.memoInfoList;
  }
  getMemoById(id: number): OneMemoryInfo | undefined {
    return this.memoInfoList.find((memo) => memo.id === id);
  }

  
}
