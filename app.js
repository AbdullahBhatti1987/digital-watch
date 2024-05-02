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
hour.innerText = now.getHours();
minute.innerText = now.getMinutes();
second.innerText = now.getSeconds();
month.innerText = monthsName[now.getMonth()];
day.innerText = daysName[now.getDay()];
date.innerText = now.getDate();
year.innerText = now.getFullYear();



if(parseInt(hour.innerText) >= 13){
    console.log('abc')
    console.log(typeof parseInt(hour.innerText))
    var tweleHours = (parseInt(hour.innerText) - 12)
    hour.innerText = tweleHours;
}


if(hour.innerText.length == 1){ 
    hour.innerText = 0 + hour.innerText;    
}
if(minute.innerText.length == 1){ 
    minute.innerText = 0 + minute.innerText;
}
if(second.innerText.length == 1){ 
    second.innerText = 0 + second.innerText;
}
if(hour.innerText >= 12){
    ampm.innerText = 'PM';
} else {
    ampm.innerText = 'AM';
    ampm.style.color = 'skyblue';
}
}, 1000)