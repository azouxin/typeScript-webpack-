export class Snake{
  // 获取蛇头的元素
  head:HTMLElement
  body:HTMLCollection
  element:HTMLElement
  constructor(){
    this.element=document.querySelector('.snake')!;
    this.head=document.querySelector('.snake>div')!;
    this.body=document.getElementsByClassName('snake')[0].getElementsByTagName('div')
  }
  get x(){
    return this.head.offsetLeft
  }
  get y(){
    return this.head.offsetTop
  }
  set x(val){
    this.head.style.left=val+'px'
  }
  set y(val){
    this.head.style.top=val+'px'
  }
  insterBody(){
    this.element.insertAdjacentHTML('beforeend','<div></div>')
  }
}