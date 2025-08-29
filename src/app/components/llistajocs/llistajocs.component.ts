import { Component, inject } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { OneMemoryInfo } from 'src/app/interfaces/onememory'; 
import { MemoService } from 'src/app/service/memo';
import { targlistmemo } from '../targlistmemo/targlistmemo.component';

@Component({
  selector: 'app-llistajocs',
  templateUrl: 'llistajocs.component.html',
  styleUrls: ['llistajocs.component.scss'],
  imports: [  targlistmemo,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  
  ],
})
export class llistajocsComponent {
   memoInfoList: OneMemoryInfo[] = [];
  MemoService: MemoService = inject(MemoService);

  constructor() {
    this.memoInfoList = this.MemoService.getAllMemo();
  }
}