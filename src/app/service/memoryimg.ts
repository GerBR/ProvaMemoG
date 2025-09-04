import { Injectable } from '@angular/core';

import { MemoryInfo } from '../interfaces/memorypeces';

@Injectable({
  providedIn: 'root'
})
export class MemoryimagesService {
  protected memoryImgList: MemoryInfo[] = [
   {
     id: '0',
    imagePaths: [
        'imatges/nino01.jpg',
        'imatges/nino02.jpg',
        'imatges/nino03.jpg',
        'imatges/nino04.jpg',
        'imatges/nino05.jpg',
        'imatges/nino06.jpg',
        'imatges/nino07.jpg',
        'imatges/nino08.jpg',
        'imatges/nino09.jpg',
        'imatges/nino10.jpg',
        'imatges/nino11.jpg',
        'imatges/nino12.jpg',
        'imatges/nino13.jpg',
        'imatges/nino14.jpg',
        'imatges/nino15.jpg',
        'imatges/nino16.jpg',
        'imatges/nino17.jpg',
        'imatges/nino18.jpg',
        'imatges/nino19.jpg',
        'imatges/nino20.jpg',
    ]
  },
    {
     id: '1',
    imagePaths: [
      'imatges/AnimalsCap_min00.jpg',
      'imatges/AnimalsCap_min01.jpg',
      'imatges/AnimalsCap_min02.jpg',
      'imatges/AnimalsCap_min03.jpg',
      'imatges/AnimalsCap_min04.jpg',
      'imatges/AnimalsCap_min05.jpg',
      'imatges/AnimalsCap_min06.jpg',
      'imatges/AnimalsCap_min07.jpg',
      'imatges/AnimalsCap_min08.jpg',
      'imatges/AnimalsCap_min09.jpg',
    ]
  },
    {
    id: '2',
    imagePaths: [
      'imatges/ram_00.jpg',
      'imatges/ram_01.jpg',
      'imatges/ram_02.jpg',
      'imatges/ram_03.jpg',
      'imatges/ram_04.jpg',
      'imatges/ram_05.jpg',
      'imatges/ram_06.jpg',
      'imatges/ram_07.jpg',
      'imatges/ram_08.jpg',
    ]
  },
    {
    id: '3',
    imagePaths: [
      'imatges/im_02.jpg',
      'imatges/im_03.jpg',
      'imatges/im_04.jpg',
      'imatges/im_05.jpg',
      'imatges/im_06.jpg',
      'imatges/im_07.jpg',
      'imatges/im_08.jpg',
      'imatges/im_04.jpg',
      'imatges/im_05.jpg',
      'imatges/im_06.jpg',
      'imatges/im_07.jpg',
      'imatges/im_08.jpg',
    ]
  },
  {
    id: '4',
    imagePaths: [
      'imatges/im_02.jpg',
      'imatges/im_03.jpg',
      'imatges/im_04.jpg',
      'imatges/im_05.jpg',
      'imatges/im_06.jpg',
      'imatges/im_07.jpg',
      'imatges/im_08.jpg',
    ]
  },
    {
     id: '5',
    imagePaths: [
      'imatges/im_02.jpg',
      'imatges/im_03.jpg',
      'imatges/im_04.jpg',
      'imatges/im_05.jpg',
      'imatges/im_06.jpg',
      'imatges/im_07.jpg',
      'imatges/im_08.jpg',
      'imatges/im_04.jpg',
      'imatges/im_05.jpg',
      'imatges/im_06.jpg',
      'imatges/im_07.jpg',
      'imatges/im_08.jpg',
      'imatges/im_09.jpg',
      'imatges/im_10.jpg',
      'imatges/im_11.jpg',
      'imatges/im_12.jpg',
      'imatges/im_13.jpg',
      'imatges/im_14.jpg',
    ]
  },
   
  ];

  getAllMemoryImg(): MemoryInfo[] {
    return this.memoryImgList;
  }
  getOneMemoryImg(id: string): MemoryInfo | undefined {
    return this.memoryImgList.find((memory) => memory.id === id);
  }

  
}
