
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';

const ChatTech = (props) => {
    const { stepsStart, handleEnd } = props;
   
    return (
        <ChatBot
          steps={stepsStart}
          handleEnd={handleEnd}
        />
    );
}
  
  ChatTech.propTypes = {
    steps: PropTypes.object,
  };
  
  ChatTech.defaultProps = {
    steps: undefined,
  };
  
  export default ChatTech;

  