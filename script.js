const messages = document.querySelector('.messages');
const inputMsg = document.querySelector('.input-msg');
const sendbtn = document.querySelector('.send-btn');
const userSelector = document.querySelector('#userSelector');




setInterval(() => {
    let msgs = JSON.parse(localStorage.getItem('msgs'));
    if(msgs){ 
        const latestMsg = msgs[msgs.length - 1];
        const timeElapsed = Date.now() - latestMsg.timestamp;
        if(timeElapsed >= (2 * 60 * 1000)){
            //TODO 
            // CLEAR ALL MSGS
            msgs.length = 0;
            localStorage.setItem('msgs', JSON.stringify(msgs));
            renderMessages();
        }
    }
}, (1 * 60 * 1000))
    



function addMsg(text, currUser){
    const newMsg = {
        user: currUser,
        msgText: text,
        time: new Date().toLocaleTimeString(),
        timestamp: Date.now()
    };
    let msgs = JSON.parse(localStorage.getItem('msgs'));
    if(msgs){
        msgs.push(newMsg)
        
    }else{
        msgs = [];
        msgs.push(newMsg);
    }
    localStorage.setItem('msgs', JSON.stringify(msgs));
}

function renderMessages(){
    const text = inputMsg.value.trim();
    const selectedUser = userSelector.value;
    if(text !== ''){
        addMsg(text, selectedUser);
        if(selectedUser === 'Me'){
            generateRandomMsg();
        }
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

//Reply with random message to all users sending messages
function generateRandomMsg(){
    const randomMsgs = ['Hi', 'How are you ?', 'How was your day ?', 'When are you coming home ?', 'Did you have your breakfast yet ?'];
    const allUsers = ['Subhendu', 'Aparajita'];
    const randomMsgIndex = Math.floor(Math.random() * 5);
    const randomUserIndex = Math.floor(Math.random() * 2);
    addMsg(randomMsgs[randomMsgIndex], allUsers[randomUserIndex]);
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
