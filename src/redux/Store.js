class Store {
    #state;
    #reducer;
    #subscribers;

    constructor(initialState, reducer) {
        this.#state = initialState;
        this.#reducer = reducer;
        this.#subscribers = [];
    }

    subscribe = callback => {
        this.#subscribers.push(callback);
        return () => this.#subscribers.filter(fn => fn!== callback);
    }
    getState = () => this.#state;

    dispatch = action => {
        this.#state = this.#reducer(this.#state, action);
        this.#subscribers.forEach(callback => callback());
    }
}

export default Store;