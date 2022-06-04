export class ScorePanel {
  scope = 0;
  leve = 1;
  scopeEle: HTMLElement;
  leveEle: HTMLElement;
  maxLevel: number;
  constructor(maxLevel: number = 10) {
    this.scopeEle = document.querySelector('.scope')!;
    this.leveEle = document.querySelector('.level')!;
    this.maxLevel = maxLevel;
  }
  changeScope() {
    this.scope++;
    this.scopeEle.innerHTML = `${this.scope}`;
    if (this.scope % 10 == 0) {
      this.changeleve();
    }
  }
  changeleve() {
    if (this.leve < this.maxLevel) {
      this.leve++;
    }
    this.leveEle.innerHTML = `${this.leve}`;
  }
}
