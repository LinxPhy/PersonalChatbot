import { createContext, useEffect } from 'react';
import { useState } from 'react';
import defaults from '../_defaults/defaults';

export const ChatbotContext = createContext(null)

const getDefaultChatbots = () => {
    let cart = []

    for (let i = 0; i < defaults.length; i++){
        cart.push(defaults[i])
    }

    return cart
}

export const ChatbotContextProvider = (props: any) => {

    return (
        <ChatbotContext.Provider value={null}>
            {props.children}
        </ChatbotContext.Provider>
    )

}