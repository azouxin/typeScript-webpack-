export class Food{
  // 定义一个属性表示食物元素
  element:HTMLElement
  constructor(){
    // 获取食物赋值给element
    this.element=document.querySelector('.food')!;
  }
  // 获取食物x轴坐标的放法
  get x(){
    return this.element.offsetLeft
  }
  get y(){
    return this.element.offsetTop
  }
  // 修改偏移量
  changeOffSet(){
    this.element.style.left=Math.floor(Math.random()*30)*10+'px'
    this.element.style.top=Math.floor(Math.random()*30)*10+'px'
  }
}
 