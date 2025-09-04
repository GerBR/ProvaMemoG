import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { llistajocsComponent } from '../components/llistajocs/llistajocs.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonSearchbar, IonHeader, IonToolbar, IonTitle, IonContent, llistajocsComponent,
  ],
})
export class Tab1Page {
    
  constructor() {
    // this.memoryImgList = this.memoryImgList.getAllMemoyimg();
  }
}


