# Redux Introduction

The whole global state of the app is stored in an object tree inside a single store. 

The only way to change the state tree is to create an action, an object describing what happened, and dispatch it to the store.

To specify how state gets updated in response to an action -> pure reducer functions that calculatye a new state based on the old state and the action.



**Note**: Redux state should contain only plain JS objects, arrays and primitives. The root state value is usually an object.

```js
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}
// Create a Redux store holding the state of the app APIs is { subscribe, dispatch, getState}
let store = createStore(counterReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
```

## Core Concepts

State is a JS plain Object, (model except setters)

To change the state, you need to dispatch an action. An action is a plain JS object

Reducer: function takes state and action as arguments, and return the next state of the app.









# React-Redux Introduction





# Redux ToolKit Introduction

It wraps around the Redux core, and contains packages and functions that are essential for building Redux app.

