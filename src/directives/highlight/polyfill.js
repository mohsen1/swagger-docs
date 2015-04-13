// from https://github.com/panzi/scrollIntoViewIfNeeded/blob/master/scrollintoview.js

'use strict';

(function ($, undefined) {
  $.fn.scrollIntoView = function () {
    if (this.length > 0) this[0].scrollIntoView();
    return this;
  };

  $.fn.scrollIntoViewIfNeeded = document.createElement('div').scrollIntoViewIfNeeded ?
  function (arg) {
    if (this.length > 0) this[0].scrollIntoViewIfNeeded(arg);
    return this;
  } :
  function () {
    if (this.length > 0) {
      var doc = $(document);
      var win = $(window);
      var scroll_top  = doc.scrollTop();
      var scroll_left = doc.scrollLeft();
      var win_height = win.innerHeight();
      var win_width  = win.innerWidth();
      var offset = this.offset();
      var x = offset.left;
      var y = offset.top;
      var width  = this.width();
      var height = this.height();

      if (width >= win_width) {
        if (x > scroll_left || x + width < scroll_left + win_width) {
          this[0].scrollIntoView();
          return this;
        }
      }
      else {
        if (x < scroll_left || x + width > scroll_left + win_width) {
          this[0].scrollIntoView();
          return this;
        }
      }

      if (height >= win_height) {
        if (y > scroll_top || y + height < scroll_top + win_height) {
          this[0].scrollIntoView();
          return this;
        }
      }
      else {
        if (y < scroll_top || y + height > scroll_top + win_height) {
          this[0].scrollIntoView();
          return this;
        }
      }
    }

    return this;
  };
})(jQuery);
