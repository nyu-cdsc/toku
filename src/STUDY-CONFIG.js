// start game slide
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
          ],
        },
      }
    ]
  },
]

// stimuli for dictator game
var dg_intro = [
  {
    name: "dg_intro"
  },
  {
    type: 'action',
    id: 'dggive',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dggive.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dggive_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dggivefeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgkeep',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgkeep.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgkeep_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgkeepfeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgw2bintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgw2bintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgbelong',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgbelong.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'dgbelongcond',
    items: {
      'correct': [{
        type: 'action',
        id: 'dgbelongcorrect',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/dgbelongcorrect.mp4',
            }
          }
        ]
      }],
      'wrong': [{
        type: 'action',
        id: 'dgbelongwrong',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/dgbelongwrong.mp4',
            }
          }
        ]
      }],
    }
  },
  {
    type: 'action',
    id: 'dg1reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dg1reminder.mp4',
        }
      }
    ]
  },
]

var dg_white = [
  {
    name: "dg_white"
  },
  {
    type: 'action',
    id: 'dgwhiteintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhiteintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhite1.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhite2.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhite3.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhite4.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
]

var dg_black = [
  {
    name: "dg_black"
  },
  {
    type: 'action',
    id: 'dgblackintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblackintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblack1.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblack2.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblack3.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblack4.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
]

var dg_transition = [
  {
    name: "dg_transition"
  },
  {
    type: 'action',
    id: 'animal2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/animal2.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dg2reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dg2reminder.mp4',
        }
      }
    ]
  },
]

var dg_greatjob = [
  {
    name: "dg_greatjob"
  },
  {
    type: 'action',
    id: 'greatjob1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/greatjob1.mp4',
        }
      }
    ]
  },
]

// stimuli for reciprocity game
var re_intro = [
  {
    name: "re_intro"
  },
  {
    type: 'action',
    id: 'regive',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/regive.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'regive_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/regivefeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rekeep',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rekeep.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rekeep_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rekeepfeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rew2bintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rew2bintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rebelong',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rebelong.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'rebelongcond',
    items: {
      'correct': [{
        type: 'action',
        id: 'rebelongcorrect',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/rebelongcorrect.mp4',
            }
          }
        ]
      }],
      'wrong': [{
        type: 'action',
        id: 'rebelongwrong',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/rebelongwrong.mp4',
            }
          }
        ]
      }],
    }
  },
  {
    type: 'action',
    id: 're1reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/re1reminder.mp4',
        }
      }
    ]
  },
]

var re_white = [
  {
    name: "re_white"
  },
  {
    type: 'action',
    id: 'rewhiteintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhiteintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhite1.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhite2.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhite3.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhite4.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
]

var re_black = [
  {
    name: "re_black"
  },
  {
    type: 'action',
    id: 'reblackintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblackintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblack1.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblack2.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblack3.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblack4.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 56, 370, 728" },
            { value: 'wrong', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
]

var re_transition = [
  {
    name: "re_transition"
  },
  {
    type: 'action',
    id: 'animal3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/animal3.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 're2reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/re2reminder.mp4',
        }
      }
    ]
  },
]

var re_greatjob = [
  {
    name: "re_greatjob"
  },
  {
    type: 'action',
    id: 'greatjob2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/greatjob2.mp4',
        }
      }
    ]
  },
]

// status task stimuli

var status_intro = [
  {
    name: "status_intro"
  },
  {
    type: 'action',
    id: 'statusintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/status1intro.mp4',
        }
      }
    ]
  },
]

var status1 = [
  {
    name: "status1"
  },
  {
    type: 'action',
    id: 'status1left',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/status1left.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'status1right',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/status1right.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
]

var status2 = [
  {
    name: "status2"
  },
  {
    type: 'action',
    id: 'status2left',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/status2left.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'status2right',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/status2right.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
]

var status_greatjob = [
  {
    name: "status_greatjob"
  },
  {
    type: 'action',
    id: 'greatjob3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/greatjob3.mp4',
        }
      }
    ]
  },
]

// attitudes task stimuli

var attitudes_intro = [
  {
    name: "attitudes_intro"
  },
  {
    type: 'action',
    id: 'attitudesintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/attitudesintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'attitudestraining',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/attitudestraining.mp4',
        }
      }
    ]
  }
]

var attitudes = [
  {
    name: "attitudes"
  },
  {
    type: 'control',
    shuffle: true,
  },
  {
    type: 'action',
    id: 'ftwhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/ftwhite1.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ftwhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/ftwhite2.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ftblack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/ftblack1.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ftblack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/ftblack2.mp4',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "0, 56, 370, 728" },
          ],
        }
      }
    ]
  },
]

var done = [
  {
    name: "done"
  },
  {
    type: 'action',
    id: 'done',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/done.mp4',
        }
      }
    ]
  },
]

var startForm = {
  type: 'action',
  id: 'startForm',
  stimuli: [
    {
      type: 'form',
      parameters: {
        start: true,
      }
    }
  ]
}

// conditions: whiteFirst vs blackFirst
var whiteFirst = [
  startForm,
  startGame,
  dg_intro,
  dg_white,
  dg_transition,
  dg_black,
  dg_greatjob,
  re_intro,
  re_white,
  re_transition,
  re_black,
  re_greatjob,
  status_intro,
  [
    status1,
    status2,
    {
      type: 'control',
      shuffle: true,
    }
  ],
  status_greatjob,
  attitudes,
  attitudes_intro,
  done
];

var blackFirst = [
  startForm,
  endForm,
  startGame,
  dg_intro,
  dg_black,
  dg_transition,
  dg_white,
  dg_greatjob,
  re_intro,
  re_black,
  re_transition,
  re_white,
  re_greatjob,
  status_intro,
  [
    status1,
    status2,
    {
      type: 'control',
      shuffle: true,
    }
  ],
  status_greatjob,
  attitudes,
  attitudes_intro,
  done
];


export const Project = {
  conditions: [
    whiteFirst,
    blackFirst
  ],
  name: "ra2",
  ended: {
    type: 'action',
    id: 'done',
    stimuli: [
      {
        type: 'form',
        parameters: {
          end: true,
        }
      }
    ]
  }
}
