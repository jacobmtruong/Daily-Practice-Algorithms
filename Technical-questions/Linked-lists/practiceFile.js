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

    addAtIndex(data, index) {
        if (index === 0) {
            this.head = new Node(data, this.head);
            return
        } 
        if (index > 0 && index > this.size) {
            return "Invalid index"
        }
         const node = new Node(data)
         let current,previous 

         current = this.head
         let count = 0
         
         while (count < index) {
            previous = current
            count++
            current = current.next
         }

         node.next = current
         previous.next = node
         this.size++
    }

    addToFront(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    addtoBack(data) {
        if (this.head == null) {
            this.head = new Node(data, this.head);
        } else {
            const node = new Node(data)
            let current = this.head

            while (current.next != null) {
                current = current.next
            }

            current.next = node
            this.size++
        }
    }

    printList() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }

    removeDups() {
        let current = this.head
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

let linkedList = new LinkedList

linkedList.addToFront(20)
linkedList.addToFront(10)
linkedList.addToFront(10)
linkedList.addToFront(5)
linkedList.addToFront(5)
linkedList.addtoBack(50)
linkedList.addtoBack(50)

// linkedList.printList()
linkedList.removeDups()

linkedList.printList()

// LinkedList { head: Node { data: 20, next: null }, size: 1 }