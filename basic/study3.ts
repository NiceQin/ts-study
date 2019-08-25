// 类型推论
// 如果没有明确的指定类型，typescript会依照类型推论规则推断出一个类型
let noType = 123 //noType 会被推断成 number 类型
/**
 * 联合类型
 */
// 可以取值多个类型中的一种
let two: number | string 
two = 7
two = 'abc'

// 联合类型属性，方法访问----当不确定是何种类型时，只能访问共同的属性方法
// function fn(params: number | string) {
//     return params.length //类型“number”上不存在属性“length”
// }


// 当给联合类型赋值时，会推断为响应的类型
let students: string | boolean
students = 'alis'
console.log(students.length);//4 ok
students = true
//console.log(students.length);//错误，此时，students 为boolean，没有length属性
