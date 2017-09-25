// $('#user-form').append('<img src="' + user['avatar_url'] + '" />');
var my_data;
$('#user-form').on('submit', function(e) {
  var username = $('#username').val();
  var url = 'https://api.github.com/users/' + username;
  $.get(url, function(data) {
    var name = data.name;
    var img = data.avatar_url
    if(data.name=='null') {
    name = data.login;
    }
    $('#results').append('<li><a id = "' + data.html_url + '">' + data.name + ' </a></li>');
    $('#' + data.login).prepend('<img src="' + img + '" />');

  });

//e.preventDefault();//
//}
//);





 // var user = {
//  "login": "slopez",
//  "id": 1366498,
//  "avatar_url": "https://avatars3.githubusercontent.com/u/1366498?v=4"
//}

//$('#user-form').append('<img src="' + user['avatar_url'] +'" />');//

//$('#user-form').on('submit', function(e) {
//  var username = $('#username').val();
//  $('#results').append('<li><a href="https://api.github.com/users/' + username + '">' +
//  username + '</a></li>');
//  e.preventDefault();
//});
//$('#username').on('focus', function() {
  //  console.log('The username element is focused. No "e"');
//  });
//$('#google').on('click', function(event) {
//  console.log('OMG they tired to go to Google!');
//  event.preventDefault();
//});
