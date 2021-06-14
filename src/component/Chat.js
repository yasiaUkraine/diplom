import ChatBot from 'react-simple-chatbot';

const Chat = (props) => {

    return (
        <section className = 'hero'>

        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Pick a number',
              trigger: '2',
            },
            {
              id: '2',
              options: [
                { value: '1', label: '1', trigger: '3' },
                { value: '2', label: '2', trigger: '3' },
                { value: '3', label: '3', trigger: '3' },
                { value: '4', label: '4', trigger: '3' },
                { value: '5', label: '5', trigger: '3' },
              ],
            },
            {
              id: '3',
              message: 'A callback message was called!',
              end: true,
            },
          ]}
        />
        </section>
    );
}

export default Chat;