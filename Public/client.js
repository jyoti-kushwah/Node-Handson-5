let socket=io()

let name;
let text=document.querySelector('#textarea')
let msgarea=document.querySelector('.msgarea')
do{
    name=prompt('Enter your name')
}while(!name)


 text.addEventListener('keyup',(e)=>{
    if(e.key==="Enter"){
        sendMessage(e.target.value)
    }
})

let sendMessage=(message)=>{
    let msg={
        user:name,
        msg:message
    }
    popup(msg,'send')
    socket.emit('message',msg)
}

let popup=(msg,type)=>{
    let msgArea=document.createElement('div')
    let className=type
    msgarea.classList.add(className,'msg')

    let update=`
    <h4>${msg.user}</h4>
    <p>${msg.msg}</>
    `
    msgArea.innerHTML=update
    msgarea.appendChild(msgArea)
} 


socket.on('message',(msg)=>{
    popup(msg,'recevied')
})

/* socket.on('user-joined', (name)=>{
    append(`${name} joined the chat`, 'right');
});

socket.on('recieve', (data)=>{
    append(`${data.name} : ${data.message}`, 'left');
});

socket.on('left', (name)=>{
    append(`${name} left the chat`, 'left');
}); */