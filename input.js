let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})



var container = document.querySelector('body');

  container.addEventListener("touchstart", startTouch, false);
  container.addEventListener("touchmove", moveTouch, false);

  // Swipe Up / Down / Left / Right
  var initialX = null;
  var initialY = null;

  function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

  function moveTouch(e) {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    switch (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      case (diffX > 0):
        // swiped left
        if (lastInputDirection.x !== 0) break
        inputDirection = { x: -1, y: 0 }
        break
        // swiped right
      case (diffX < 0):
        if (lastInputDirection.x !== 0) break
        inputDirection = { x: 1, y: 0 }
        break; 
      // sliding vertically
    }
    switch (Math.abs(diffY) > Math.abs(diffX)) {
      case (diffY > 0):
        // swiped up
        if (lastInputDirection.y !== 0) break
        inputDirection = { x: 0, y: -1 }
        break
      case (diffY < 0):
        // swiped down
        if (lastInputDirection.y !== 0) break
        inputDirection = { x: 0, y: 1 }
        break;
    } 

    initialX = null;
    initialY = null;

    e.preventDefault();
  };

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}
