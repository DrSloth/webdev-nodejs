As already discussed, the very basic building block of web communication is the http protocol.
Using http a client, in the end user case in most cases a browser, can request a resource from  
a remote server. Ressources are identified with so called uniform resource locators (URLs).
A URL is a special case of an uniform resource identifier. With http they usually take the form
"schema://hostname:port/resource" an example would be:
"https://de.wikipedia.org/wiki/Uniform_Resource_Locator"
or
"http://localhost:1337" which is the same as "http://127.0.0.1:1337" just using an ip.

Typing one of these URLS will issue a GET request to a server for instance:
"https://de.wikipedia.org/wiki/Uniform_Resource_Locator"
issues a request to wikipedia.org and reqeusts the resource "wiki/Uniform_Resource_Locator".

