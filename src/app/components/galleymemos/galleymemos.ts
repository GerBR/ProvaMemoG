import { Component, inject } from '@angular/core';

import { OneMemoryInfo } from 'src/app/interfaces/onememory';
import { GridbasesComponent } from '../gridbases/gridbases.component';
import { MemoService } from '../../service/memo';
import { IonRow, IonGrid, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-galleymemos',
  imports: [IonGrid, IonRow, GridbasesComponent ],
  templateUrl: './galleymemos.html',
  styleUrl: './galleymemos.scss'
})
export class Galleymemos {
  memoInfoList: OneMemoryInfo[] = [];
  MemoService: MemoService = inject(MemoService);

  constructor() {
    this.memoInfoList = this.MemoService.getAllMemo();
  }
}
