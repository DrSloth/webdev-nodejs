Write an 'oche' server. Receive a post request (on any ressource) and respond with the received 
text in reverse. Also log the response. Respond to any GET request with a form which a user can use
to send the post request. You may ignore all the stuff the form adds to the input, 
just also reverse it.

You can use: `str.split("").reverse().join("");` to reverse a string.

post data:
hello

response:
olleh
