# Swagger Docs

> [Swagger](http://swagger.io) API Documentations Viewer

![Doc? Duck?](./docs/duck.jpg)

### Warning! Under development
This project is not ready for production use. It's being developed currently.

### Usage

#### Serve static files
Swagger Docs is a static web application. You can download it via **npm** and serve
the `dist` folder in your web server. Swagger Docs will make a request to `./swagger.json`
to  get the Swagger document to render. 

```shell
npm install swagger-docs
```
#### Use the Connect middle-ware
If you are using Express or any other Connect based server, there is a connect middle-ware.

```js
var SwaggerDocs = require('swagger-docs');
var myAPISwagger = fs.readFileSync('path/to/swagger.json');

app.get('/api-documentations/*', SwaggerDocs.middleWare(myAPISwagger));
```

### Development
Read [Development Documentations here](./docs/development.md).

### License
MIT
