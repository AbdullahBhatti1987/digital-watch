var now = new Date();
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var day = document.getElementById('day');
var date = document.getElementById('date');
var month = document.getElementById('month');
var year = document.getElementById('year');
var ampm = document.getElementById('ampm');

var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


setInterval(function(){
var now = new Date();
hour.innerText = now.getHours();
minute.innerText = now.getMinutes();
second.innerText = now.getSeconds();
month.innerText = monthsName[now.getMonth()];
day.innerText = daysName[now.getDay()];
date.innerText = now.getDate();
year.innerText = now.getFullYear();

if(hour.innerText >= 12){
ampm.innerText = 'PM';
} else {
    ampm.innerText = 'AM';
    ampm.style.color = 'skyblue';
}

if(hour.innerText.length == 1){ // Hours kay number ko 2 digits me apply karne kay liye if condition use ki hai
    hour.innerText = 0 + hour.innerText;
}
if(minute.innerText.length == 1){ // Minutes kay number ko 2 digits me apply karne kay liye if condition use ki hai
    minute.innerText = 0 + minute.innerText;
}
if(second.innerText.length == 1){ // Seconds kay number ko 2 digits me apply karne kay liye if condition use ki hai
    second.innerText = 0 + second.innerText;
}
}, 1000)