"use strict";

const isChar = (elem) => {
    if (typeof elem !== "string" || elem.length !== 1) {
      return false;
    }
  };

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
  