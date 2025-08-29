import { Component,input } from '@angular/core';
import { OneMemoryInfo } from 'src/app/interfaces/onememory';
import { RouterLink } from '@angular/router';
import { IonItem, IonLabel, IonThumbnail, } from "@ionic/angular/standalone";

@Component({
  selector: 'app-targlistmemo',
  templateUrl: './targlistmemo.component.html',
  styleUrls: ['./targlistmemo.component.scss'],
  imports: [IonLabel, IonItem, RouterLink, IonThumbnail, ],
})
export class targlistmemo {
   memoInfo = input.required<OneMemoryInfo>();

}
