

export const stepsStartCreate = [
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
export const stepsTechFront = [
    {
        id: '1',
        message: 'What are the two methods of forms transfer?',
        trigger: '1_answer',
    },
    {
        id: '1_answer',
        options: [
            { value: '0', label: 'Get and receive', trigger: '2' },
            { value: '1', label: 'Get and receive', trigger: '2' },
            { value: '0', label: 'Post and receive', trigger: '2' },
            { value: '0', label: 'Post and take', trigger: '2' },
        ],
    },
    {
        id: '2',
        message: 'What should be the very last thing in an HTML document?',
        trigger: '2_answer',
    },
    {
        id: '2_answer',
        options: [
            { value: '0', label: 'The heading', trigger: '3' },
            { value: '0', label: 'Title', trigger: '3' },
            { value: '0', label: 'Body', trigger: '3' },
            { value: '1', label: 'Doc Type', trigger: '3' },
        ],
    },
    {
        id: '3',
        message: 'Which of the following is not an HTML tag?',
        trigger: '3_answer',
    },
    {
        id: '3_answer',
        options: [
            { value: '1', label: 'Doctype', trigger: '4' },
            { value: '0', label: 'P', trigger: '4' },
            { value: '0', label: 'Table', trigger: '4' },
            { value: '0', label: 'Style', trigger: '4' },
        ],
    },
    {
        id: '4',
        message: 'How many ways can you apply colors in CSS?',
        trigger: '4_answer',
    },
    {
        id: '4_answer',
        options: [
            { value: '1', label: '1', trigger: '5' },
            { value: '0', label: '2', trigger: '5' },
            { value: '0', label: '3', trigger: '5' },
            { value: '0', label: '4', trigger: '5' },
        ],
    },
    {
        id: '5',
        message: 'How can you clear a floated element?',
        trigger: '5_answer',
    },
    {
        id: '5_answer',
        options: [
            { value: '1', label: 'Clear:both', trigger: '6' },
            { value: '0', label: 'Press the delete key', trigger: '6' },
            { value: '0', label: 'Del tag', trigger: '6' },
            { value: '0', label: 'Strike tag', trigger: '6' },
        ],
    },
    {
        id: '6',
        message: 'Which of the following is described as a collection of images put in a single image?',
        trigger: '6_answer',
    },
    {
        id: '6_answer',
        options: [
            { value: '0', label: 'Float', trigger: '7' },
            { value: '0', label: 'Align', trigger: '7' },
            { value: '1', label: 'Sprite', trigger: '7' },
            { value: '0', label: 'Image', trigger: '7' },
        ],
    },
    {
        id: '7',
        message: 'A collection of data containing both properties and methods is called...',
        trigger: '7_answer',
    },
    {
        id: '7_answer',
        options: [
            { value: '0', label: 'Tag', trigger: '8' },
            { value: '0', label: 'Selector', trigger: '8' },
            { value: '0', label: 'Object', trigger: '8' },
            { value: '1', label: 'Class', trigger: '8' },
        ],
    },
    {
        id: '8',
        message: 'In JavaScript, this refers to the object that ____ the object.',
        trigger: '8_answer',
    },
    {
        id: '8_answer',
        options: [
            { value: '0', label: 'Receives', trigger: '9' },
            { value: '0', label: 'Depends', trigger: '9' },
            { value: '1', label: 'Ows', trigger: '9' },
            { value: '0', label: 'Direct', trigger: '9' },
        ],
    },
    {
        id: '9',
        message: 'What is the runtime complexity of Fibonacci sequence?',
        trigger: '9_answer',
    },
    {
        id: '9_answer',
        options: [
            { value: '1', label: 'O(on)', trigger: '10' },
            { value: '0', label: 'O(2n)', trigger: '10' },
            { value: '0', label: '(n)', trigger: '10' },
            { value: '0', label: 'N (o)', trigger: '10' },
        ],
    },
    {
        id: '10',
        message: 'Which of the following is an instruction to the web browser about what version of the markup language the page is written in?',
        trigger: '10_answer',
    },
    {
        id: '10_answer',
        options: [
            { value: '0', label: 'Markup', trigger: 'end' },
            { value: '0', label: 'Meta tag', trigger: 'end' },
            { value: '0', label: 'DSS', trigger: 'end' },
            { value: '1', label: 'Doctype', trigger: 'end' },
        ],
    },
    {
        id: 'end',
        message: 'Thanks! Your data was submitted successfully!',
        end: true,
    },
];

export const stepsEnglish = [
    {
        id: '1',
        message: 'He was invited ______ he did not come.',
        trigger: '1_answer',
    },
    {
        id: '1_answer',
        options: [
            { value: '0', label: 'when', trigger: '2' },
            { value: '1', label: 'but', trigger: '2' },
            { value: '0', label: 'on', trigger: '2' },
            { value: '0', label: 'if', trigger: '2' },
        ],
    },
    {
        id: '2',
        message: 'Where ______ you last night?',
        trigger: '2_answer',
    },
    {
        id: '2_answer',
        options: [
            { value: '0', label: 'are', trigger: '3' },
            { value: '0', label: 'am', trigger: '3' },
            { value: '0', label: 'was', trigger: '3' },
            { value: '1', label: 'were', trigger: '3' },
        ],
    },
    {
        id: '3',
        message: `Paul can't touch the ceiling because he is too ______.`,
        trigger: '3_answer',
    },
    {
        id: '3_answer',
        options: [
            { value: '1', label: 'short', trigger: '4' },
            { value: '0', label: 'shorten', trigger: '4' },
            { value: '0', label: 'shortness', trigger: '4' },
            { value: '0', label: 'shortly', trigger: '4' },
        ],
    },
    {
        id: '4',
        message: `Thomas can't get out of bed because he ______ his leg.`,
        trigger: '4_answer',
    },
    {
        id: '4_answer',
        options: [
            { value: '1', label: 'broke', trigger: '5' },
            { value: '0', label: 'broken', trigger: '5' },
            { value: '0', label: 'break', trigger: '5' },
            { value: '0', label: 'breaks', trigger: '5' },
        ],
    },
    {
        id: '5',
        message: 'We must ______ the train at the next stop.',
        trigger: '5_answer',
    },
    {
        id: '5_answer',
        options: [
            { value: '1', label: 'get off', trigger: '6' },
            { value: '0', label: 'get on', trigger: '6' },
            { value: '0', label: 'get over', trigger: '6' },
            { value: '0', label: 'get down', trigger: '6' },
        ],
    },
    {
        id: '6',
        message: `No, I've never ______ a classical music concert.`,
        trigger: '6_answer',
    },
    {
        id: '6_answer',
        options: [
            { value: '0', label: 'gone', trigger: '7' },
            { value: '0', label: 'being to', trigger: '7' },
            { value: '1', label: 'been to', trigger: '7' },
            { value: '0', label: 'went to', trigger: '7' },
        ],
    },
    {
        id: '7',
        message: 'In British English, a collective noun is usually treated as',
        trigger: '7_answer',
    },
    {
        id: '7_answer',
        options: [
            { value: '0', label: 'singular', trigger: '8' },
            { value: '1', label: 'plural', trigger: '8' },
        ],
    },
    {
        id: '8',
        message: 'If an opinion-adjective and a fact-adjective are used before a noun, which comes first?',
        trigger: '8_answer',
    },
    {
        id: '8_answer',
        options: [
            { value: '1', label: 'an opinion-adjective', trigger: '9' },
            { value: '0', label: 'a fact-adjective ', trigger: '9' },
        ],
    },
    {
        id: '9',
        message: 'The national anthem is being sung by Jason this time.',
        trigger: '9_answer',
    },
    {
        id: '9_answer',
        options: [
            { value: '1', label: 'passive', trigger: '10' },
            { value: '0', label: 'active', trigger: '10' },
        ],
    },
    {
        id: '10',
        message: 'Which of these articles is an indefinite article?',
        trigger: '10_answer',
    },
    {
        id: '10_answer',
        options: [
            { value: '0', label: 'the', trigger: 'end' },
            { value: '1', label: 'a', trigger: 'end' },
        ],
    },
    {
        id: 'end',
        message: 'Thanks! Your data was submitted successfully!',
        end: true,
    },
];


export const stepsPsycho = [
    {
        id: '1',
        message: 'When do you feel your best?',
        trigger: '1_answer',
    },
    {
        id: '1_answer',
        options: [
            { value: '0', label: 'Late the night', trigger: '2' },
            { value: '1', label: 'In the morning', trigger: '2' },
            { value: '2', label: 'During the afternoon and early evening', trigger: '2' },
        ],
    },
    {
        id: '2',
        message: 'You usually walk:',
        trigger: '2_answer',
    },
    {
        id: '2_answer',
        options: [
            { value: '0', label: 'Very slowly', trigger: '3' },
            { value: '2', label: 'Less fast, head down', trigger: '3' },
            { value: '1', label: 'Fairly fast', trigger: '3' },
        ],
    },
    {
        id: '3',
        message: `When talking to people, you:`,
        trigger: '3_answer',
    },
    {
        id: '3_answer',
        options: [
            { value: '2', label: 'Stand with your arms folded', trigger: '4' },
            { value: '1', label: 'Have one or both of your hands on your hips', trigger: '4' },
            { value: '0', label: 'Touch or push the person to whom you are talking', trigger: '4' },
        ],
    },
    {
        id: '4',
        message: `When relaxing, you sit with:`,
        trigger: '4_answer',
    },
    {
        id: '4_answer',
        options: [
            { value: '2', label: 'Your legs stretched out or straight', trigger: '5' },
            { value: '0', label: 'Your legs crossed', trigger: '5' },
            { value: '1', label: 'One leg curled under you', trigger: '5' },
        ],
    },
    {
        id: '5',
        message: 'When something really amuses you, you react with:',
        trigger: '5_answer',
    },
    {
        id: '5_answer',
        options: [
            { value: '1', label: 'A quiet chuckle', trigger: '6' },
            { value: '2', label: 'A big, appreciative laugh', trigger: '6' },
            { value: '0', label: 'A sheepish smile', trigger: '6' },
        ],
    },
    {
        id: '6',
        message: `When you go to a party or social gathering, you:`,
        trigger: '6_answer',
    },
    {
        id: '6_answer',
        options: [
            { value: '2', label: 'Make a loud entrance, so that everyone notices you', trigger: '7' },
            { value: '0', label: 'Make a quiet entrance, looking around for someone you know', trigger: '7' },
            { value: '1', label: 'Make the quietest entrance, trying to stay unnoticed', trigger: '7' },
        ],
    },
    {
        id: '7',
        message: `You're working very hard, concentrating hard, and you're interrupted. You:`,
        trigger: '7_answer',
    },
    {
        id: '7_answer',
        options: [
            { value: '0', label: 'Feel extremely irritated', trigger: '8' },
            { value: '1', label: 'Vary between these two extremes', trigger: '8' },
            { value: '2', label: 'Welcome the break', trigger: '8' },
        ],
    },
    {
        id: '8',
        message: 'Which of the following colors do you like the most?',
        trigger: '8_answer',
    },
    {
        id: '8_answer',
        options: [
            { value: '1', label: 'Red/orange', trigger: '9' },
            { value: '2', label: 'Yellow/light blue', trigger: '9' },
            { value: '3', label: 'Dark blue/purple', trigger: '9' },
            { value: '0', label: 'Brown/gray', trigger: '9' },
        ],
    },
    {
        id: '9',
        message: 'When you are in bed at night, in those last few moments before going to sleep, you are:',
        trigger: '9_answer',
    },
    {
        id: '9_answer',
        options: [
            { value: '1', label: 'Stretched out on your back', trigger: '10' },
            { value: '2', label: 'On your side, slightly curled', trigger: '10' },
            { value: '0', label: 'With your head under the covers', trigger: '10' },
        ],
    },
    {
        id: '10',
        message: 'You often dream that you are:',
        trigger: '10_answer',
    },
    {
        id: '10_answer',
        options: [
            { value: '0', label: 'Fighting or struggling', trigger: 'end' },
            { value: '1', label: 'Flying or floating', trigger: 'end' },
            { value: '2', label: 'Your dreams are always pleasant', trigger: 'end' },
        ],
    },
    {
        id: 'end',
        message: 'Thanks! Your data was submitted successfully!',
        end: true,
    },
];

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


export const dataScheduler = [
    {
        Id: 2,
        Subject: 'Meeting',
        StartTime: new Date(2021, 5, 15, 10, 0),
        EndTime: new Date(2021, 5, 15, 12, 30),
        IsAllDay: false,
        Status: 'Completed',
        Priority: 'High',
        Color: 'red'
    },
    {
        Id: 2,
        Subject: 'English',
        StartTime: new Date(2021, 5, 14, 13, 0),
        EndTime: new Date(2021, 5, 14, 15, 30),
        IsAllDay: false,
        Status: 'Progress',
        Priority: 'Low',
        Color: 'red'
    },
    {
        Id: 2,
        Subject: 'Meeting',
        StartTime: new Date(2021, 5, 16, 8, 0),
        EndTime: new Date(2021, 5, 16, 9, 30),
        IsAllDay: false,
        Status: 'Completed',
        Priority: 'Middle',
        Color: 'purple'
    }
];

export const stepsTask = [
    {
        id: '1',
        message: 'Do you want make with task?',
        trigger: '1_answer',
    },
    {
        id: '1_answer',
        options: [
            { value: '0', label: 'Delete', trigger: '2' },
            { value: '1', label: 'Add', trigger: '2' },
            { value: '0', label: 'Completed', trigger: '2' },
        ],
    },
    {
        id: '2',
        message: 'Say the name of your task, please',
        user:true,
        trigger: 'end',
    },
    {
        id: 'end',
        message: 'Thanks! Your data was submitted successfully!',
        end: true,
    },
];

export const stepsMeet = [
    {
        id: '1',
        message: 'Please, specify the date of the event in the format 16.05.2021',
        trigger: '2',
    },
    {
        id: '2',
        message: 'Say the name of your meeting, please',
        trigger: '3',
        user:true,
    },
    {
        id: '3',
        message: 'Specify the start time of the event in the format 16.05',
        trigger: '4',
        user:true,
    },
    {
        id: '4',
        message: 'Specify the end time of the event in the format 16.05',
        trigger: 'end',
    },
    {
        id: 'end',
        message: 'Thanks! Your data was submitted successfully!',
        end: true,
    },
];