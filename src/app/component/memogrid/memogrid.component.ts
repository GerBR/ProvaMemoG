import { Component, inject, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

import { MemoService } from 'src/app/service/memo';
import { OneMemoryInfo } from 'src/app/interfaces/onememory';

@Component({
  selector: 'app-memogrid',
  templateUrl: './memogrid.component.html',
  styleUrls: ['./memogrid.component.scss'],
  imports: [ IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule]

})
export class MemoGridComp implements OnInit {
  memoryList: OneMemoryInfo[] = [];
  private memoService = inject(MemoService);

  ngOnInit(): void {
    this.memoryList = this.memoService.getAllMemo();
  }
}