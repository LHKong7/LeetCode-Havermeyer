const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Event Bubbles & Capture

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// Capture: happens first, from top to down element. caoture down the tree
/////
/////
/////
///// Bubbles: from closest element to further element bubble up the tree
/////
/////
/////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// To Stop the propagation using e.stopPropagation()
grandparent.addEventListener('click', e => {
    console.log("Grandparent click capture phase");
}, {capture: true});

grandparent.addEventListener('click', e => {
    console.log("Grandparent click bubble phase");
});

parent.addEventListener('click', e => {
    console.log("parent click capture phase");
}, {capture: true});


parent.addEventListener('click', e => {
    console.log("Parent click bubble phase");
})

child.addEventListener('click', e => {
    console.log("child click capture phase");
}, {capture: true});

child.addEventListener('click', e => {
    console.log("Child click bubble phase");
    e.stopPropagation();
})

document.addEventListener('click', e => {
    console.log("document click capture phase");
}, {capture: true});

document.addEventListener('click', e => {
    console.log("Document click bubble phase");
})

// Event Delegation: Since the events goes through bubbles and capture
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
};

// CUSTOM Event
const myEvent = new Event("myCustomEvent", { bubbles: true, cancelable: true, composed: true }); // create a event
const myCustomEvent = new CustomEvent("myCustomEventData", { detail: {hello: 'world'}});
const myElement = document.querySelector('button');

// myElement.addEventListener('myCustomEvent', e => {
//     console.log(e);
// });

// document.addEventListener('myCustomEvent', e => {
//     console.log("event trigger in document", e);
// });
myElement.addEventListener("custom:doubleClick", e => {
    console.log("double click", e.detail);
});

const MAX_DOUBLE_CLICK_TIME = 500;
let lastClick = 0;
myElement.addEventListener("click", e => {
    const timeBetweenClick = e.timeStamp - lastClick;

    if (timeBetweenClick > MAX_DOUBLE_CLICK_TIME) {
        lastClick = e.timeStamp;
        return;
    };

    const doubleClickEvent = new CustomEvent("custom:doubleClick", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
            timeBetweenClick
        }
    });

    e.target.dispatchEvent(doubleClickEvent);
    lastClick = 0;
})

document.dispatchEvent(myEvent); // trigger an event

// Touch Event

// touches property: all the places the current is getting touched
// targetTTouches: all of the touch things inside a target, where you touch in an element
// changedTouches: new fringer 
document.addEventListener("touchstart", e => {
    [...e.changedTouches].forEach(touch => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
        dot.id = touch.identifier
        document.body.append(dot);
    })
})

document.addEventListener("touchmove", e => {
    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier);
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
    })
})

document.addEventListener("touchend", e => {
    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier);
        dot.remove();
    })
})

const topHalf = document.getElementById("top-half");
topHalf.addEventListener("touchstart", e => {
    // e.preventDefault(); // anytime no longer propagate the event outword
    console.log(e.touches.length)
    console.log(e.targetTouches.length)
    console.log(e.changedTouches.length)
})

document.addEventListener('click', e => {
    console.log("Clicked");
})
