# myfirstprojec
<html>
<head><title>Google SignIn</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<meta name="google-signin-client_id" content="90421203756-3fpjmnthlq6vnumenk1nnthc2g1h2lfs.apps.googleusercontent.com">
<script src="https://apis.google.com/js/platform.js" async defer></script>
src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
<script src="script.js"></script>
<style>
.g-signin2{
      margin-left:500px;
      margin-top:200px;
 .data{
       display:none
        }
      
</style>

</head> 
<body>
<div class="g-signin2" data-onsuccess="onSignIn"></div>
<div class="data">
<p>Profile Details</p>
<img id="pic" class="img-circle" width="100" height="100"/>
<p>Email Address</p>
<p id="email" class="alert alert-danger"></p>
<button onclick="signOut()" class="btn btn-danger">SignOut</button>

</body>

</html>
