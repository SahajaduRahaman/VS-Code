import {useState} from 'react'
export const Message = (toto) => {
    const [message, setMessage] = useState('Welcome Message')
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thank U for Subscribing!')}>Subscribe</button>
       </div>
    )
}