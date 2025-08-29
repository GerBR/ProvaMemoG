import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { targetjocsComponent } from '../components/targetjocs/targetjocs.component';
import { llistajocsComponent } from '../components/llistajocs/llistajocs.component';
// import { memoryg } from '../memorypeces'; 
import { Memoryimages } from '../memoryimg';
import { memoryg } from '../memorypeces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, targetjocsComponent, llistajocsComponent,
    // Memoryimages,
  ],
})
export class Tab1Page {
  memoryImgList: memoryg[] = [];
  housingService: Memoryimages = inject(Memoryimages);
  
  constructor() {
    // this.memoryImgList = this.memoryImgList.getAllMemoyimg();
  }
}


