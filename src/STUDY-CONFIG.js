// todo show arbitrary nesting/GROUPING with [[]] etc - lists within lists, but NOT lists within items
// todo enable groups/lists to have a name/id when it's not stored directly in a variable (or just require it?)
// especially for conditions- will need to log it in responses

// TODO look into Map() as a solution to this. right now it only works with lists, and lists in lists. but I can't name the list, etc.
// TODO other soltutions: just use objects, so objects within objects and know their structure (could be fine), and introspection/reflection to get variable names

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

var friction = [
  {
    name: "Friction"
  },
  {
    type: 'action',
    id: 'frictionIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/intro_to_content_study.mp4'
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
          filename: '../../../assets/movie/content/Friction1.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'frictionQ1',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Friction1.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'friction2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/Friction2.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'frictionQ2',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Friction2.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'friction3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/Friction3.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'frictionQ3',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Friction3.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'friction4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/Friction4.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'frictionQ4',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Friction4.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
];

var sciMethod = [
  {
    name: "scientificMethod"
  },
  {
    type: 'action',
    id: 'sciMethod1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/observing.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'sciMethodQ1',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/observing.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'sciMethod2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/predicting.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'sciMethodQ2',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/predicting.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'sciMethod3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/checking.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'sciMethodQ3',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/checking.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
];

var interest = [
  {
    type: 'action',
    id: 'interestIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/into_content_study_pt2.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'interest1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/Interest1.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'interestQ1',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Interest1.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'interest2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/Interest2.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'interestQ2',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Interest2.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
];

var prevalence = [
  {
    type: 'action',
    id: 'prevalenceIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/prevalence.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalence1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/prev_q1.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalenceQ1',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Prevalence.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalenceA1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/prev_a1.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalence2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/prev_q2.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalenceQ2',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Prevalence.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalenceA2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/prev_a2.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalence3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/prev_q3.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalenceQ3',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Prevalence.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalenceA3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/prev_a3.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalence4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/prev_q4.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalenceQ4',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Prevalence.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'prevalenceA4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/prev_a4.mp4'
        }
      }
    ]
  },
];

var prevalenceDo = [
  {
    type: 'action',
    id: 'do',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/do.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'doQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Prevalence.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
];

var prevalenceBe = [
  {
    type: 'action',
    id: 'be',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/be.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'beQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/Prevalence.jpeg',
          // coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        },
      }
    ]
  },
];

var contingentFeedback = [
  {
    type: 'action',
    id: 'persistenceIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/intro_persistence.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'wood',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/wood.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'woodQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/wood.jpeg',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" },
            { value: 'two', shape: "rect", coordinates: "282, 646, 370, 740" },
            { value: 'three', shape: "rect", coordinates: "400, 646, 490, 740" },
            { value: 'four', shape: "rect", coordinates: "518, 646, 608, 740" },
            { value: 'five', shape: "rect", coordinates: "634, 646, 726, 740" },
            { value: 'six', shape: "rect", coordinates: "756, 646, 844, 740" },
          ],
        },
      }
    ]
  },
  {
    type: 'conditional',
    id: 'woodConditional',
    items: {
      'one': {
        type: 'action',
        id: 'wood1',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood1.mp4',
            }
          }
        ]
      },
      'two': {
        type: 'action',
        id: 'wood2',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood2.mp4',
            }
          }
        ]
      },
      'three': {
        type: 'action',
        id: 'wood3',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood3.mp4',
            }
          }
        ]
      },
      'four': {
        type: 'action',
        id: 'wood4',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood4.mp4',
            }
          }
        ]
      },
      'five': {
        type: 'action',
        id: 'wood5',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood5.mp4',
            }
          }
        ]
      },
      'six': {
        type: 'action',
        id: 'wood6',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood6.mp4',
            }
          }
        ]
      },
    },
  },
  {
    type: 'action',
    id: 'playmat',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/playmat.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'playmatQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/playmat.jpeg',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" },
            { value: 'two', shape: "rect", coordinates: "282, 646, 370, 740" },
            { value: 'three', shape: "rect", coordinates: "400, 646, 490, 740" },
            { value: 'four', shape: "rect", coordinates: "518, 646, 608, 740" },
            { value: 'five', shape: "rect", coordinates: "634, 646, 726, 740" },
            { value: 'six', shape: "rect", coordinates: "756, 646, 844, 740" },
          ]
        },
      }
    ]
  },
  {
    type: 'conditional',
    id: 'playmatConditional',
    items: {
      'one': {
        type: 'action',
        id: 'playmat1',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/playmat_blue.mp4',
            }
          }
        ]
      },
      'two': {
        type: 'action',
        id: 'playmat',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/playmat_blue.mp4',
            }
          }
        ]
      },
      'three': {
        type: 'action',
        id: 'playmat3',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/playmat_blue.mp4',
            }
          }
        ]
      },
      'four': {
        type: 'action',
        id: 'playmat4',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/playmat_red.mp4',
            }
          }
        ]
      },
      'five': {
        type: 'action',
        id: 'playmat5',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/playmat_red.mp4',
            }
          }
        ]
      },
      'six': {
        type: 'action',
        id: 'playmat6',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/playmat_red.mp4',
            }
          }
        ]
      },
    }
  },
];




var end = [
  {
    type: 'action',
    id: 'age',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/age.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ageQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/age.jpeg',
          coordinates: [
            { value: 'three', shape: "rect", coordinates: "186, 244, 398, 544" },
            { value: 'four', shape: "rect", coordinates: "626, 244, 826, 544" }],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'gender',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/content/gender.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'genderQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/gender.jpeg',
          coordinates: [
            { value: 'boy', shape: "rect", coordinates: "96, 244, 464, 490" },
            { value: 'girl', shape: "rect", coordinates: "550 ,244, 918, 490" }
          ],
        }
      }
    ]
  },
];

var endMemory = [
  {
    type: 'action',
    id: 'memory',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/memory.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'memoryQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/memory.jpeg',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "150, 240, 436, 504" },
            { value: 'right', shape: "rect", coordinates: "584, 240, 816, 504" }
          ],
        }
      }
    ]
  },
]

var contentStudy = [
  startGame,
  friction,
  sciMethod,
  interest,
  prevalence,
  [
    prevalenceDo,
    prevalenceBe,
    {
      type: 'control',
      shuffle: true
    }
  ],
  end
];

var test = [
  {
    type: 'action',
    id: 'test2',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/gender.jpeg',
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'test1',
    items: {
      'left': [{
        type: 'action',
        id: 'playmat1',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/playmat_blue.mp4',
            }
          }
        ]
      }],
    }
  },
  {
    type: 'action',
    id: 'test2',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/content/gender.jpeg',
          coordinates: [{ value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" }, { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
        }
      }
    ]
  },
]


var persistenceStudy = [
  startGame,
  contingentFeedback,
  end,
  endMemory
];

export const Project = {
  conditions: [
    contentStudy,
    // persistenceStudy
  ],
  name: "interventionStudy",
  ended: {
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
