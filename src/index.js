/*
* @Author: shengxingyue
* @Date:   2017-10-14 20:03:39
* @Last Modified by:   shengxingyue
* @Last Modified time: 2017-10-15 14:04:21
*/
import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	btn.innerHTML = 'click me';
	btn.onclick = printMe;

	element.appendChild(btn);
	return element;
}

document.body.appendChild(component());