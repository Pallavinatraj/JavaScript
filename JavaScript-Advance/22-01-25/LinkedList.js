class Node {
    constructor(element) {
        this.data = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(element) {
        var node = new Node(element);
        var current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) {
                current = this.next;
            }
            current.next = node;
        }
    }
}

var l1 = new LinkedList();
l1.add(10);
l1.add(20);
l1.add(30);
l1.add(40);
l1.add(50);
console.log(l1);

