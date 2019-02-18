///////// TEMPLATE /////////

///////// Stimuli /////////
var exampleStimuli = [
  // movie where no response is recorded
  {
    type: 'action',
    id: 'frictionIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/1 Study Intro.m4v', // type the location of the movie
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" },
            { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        }
      }
    ]
  },
  // movie where a response is recorded
  {
    type: 'action',
    id: 'friction1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/Friction1.mp4', // movie
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" },
            { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        }
      }
    ]
  },
  // picture where a response is recorded
  {
    type: 'action',
    id: 'frictionQ1',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Friction1.jpeg',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" },
            { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
];

///////// Sample way to Start Game /////////
var startGame = [
  {
    type: 'action',
    id: 'startGame',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/start.jpeg',
          coordinates: [
            { value: 'started', shape: "rect", coordinates: "0, 0, 1024, 768" },
          ]
        },
      }
    ]
  },
]

///////// Randomization /////////
var exampleRandom = [
  // first list the stimuli you want to randomize. I've listed two movies.
  {
    type: 'action',
    id: 'frictionIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/intro_to_content_study.mp4' // type the location of the movie
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'friction1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/Friction1.mp4', // movie
        }
      }
    ]
  },
  // next add the shuffle control
  {
    type: 'control',
    shuffle: true
  }
]


///////// Conditionals & Contigent Feedback /////////

// Below is an example of how to give participants contigent feedback,
var contingentFeedback = [
  // List the stimuli that you want participants to get contigent feedback from
  // E.g., In this example, participants watch a movie and give a response on a 6-point scale
  {
    type: 'action',
    id: 'example',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/wood.mp4',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" }, // you'll need these values for later
            { value: 'two', shape: "rect", coordinates: "282, 646, 370, 740" },
            { value: 'three', shape: "rect", coordinates: "400, 646, 490, 740" },
            { value: 'four', shape: "rect", coordinates: "518, 646, 608, 740" },
            { value: 'five', shape: "rect", coordinates: "634, 646, 726, 740" },
            { value: 'six', shape: "rect", coordinates: "756, 646, 844, 740" },
          ],
        }
      }
    ]
  },
  // Next, use a 'conditional' object to specify what happens based on the response participants gave.
  {
    type: 'conditional',
    id: 'woodConditional', // this id can be whatever you want
    items: {
      // list the response participants gave
      'one': [{ // this needs to map onto the values from the buttons from above
        type: 'action',
        id: 'wood1',
        // list what you want them to see based on that response
        // in this case, they are seeing a movie
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood_1.mp4',
            }
          }
        ]
      }],
      // do a conditional for each response that you want participants to have contingent feedback for
      'two': [{
        type: 'action',
        id: 'wood2',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood_2.mp4',
            }
          }
        ]
      }],
      'three': [{
        type: 'action',
        id: 'wood3',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood_3.mp4',
            }
          }
        ]
      }],
      'four': [{
        type: 'action',
        id: 'wood4',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood_4.mp4',
            }
          }
        ]
      }],
      'five': [{
        type: 'action',
        id: 'wood5',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood_5.mp4',
            }
          }
        ]
      }],
      'six': [{
        type: 'action',
        id: 'wood6',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood_6.mp4',
            }
          }
        ]
      }],
    },
  },
];


// Sometimes you might want a participant to conditionally do different blocks (and not just see a different video or picture).
// Here's an example of this.
var conditionalExample = [
  {
    type: 'action',
    id: 'sample',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/transition_1st.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "110, 332, 430, 448" },
            { value: 'right', shape: "rect", coordinates: "642, 244, 912, 518" }],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'persistence1',
    items: {
      'left':
        block1
      ,
      'right':
        block2
    }
  },
]

///////// Forms /////////
// To make a form, you create an option similar to the one below.
// You can make as many separate forms as you want. To create a new form,
// create another form variable by copying and pasting the template below
// and providing a new name for the var (i.e., change "var forms" to another name (e.g., "var differentForm"))
// I would generally limit the number of questions per screen to about 5

var forms = {
  type: 'action',
  id: 'form', // you can change the name of this form to whatever
  stimuli: [
    {
      type: 'form',
      parameters: {
        questions: [
          // this is where you put the questions on the form
          // each line reflects its own question
          // you can have two types of questions as of now: "text" and "dropdown"
          // 'name:' specifies the id that will be outputed into the exported data csv file
          // 'type:' specifies the type of question you want, "text" or "dropdown"
          // 'questionText:' specifies the question that will be displayed on the screen
          // 'options:' specifies the options for the dropdown question; you do not use 'options' for text questions
          { name: 'id', type: "text", questionText: "Participant ID" },
          { name: 'gender', type: "dropdown", options: ["female", "male", "other"], questionText: "Participant Gender" },
          { name: 'age', type: "dropdown", options: ["4", "5", "6"], questionText: "Participant Age" },
          { name: 'color', type: "text", questionText: "What's your favorite color?" }
        ],
      }
    }
  ]
}


///////// The Conditions /////////
// These are your conditions. You can have as many conditions as you want.
// To create more conditions, just copy the format of the ones below.
// Conditions are composed of a series of blocks.
// Generally, the blocks within a condition will be displayed in linear order

var Condition1 = [
  // forms,
  exampleRandom,
  // exampleStimuli,
  // For blocks to be randomly displayed, use the "shuffle" control
  // E.g., the next 2 blocks are displayed in random order
  // the [] specify which blocks I want to be randomized
  // and the control within the {} specifies it be shuffled randomly
  //   [
  //     block1,
  //     block2,
  //     {
  //       type: 'control',
  //       shuffle: true
  //     }
  //   ],
  //   conditionalExample
];

var Condition2 = [
  startGame,
  contingentFeedback,
  conditionalExample
];


///////// The Study /////////
// This is the study block
// Here is where you list which conditions to include in the study,
// the name of the study, and the last thing that happens in the study

export const Project = {
  conditions: [ // list all of your conditions here. Participants are randomly assigned to one of them
    Condition1,
    // Condition2
  ],
  name: "Test Study", // Put the name of your study here
  ended: { // this what happens when your study ends i.e., the last thing that happens before the study restarts
    // right now, I have it set to play a movie that says "Great job!"
    type: 'action',
    id: 'done',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/End.mp4',
        }
      }
    ]
  }
}
