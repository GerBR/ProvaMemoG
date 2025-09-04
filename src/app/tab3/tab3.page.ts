import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PerfiluserComponent } from '../components/perfiluser/perfiluser.component';
import { RouterOutlet } from '@angular/router';

import { MemoGridComp } from '../component/memogrid/memogrid.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    PerfiluserComponent,
    RouterOutlet,
    MemoGridComp,
  ],
})
export class Tab3Page {
  constructor() {}
}
