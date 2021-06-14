
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import { firestore } from '../firebase';

const ChatCreate = (props) => {
    const { setUserCurrent, userCurrent, idUser, setNewAccount} = props;

    const getPrimary = (value, duration) => {
        if(duration === 'Frontend Developer' ) {
            return 'JavaScript, HTML, CSS';
        } else {
            if(duration === 'Backend Developer') {
                return value;
            } else {
                return 'QA test'
            }
        }
    }

    const getUnit = (duration, unit) => {
        return `Digital Engagement Practice/Digital Technology/
                DEP UA/DEP UA East & West/DEP UA East/${duration}/
                ${unit}`
    }
    
    const getManager = (value) => {
        switch (value) {
            case 'ReactJS':
            case 'Java':
                case 'Automated Test Specialists': return 'Lochlan Cottrell';
            case 'React Native':
            case '.NET':
                case 'DBMS testers': return 'Yasin Huang';
            case 'AngularJS':
            case 'PHP':
                case 'Test Analysts': return 'Amanpreet Cowan';
            case 'NodeJS':
            case 'Python':
                case 'Developers-testers': return 'Dewi Dunlap';
            case 'Vue':
            case 'C++':
                case 'Testers-DevOPs': return 'Tonya Chang';
            case 'BabelJs': 
            default: return 'Kendall Bolton';
        }
    }

    const getPlace = (value) => {
        return `PC-${parseInt(value)}/`
    }

    const getHR = (value) => {
        switch (value) {
            case 'Frontend Developer': return 'Coral Howarth';
            case 'Backend Developer': return 'Zidane Pate';
            case 'Testers': return 'Bradley Hendrix';
            default: return 'Fraya Hood'
        }
    }

    const handleEnd = async ({ steps, values }) => {
        const user = {};
        user.duration = values[1];
        user.profession = values[2];
        user.status = values[0];
        user.address = values[4];
        user.phone = values[3];
        user.displayName = userCurrent.displayName;
        user.new = false;
        user.email = userCurrent.email;
        const primary = user.primary = getPrimary(user.profession, user.duration);
        const unit = user.unit = getUnit(user.duration, user.profession);
        const unitManager = user.unitManager = getManager(user.profession);
        const place = user.place = getPlace(values[4]);
        const hr = user.hr = getHR(values[1]);

        setUserCurrent(user);
        console.log(123, user ,idUser);
        firestore
        .collection('users')
        .doc(idUser)
        .update({
            new: false,
            duration : values[1],
            profession : values[2],
            status: values[0],
            address: values[4],
            phone : values[3],
            unit: unit,
            primary: primary,
            unitManager: unitManager,
            place: place,
            hr: hr,
        })
        .then(() => {
            console.log('User updated!');
            setNewAccount(false)
        });
      }

    return (
        <ChatBot
          steps={stepsStart}
          handleEnd={handleEnd}
        />
    );
}
  
  ChatCreate.propTypes = {
    steps: PropTypes.object,
  };
  
  ChatCreate.defaultProps = {
    steps: undefined,
  };
  
  export default ChatCreate;

  export const stepsStart = [
      {
        id: '1',
        message: 'What is your position??',
        trigger: 'position',
      },
      {
        id: 'position',
        options: [
          { value: 'Junior', label: 'Junior', trigger: '2' },
          { value: 'Middle', label: 'Middle', trigger: '2' },
          { value: 'Senior', label: 'Senior', trigger: '2' },
          { value: 'Lead', label: 'Lead', trigger: '2' },
        ],
      },
      {
        id: '2',
        message: 'What is your global direction?',
        trigger: 'duration',
      },
      {
        id: 'duration',
        options: [
          { value: 'Frontend Developer', label: 'Frontend Developer', trigger: 'front' },
          { value: 'Backend Developer', label: 'Backend Developer', trigger: 'back' },
          { value: 'Testers', label: 'Testers', trigger: 'test' },
        ],
      },
      {
        id: '9',
        user: true,
        trigger: '3',
      },
      {
        id: 'front',
        message: 'What is your key technology?',
        trigger: 'front_options',
      },
      {
        id: 'front_options',
        options: [
          { value: 'ReactJS', label: 'ReactJS', trigger: '3' },
          { value: 'React Native', label: 'React Native', trigger: '3' },
          { value: 'AngularJS', label: 'AngularJS', trigger: '3' },
          { value: 'NodeJS', label: 'NodeJS', trigger: '3' },
          { value: 'Vue', label: 'Vue', trigger: '3' },  
          { value: 'BabelJs', label: 'BabelJs', trigger: '3' },
        ],
      },
      {
        id: 'back',
        message: 'What is your key technology?',
        trigger: 'back_options',
      },
      {
        id: 'back_options',
        options: [
          { value: 'Java', label: 'Java', trigger: '3' },
          { value: '.NET', label: '.NET', trigger: '3' },
          { value: 'PHP', label: 'PHP', trigger: '3' },
          { value: 'Python', label: 'Python', trigger: '3' },
          { value: 'C++', label: 'C++', trigger: '3' },  
        ],
      },
      {
        id: 'test',
        message: 'What is your key technology?',
        trigger: 'test_options',
      },
      {
        id: 'test_options',
        options: [
          { value: 'Automated Test Specialists', label: 'Automated Test Specialists', trigger: '3' },
          { value: 'DBMS testers', label: 'DBMS testers', trigger: '3' },
          { value: 'Test Analysts', label: 'Test Analysts', trigger: '3' },
          { value: 'Developers-testers', label: 'Developers-testers', trigger: '3' },
          { value: 'Testers-DevOPs', label: 'Testers-DevOPs', trigger: '3' },  
        ],
      },
      {
        id: '3',
        message: 'What is your phone?',
        trigger: 'phone',
      },
      {
        id: 'phone',
        user: true,
        trigger: '4',
        validator: (value) => {
          if (isNaN(value)) {
            return 'value must be a number';
          } else if (value < 0) {
            return 'value must be positive';
          } else if (value < 9) {
            return `Your enter incorrect number`;
          }

          return true;
        },
      },
      {
        id: '4',
        message: 'What is your office address?',
        trigger: 'address',
      },
      {
        id: 'address',
        options: [
          { value: `343 Preston Street 11th Floor Ottawa, ON K1S 1N4
          Canada`, 
            label: `343 Preston Street 11th Floor Ottawa, ON K1S 1N4
          Canada`, 
            trigger: 'end' },
          { value: `5200 Yonge Street North York, ON M2N 5P6 Canada`, 
            label: `5200 Yonge Street North York, ON M2N 5P6 Canada`, 
            trigger: 'end' },
          { value: `110 110th Ave. NE Suite 310 Bellevue, WA 98004 USA`, 
            label: `110 110th Ave. NE Suite 310 Bellevue, WA 98004 USA`, 
            trigger: 'end' },
        ],
      },
      {
        id: 'end',
        message: 'Thanks! Your data was submitted successfully!',
        end: true,
      },
];