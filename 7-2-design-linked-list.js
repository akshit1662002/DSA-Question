function Node(value) {
  this.val = value;
  this.next = null;
}

var MyLinkedList = function () {};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  //first we need to reached to the last node
  //   let current = this.head;
  //   while (current !== null) {
  //     current = current.next;
  //   }
  //   //this loop will gave you last node
  //   //now we add node to the last
  //   // first we need to create a new node
  //   let newNode = new Node(value);
  //   current.next = newNode;

  //we have a corner case when we have a empty list means head points to null

  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);
  if (index == null) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    let current = this.head;
    for (i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
