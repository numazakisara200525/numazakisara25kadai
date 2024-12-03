function hyoji13() {
var str13 = "ようこそ";
var cnt13 = document.timer13.moji13.value.length;
if ( cnt13 < 11 ) {
document.timer13.moji13.value = str13.substr(0,cnt13+1); } else {
document.timer13.moji13.value = ""; }
setTimeout("hyoji13()",500); }
