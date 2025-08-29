import { Component, input, inject } from '@angular/core';
import { IonCol, } from '@ionic/angular/standalone';
import { OneMemoryInfo } from 'src/app/interfaces/onememory';
import { MemoService } from '../../service/memo';
@Component({
  selector: 'app-gridbases',
  templateUrl: './gridbases.component.html',
  styleUrls: ['./gridbases.component.scss'],
  imports: [IonCol],
})
export class GridbasesComponent  {
  memoInfoList: OneMemoryInfo[] = [];
  MemoService: MemoService = inject(MemoService);
  memoInfo = input.required<OneMemoryInfo>();

  constructor() {
    this.memoInfoList = this.MemoService.getAllMemo();
  }

}
