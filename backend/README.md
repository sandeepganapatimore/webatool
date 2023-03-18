# Difference b/w static and instance method

- 1. Static method calls the class itself in his function.From Static method the instance can be created.
     in the heap memory static method doesn't create the memory.It only get's data and set the data in the acquired memory by the instance method.

- 2. Instance method creates the instances from the class.Which means it calls the method which are already declared and created by the class. It creates the memory in the heap.

# Why we need to create instance to express

- We need to create the instance to express.To access the methods which are represent in the express class constructor.Methods such as sync(),authentication(),define() etc....

# What is the purpose of app.use()?

- use() is the instance which acts the middleware for the express modal class.
  it is used for writing the middleware for the application.

# What do you mean by middleware ?

- Middleware has the special functionality that it can access both http response and http request.
- Middle can manipulate both the response and request before it reaches destination.
- Middleware is also used to end the request-response cycle.
- With in the middleware there is functionality called as next() through which we ca access next request to the stack.

# What is the purpose of app.listen()?

- app.listen() is mainly used for starting the server on the particular port on the HTTP server.

# What http server or web server?

- Hypertext Transfer Protocol (HTTP) is the application layer protocol.It is mainly used for establishing the connection between client side and server side.

# Purpose of express middleware?

- The purpose of the middleware in the express is to able to get both request data and response data in the middle of the client side and server side.
- next() is the common middleware we use.

# Purpose send() function

- Send() is the http response the body parameter value to send() function. The body param values can Buffer object,String object,String value, Array or object. The content-type of header changes according to this parameters.

# status() function

- It set the HTTP status for the response. response such as 200,201,204,404 etc.

# sendStatus() status

- sendStatus takes status code as input parameter during res.send() and sends registered status code to teh response body if there is unknown status code then the default status code will be 404.

# What are http request methods?

- post
- get
- put
- delete
- patch

# What are http response status codes?

- http response status code indicates whether the the http request has been successfully completed.

# What is purpose of port?

- The purpose of the port is to give the platform to server to run it's functionality.

# async/await

- async and await are javascript function.In this async means asynchronous function in which the function action is given promise and executer inside the function is given await it returns the promise value which is executed by the async function.
- await must be declared inside the javascript function.
- if we declare the await outside the async function it will throw us an error.

# express.json()

- It is middleware which is used in the express() which is used for parsing the incoming values and returns the value in the based on body-parser.

