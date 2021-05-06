var image = prompt("Enter url your logo")

var img = document.createElement("img");
img.src = image;
var src = document.getElementById("logo");
src.appendChild(img);


var LiCount = prompt("How many items would you like to add in navbar, number between 1 to 5")

if (!isNaN(LiCount) && LiCount > 0 && LiCount < 6 ) {
   CreateUl()
}else{
  alert("Please, Enter the number between 1 to 5")
  var LiCount = prompt("How many items would you like to add in navbar, number between 1 to 5")
  CreateUl()
}

var AddImg = prompt("Enter url photo your blog")
var img = document.createElement("img");
img.src = AddImg;
var src = document.getElementById("photo");
src.appendChild(img);

var Addtext = prompt("Enter text your blog")
var text = document.getElementById("text-blog");
text.append(Addtext);

var AddCopyright = prompt("Enter your name")
var copyright = document.getElementById("copyright");
copyright.append("Copyright © 2021 by  "+ AddCopyright);



function CreateUl(num){
var ul = document.getElementById("list");
  for (var i = 0; i < parseInt(LiCount); i++) {
    var ItemName = prompt("What is the name of element number " + (i+1))
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(ItemName));
    ul.appendChild(li);
  }
}