// 1) get 메서드
let title = document.getElementById('title'); // 아이디로 접근
console.log(title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item'); // 클래스 명으로 접근
console.log('items');
console.log('스쿼트', items[0]);
console.log('벤치프레스', items[1]);
console.log('데드리프트', items[2]);

let liList = document.getElementsByTagName('li'); // 태그 명으로 접근
console.log(liList);

// 2) HTML 요소 쿼리
// let h2 = document.querySelector('#title'); // 일치하는 요소 하나만을 반환.
console.log(h2);

let item = document.querySelector('.item');
console.log(item);

let itemAll = document.querySelectorAll('.item'); // 일치하는 요소 목록을 반환.
console.log('itemAll', itemAll);
console.log('itemAll[0]', itemAll[0]);
console.log('itemAll[1]', itemAll[1]);
console.log('itemAll[2]', itemAll[2]);

h2.textContent = '<span>운동!!</span>';
h2.innerHTML= '<span>운동!!!</span>';   

document.querySelector('body').innerHTML = '<strong>운동</strong>';
                                                                
let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요!'); // placeholder 추가.
input.setAttribute('required', ''); // required 추가.
input.removeAttribute('placeholder'); // placeholder 삭제.
input.removeAttribute('required'); // required 삭제.

let helloItem = document.querySelector('.hello');
console.log('helloItem', helloItem);
helloItem.style.color = 'blue';             // 요소 글자색 blue로 변경.
helloItem.style.backgroundColor = 'black';  // 요소 배경색 black으로 변경.

helloItem.classList.add('dark','one');      // 요소 클래스 'dark', 'one' 추가.
helloItem.classList.remove('dark');         // 요소 클래스 'dark' 삭제.