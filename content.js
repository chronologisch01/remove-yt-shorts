var target = document.body;

//create an observer instance
var observer = new MutationObserver(function(mutations) {
  //loop through the mutations
  mutations.forEach(function(mutation) {
    var elements = document.querySelectorAll("ytd-thumbnail-overlay-time-status-renderer[overlay-style='SHORTS']");
    console.log("num yt shorts is " + elements.length);
    for (var i = 0, l = elements.length; i < l; i++) {
      child = element[i].closest("ytd-grid-video-renderer");
      child.parentElement.removeChild(child);
    }

    var shorts = document.getElementsByClassName("rich-section-content");
    shorts[0].innerHTML = "";
    console.log(shorts);

  });
});

//configure the observer options
var config = { attributes: true, childList: true, characterData: true };

//start observing the target element
observer.observe(target, config);


/*chrome.webNavigation.onCompleted.addListener(function(details) {
  // Execute your content script on the tab where the event occurred
    alert("Loaded");
});*/
//alert("test");

//var images = document.querySelectorAll ("[is-shorts]");
var images = document.getElementsByTagName("img");
for (var i = 0, l = images.length; i < l; i++) {
  //console.log("this is working im inside!");
  //console.log(images[i]);
  //images[i].innerHTML = "<p>shorts</p>"
  //images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}


/*var shorts = document.getElementsByClassName("rounded-reel-item");
console.log("shorts is : " + shorts);
console.log("length is: "+ shorts.length);
console.log(shorts[0]);
var parent = shorts[0].parentElement;
console.log("innerhtml is before: "+ parent.innerHTML);
parent.innerHTML = '';
console.log("innerhtml is now: "+ parent.innerHTML);
for(var i =0, l= shorts.length; i<l; i++){
  console.log("short is : " + shorts[i]);
  //shorts[i].remove();
  parent.removeChild(shorts[i].node);
  console.log("after remove child");
}
function remove(short){
  console.log(short);
  console.log("REMOVE");
  short.innerHTML = "TEEEEEEST";
}*/

var btn = document.getElementsByClassName("calculate-button");
console.log(btn);
console.log(btn.length);
btn[0].parentElement.innerHTML='';

