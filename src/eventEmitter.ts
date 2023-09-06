type EventHandler<T> = (payload: T) => void;

class EventEmitter<T> {
  private events: Record<string, EventHandler<T>[]> = {};

  public subscribe(eventName: string, handler: EventHandler<T>): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(handler);
  }

  public unsubscribe(eventName: string, handler: EventHandler<T>): void {
    const eventHandlers = this.events[eventName];
    if (eventHandlers) {
      this.events[eventName] = eventHandlers.filter((h) => h !== handler);
    }
  }

  public emit(eventName: string, payload: T): void {
    const eventHandlers = this.events[eventName];
    if (eventHandlers) {
      eventHandlers.forEach((handler) => handler(payload));
    }
  }
}

export default EventEmitter;