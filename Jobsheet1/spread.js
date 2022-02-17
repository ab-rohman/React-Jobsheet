var mountains = ['Semeru','Bromo','Merapi'];
//declaring variable mountains that contain array value Semeru, Bromo, and Merapi
var mountainsFromJapan = ['Fuji'];
//declaring variable mountainsFromJapan that also contain array but only 1 value

var allMountain = [...mountains, ...mountainsFromJapan];
//decalring variable allMountain that containing the value from 
//all value inside variable mountains and all variable inside variable mountainsFromJapan
alert(allMountain);
//show the value inside variable allMountain