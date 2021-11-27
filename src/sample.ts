// types

// プリミティブ型
// boolean
// number
// string
let a: string = "typescript";
// ローカル変数で、代入する型が完全に決まっている場合は型宣言を省くことができる

// void = 何も返さない
function func(a: number, b: boolean) : number {
  return a;
}

// any
let b: any = "typescript";

// Array
let aa: string[] = ["a", "b"];

// 例えば、string[]の値がnumberだったらどうなる？
let bb: string[] = [1, 2];

// Object
interface Hoge1 {
  a: number,
  b: number,
  // ....
};

let v1: Hoge1 = {a: 10, b: 20};

// undefined
// aは値が入るが、bに値が入って来ない
interface Hoge2 {
  a: number,
  b?: number,
  // ....
};

let v2: Hoge2 = {a: 10, b: 20};

// nullable
interface Hoge3 {
  a: number,
  b: number | null,
  // ....
};

let v3: Hoge3 = {a: 10, b: null};

// Tuple型

// Enumを使った列挙型

// Union型

// Literal型
// 特定の値のみしか受け付けない
// const を使うことでliteral型になる
const apple: "apple" = "apple"

// typeエイリアス

// unknown型

// never型




// TODO: undefinedと明示できるのは度のタイミング？