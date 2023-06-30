"use strict";

const isChar = (elem) => {
    if (typeof elem !== "string" || elem.length !== 1) {
      return false;
    }
  };
const isValidIndex = (index, length) => {
  if (
    typeof index !== "number" ||
    index < 0 ||
    (index >= length && index !== 0)
  ) {
    throw new Error("Invalid index");
  }
};

class ListNode {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
  }
}

class List {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //length implementation
  size() {
    return this.length;
  }

  //append implementation
  append(elem) {
    if (isChar(elem) !== false) {
      const node = new ListNode(elem);
      if (!this.head) {
        this.head = node;
      } else {
        this.tail.next = node;
      }
      this.length++;
      node.next = this.head;
      this.tail = node;
    } else {
      return;
    }
  }
  
  //insert implemetantion
  insert(elem, index) {
    if (isChar(elem) !== false) {
      isValidIndex(index, this.length);
      const node = new ListNode(elem);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
        this.tail = node;
      } else if (index === this.length) {
        this.tail.next = node;
        this.tail = node;
        node.next = this.head;
      } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
          current = current.next;
        }
        node.next = current.next;
        current.next = node;
      }
      this.length++;
    } else {
      return;
    }
  }


  //delete implementation
  delete(index) {
    isValidIndex(index, this.length);
    let elemToDelete = null;
    if (this.length === 1) {
      elemToDelete = this.head.elem;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      elemToDelete = this.head.elem;
      this.head = this.head.next;
      this.tail.next = this.head;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      elemToDelete = current.next.elem;
      current.next = current.next.next;
      if (index === this.length - 1) this.tail = current;
    }
    this.length--;
    return elemToDelete;
  }
  
  //deleteAll implementation
  deleteAll(elem) {
    let current = this.head;
    let prev = this.tail;
    for (let i = 0; i < this.length; ) {
      if (current.elem === elem) {
        if (i === 0) {
          this.head = this.head.next;
          this.tail.next = this.head;
          prev = this.tail;
        } else {
          prev.next = current.next;
          if (i === this.length - 1) this.tail = prev;
        }
        this.length--;
        i--;
      } else {
        prev = current;
      }
      current = current.next;
      i++;
    }
  }

  //get implementation
  get(index) {
    isValidIndex(index, this.length);
    let current = this.head;
    if (!current) return;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.elem;
  }

  //clone implementation
  clone() {
    const listToClone = new List();
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      listToClone.append(current.elem);
      current = current.next;
    }
    return listToClone;
  }

  //reverse implementation
  reverse() {
    let current = this.head;
    let prev = this.tail;
    for (let i = 0; i < this.length; i++) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    if (this.length > 0) this.tail = this.head.next;
  }


