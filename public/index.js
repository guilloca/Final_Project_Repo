var allLinks = [];
function insertNewPost(title, photoURL) {
  var context = {
    title: title,
    photoURL: photoURL
  }

  var navBarLinks = document.getElementById('navBar');
  var html = Handlebars.templates['linkTemplate'](context);
  navBarLinks.innerHTML += html;
};
