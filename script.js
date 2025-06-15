const messages = document.querySelector('.messages');
const inputMsg = document.querySelector('.input-msg');
const sendbtn = document.querySelector('.send-btn');
const userSelector = document.querySelector('#userSelector');


function renderMessages(){
    const text = inputMsg.value.trim();
    const selectedUser = userSelector.value;
    if(text !== ''){
        const newMsg = {
            user: selectedUser,
            msgText: text,
            time: new Date().toLocaleTimeString(),
        };
        // msgs.push(text);
        let msgs = JSON.parse(localStorage.getItem('msgs'));
        if(msgs){
            msgs.push(newMsg)
            
        }else{
            msgs = [];
            msgs.push(newMsg);
        }
        localStorage.setItem('msgs', JSON.stringify(msgs));
    }
    inputMsg.value = "";
    inputMsg.focus();
    const msgs = JSON.parse(localStorage.getItem('msgs'));
    messages.innerHTML = msgs.map(msg => {
        let currMsg;
        if(msg.user === 'Me'){
            currMsg = `<div class="message right">${msg.msgText}</div>`;
        }else{
            currMsg = `<div class="message left">${msg.user}: ${msg.msgText}(${msg.time})</div>`;
        }
        return currMsg;
    }).join('');
    messages.scrollTop = messages.scrollHeight;
}

const storedData = localStorage.getItem('msgs');
if(storedData){
    renderMessages();
}


inputMsg.addEventListener('keydown', (event)=>{
    
    if(event.key === "Enter"){
        renderMessages();
    }
})

sendbtn.addEventListener('click', ()=>{
    renderMessages();
    // console.log(msgs);
})
