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

    printList() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }

}

let linkedList = new LinkedList

linkedList.addToFront(20)
linkedList.addToFront(10)
linkedList.addToFront(5)
linkedList.addAtIndex(2, 1)

linkedList.printList()

// LinkedList { head: Node { data: 20, next: null }, size: 1 }