class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }


    // add to front
    addToFront(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }


    // print linkedList
    print() {
        let runner = this.head

        while (runner) {
            console.log(runner.data);
            runner = runner.next
        }
    }
}

const ll = new LinkedList()

ll.addToFront(5)

ll.addToFront(4)

ll.addToFront(3)

console.log(ll);


ll.print()

