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
}

