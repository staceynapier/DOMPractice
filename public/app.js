var app = function() {

  var cats = [
    {name: "Boba", favFood: "Sock fluff", image: src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
    {name: "Barnaby", favFood: "Tuna", image: src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
    {name: "Max", favFood: "Whiskas Temptations", image: src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
    {name: "Puss in Boots", favFood: "Fish", image: src="https://thefailedcritic.files.wordpress.com/2015/01/puss-in-boots.gif"},
  ]

  for(var cat of cats) {
    addCat(cat.name, cat.favFood, cat.image);
  }
}

var addCat = function(name, favFood, image) {
  var ul = document.createElement('ul');
  ul.classList.add('cat');

  var li = document.createElement('li');
  li.innerText = "Name: " + name;

  var li2 = document.createElement('li');
  li2.innerText = "Favourite Food: " + favFood;

  var li3 = document.createElement('li');
  li3.innerHTML = '<li><img width="500" src="' + image + '"/></li>';


  var cats = document.querySelector('#cats');
  cats.appendChild(ul);
  ul.appendChild(li);
  ul.appendChild(li2);
  ul.appendChild(li3);

}

window.onload = app;
