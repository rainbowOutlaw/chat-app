const messages = document.querySelector('.messages');
const inputMsg = document.querySelector('.input-msg');
const sendbtn = document.querySelector('.send-btn');

const msgs = [];


function renderMessages(){
    const text = inputMsg.value.trim();
    if(text !== ''){
        msgs.push(text);
    }
    inputMsg.value = "";
    inputMsg.focus();
    messages.innerHTML = msgs.map(msg => `<div class="message">${msg}</div>`).join('');
}


inputMsg.addEventListener('keydown', (event)=>{
    
    if(event.key === "Enter"){
        renderMessages();
    }
})

sendbtn.addEventListener('click', ()=>{
    renderMessages();
    console.log(msgs);
})
