Write a server with express which serves dynamic files under the `/files/` route.

On a GET to `/` the server should provide a webpage with a form. This form should have a text field
to provide the file name and a text area to provide its content.

On a POST to `/files` the file should be added. Use JSON to upload the file

On a GET to `/files` a list of all uploaded files should be output.
You can use the fs modules readdir function to list files in a directory.

On a GET to `/files/fileName` the file named `fileName` should be provided, if the file does not exis
respond with a simple 404 not Found message and set the statuscode appropriately.
The response code can be set as usual.
