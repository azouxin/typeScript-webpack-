import './style/index.less'
import {GameControl} from './common/gameControl'
let c=new GameControl()
let a=document.getElementById('a')
let s=document.getElementById('s')
let d=document.getElementById('d')
let w=document.getElementById('w')
let pp=document.getElementById('pp')
a?.addEventListener('click',function(){
  c.direction='a'
})
s?.addEventListener('click',function(){
  c.direction='s'
})
d?.addEventListener('click',function(){
  c.direction='d'
})
w?.addEventListener('click',function(){
  c.direction='w'
})
pp?.addEventListener('click',function(){
  history.go(0)
})