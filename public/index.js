function insertNewPost(description, photoURL, price, city, condition) {
  var context = {
    description: description,
    photoURL: photoURL,
    price: price,
    city: city,
    condition, condition
  }

  var postsSection = document.getElementById('posts');
  var html = Handlebars.templates['postTemplate'](context);
  postsSection.innerHTML += html;
};
