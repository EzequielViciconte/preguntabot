import React from 'react';
import ChatBot  from 'react-simple-chatbot';

import steps from '../../services/Steps'

const ContenedorFrase = () => {
    return(
        <div className='Chat'>
            <ChatBot steps={steps}/>
        </div>
    )
}

export default ContenedorFrase;