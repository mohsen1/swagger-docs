# Swagger Docs

> [Swagger](http://swagger.io) API Documentations Viewer

![Doc? Duck?](./docs/duck.jpg)

### Warning! Under development
This project is not ready for production use. It's being developed currently.

### Features
* **Customizable**: It's very easy to customize the looks of Swagger Docs.
* **Linkability**: Each path, operation, parameter and many more elements have their own URL.
* **Independent from Swagger specs**: Swagger Docs can load Swagger specs dynamically. Updating your API documentation is as easy as updating your Swagger specs file(`swagger.json` file).
* **Templates**: You can use templates in description sections or other places to have custom variables for each user. For example you can have user `access_token` in documentations.
* **Mobile Ready**: Documentations look as good in mobile devices.


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
