import { Component,input } from '@angular/core';
import { OneMemoryInfo } from 'src/app/interfaces/onememory';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-memospaint',
  imports: [RouterLink],
  templateUrl: './memospaint.html',
  styleUrl: './memospaint.scss'
})
export class Memospaint {
   memoInfo = input.required<OneMemoryInfo>();

}
