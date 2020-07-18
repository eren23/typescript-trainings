type Callback = () => void; // thats not a function that'a type

export class Eventing {
  events: { [key: string]: Callback[] } = {};
  //Events going to be an object we don't know about different keys
  //but we do now that they will be strings and all these different keys
  //are going to point at values that are in an array of Callback functions

  on = (eventName: string, callback: Callback) => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }; //now with that method we have ability to register events and call the callback funcs later with the method below

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  };
}
