import { Component, computed, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { artistByLang } from './data/artist';
import { LangService, type Lang } from './i18n/lang';
import { ui } from './i18n/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly langService = inject(LangService);

  readonly lang = this.langService.lang;
  readonly artist = computed(() => artistByLang[this.lang()]);
  readonly t = computed(() => ui[this.lang()]);

  setLang(lang: Lang): void {
    this.langService.set(lang);
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
