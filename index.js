// let, const letは値の再代入可能。constは再代入不可。変数の値を変えられたくない時はconstを使用。
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

// localStorageからデータを取得　JSON.parseを使用することで元の配列として扱うことができる
const todos = JSON.parse(localStorage.getItem("todos"));

// liタグが空ではない場合の分岐
if(todos){
  todos.forEach(todo => {
    add(todo);
  })
}

// functionで関数宣言して、関数名、引数にとるものを記述。
// 例　function double(num) {
//      return num * 2;
//    }

// addEventListener
// 特定のイベントが起きた時にJava Scriptの処理を追加するためのブラウザーAPIの機能
// 使い所：イベントが起きた時に処理を追加したい時

// プラウザーのリロードを止めたい時にpreventDefaultを使用。今回はsubmitした時。

form.addEventListener("submit", function(event){
  event.preventDefault();
  // formをsubmitしたタイミングでliタグを追加したいのでここで定義
  add();
})

function add(todo) {

  // ifで空の時はfalse。処理が実行されない。
  // 今回は真偽値を暗黙的型変換を使用（使用しないときの例：todoText.length > 0）

  let todoText = input.value;

  if (todo) {
    todoText = todo;
  }
  if (todoText) {
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    // ulタグの子供としてliタグ追加
    ul.appendChild(li);
    // 投稿後フォームを空にする
    input.value = "";
    saveData();
  }
}

// localStorage：ブラウザーにデータを保存しておく仕組み(永続的に保存)
// localStorageは文字列形式で格納されるので保存前にJSON形式を使用し文字列として扱える
// データの保存
// localStorage.setItem("キー", '値');
// データの取得
// localStorage.getItem('キー')

function saveData() {
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach(list => {
    todos.push(list.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}