var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
// {
// {
//   {let insane = 'Hello World'}
//   console.log(insane);//insane is not defined
// }
// };
//==================================================
// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());
//===========================================使用函數表達式
{
  let a = 'secret';
  let f = function () {
    return console.log(a);
  };
  f();
}
