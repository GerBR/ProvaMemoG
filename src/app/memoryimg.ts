import { Injectable } from '@angular/core';
import { memoryg } from './memorypeces';

@Injectable({
  providedIn: 'root'
})
export class Memoryimages {
  protected memoryImgList: memoryg[] = [
  {
    1: 'imatges/im_01.jpg',
    2: 'imatges/im_02.jpg',
    3: 'imatges/im_03.jpg',
    4: 'imatges/im_04.jpg',
    5: 'imatges/im_05.jpg',
    6: 'imatges/im_06.jpg',
    7: 'imatges/im_07.jpg',
    8: 'imatges/im_08.jpg',

  },
  {
    1: 'imatges/im_01.jpg',
    2: 'imatges/im_02.jpg',
    3: 'imatges/im_03.jpg',
    4: 'imatges/im_04.jpg',
    5: 'imatges/im_05.jpg',
    6: 'imatges/im_06.jpg',
    7: 'imatges/im_07.jpg',
    8: 'imatges/im_08.jpg',

  },
    {
    1: 'imatges/im_01.jpg',
    2: 'imatges/im_02.jpg',
    3: 'imatges/im_03.jpg',
    4: 'imatges/im_04.jpg',
    5: 'imatges/im_05.jpg',
    6: 'imatges/im_06.jpg',
    7: 'imatges/im_07.jpg',
    8: 'imatges/im_08.jpg',

  },
    {
    1: 'imatges/im_01.jpg',
    2: 'imatges/im_02.jpg',
    3: 'imatges/im_03.jpg',
    4: 'imatges/im_04.jpg',
    5: 'imatges/im_05.jpg',
    6: 'imatges/im_06.jpg',
    7: 'imatges/im_07.jpg',
    8: 'imatges/im_08.jpg',

  },
    {
    1: 'imatges/im_01.jpg',
    2: 'imatges/im_02.jpg',
    3: 'imatges/im_03.jpg',
    4: 'imatges/im_04.jpg',
    5: 'imatges/im_05.jpg',
    6: 'imatges/im_06.jpg',
    7: 'imatges/im_07.jpg',
    8: 'imatges/im_08.jpg',

  },
  ];
  getAllMemoyimg(): memoryg[] {
    return this.memoryImgList;
  }

  
}
