// 控制类
import { Food } from './food';
import { ScorePanel } from './score';
import { Snake } from './snake';
export class GameControl {
  snake: Snake;
  food: Food;
  scorepanel: ScorePanel;
  // 移动方向
  direction: string = 'd';
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorepanel = new ScorePanel();
    this.init();
  }
  init() {
    // 绑定键盘down事件
    document.addEventListener('keydown', this.keydownHandle.bind(this));
    this.run();
  }
  keydownHandle(event: KeyboardEvent) {
    let rules = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 's', 'd', 'a'];
    if (rules.includes(event.key)) this.direction = event.key;
  }
  run(x?:number,y?:number) {
    // 根据方向改变蛇的位置
     x = this.snake.x;
     y = this.snake.y;
    switch (this.direction) {
      case 'ArrowUp':
        y -= 10;
        break;
      case 'w':
        y -= 10;
        break;
      case 'ArrowDown':
        y += 10;
        break;
      case 's':
        y += 10;
        break;
      case 'ArrowLeft':
        x -= 10;
        break;
      case 'a':
        x -= 10;
        break;
      case 'ArrowRight':
        x += 10;
        break;
      case 'd':
        x += 10;
        break;
    }
    this.checkEat(x, y);
    try {
      if (this.snake.x !== x) {
        this.snake.x = x;
      }
      if (this.snake.y !== y) {
        this.snake.y = y;
      }
    } catch (error) {
      alert(error);
      return;
    }

    let trim = setTimeout(this.run.bind(this), 300 - (this.scorepanel.leve - 1) * 30);
    if (x > 290 || x < 0) {
      clearTimeout(trim);
      alert(`您获得${this.scorepanel.scope}分`);
    } else if (y > 290 || y < 0) {
      clearTimeout(trim);
      alert(`您获得${this.scorepanel.scope}分`);
    }
  }
  // 检测是否吃到食物
  checkEat(x: number, y: number) {
    if (x === this.food.x && y === this.food.y) {
      this.food.changeOffSet();
      this.snake.insterBody();
      this.scorepanel.changeScope();
    }
  }
}
