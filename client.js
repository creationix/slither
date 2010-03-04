(function ($) {
  var real_keys = {
    left: false,
    up: false,
    right: false,
    down: false
  };
  var keys = {
    get left() { return real_keys.left; },
    get up() { return real_keys.up; },
    get right() { return real_keys.right; },
    get down() { return real_keys.down; },
    set left(bool) { return update("left", bool); },
    set up(bool) { return update("up", bool); },
    set right(bool) { return update("right", bool); },
    set down(bool) { return update("down", bool); }
  }
  function update(name, bool) {
    if (real_keys[name] !== bool) {
      real_keys[name] = bool;
      if (bool) {
        $("#right ." + name).addClass('pressed');
      } else {
        $("#right ." + name).removeClass('pressed');
      }
    }
  }
  
  $(function () {
    // Listen to key events
    $('body').keydown(function (ev) {
      switch (ev.keyCode) {
        case 37: keys.left = true; break;
        case 38: keys.up = true; break;
        case 39: keys.right = true; break;
        case 40: keys.down = true; break;
      }
    }).keyup(function (ev) {
      switch (ev.keyCode) {
        case 37: keys.left = false; break;
        case 38: keys.up = false; break;
        case 39: keys.right = false; break;
        case 40: keys.down = false; break;
      }
    });
    // Also listen to mouse clicks on the arrows
    ["left", "up", "right", "down"].forEach(function (direction) {
      $("#right ." + direction).mousedown(function (ev) {
        keys[direction] = true;
      });
      $("#right ." + direction).mouseup(function (ev) {
        keys[direction] = false;
      });
    });
  
  });
}(jQuery));
