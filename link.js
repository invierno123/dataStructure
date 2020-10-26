const createNode=value=>{
    return {
        data:value,
        next:null
    }
}
const createList=value=>{
    return createNode(value)
}
const appendList=(list,value)=>{
    const node=createNode(value)
    let l=list
    while(l.next){
        l=l.next
    }
    l.next=node
    return node
}
const removeNode=(list,node)=>{
    //list是链表第一个节点，node是要删除的节点
    let x=list
    let p=node
    while(x!==node&&x!==null){
        p=x
        x=x.next
    }//x变为要删除的节点，p变为x的上一个节点
    if(x===null){return false}
    else if(x===p){
        p=x.next
        return p 
    }//删除第一个节点
    else{
        p.next=x.next
        return list
}
}
const travelList=(list,fn)=>{
    let x = list;
    while (x !== null) {
      fn(x);
      x = x.next;
    }
}
const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
travelList(list, node => {
  console.log(node.data);
});