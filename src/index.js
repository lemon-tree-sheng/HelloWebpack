/*
* @Author: shengxingyue
* @Date:   2017-10-14 20:03:39
* @Last Modified by:   shengxingyue
* @Last Modified time: 2017-10-15 13:43:37
*/
import _ from 'lodash';
import './style.css';
import Icon from './terminal-bg.jpg';

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	var myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());