// 原始題目:
// const del_btns = document.querySelectorAll('.del')

// for (let i = 0; i < del_btns.length; i++) {
//   del_btns[i].addEventListener('click', function(){
//     this.parentNode.parentNode.removeChild(this.parentNode);
//   });
// }


// document.querySelector('.add')
//   .addEventListener('click', function(){
//   var newList = document.createElement('li');
//   newList.innerHTML = 'Item <button class="del">del</button>';
//   document.querySelector('#myList').appendChild(newList);
// })


let del_btns = document.querySelectorAll('.del')


for (let i = 0; i < del_btns.length; i++) {
  del_btns[i].addEventListener('click', function(){
    this.parentNode.parentNode.removeChild(this.parentNode);
  });
  console.log(del_btns);
}

let new_del_btns = [];
document.querySelector('.add')
  .addEventListener('click', function(){
  var newList = document.createElement('li');
  newList.innerHTML = 'Item <button class="del">del</button>';
  document.querySelector('#myList').appendChild(newList);

  new_del_btns = document.querySelectorAll('.del');
  
  //Err: Uncaught TypeError: Cannot read property 'removeChild' of null at HTMLButtonElement.<anonymous>
  for (let i = 0; i < new_del_btns.length; i++) {
    new_del_btns[i].addEventListener('click', function(){
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
    console.log(new_del_btns);
  }
})

