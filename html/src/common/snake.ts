export class Snake {
  // 获取蛇头的元素
  head: HTMLElement;
  body: HTMLCollection;
  element: HTMLElement;
  constructor() {
    this.element = document.querySelector('.snake')!;
    this.head = document.querySelector('.snake>div')!;
    this.body = document.getElementsByClassName('snake')[0].getElementsByTagName('div');
  }
  get x() {
    return this.head.offsetLeft;
  }
  get y() {
    return this.head.offsetTop;
  }
  set x(val) {
    if (this.body.length >= 2) {
      // 如果最新的值与蛇身体的第一个相等便是重叠
      if ((this.body[1] as HTMLElement).offsetLeft == val) {
        // 判断蛇头坐标
        if (val > this.x) {
          val = this.x - 10;
        } else {
          val = this.x + 10;
        }
      }
      // 判断蛇头坐标this.x和最新值一样
    }
    let c = this.moveBody();
    if (c) {
      throw new Error('失败');
    }

    this.head.style.left = val + 'px';
  }
  set y(val) {
    if (this.body.length >= 2) {
      // 如果最新的值与蛇身体的第一个相等便是重叠
      if ((this.body[1] as HTMLElement).offsetTop == val) {
        // 判断蛇头坐标
        if (val > this.y) {
          val = this.y - 10;
        } else {
          val = this.y + 10;
        }
      }
    }
    let c = this.moveBody();
    if (c) {
      throw new Error('失败');
    }
    this.head.style.top = val + 'px';
  }
  insterBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }
  // 蛇身体移动
  moveBody() {
    // 后面改到前面的位置这样变量不会丢失全部更新
    // 重点难点

    try {
      for (let i = this.body.length - 1; i > 0; i--) {
        if (
          this.x === (this.body[i] as HTMLElement).offsetLeft &&
          this.y === (this.body[i] as HTMLElement).offsetTop
        ) {
          throw new Error('吃到自己了');
        }
        (this.body[i] as HTMLElement).style.left =
          (this.body[i - 1] as HTMLElement).offsetLeft + 'px';
        (this.body[i] as HTMLElement).style.top =
          (this.body[i - 1] as HTMLElement).offsetTop + 'px';
      }
    } catch (error) {
      return error;
    }
    // 移动到自己就停止
  }
}
