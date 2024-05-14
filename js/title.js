/*
Program name: Payment Code
Author: NianBroken
Website: https://www.nianbroken.top/
Gmail: suinian666@gmail.com
Time: 2023.06.07
*/
document.addEventListener("DOMContentLoaded", function () {
	// 获取所有具有qr-code-title类的h3元素
	var container = document.querySelector(".container");
	var qrCodeTitles = document.querySelectorAll("h3.qr-code-title");

	// 更新字体大小的函数
	var updateFontSize = function () {
		// 获取容器的宽度
		var containerWidth = container.offsetWidth;

		// 设置字体大小的挡位值
		var fontSize;
		if (containerWidth <= 150) {
			fontSize = "1.20rem";
		} else if (containerWidth <= 192) {
			fontSize = "1.25rem";
		} else if (containerWidth <= 222) {
			fontSize = "1.30rem";
		} else if (containerWidth <= 242) {
			fontSize = "1.35rem";
		} else if (containerWidth <= 292) {
			fontSize = "1.40rem";
		} else if (containerWidth <= 316) {
			fontSize = "1.45rem";
		} else if (containerWidth <= 320) {
			fontSize = "1.50rem";
		} else if (containerWidth <= 338) {
			fontSize = "1.55rem";
		} else if (containerWidth <= 356) {
			fontSize = "1.60rem";
		} else if (containerWidth <= 374) {
			fontSize = "1.61rem";
		} else if (containerWidth <= 392) {
			fontSize = "1.62rem";
		} else if (containerWidth <= 410) {
			fontSize = "1.63rem";
		} else if (containerWidth <= 428) {
			fontSize = "1.64rem";
		} else if (containerWidth <= 446) {
			fontSize = "1.65rem";
		} else if (containerWidth <= 464) {
			fontSize = "1.66rem";
		} else if (containerWidth <= 480) {
			fontSize = "1.67rem";
		} else if (containerWidth <= 498) {
			fontSize = "1.68rem";
		} else if (containerWidth <= 516) {
			fontSize = "1.69rem";
		} else if (containerWidth <= 534) {
			fontSize = "1.70rem";
		} else if (containerWidth <= 552) {
			fontSize = "1.71rem";
		} else if (containerWidth <= 570) {
			fontSize = "1.72rem";
		} else {
			fontSize = "1.75rem";
		}

		// 将字体大小应用于所有具有qr-code-title类的h3元素
		for (var i = 0; i < qrCodeTitles.length; i++) {
			qrCodeTitles[i].style.fontSize = fontSize;
		}
	};

	// 初始化字体大小
	updateFontSize();

	// 监听窗口调整大小事件，更新字体大小
	window.addEventListener("resize", updateFontSize);
});
