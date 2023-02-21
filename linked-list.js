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
        let count = 1;
        let tmp = this.head;
        while (tmp.nextNode !== null) {
            tmp = tmp.nextNode;
            count++;
        }
        return count;
    }

    listHead() {
        let tmp = this.head;
        return tmp;
    }

    tail() {
        let tmp = this.head;
        while (tmp.nextNode !== null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index) {
        let tmp = this.head;
        let count = 0;
        let storeNode;
        while (tmp.nextNode !== null) {
            if (count === index) {
                return tmp;
            }
            tmp = tmp.nextNode;
            count++;
        }

        if (index < 0 || index > count) {
            console.log('Your index is out of the range');
        } else {
            return tmp;
        }
    }

    pop() {
        let tmp = this.head;
        while (tmp.nextNode.nextNode !== null) {
            tmp = tmp.nextNode;
        }
        tmp.nextNode = null;
        return tmp;
    }

    contains(value) {
        if (this.head === null) {
            console.log('The list you are searching in is empty');
        } else {
            let tmp = this.head;
            if (tmp.value === value) {
                console.log(true);
                return true;
            }
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode;

                if (tmp.value === value) {
                    console.log(true);
                    return true;
                }

            }
            console.log(false);
            return false;
        }
    }

    find(value) {
        if (this.head === null) {
            console.log('The list you are searching in is empty');
        } else {
            let tmp = this.head;
            let count = 0;
            if (tmp.value === value) {
                console.log(`Index ${count}`)
                return count;
            }

            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode;
                count++;

                if (tmp.value === value) {
                    console.log(`Index ${count}`)

                    return count;
                }

            }
            console.log(`Value not found`)
        }
        //
    }

    toString() {
        if (this.head === null) {
            console.log('')
            return '';
        } else {
            let convert = '';
            let tmp = this.head;
            while (tmp !== null) {
                convert += `(${tmp.value}) -> `;
                tmp = tmp.nextNode;
            }
            console.log(convert += 'null');
            return convert;
        }
    }

    insertAt(value, index) {
        let node = new Node(value);
        let count = 0;
        let tmp = this.head;

        if (index === 0) {
            node.nextNode = tmp;
            return node;
        }

        while (tmp.nextNode !== null) {
            if (count === index - 1) {
                let rightAttachment = tmp.nextNode; //store the node that will be become the nextNode of the insert
                tmp.nextNode = node;
                node.nextNode = rightAttachment;
                return tmp;
            }
            tmp = tmp.nextNode;
            count++;
        }

        return tmp;

    }

    removeAt(index) {
        let count = 0;
        let tmp = this.head;

        if (index === 0) {
            this.head = tmp.nextNode;
            return this.head;
        }

        while (tmp.nextNode !== null) {
            if (count === index - 1) {
                tmp.nextNode = tmp.nextNode.nextNode;
                return tmp;
            }
            tmp = tmp.nextNode;
            count++;
        }

        return tmp;

    }
}

let nodeA = new Node('🚀');
let nodeB = new Node('🌙');
let nodeC = new Node('🌍');

let link = new LinkedList(new Node('👽'));
link.append(nodeA);
link.append(nodeB);
link.prepend(nodeC);
link.pop(); //removes nodeC '🌙'
link.find('🌍'); //index 0
link.toString(); //(🌍) -> (👽) -> (🚀) -> null
link.insertAt('🛸', 1); // {"head":{"value":"🌍","nextNode":{"value":"🛸","nextNode":{"value":"👽","nextNode":{"value":"🚀","nextNode":null}}}}}
link.removeAt(2) // {"head":{"value":"🌍","nextNode":{"value":"🛸","nextNode":{"value":"🚀","nextNode":null}}}}

console.log(JSON.stringify(link))





