import React, { useContext, useEffect, useState } from 'react';
import Message from './Message';
import { ChatContext } from '@/app/context/ChatContext';
import { db } from '@/firebase';
import { onSnapshot, doc } from 'firebase/firestore';

interface MessageType {
  id: string;
  senderId: string;
  text: string;
}

function Messages() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists() && doc.data().messages) {
        setMessages(doc.data().messages);
      }
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  if (messages.length === 0) {
    return <div>Loading messages...</div>;
  }

  return (
    <div className='flex flex-col'>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
}

export default Messages;
