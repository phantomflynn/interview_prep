// stack is a linear data structure that follows LIFO (last in, first out)
// picture a stack of dinner plates
// push, pop, peek, isEmpty


class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push = data => {
    this.stack.push(data);
    this.size++;
  }

  pop = () => {
    // remove last element from array
    // aka remove the most recently added node from the array
    this.stack.pop(); 
    this.size--;
  }

  peek = () => {
    // return the top of the stack
    // return the most recently added item from the stack
    return this.stack[this.size];
  }

  is_empty = () => {
    // if the size of the stack is 0, then the stack is empty
    return this.size === 0 ? true : false;
  }
}