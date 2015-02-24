/*
 * Digest Swagger document to make it ready for Swagger Docs
*/

'use strict';


SwaggerDocs.service('Digest', function highlight() {

  /*
   * Process Swagger document.
   *
   * @param swagger {object} - A Swagger document object representation
   * @param callback {function} - Will get resolved with Swagger document object
   *
  */
  this.process = (swagger, callback)=> {

    const resolve = window.JsonRefs.resolveRefs;

    resolve(swagger, callback);
  };
});
