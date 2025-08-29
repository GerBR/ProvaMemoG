import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PikeropcionsComponent } from '../components/pikeropcions/pikeropcions.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, 
    PikeropcionsComponent,
  ]
})
export class Tab2Page {

  constructor() {}

}
