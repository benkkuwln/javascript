var sent = "my name is"
var name = "benjamin";
var am = "i am"
var age = "16 years old"
var sentence = sent + " " + name + ", " + am + " " + age;
alert(sentence)

console.log(sent, name);
console.warn("this website is useless");
console.error("error test");
console.log(sentence);

var test = document.getElementById("test");
var oldText = test.innerHTML
test.innerHTML = "Hello Aliens";