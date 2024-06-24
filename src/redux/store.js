
import { legacy_createStore } from "redux";

function counter(state = 0, action) {
    switch (action.tipe) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = legacy_createStore(counter);