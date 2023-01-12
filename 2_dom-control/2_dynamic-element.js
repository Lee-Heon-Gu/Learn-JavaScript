let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.querySelector('#target-remove');
let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
    alert('추가');
    let li = document.createElement('li'); // li태그 생성.
    let ul = document.querySelector('ul'); // ul태그 접근.
    li.textContent = inputBox.value;

    let button = document.createElement('button'); // button태그 생성.
    button.textContent = 'X';
    button.classList.add('remove-btn');
    button.addEventListener('click', removeParentNode);
    li.appendChild(button); // li태그의 마지막 자식요소로 button태그 추가.
    ul.appendChild(li);     // ul태그의 자식요소로 li태그 추가.
    inputBox.value = '';
    inputBox.focus();
});

addBeforeBtn.addEventListener('click', function () {
    alert("hello");
    let li = document.createElement('li'); // li태그 생성.
    let ul = document.querySelector('ul'); // ul태그 접근.
    let targetLi = document.querySelector('#target'); // 타겟 li태그 접근
    console.log(targetLi);
    li.textContent = inputBox.value;
    // ul.appendChild(li);
    ul.insertBefore(li, targetLi); // ul태그의 자식요소 중 지정한 li태그 앞에 li태그 추가.
});

removeTargetBtn.addEventListener('click', function () {
    let targetLi = document.querySelector('#target');
    targetLi.remove();
});

removeBtn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
    event.target.parentNode.remove(); // 삭제버튼을 클릭했을 때 해당 button태그의 부모요소를 삭제.
    inputBox.focus();
    inputBox.value = '';
}
