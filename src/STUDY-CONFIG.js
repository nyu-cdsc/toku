projectName = 'dg';

animalGif2 = {
  id: 'animalGif2',
  type: 'action',
  stimuli: [
    {
      type: 'movie',
      parameters: {
        disable: false,
        filename: '../../../assets/movie/animal2.mp4'
      }
    }
  ]
};

animalGif3 = {
  id: 'animalGif3',
  type: 'action',
  stimuli: [
    {
      type: 'movie',
      parameters: {
        filename: '../../../assets/movie/animal3.mp4'
      }
    }
  ]
};

// todo show arbitrary nesting/GROUPING with [[]] etc - lists within lists, but NOT lists within items

dgTraining = [
  {
    type: 'action',
    id: 'dgGive',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          disable: false,
          filename: '../../../assets/movie/dggive.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgGiveQuestion',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dggive.jpg',
          coordinates: [{ response: 'yes', coordinate: "0, 0, 1000, 1000" }, { response: 'no', coordinate: "0, 0, 1000, 1000" }],
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'dgGiveFeedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dggivefeedback.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgKeep',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgkeep.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgKeepQuestion',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgkeep.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgKeepFeedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgkeepfeedback.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgTargets',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgw2bintro.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgBelong',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgbelong.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgKeep',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgbelong.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgReminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dg1reminder.mp4'
        }
      }
    ]
  },
];

dgWhite = [
  {
    type: 'action',
    id: 'dgWhiteIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhiteintro.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgWhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhite1.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgWhite1Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgwhite1.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgWhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhite2.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgWhite2Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgwhite2.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgWhite3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhite3.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgWhite3Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgwhite3.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgWhite4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgwhite4.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgWhite4Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgwhite4.jpg',
          coordinates: []
        }
      }
    ]
  },
];

dgBlack = [
  {
    type: 'action',
    id: 'dgBlackIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblackintro.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgBlack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblack1.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgBlack1Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgblack1.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgBlack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblack2.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgBlack2Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgblack2.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgBlack3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblack3.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgBlack3Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgblack3.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgBlack4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/dgblack4.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgBlack4Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/dgblack4.jpg',
          coordinates: []
        }
      }
    ]
  },
];

reTraining = [
  {
    type: 'action',
    id: 'reGive',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/regive.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reGiveQuestion',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/regive.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reGiveFeedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/regivefeedback.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reKeep',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rekeep.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reKeepQuestion',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/rekeep..jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reKeepFeedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rekeepfeedback.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reTargets',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rew2bintro.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reBelong',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rebelong.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reKeep',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/picture/rebelong.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reReminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/re1reminder.mp4'
        }
      }
    ]
  },
];

reWhite = [
  {
    type: 'action',
    id: 'reWhiteIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhiteintro.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reWhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhite1.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reWhite1Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/rewhite1.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reWhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhite2.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reWhite2Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/rewhite2.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reWhite3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhite3.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reWhite3Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/rewhite3.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reWhite4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/rewhite4.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reWhite4Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/rewhite4.jpg',
          coordinates: []
        }
      }
    ]
  },
];

reBlack = [
  {
    type: 'action',
    id: 'reBlackIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblackintro.mp4'
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reBlack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblack1.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reBlack1Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/reblack1.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reBlack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblack2.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reBlack2Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/reblack2.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reBlack3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblack3.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reBlack3Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/reblack3.jpg',
          coordinates: []
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reBlack4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/reblack4.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reBlack4Response',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/reblack4.jpg',
          coordinates: []
        }
      }
    ]
  },
];

statusTask = [
  {
    type: 'action',
    id: 'status1Intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/status1intro.mp4'
        }
      },
    ]
  },
  [
    [
      {
        type: 'action',
        id: 'status1Left',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/status1left.mp4'
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'status1LeftResponse',
        stimuli: [
          {
            type: 'picture',
            parameters: {
              filename: '../../../assets/picture/status1left.jpg',
              coordinates: [],
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'status1Right',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/status1right.mp4'
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'status1RightResponse',
        stimuli: [
          {
            type: 'picture',
            parameters: {
              filename: '../../../assets/picture/status1right.jpg',
              coordinates: [],
            }
          }
        ]
      },
    ],
    [
      {
        type: 'action',
        id: 'status2Left',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/status2left.mp4'
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'status2LeftResponse',
        stimuli: [
          {
            type: 'picture',
            parameters: {
              filename: '../../../assets/picture/status2left.jpg',
              coordinates: [],
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'status2Right',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/status2right.mp4'
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'status2RightResponse',
        stimuli: [
          {
            type: 'picture',
            parameters: {
              filename: '../../../assets/picture/status2right.jpg',
              coordinates: [],
            }
          }
        ]
      },
    ],
    {
      type: 'control', // shuffle the lists as a whole; objects within list stay in order
      shuffle: true // shallow shuffle
    }
  ],
  {
    type: 'action',
    id: 'greatJob',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/greatjob3.mp4',
        }
      }
    ]
  },
];

attitudesTask = [
  {
    type: 'action',
    id: 'attitudesIntro',
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
    id: 'attitudesTraining',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/attitudestraining.mp4',
        }
      }
    ]
  },
  [
    [
      {
        type: 'action',
        id: 'attitudesWhite1',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/ftswhite1.mp4',
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'attitudesWhite1Response',
        stimuli: [
          {
            type: 'picture',
            parameters: {
              filename: '../../../assets/picture/ftswhite1.jpg',
              coordinates: []
            }
          }
        ]
      },
    ],
    [
      {
        type: 'action',
        id: 'attitudesWhite2',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/ftswhite2.mp4',
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'attitudesWhite2Response',
        stimuli: [
          {
            type: 'picture',
            parameters: {
              filename: '../../../assets/picture/ftsblack2.jpg',
              coordinates: []
            }
          }
        ]
      },
    ],
    [
      {
        type: 'action',
        id: 'attitudesBlack1',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/ftsblack1.mp4',
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'attitudesBlack1Response',
        stimuli: [
          {
            type: 'picture',
            parameters: {
              filename: '../../../assets/picture/ftsblack1.jpg',
              coordinates: []
            }
          }
        ]
      },
    ],
    [
      {
        type: 'action',
        id: 'attitudesBlack2',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/ftsblack2.mp4',
            }
          }
        ]
      },
      {
        type: 'action',
        id: 'attitudesBlack2Response',
        stimuli: [
          {
            type: 'picture',
            parameters: {
              filename: '../../../assets/picture/ftsblack2.jpg',
              coordinates: []
            }
          }
        ]
      },
    ],
    {
      type: 'control',
      shuffle: true
    }
  ],
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
];

whiteFirstCondition = [
  dgTraining,
  dgWhite,
  animalGif2,
  dgBlack,
  reTraining,
  reWhite,
  animalGif3,
  reBlack,
  statusTask,
  attitudesTask
];

blackFirst = [
  dgTraining,
  dgBlack,
  animalGif2,
  dgWhite,
  reTraining,
  reBlack,
  animalGif3,
  reWhite,
  statusTask,
  attitudesTask
];
