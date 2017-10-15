/*
* @Author: shengxingyue
* @Date:   2017-10-14 20:03:39
* @Last Modified by:   shengxingyue
* @Last Modified time: 2017-10-15 11:31:58
*/
import _ from 'lodash';
function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());