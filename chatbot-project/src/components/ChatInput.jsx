import { useState} from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
export function ChatInput({chatMessages, setChatMessages}) {
    const [inputText, setInputText] = useState('')
    function saveInputText(event){
        setInputText(event.target.value);
    }
    function sendMessage(){
        const newchatMessages = [
            ...chatMessages, 
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]
        setChatMessages(newchatMessages);

        const response = Chatbot.getResponse(inputText);
        setChatMessages([
            ...newchatMessages, 
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);
        setInputText('');
    }
    return (
        <div className="chat-input-container">
            <input 
                placeholder = "Send a message to Chatbot" 
                size = "30" 
                onChange={saveInputText}
                value={inputText}
                className="chat-input"
            />
            <button className="send-button"
                onClick={sendMessage}
            >Send</button>
        </div>
    );
}
