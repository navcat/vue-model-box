import ModelBox from '../src/index.js';
let btn = document.getElementById('button');
btn.addEventListener('click', () => {
  ModelBox.open('加载中...');
  setTimeout(() => ModelBox.close(), 2000);
});
