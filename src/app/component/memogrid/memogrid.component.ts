import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonGrid,IonRow,IonCol,
  IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent, 
  IonIcon } from '@ionic/angular/standalone';
import { MemoService } from '../../service/memo';
import { OneMemoryInfo } from '../../interfaces/onememory';

import { addIcons } from 'ionicons';
import { people, person, addCircle, checkmarkCircle } from 'ionicons/icons';

@Component({
  selector: 'app-memogrid',
  templateUrl: './memogrid.component.html',
  styleUrls: ['./memogrid.component.scss'],
  standalone: true, //ES NECESSARI AFEGIR AQUESTA LINIA ??
  imports: [IonIcon, 
    CommonModule,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    
  ],
})

export class MemoGridComp implements OnInit {
 
  public memoryList: OneMemoryInfo[] = [];
  private memoService = inject(MemoService);
  private router = inject(Router);
  constructor() {
     /**ELIMINAR ICONES NO NECESSARIS     */
    addIcons({ people, person, addCircle, checkmarkCircle });
   }

  ngOnInit() {
    this.memoryList = this.memoService.getAllMemo();
  }

  onMemoryClick(id: number): void {
    this.router.navigate(['/details', id]);
  }
}