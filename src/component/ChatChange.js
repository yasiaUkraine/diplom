import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import { firestore } from '../firebase';

const ChatChange = (props) => {
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

    const handleEnd = async ({ steps, values }) => {
        console.log(values)
        const user = {};
        if(values[0] === 'name') {
            user.displayName = values[1];
            firestore
            .doc(`users/${idUser}/displayName`)
            .update(values[1])
            .then(() => {
                console.log('User updated!');
            });
        } else {
            if(values[0] === 'phone'){
                user.phone = values[1];
            } else {
                if(values[0] === 'duration'){
                    user.duration = values[1];
                    user.profession = values[2];
                    const primary = user.primary = getPrimary(user.profession, user.duration);
                    const unit = user.unit = getUnit(user.duration, user.profession);
                    const unitManager = user.unitManager = getManager(user.profession);
                }
            }
        }
        setUserCurrent(user);
      }

    return (
<section className = 'login'>
            {/* <div className = 'loginContainer'>
                {hasAccount ? (
                    <>
                    </>
                ): (
                    <>
                     <label>User name</label>
                        <input
                            type = 'text'
                            required
                            value={displayName}
                            onChange = {(e) => setName(e.target.value)}
                        />
                    </>
                )}
                <label>User email</label>
                <input
                    type = 'text'
                    autoFocus
                    required
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <p className = 'errorMsg'>{emailError}</p>

                <label>Password</label>
                <input
                    type = 'password'
                    required
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <p className = 'errorMsg'>{passwordError}</p>
                <div className = 'btnContainer'>
                    {hasAccount ? (
                        <>
                          <button 
                            className="btn btn-lg btn-yellow btn-block btn-login text-uppercase font-weight-bold mb-2" 
                            onClick = {handleLogin}
                            >Sign in</button>
                            <p>Don't an account ? 
                                <span onClick = {() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                        </>
                    ): (
                        <>
                          <button 
                            className="btn btn-lg btn-yellow btn-block btn-login text-uppercase font-weight-bold mb-2" 
                            onClick ={handleSignUp}>Sign up</button>
                            <p>Have an account ? 
                                <span onClick = {() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </>
                    )}
                </div> */}
            {/* </div> */}
        </section>
    );
}
  
  ChatChange.propTypes = {
    steps: PropTypes.object,
  };
  
  ChatChange.defaultProps = {
    steps: undefined,
  };
  
  export default ChatChange;

  export const stepsChange = [
      {
        id: '1',
        message: 'What do you want change?',
        trigger: 'change',
      },
      {
        id: 'change',
        options: [
          { value: 'name', label: 'Name', trigger: 'name' },
          { value: 'phone', label: 'Phone', trigger: 'phone' },
          { value: 'duration', label: 'Global direction', trigger: 'duration' },
        ],
      },
      {
        id: 'name',
        message: 'What is your new name?',
        user: true,
        trigger: 'end',
      },
      {
        id: 'phone',
        message: 'What is your new phone?',
        user: true,
        trigger: 'end',
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
        id: 'duration',
        message: 'What is your global direction?',
        trigger: 'duration_options',
      },
      {
        id: 'duration_options',
        options: [
          { value: 'Frontend Developer', label: 'Frontend Developer', trigger: 'front' },
          { value: 'Backend Developer', label: 'Backend Developer', trigger: 'back' },
          { value: 'Testers', label: 'Testers', trigger: 'test' },
        ],
      },
      {
        id: 'front',
        message: 'What is your key technology?',
        trigger: 'front_options',
      },
      {
        id: 'front_options',
        options: [
          { value: 'ReactJS', label: 'ReactJS', trigger: 'end' },
          { value: 'React Native', label: 'React Native', trigger: 'end' },
          { value: 'AngularJS', label: 'AngularJS', trigger: 'end' },
          { value: 'NodeJS', label: 'NodeJS', trigger: 'end' },
          { value: 'Vue', label: 'Vue', trigger: 'end' },  
          { value: 'BabelJs', label: 'BabelJs', trigger: 'end' },
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
          { value: 'Java', label: 'Java', trigger: 'end' },
          { value: '.NET', label: '.NET', trigger: 'end' },
          { value: 'PHP', label: 'PHP', trigger: 'end' },
          { value: 'Python', label: 'Python', trigger: 'end' },
          { value: 'C++', label: 'C++', trigger: 'end' },  
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
          { value: 'Automated Test Specialists', label: 'Automated Test Specialists', trigger: 'end' },
          { value: 'DBMS testers', label: 'DBMS testers', trigger: 'end' },
          { value: 'Test Analysts', label: 'Test Analysts', trigger: 'end' },
          { value: 'Developers-testers', label: 'Developers-testers', trigger: 'end' },
          { value: 'Testers-DevOPs', label: 'Testers-DevOPs', trigger: 'end' },  
        ],
      },
      {
        id: 'end',
        message: 'Thanks! Your data was submitted successfully!',
        end: true,
      },
];