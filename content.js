//var images = document.querySelectorAll ("[is-shorts]");
var images = document.getElementsByTagName("img");
for (var i = 0, l = images.length; i < l; i++) {
  console.log("this is working im inside!");
  console.log(images[i]);
  //images[i].innerHTML = "<p>shorts</p>"
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}


var shorts = document.querySelectorAll("[is-shorts]");
console.log("shorts is : " + shorts);
shorts.forEach(remove())

function remove(short){
  console.log(short);
  console.log("REMOVE");
  short.innerHTML = "TEEEEEEST";
}