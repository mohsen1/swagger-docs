/*
 * This attribute directive will get an argument, when that argument is true
 * it will apply the "highlighted" class to the element and bring it to the view
 * using Element.scrollIntoViewIfNeeded() method
 *
 * @param do {boolean} - determines if it should highlight or not
 *
 * @example
 * <div highlight="true">This div will be highlighted</div>
*/

'use strict';

function highlight() {
  return {
    restrict: 'A',
    link: (scope, element, attributes)=> {

      if (attributes.highlight) {
        element.get(0).scrollIntoViewIfNeeded();
        angular.element('*').removeClass('highlighted');
        element.addClass('highlighted');
      }
    }
  };
}

export default highlight;
