function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  httpGet(googleUser.getAuthResponse().id_token);
  
}

function httpGet(id)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", '/awscognito?id='+id, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
