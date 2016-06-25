(function() {

var app = angular.module('store', ['store-products']);
  
app.controller('StoreController', function(){
  this.products = gems;
});
  
app.controller('ReviewController', function(){
  this.review = {};
  this.addReview = function(product) {
    product.reviews.push(this.review);
    this.review = {};
  };
});

var gems = [
{
  name: "Dodecahedron",
  price: 2,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo sem, sollicitudin quis dictum quis, dictum ut enim. Pellentesque nec posuere felis. Nullam laoreet tempus convallis. Quisque varius orci et enim tempus, bibendum dictum orci placerat. Phasellus in nisl ac diam luctus iaculis.',
  canPurchase: true,
  reviews: [
  {
    stars: 4.5,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "john@doe.com"
  },
  {
    stars: 4.5,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "john@doe.com"
  },
  {
    stars: 4.5,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "john@doe.com"
  },
  ]
},
{
  name: "Pentagonal Gem",
  price: 5.95,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo sem, sollicitudin quis dictum quis, dictum ut enim. Pellentesque nec posuere felis. Nullam laoreet tempus convallis. Quisque varius orci et enim tempus, bibendum dictum orci placerat. Phasellus in nisl ac diam luctus iaculis.',
  canPurchase: false,
  reviews: [
  {
    stars: 4.5,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "john@doe.com"
  },
  {
    stars: 4.5,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "john@doe.com"
  },
  {
    stars: 4.5,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "john@doe.com"
  },
  ]
},
]

})();