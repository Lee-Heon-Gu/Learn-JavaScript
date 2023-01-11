let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');

addBtn.addEventListener('click', function() {
    alert('추가');
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    li.textContent = inputBox.value;
    ul.appendChild(li);
});

addBeforeBtn.addEventListener('click', function() {
    alert("hello");
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    let targetLi = document.querySelector('#target');
    console.log(targetLi);
    li.textContent = inputBox.value;
    // ul.appendChild(li);
    ul.insertBefore(li, targetLi);
})