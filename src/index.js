/*
* @Author: shengxingyue
* @Date:   2017-10-14 20:03:39
* @Last Modified by:   shengxingyue
* @Last Modified time: 2017-10-15 11:47:01
*/
import _ from 'lodash';
import './style.css';
function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	return element;
}

document.body.appendChild(component());