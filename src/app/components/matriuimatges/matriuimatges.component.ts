import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-matriuimatges',
  templateUrl: './matriuimatges.component.html',
  styleUrls: ['./matriuimatges.component.scss'],
  imports: [CommonModule, IonContent],
})

export class MatriuimatgesComponent {

  imatges: string[] = [
    'imatges/im_01.jpg',
    'imatges/im_02.jpg',
    'imatges/im_03.jpg',
    'imatges/im_04.jpg',
    'imatges/im_05.jpg',
    'imatges/im_06.jpg',
    'imatges/im_07.jpg',
    'imatges/im_08.jpg',

  ];
  
  getBackgroundStyle(nomImatge: string) {
    return {
      'background-image': `url(assets/${nomImatge})`
    };
  }
}
