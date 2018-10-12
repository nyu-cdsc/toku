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
          filename: '../../../assets/movie/content/Friction1_10.9.mp4'
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
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" },
            { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }
          ],
          sound: '../../../assets/audio/friction1&2.m4a'
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
          filename: '../../../assets/movie/content/Friction2_10.9.mp4'
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
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "96, 44, 336, 692" },
            { value: 'right', shape: "rect", coordinates: "698, 64, 942, 680" }
          ],
          sound: '../../../assets/audio/friction1&2.m4a'
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
          filename: '../../../assets/movie/content/Friction3_10.9.mp4'
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
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "88, 38, 350, 702" },
            { value: 'right', shape: "rect", coordinates: "694, 40, 944, 700" }
          ],
          sound: '../../../assets/audio/friction3.m4a'
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
          filename: '../../../assets/movie/content/Friction4_10.9.mp4'
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
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "90, 412, 352, 584" },
            { value: 'right', shape: "rect", coordinates: "722, 410, 834, 648" }
          ],
          sound: '../../../assets/audio/friction4.m4a'
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
          filename: '../../../assets/movie/content/observing_10.9.mp4'
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
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "74, 248, 476, 580" },
            { value: 'right', shape: "rect", coordinates: "568, 252, 994, 582" }
          ],
          sound: '../../../assets/audio/observing.m4a'
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
          filename: '../../../assets/movie/content/predicting_10.9.mp4'
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
          coordinates: [{ value: 'left', shape: "rect", coordinates: "46, 216, 458, 556" },
          { value: 'right', shape: "rect", coordinates: "558, 208, 976, 550" }
          ],
          sound: '../../../assets/audio/predicting.m4a'
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
          filename: '../../../assets/movie/content/checking_10.9.mp4'
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
          coordinates: [{ value: 'left', shape: "rect", coordinates: "48, 216, 458, 556" },
          { value: 'right', shape: "rect", coordinates: "560, 216, 974, 552" }
          ],
          sound: '../../../assets/audio/checking.m4a'
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
          filename: '../../../assets/movie/content/Interest1_10.9.mp4'
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
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "94, 308, 266, 486" },
            { value: 'two', shape: "rect", coordinates: "310, 308, 486, 486" },
            { value: 'three', shape: "rect", coordinates: "540, 308, 724, 486" },
            { value: 'four', shape: "rect", coordinates: "758, 308, 942, 486" },
          ],
          sound: '../../../assets/audio/interest1&2.m4a'
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
          filename: '../../../assets/movie/content/Interest2_10.9.mp4'
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
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "94, 308, 266, 486" },
            { value: 'two', shape: "rect", coordinates: "310, 308, 486, 486" },
            { value: 'three', shape: "rect", coordinates: "540, 308, 724, 486" },
            { value: 'four', shape: "rect", coordinates: "758, 308, 942, 486" },
          ],
          sound: '../../../assets/audio/interest1&2.m4a'
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
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "56, 294, 242, 488" },
            { value: 'two', shape: "rect", coordinates: "300, 300, 490, 490" },
            { value: 'three', shape: "rect", coordinates: "536, 298, 722, 490" },
            { value: 'four', shape: "rect", coordinates: "774, 300, 962, 490" },
          ],
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
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "56, 294, 242, 488" },
            { value: 'two', shape: "rect", coordinates: "300, 300, 490, 490" },
            { value: 'three', shape: "rect", coordinates: "536, 298, 722, 490" },
            { value: 'four', shape: "rect", coordinates: "774, 300, 962, 490" },
          ],
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
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "56, 294, 242, 488" },
            { value: 'two', shape: "rect", coordinates: "300, 300, 490, 490" },
            { value: 'three', shape: "rect", coordinates: "536, 298, 722, 490" },
            { value: 'four', shape: "rect", coordinates: "774, 300, 962, 490" },
          ],
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
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "56, 294, 242, 488" },
            { value: 'two', shape: "rect", coordinates: "300, 300, 490, 490" },
            { value: 'three', shape: "rect", coordinates: "536, 298, 722, 490" },
            { value: 'four', shape: "rect", coordinates: "774, 300, 962, 490" },
          ],
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
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "56, 294, 242, 488" },
            { value: 'two', shape: "rect", coordinates: "300, 300, 490, 490" },
            { value: 'three', shape: "rect", coordinates: "536, 298, 722, 490" },
            { value: 'four', shape: "rect", coordinates: "774, 300, 962, 490" },
          ],
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
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "56, 294, 242, 488" },
            { value: 'two', shape: "rect", coordinates: "300, 300, 490, 490" },
            { value: 'three', shape: "rect", coordinates: "536, 298, 722, 490" },
            { value: 'four', shape: "rect", coordinates: "774, 300, 962, 490" },
          ],
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
      'one': [{
        type: 'action',
        id: 'wood1',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/persistence/wood_1.mp4',
            }
          }
        ]
      }],
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
      'one': [{
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
      'two': [{
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
      }],
      'three': [{
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
      }],
      'four': [{
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
      }],
      'five': [{
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
      }],
      'six': [{
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
      }],
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
  {
    type: 'action',
    id: 'memory',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/memory_10.9.mp4'
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
];

var legos = [
  {
    type: 'action',
    id: 'legos',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/legos.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'legosQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/legos.jpeg',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" },
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
  end
]

var leaves = [
  {
    type: 'action',
    id: 'leaves',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/leaves.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'leavesQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/leaves.jpeg',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" },
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
  {
    type: 'action',
    id: 'persistenceTransition6',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/transition_choice.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'persistenceTransition6Q',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/transition.jpeg',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "110, 332, 430, 448" },
            { value: 'right', shape: "rect", coordinates: "642, 244, 912, 518" }],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'persistence6',
    items: {
      'left':
        legos,
      'right':
        end
    }
  },
]

var wicker = [
  {
    type: 'action',
    id: 'wicker',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/wicker.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'wickerQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/wicker.jpeg',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" },
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
  {
    type: 'action',
    id: 'persistenceTransition5',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/transition_choice.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'persistenceTransition5Q',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/transition.jpeg',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "110, 332, 430, 448" },
            { value: 'right', shape: "rect", coordinates: "642, 244, 912, 518" }],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'persistence5',
    items: {
      'left':
        leaves,
      'right':
        end
    }
  },
]

var foil = [
  {
    type: 'action',
    id: 'foil',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/foil.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'foilQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/foil.jpeg',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" },
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
  {
    type: 'action',
    id: 'persistenceTransition4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/transition_choice.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'persistenceTransition4Q',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/transition.jpeg',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "110, 332, 430, 448" },
            { value: 'right', shape: "rect", coordinates: "642, 244, 912, 518" }],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'persistence4',
    items: {
      'left':
        wicker,
      'right':
        end
    }
  },
]

var blanket = [
  {
    type: 'action',
    id: 'blanket',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/blanket.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'blanketQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/blanket.jpeg',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" },
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
  {
    type: 'action',
    id: 'persistenceTransition3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/transition_choice.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'persistenceTransition3Q',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/transition.jpeg',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "110, 332, 430, 448" },
            { value: 'right', shape: "rect", coordinates: "642, 244, 912, 518" }],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'persistence3',
    items: {
      'left':
        foil,
      'right':
        end
    }
  },
]

var paperTowel = [
  {
    type: 'action',
    id: 'paperTowel',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/paper_towel.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'paperTowelQ',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/paper_towel.jpeg',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" },
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
  {
    type: 'action',
    id: 'persistenceTransition2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/transition_choice.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'persistenceTransition2Q',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/transition.jpeg',
          coordinates: [
            { value: 'left', shape: "rect", coordinates: "110, 332, 430, 448" },
            { value: 'right', shape: "rect", coordinates: "642, 244, 912, 518" }],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'persistence2',
    items: {
      'left':
        blanket,
      'right':
        end
    }
  },
]

var persistence = [
  {
    type: 'action',
    id: 'persistenceTransition1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/persistence/transition_1st.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'persistenceTransition1Q',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/persistence/transition.jpeg',
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
        paperTowel
      ,
      'right':
        end
    }
  },
]

var forms = {
  type: 'action',
  id: 'schoolIDs',
  stimuli: [
    {
      type: 'form',
      parameters: {
      }
    }
  ]
}


var contentStudyBe = [
  forms,
  startGame,
  friction,
  sciMethod,
  interest,
  prevalence,
  prevalenceDo,
  prevalenceBe,
  end
];

var contentStudyDo = [
  forms,
  startGame,
  friction,
  sciMethod,
  interest,
  prevalence,
  prevalenceBe,
  prevalenceDo,
  end
];

var persistenceStudy = [
  forms,
  startGame,
  contingentFeedback,
  persistence
];

export const Project = {
  conditions: [
    contentStudyDo,
    contentStudyBe,
    persistenceStudy,
    persistenceStudy
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
