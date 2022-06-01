import { h } from './common/index';
console.log(123);
console.log(2223, h);
class Person {
  // 定义实例属性
  readonly name: string;
  eag: number;
  // static静态方法构造函数去访问和调用
  static eag: number = 1234;
  constructor(eag: number, name: string) {
    this.name = name;
    this.eag = eag;
  }
  sayHello():void{
    console.log('haha')
  }
}
const per=new Person(1, 'hh')
per.sayHello()
class Son extends Person{
  constructor(eag:number,name:string){
    super(eag,name)
   
    super.sayHello()
  }
  sayHello(): void {
    console.log('qiqiguaiguai')
  }
}
console.log(Person.eag,new Son(18,'zouxin'));
