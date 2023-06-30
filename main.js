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

