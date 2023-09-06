import { TypedEvent } from './typedEvent';

export class EventEmitter<T> {
    private listeners: Map<string, Array<TypedEvent<T>>> = new Map();

    public subscribe(eventName: string, listener: TypedEvent<T>): void {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, []);
        }

        this.listeners.get(eventName)?.push(listener);
    }

    public unsubscribe(eventName: string, listener: TypedEvent<T>): void {
        const eventListeners = this.listeners.get(eventName);
        if (eventListeners) {
            const index = eventListeners.indexOf(listener);
            if (index !== -1) {
                eventListeners.splice(index, 1);
            }
        }
    }

    public emit(eventName: string, payload: T): void {
        const eventListeners = this.listeners.get(eventName);
        if (eventListeners) {
            eventListeners.forEach(listener => listener(payload));
        }
    }
}