console.log("this is my first js");

var str = '';
for (var i=0 ; i<10 ; i++)
{
    console.log(i+1);
    str += (i+1) + " ";
}
console.log(str);

document.querySelector("#output").innerHTML = str;