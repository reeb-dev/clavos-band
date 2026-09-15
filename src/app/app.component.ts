import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { artist } from './data/artist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly artist = artist;

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
