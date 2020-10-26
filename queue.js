const divScreen=document.querySelector('#screen')
const btnWait=document.querySelector('#waitQueue')
const btnCall=document.querySelector('#callNumber')
const spanNewNumber=document.querySelector('#newNumber')
const spanQueue=document.querySelector('#queue')

let n= 0
let queue=[]
btnWait.onclick=()=>{
    n+=1
    spanNewNumber.innerText=n
    queue.push.call(queue,n)
    spanQueue.innerText = JSON.stringify(queue);
}
btnCall.onclick=()=>{
    if(queue.length===0){return}
    let m=queue.shift.call(queue)//队列弹出用shift，栈用pop
    divScreen.innerText=`请${m}号顾客就餐`
    spanQueue.innerText = JSON.stringify(queue);

}