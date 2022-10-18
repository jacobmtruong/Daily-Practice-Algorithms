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

    // Insert last node
    insertLast (data) {
        let node = new Node(data);
        let current;

        // Check if the head is empty, if it is then insert to the head
        if(this.head === null) {
            this.head = node
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }


    // Insert at Index
    insertAt(data, index) {
        // If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If it first index
        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        const node = new Node(data)
        let current, previous

        //Set current to first 
        current = this.head
        let count = 0

        while (count < index) {
            previous = current; // node before index
            count++
            current = current.next
        }

        node.next = current;
        previous.next = node;

        this.size++
    }

    // get at Index
    getAt(index) {
        if (index === 0) {
            return this.head
        } else {
            let current = this.head
            let count = 0
            while (count < index) {
                count++
                current = current.next
            }
            console.log(current.data);
        }
    }

 
    // remove at Index
    removeAt(index) {
        let current = this.head
        if (index === 0) {
            this.head = current.next
        } else {
            let count = 0
            let previous = current
            while(count < index) {
                previous = current
                count++
                current = current.next
            }
            previous.next = current.next
            current.next = null
            this.size--
        }
    }

    // Print
    printListData () {
         let current = this.head;

         while (current) {
            console.log(current.data)
            current = current.next;
         }
    console.log(this.size);
    }
}

const ll = new LinkedList();


ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(50)
ll.insertLast(30)



ll.printListData()

ll.removeAt()

ll.printListData()

// console.log(ll);