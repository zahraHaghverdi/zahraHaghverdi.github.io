//header cart-box
$(document).ready(function(){
  $("#search").click(function(){
      $(".box-search").toggleClass("boxsearch");
  });
  $("#cart").click(function(){
      $(".box-cart").toggleClass("boxCart");
  });
});

// header  menu-bg
function myFunctionBgMenu(x) {
  var MenuResponsiv = document.querySelector('.navbar')
  x.classList.toggle("change");
  MenuResponsiv.classList.toggle("MenuResponsiv");
  $(".box-cart").addClass("boxCarts");
}


$("body").on('click', '.cadr-btn-shup', function(){
  var newItemImg = $(this).parents(".cadr-product").find(".cadr-img").find("img").attr("src");
  var getItem = $(this).parents(".cadr-product").find("#cadr-Price").text();
  // var closebtnItem = document.getElementById("closebtnItem").innerHTML = "&times;";
  var closebtnItem = "&times;";

  var newItem = '<div class="items"><div class="items-img-txt"><img src ="'+newItemImg+'"><h3>'+getItem+'</h3></div><h2 class="closeItem">'+closebtnItem+'</h2></div>';
  $(".box-cart").append(newItem);

// ---------close item -----------
var lengthsItem = $(".items").length;
var lengthItem = $("#number-cart ").text();


$("body").on('click', '.closeItem', function() {
  var itemsClose = $(this).parents(".items").hide(); //hide item
  //muines item cart span
  var newIengthItem = --lengthItem;
  $("#number-cart").text(newIengthItem);

})


});



//plus item cart span
let count = 0;
const counter = document.getElementById('number-cart');
const cartButton = document.querySelectorAll('.cadr-btn-shup')
cartButton.forEach(item =>{
  item.addEventListener('click' , (event)=>{
    count++;  
    counter.innerText = count;
  })
})




var darkMode = false;

$("#moon").click(function(){
  $("#sun").fadeIn(500);
  $("#moon").fadeOut(500);
});
$("#sun").click(function(){
  $("#moon").fadeIn(500);
  $("#sun").fadeOut(500);
});

// default to system setting
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	darkMode = true;
}
// preference from localStorage should overwrite
if (localStorage.getItem('theme') === 'dark') {
	darkMode = true;
} else if (localStorage.getItem('theme') === 'light') {
	darkMode = false;
}
if (darkMode) {
	document.body.classList.toggle('dark');
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('theme-toggle').addEventListener('click', () => {
	document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

});