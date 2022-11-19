import { ChatEngine } from 'react-chat-engine';

import './App.css';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const projectID = 'd0378d44-c87a-41f3-82d2-f1e7896a60e9';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID="d0378d44-c87a-41f3-82d2-f1e7896a60e9"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } /> }
        />
    );
}

export default App;