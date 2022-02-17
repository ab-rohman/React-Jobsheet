var rivers = ['Ciliwung','Brantas','Bengawan Solo'];
//decalring variable rivers that contain array of value Ciliwing and etc
var[first,...rest] = rivers;
//declaring variable first with value that has the same index inside the array (index 1 its mean Ciliwung)
//and for teh rest value inside the array rivers will be assign in variable rest

alert(rest);
//show the value of rest variable (it will contain brantas & bengawan solo because of the same index)