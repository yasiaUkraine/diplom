import { useEffect, useState } from 'react';
import { auth, firestore } from './../firebase';
import Chat from './Chat';
import { Tabs, Tab } from 'react-bootstrap'
import ChatTech from './ChatTech';
import { stepsStartCreate, stepsTechFront, stepsPsycho, stepsEnglish, dataScheduler, stepsTask, stepsMeet} from '../logic/chatStart';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import './account.css';
import './scheduler.css';
import { TodoApp , todoItems } from './Todo';

const Account = (props) => {

    const handleLogout = () => {
        setId(0)
        auth.signOut();
      };
    const [name, setName] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [key, setKey] = useState('');

    const [userCurrent, setUserCurrent] = useState('');
    const {
        id,
        setId,
    } = props;

    const getDateFromUser = (data) => {
        setUserCurrent(data)
        setName(data.displayName);
        if(data.new) {
            setNewAccount(true);
        } else {
            setNewAccount(false);
        }
    }

    const getUser = () => {
        firestore.collection('users')
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if(doc.id === id) {
                        const data = doc.data();
                        getDateFromUser(data);
                    }
                })
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getUser()
      }, []);

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

    const handleEndCreate = async ({ steps, values }) => {
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
        console.log(123, user ,id);
        firestore
        .collection('users')
        .doc(id)
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
    
    const handleEndTech = async({ steps, values }) => {
        console.log(steps, values)
    }

    return (
        <section className = 'hero'>
            <nav>
                <h2>Welcome {userCurrent.displayName}</h2>
                <button onClick = {handleLogout}>Logout</button>
            </nav>
            <section>
                <div className="container containerF bootstrap snippets bootdey">
                    <div className="profile-nav col-md-3">
                        <div className="panel">
                            <div className="user-heading round">
                                <a href="#">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                                </a>
                                <h1>{userCurrent.displayName}</h1>
                                <p>{userCurrent.email}</p>
                            </div>
                            <div className="test">
                                <p><span>Type:</span>Starts</p>
                                <p><span>Level Tech:</span>Junior</p>
                                <p><span>Level English:</span>B2</p>
                                <p><span>Level:</span>Level 10</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-info col-md-6">
                        <div className="panel-body pro-graph-info">
                            <h1>Profession Graph</h1>
                            <ul className='rowUl'>
                                <li className="pro-row">
                                    <p><span>Status:</span>{userCurrent.status}</p>
                                </li>
                                <li className="pro-row">
                                    <p><span>Job Function:</span>{userCurrent.duration}</p>
                                </li>
                                <li className="pro-row">
                                    <p><span>Primary Skills:</span>{userCurrent.primary}</p>
                                </li>
                                <li className="pro-row">
                                    <p><span>Key Skills:</span>{userCurrent.profession}</p>
                                </li>
                                <li className="pro-row">
                                    <p><span>Level:</span>{userCurrent.level || 'Should to pass test'}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="panel-body bio-graph-info">
                            <h1>Bio Graph</h1>
                            <ul className='rowUl'>
                                <li className="bio-row">
                                    <p><span>Email:</span>{userCurrent.email}</p>
                                </li>
                                <li className="bio-row">
                                    <p><span>Phone:</span>{userCurrent.phone}</p>
                                </li>
                                <li className="bio-row">
                                    <p><span>Unit Manager:</span>{userCurrent.unitManager}</p>
                                </li>
                                <li className="bio-row">
                                    <p><span>HR:</span>{userCurrent.hr}</p>
                                </li>
                                <li className="bio-row">
                                    <p><span>Place:</span>{userCurrent.place}</p>
                                </li>
                                <li className="bio-row">
                                    <p><span>Address:</span>{userCurrent.address}</p>
                                </li>
                                <li className="bio-row">
                                    <p><span>Unit:</span>{userCurrent.unit}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="panel-body project-graph-info">
                            <h1>Project Graph</h1>
                            <ul className='rowUl'>
                                <li className="project-row">
                                    <p><span>Name of project:</span>Cats-Cown</p>
                                </li>
                                <li className="project-row">
                                    <p><span>Mentor:</span>Josh Legends</p>
                                </li>
                                <li className="project-row">
                                    <p><span>Roles:</span>{userCurrent.status + ' ' + userCurrent.profession}</p>
                                </li>
                                <li className="project-row">
                                    <p><span>Description:</span>'This project related with medical technologies and use for diagnostics works'</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-nav col-md-4">
                    {newAccount ? (
                        <div className ='chat'>
                            <ChatTech
                                userCurrent = {userCurrent} 
                                setUserCurrent = {setUserCurrent}
                                idUser = {id}
                                stepsStart = {stepsStartCreate}
                                handleEnd = {handleEndCreate }
                                setNewAccount = {setNewAccount}
                            />
                        </div>
                    ):(
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className = "red chat"
                            >
                            <Tab eventKey="change" title="Change">
                            <ChatTech
                                userCurrent = {userCurrent} 
                                setUserCurrent = {setUserCurrent}
                                idUser = {id}
                                stepsStart = {stepsStartCreate}
                                handleEnd = {handleEndCreate }
                                setNewAccount = {setNewAccount}
                            />
                            </Tab>
                            <Tab eventKey="tech" title="Technical">
                                <ChatTech
                                        userCurrent = {userCurrent} 
                                        setUserCurrent = {setUserCurrent}
                                        idUser = {id}
                                        stepsStart = {stepsTechFront}
                                        handleEnd = {handleEndTech}
                                    />
                            </Tab>
                            <Tab eventKey="english" title="English">
                                <ChatTech
                                        userCurrent = {userCurrent} 
                                        setUserCurrent = {setUserCurrent}
                                        idUser = {id}
                                        stepsStart = {stepsEnglish}
                                        handleEnd = {handleEndTech}
                                    />
                            </Tab>
                            <Tab eventKey="psychological" title="Psychological">
                                <ChatTech
                                        userCurrent = {userCurrent} 
                                        setUserCurrent = {setUserCurrent}
                                        idUser = {id}
                                        stepsStart = {stepsPsycho}
                                        handleEnd = {handleEndTech}
                                    />
                            </Tab>
                            <Tab eventKey="task" title="Task">
                            <ChatTech
                                userCurrent = {userCurrent} 
                                setUserCurrent = {setUserCurrent}
                                idUser = {id}
                                stepsStart = {stepsTask}
                                setNewAccount = {setNewAccount}
                            />
                            </Tab>
                            <Tab eventKey="meet" title="Schedule">
                            <ChatTech
                                userCurrent = {userCurrent} 
                                setUserCurrent = {setUserCurrent}
                                idUser = {id}
                                stepsStart = {stepsMeet}
                                setNewAccount = {setNewAccount}
                            />
                            </Tab>
                        </Tabs>
                    )}
                    </div>
                </div>
            </section>
            <section className ='col-sm-1 schedulerContainer'></section>
            <section className ='col-sm-12 schedulerContainer'>
            <ScheduleComponent height='500px' className = 'scheduler' selectedDate={new Date(2021, 5, 15)} eventSettings={{ dataSource: dataScheduler }}>
            <ViewsDirective>
                <ViewDirective option='WorkWeek' startHour='10:00' endHour='18:00'/>
                <ViewDirective option='Week' startHour='07:00' endHour='18:00'/>
                <ViewDirective option='Month' showWeekend={false}/>
            </ViewsDirective>
            <Inject services={[WorkWeek, Week, Month]}/>
            </ScheduleComponent>
            </section>
            <section className ='col-sm-12 '>
                <div className = 'height'>
                    <TodoApp initItems={todoItems}/>
                </div>
            </section>
        </section>
    );
}

export default Account;