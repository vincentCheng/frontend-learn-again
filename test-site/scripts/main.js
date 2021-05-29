/**
 * 注意变量可以有不同的 数据类型 ：
 * String
 * Number
 * Boolean
 * Array
 * Object let myVariable = document.querySelector('h1');以及上面所有示例都是对象。
 */

// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	console.log('src image ', mySrc);
	const imgSrc1 = 'images/firefox-icon.jpg';
	const imgSrc2 = 'images/timg.jpg';

	myImage.setAttribute('src', mySrc === imgSrc1 ? imgSrc2 : imgSrc1);
}

/**
 * 添加欢迎信息
 */
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/**
 * localStorage 在这里能够达到cookie相同的功效。
 * 但是在F12中是看不到cookie字样的，只有 localStorage 字样。
 */
function setUserName() {
	// prompt 快速、促使。这个出来的是一个输入框啊！
	let myName = prompt('请输入你的名字。');

	console.log('myName ', myName);

	/**
	 * 如果用户名为 null
	 * 表示引用不存在！
	 */
	if (!myName || null === myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla 酷毙了，' + myName;
	}

}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
	setUserName();
}