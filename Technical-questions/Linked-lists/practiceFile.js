class Node {
    constructor (data, next = null) {
        this.data = data
        this.next = next
    } 
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0
    }

    addToFront (data) {
        this.head = new Node (data, this.head)
        this.size ++
    }

    printList() {
        let runner = this.head

        while (runner) {
            console.log(runner.data);
            runner = runner.next
        }
    console.log(this.size); 
    }
}

let linkedlist = new LinkedList()

linkedlist.addToFront(20)

linkedlist.printList()