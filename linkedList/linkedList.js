class linkedList {
  constructor (head = null){
    this.head = head;
  }

  printListValues(node = this.head){
    if(node === null || node === undefined) return 

    if(node.next) this.printListValues(node.next);
    return console.log(node.data);
  
  }

  append(value){
    const newNode = new node(value);
    if(this.head === null) return this.head = newNode;
    let lastNode = this.head;
    while(lastNode.next !== null){
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  prepend(value){
    const head = new node(value);
    head.next = this.head;
    this.head = head;
  }

  size(){
    let counter = 0;
    let node = this.head;
    while(node){
      counter ++
      node = node.next
    }
    return counter;
  }

  listHead(){
    return this.head;
  }

  tail(){
    let lastNode = this.head;

    while(lastNode.next !== null){
      lastNode = lastNode.next
    }
    return lastNode.data
  }

  at(n){
    let node = this.head;
    for(let i = 0; i < n; i++){
      node = node.next;
    }
    return node;
  }
  
  pop(){
    if(!this.head){
      return null;
    }

    // if there is only one node
    if(!this.head.next){
      this.head = null;
      return;
    }

    let previous = this.head;
    let last = this.head.next;

    while(last.next !== null){
      previous = last;
      last = last.next;
    }

    return previous.next = null;
  }

  contains(value){
    let node = this.head;
    while(node.next!== null){
      if(value === node.data) return true;
      node = node.next;
    }
    return false
  }

  find(value){
    let node = this.head;
    let index = 0;
    while(node.next !== null){
      if(value === node.data) return index;
      node = node.next;
      index ++
    }
    return null;
  }

  toString(){
    let str = '';
    let node = this.head;
    while(node){
      str += `(${node.data})->`
      node = node.next;
    }
    return str += 'null';
  }
  
  insertAt(value, index){
    let newNode = new node(value);
    let tmp = this.head;

    for(let i = 1; i < index; i++){
      if(tmp.next != null) tmp = tmp.next
    }
    newNode.next = tmp.next;
    tmp.next = newNode;

  }
  removeAt(index){
    let tmp = this.head;
    let ahead = this.head.next;
    for(let i = 1; i < index; i++){
      if(tmp.next !== null){
        tmp = tmp.next;
        ahead = ahead.next;
      } 
        
    }
    tmp.next = ahead.next;
  }

}

class node{
  constructor (val){
    this.data = val;
    this.next = null;
  }
}
const a = new node(1);
const b = new node(2);
const c = new node(3);
const d = new node(4);

const random = new node('david');

a.next = b;
b.next = c;
c.next = d;

const list = new linkedList(a);

const listRandom = new linkedList(random);

// listRandom.append('hi');
// listRandom.printListValues();
console.log(listRandom.toString());


list.append('hi');
list.insertAt('lol', 2);
list.listHead();
// list.printListValues();
console.log(list.toString());
console.log(list.listHead());


// list.printListValues();