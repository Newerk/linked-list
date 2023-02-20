class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return this.head;
        } else {
            let tmp = this.head;
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode;
            }

            tmp.nextNode = value;
        }
    }
    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return this.head;
        } else {
            value.nextNode = this.head;
            this.head = value;
        }
    }

    size() {
        //

    }

    head() {
        //
    }

    tail() {
        //
    }

    at(index) {
        //
    }

    pop() {
        //
    }

    contains(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return this.head;
        } else {}
        //
    }

    find(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return this.head;
        } else {}
        //
    }

    toString() {
        //
    }

    insertAt(value, index) {
        //
    }

    removeAt(index) {
        //
    }

}

let nodeA = new Node('🚀');
let nodeB = new Node('🌙');
let nodeC = new Node('🌍');

let link = new LinkedList(new Node('👽'));
link.append(nodeA);
link.append(nodeB);
console.log(JSON.stringify(link))

link.prepend(nodeC);
console.log(JSON.stringify(link))


