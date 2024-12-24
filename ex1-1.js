function hyoji() {
var str = "はじまりはじまり";
var cnt = document.timer.moji.value.length;
if ( cnt < 8 ) {
document.timer.moji.value = str.substr(0,cnt+1); } else {
document.timer.moji.value = ""; }
setTimeout("hyoji()",500); }
