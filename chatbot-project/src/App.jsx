import { useState } from 'react'
import { ChatMessages } from './components/ChatMessage';
import './App.css'
import { ChatInput } from './components/ChatInput';

function App() {
             const [chatMessages, setChatMessages] = useState([
                { message: 'hello chatbot', sender: 'user', id: 'id1' },
                { message: 'Hello! how can i help you?', sender: 'robot', id: 'id2' },
                { message: 'Can you get me todays date?', sender: 'user', id: 'id3' },
                { message: 'Today is September 27', sender: 'robot', id: 'id4' }
            ])
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0]; //current value of chatMessages
        // const  setChatMessages = array[1] //Function that updates data
            return (
                <div className="app-container">
    
                    <ChatMessages
                        chatMessages={chatMessages}
                    />
                    <ChatInput
                        chatMessages = {chatMessages}
                        setChatMessages={setChatMessages}
                    />
                </div>
            )
        }

export default App
