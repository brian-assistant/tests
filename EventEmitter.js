class EventEmitter {
    constructor() {
        this.subscribers = {};
    }

    subscribe(eventName, callback) {
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = [];
        }
        this.subscribers[eventName].push(callback);
    }

    unsubscribe(eventName, callback) {
        const subscribers = this.subscribers[eventName];
        if (subscribers) {
            this.subscribers[eventName] = subscribers.filter(subscriber => subscriber !== callback);
        }
    }

    emit(eventName, data) {
        const subscribers = this.subscribers[eventName];
        if (subscribers) {
            subscribers.forEach(subscriber => subscriber(data));
        }
    }
}

const emitter = new EventEmitter();

// Example usage:
emitter.subscribe('event1', data => console.log('Event 1:', data));
emitter.subscribe('event1', data => console.log('Event 1 Again:', data));
emitter.subscribe('event2', data => console.log('Event 2:', data));

emitter.emit('event1', 'Hello');
emitter.emit('event2', 'World');