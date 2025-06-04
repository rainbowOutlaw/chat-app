const messages = document.querySelector('.messages');
const inputMsg = document.querySelector('.input-msg');
const sendbtn = document.querySelector('.send-btn');

const msgs = [];

sendbtn.addEventListener('click', ()=>{
    const text = inputMsg.value;
    if(text !== ''){
        msgs.push(text);
    }
    inputMsg.value = "";
    console.log(msgs);
})
