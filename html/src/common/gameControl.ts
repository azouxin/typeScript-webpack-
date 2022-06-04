// 控制类
import { Food } from './food';
import { ScorePanel } from './score';
import { Snake } from './snake';
export class GameControl {
  snake: Snake;
  food: Food;
  scorepanel: ScorePanel;
  // 移动方向
  direction:string=''
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorepanel = new ScorePanel();
    this.init();
  }
  init() {
    // 绑定键盘down事件
    document.addEventListener('keydown', this.keydownHandle.bind(this));
  }
  keydownHandle(event: KeyboardEvent) {
    this.direction=event.key
  }
}
