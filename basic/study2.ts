//任意类型
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的，any类型除外
let a:any = 1
a = 'string'
//在任意值上可以访问任何属性和方法
let anything:any = 'rose'
console.log(anything.name);
console.log(anything.name.firstName);
anything.setValue('john')
anything.setValue("john").say('hi')
anything.age.setValue("20");

//在声明一个变量时没有指定其类型，也没有对其赋值，则默认是 any类型
let something // 等价于 let something:any
something = 1
something = 'string'
something.setName('rose')