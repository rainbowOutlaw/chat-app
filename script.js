const messages = document.querySelector('.messages');
const inputMsg = document.querySelector('.input-msg');
const sendbtn = document.querySelector('.send-btn');
const userSelector = document.querySelector('#userSelector');

const msgs = [];

function renderMessages(){
    const text = inputMsg.value.trim();
    const selectedUser = userSelector.value;
    if(text !== ''){
        // msgs.push(text);
        msgs.push({
            user: selectedUser,
            msgText: text,
            time: new Date().toLocaleTimeString(),
        })
    }
    inputMsg.value = "";
    inputMsg.focus();
    messages.innerHTML = msgs.map(msg => {
        let currMsg;
        if(msg.user === 'Me'){
            currMsg = `<div class="message right">${msg.msgText}</div>`;
        }else{
            currMsg = `<div class="message left">${msg.user}: ${msg.msgText}</div>`;
        }
        return currMsg;
    }).join('');
    messages.scrollTop = messages.scrollHeight;
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
