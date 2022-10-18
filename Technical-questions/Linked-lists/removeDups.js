class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    // Print
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data)
            current = current.next;
        }
        console.log(this.size);
    }

    // ---- REMOVE DUPS ----
    
    removeDups() {
        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.data === current.next.data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
        return console.log(this.head);
    }
}

const ll = new LinkedList();

ll.insertFirst(100)
ll.insertFirst(100)
ll.insertFirst(300)
ll.insertFirst(200)
ll.insertFirst(200)

ll.removeDups()

ll.printListData()