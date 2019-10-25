class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    // Write your code here.
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (!nodeToInsert.prev) {
      this.head = nodeToInsert;
    } else {
      nodeToInsert.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;
    if (!nodeToInsert.next) {
      this.tail = nodeToInsert;
    } else {
      nodeToInsert.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let current = 1;
    let node = this.head;
    while (current < position && node !== null) {
      current = current + 1;
      node = node.next;
    }
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    let node = this.head;
    while (node) {
      let checking = node;
      node = node.next;
      if (checking.value === value) this.remove(checking);
    }
  }

  remove(node) {
    // Write your code here.
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    return node !== null;
  }

  removeNodeBindings(node) {
    if (node.next !== null) node.next.prev = node.prev;
    if (node.prev !== null) node.prev.next = node.next;
    node.next = null;
    node.prev = null;
  }
}
