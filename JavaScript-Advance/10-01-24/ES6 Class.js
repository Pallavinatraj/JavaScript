class Stack {

    constructor() {
        this.length = 0;
        this.stack = [];
    }

    push(...arr) {
        arr.forEach((el) => {
            let index = this.length;
            this.stack[index] = el;
            this.length++;
        });
    }

    remove() {
        let index = this.length - 1;
        delete this.stack[index];
        this.stack.length--;
        this.length--;
    }

    peek() {
        return this.stack[this.length - 1]
    }

    isEmpty() {
        let value = this.length === 0 ? "stack is empty" : "stack is Full";
        console.log(value);
    }
}

let s1 = new Stack();
s1.push(1, 2, 3, 4, 5, 6, 7, 8);
s1.remove();
let last = s1.peek();
console.log("s1:", last);
s1.isEmpty();


