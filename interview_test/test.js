const del_btns = document.querySelectorAll('.del')

for (let i = 0; i < del_btns.length; i++) {
  del_btns[i].addEventListener('click', function(){
    this.parentNode.parentNode.removeChild(this.parentNode);
  });
}


document.querySelector('.add')
  .addEventListener('click', function(){
  var newList = document.createElement('li');
  newList.innerHTML = 'Item <button class="del">del</button>';
  document.querySelector('#myList').appendChild(newList);
})