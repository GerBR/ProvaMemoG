import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemoService } from '../../service/memo';
import { OneMemoryInfo } from 'src/app/interfaces/onememory';


  @Component({
    selector: 'app-memodetalls',
    imports: [],
    templateUrl: './memodetalls.html',
    styleUrl: './memodetalls.scss'
  })
 
export class Memodetalls {
    route: ActivatedRoute = inject(ActivatedRoute);
    MemoService = inject(MemoService);
    memoInfo: OneMemoryInfo | undefined;

    constructor() {
      const memoId = Number(this.route.snapshot.paramMap.get('id'));
      this.memoInfo = this.MemoService.getMemoById(memoId);
    }


}
