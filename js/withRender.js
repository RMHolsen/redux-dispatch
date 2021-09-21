let state = { count: 0 }
// setting state with one key-value pair

function changeState(state, action) {
    switch(action.type) {
        // caaaaaaase statements
        // Okay I will put the note in case future me forgets it: we use case statements because they allow for much expansion
        // and it's less clunky than if else if else if else if else if else if... ad nauseum
        case "INCREASE_COUNT": 
            return { count: state.count + 1 }
        default: 
            return state;
    }
}

function dispatch(action) {
    // assigning to state the value created by invoking the changeState function with the appropriate action
    // and then returning the new state, thereby... persisting it? is that the word I want to use?
    state = changeState(state, action);
    // return state;
    render();
    // putting render instead of return state ensures that the html refreshes every time we call dispatch
}

function render() {
    document.body.textContent = state.count;
    // lo we are putting it into the body of the thing. 
    // technically the render function is supposed to go as an add-on into the reducer but I want to make this point in a separate doc
    // to keep everything straight and separate and clear
    // also repetitively typing things helps me learn
    // also  now this file has the endless comments on it linking everything together
}

render();