class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(val) {
    this.queue.push(val);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue[0] !== undefined;
  }
}