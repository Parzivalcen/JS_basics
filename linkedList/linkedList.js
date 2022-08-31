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

listRandom.append('hi');
listRandom.printListValues();
console.log(listRandom);


list.append('hi');
list.printListValues();
// list.printListValues();