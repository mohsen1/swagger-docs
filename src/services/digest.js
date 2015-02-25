/*
 * Digest Swagger document to make it ready for Swagger Docs
*/

'use strict';


SwaggerDocs.service('Digest', function highlight() {

  /*
   * Process Swagger document.
   *
   * @param swagger {object} - A Swagger document object representation
   * @param callback {function} - Error first callback function. Will get
   * resolved with Swagger document object as second argument
   *
  */
  this.process = (swagger, callback)=> {

    if (typeof callback !== 'function') {
      throw new Error('callback should be a function');
    }

    window.JsonRefs.resolveRefs(swagger, (err, resolved)=> {
      if (err) {
        return callback(err);
      }

      callback(null, applyPathLevelParams(resolved));
    });
  };

  /*
   * Apply path level parameters to operations
   *
   * @param swagger {object} - A Swagger document object representation
   * @returns {object} - A Swagger document object representation (same object)
  */
  function applyPathLevelParams(swagger) {

    // TODO
    return swagger;
  }
});
