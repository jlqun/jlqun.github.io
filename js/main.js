/*
Program name: Payment Code
Author: NianBroken
Website: https://www.nianbroken.top/
Gmail: suinian666@gmail.com
Time: 2023.06.06
*/
document.addEventListener("DOMContentLoaded", function () {
	/* 当HTML文档加载完成后执行函数 */ var qrCode1Image = new Image(); /* 创建一个Image对象用于加载QR Code图像 */
	qrCode1Image.src = new QRCode(document.createElement("div") /* 创建一个div元素 */, {
		text: "https://u.wechat.com/EMw5cw9h1vShFauLLkif3vY" /* 设置二维码1的内容 */,
		width: 300 /* 设置二维码宽度 */,
		height: 300 /* 设置二维码高度 */,
		correctLevel: QRCode.CorrectLevel.H /* 设置二维码纠错级别 */,
	})._el.firstChild.toDataURL(); /* 将二维码转为DataURL */
	var qrCode1Element = document.getElementById("qr-code1"); /* 获取元素id为"qr-code1"的元素 */
	qrCode1Element.appendChild(qrCode1Image); /* 将二维码图像添加到元素中 */

	var qrCode3Image = new Image();
	qrCode3Image.src = new QRCode(document.createElement("div"), {
		text: "https://qm.qq.com/q/5H7ATW24Vy",
		width: 300,
		height: 300,
		correctLevel: QRCode.CorrectLevel.H,
	})._el.firstChild.toDataURL();
	var qrCode3Element = document.getElementById("qr-code3");
	qrCode3Element.appendChild(qrCode3Image);

});
