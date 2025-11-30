import {  useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'
export function ChatMessages({chatMessages}) {
            const chatMessagesRef = useRef(null); //automatically save an html elemnt
            useEffect(() => {
                const cotaninerElem = chatMessagesRef.current;
                if (cotaninerElem) {
                    cotaninerElem.scrollTop = cotaninerElem.scrollHeight;
                    
                }
            }, [chatMessages])

            return (
                <div className="chat-Messages-container" ref={chatMessagesRef}>
                    {chatMessages.map(chatMessage => (
                        <ChatMessage
                            message={chatMessage.message}
                            sender={chatMessage.sender}
                            key={chatMessage.id}
                        />
                    ))}
                    </div>
            );
    }