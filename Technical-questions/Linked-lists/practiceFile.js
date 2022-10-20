class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }


    addToFront(data) {
        this.head = new Node(data, this.next);
        this.size++
    } 
}

let linkedList = new LinkedList

linkedList.addToFront(20)

// LinkedList { head: Node { data: 20, next: null }, size: 1 }