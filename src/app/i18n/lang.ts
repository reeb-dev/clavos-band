import { Injectable, signal, effect } from '@angular/core';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'clavos-lang';

function detectLang(): Lang {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  }
  if (typeof navigator !== 'undefined') {
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('es')) return 'es';
  }
  return 'en';
}

@Injectable({ providedIn: 'root' })
export class LangService {
  readonly lang = signal<Lang>(detectLang());

  constructor() {
    effect(() => {
      const l = this.lang();
      if (typeof document !== 'undefined') {
        document.documentElement.lang = l === 'es' ? 'es-AR' : 'en';
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, l);
      }
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }
}
