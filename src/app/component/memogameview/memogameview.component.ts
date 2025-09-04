import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemoService } from '../../service/memo';
import { OneMemoryInfo } from '../../interfaces/onememory';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonLabel, IonBadge, IonToggle, IonContent, IonCol } from "@ionic/angular/standalone";
import { MostrapecesmemoComponent } from '../mostrapecesmemo/mostrapecesmemo.component';

@Component({
  selector: 'app-memogameview',
  templateUrl: './memogameview.component.html',
  styleUrls: ['./memogameview.component.scss'],
  standalone: true,
  imports: [IonContent, IonToggle, IonList, IonItem, IonLabel, IonBadge,
    CommonModule, MostrapecesmemoComponent],
})
export class MemogameviewComponent{
  memory: OneMemoryInfo | undefined;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private memoService: MemoService = inject(MemoService);

  constructor() {}

  ngOnInit() {
    const memoryId = Number(this.route.snapshot.params['id']);
    this.memory = this.memoService.getMemoById(memoryId);
    
  }
}