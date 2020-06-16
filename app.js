'use strict';
const memo = new Map();
//フィボナッチ数が0の時は0
memo.set(0,0);
//フィボナッチ数が1の時は1というメモ
memo.set(1,1);
function fib(n) {
  //if文で0と等しい
  //memoの答えを知っている時はnを返せばいい
  if (memo.has(n)) {
    return memo.get(n);
  } 
  //結果が偽の場合は
  const value =fib(n - 1) + fib(n - 2);
  //新しい答えが求まったら足していく
  memo.set(n,value);
  //答えを返す
  return value;
}
const length = 500;
//for文は繰り返し実行、40以下だけ繰り返し
for (let i = 0; i <= length; i++) {
  console.log(i + '番目;'　 + fib(i));
}
