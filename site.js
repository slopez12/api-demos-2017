$('#user-form').on('submit', function(e) {
  var username = $('#username').val();
  $('#results').append('<li><a href="https://api.github.com/users/' + username + '">' + username + '</a></li>');
  e.preventDefault();
});
