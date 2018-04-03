import { Study, Condition, Trial, Picture, Coordinate, AttnCheck } from './stimuli'; 

export const STUDIES: Study[] = [
    {
        id: 1,    
        conditions: [
            {
                id: "familiar", 
                trials: [
                    {
                        id: "cheetah", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/chintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/cheetahs.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,576,1023,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "0,441,1023,575",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,351,1023,440",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,156,1023,350",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,0,1023,155",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/pointro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/porcupines.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,578,224,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "236,490,440,640",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "450,360,640,512",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "650,230,830,390",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "840,0,1023,270",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/kgintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/kangaroos.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,211,766",
                                    disabled: false
                                },
                                {
                                    coordinate: "212,0,405,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "406,0,600,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "601,0,795,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "796,0,1023,766",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/skintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/skunks.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,385,215,660",
                                    disabled: false
                                },
                                {
                                    coordinate: "216,385,410,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "411,385,605,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "606,385,800,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "801,385,1023,660",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/sk_1.m4a"]
                    },
                ]
            },
            {
                id: "novel", 
                trials: [
                    {
                        id: "virdex", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/vdintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/virdexes.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,264,145",
                                    disabled: false
                                },
                                {
                                    coordinate: "190,155,445,295",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "374,305,660,440",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "560,450,820,580",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "725,590,1013,740",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/vd_1.m4a"]
                    },
                    {
                        id: "tulver", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/tvintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/tulvers.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,264,145",
                                    disabled: false
                                },
                                {
                                    coordinate: "190,155,445,295",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "374,305,660,440",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "560,450,820,580",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "725,590,1013,740",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/tv_1.m4a"]
                    },
                    {
                        id: "upos", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/upintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/uposes.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,191,210",
                                    disabled: false
                                },
                                {
                                    coordinate: "210,175,380,350",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "400,306,565,480",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "580,435,750,615",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "770,550,1020,750",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/up_1.m4a"]
                    },
                    {
                        id: "sibu", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/sbintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/sibus.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,210,200",
                                    disabled: false
                                },
                                {
                                    coordinate: "220,150,410,338",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "425,508,600,460",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "620,430,805,600",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "820,560,1023,74",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/sb_1.m4a"]
                    },
                ]
            }
        ]
    },
    {
        id: 2,   
        conditions: [
            {
                id: "familiar", 
                trials: [
                    {
                        id: "cheetah", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/chintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/cheetahs.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,576,1023,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "0,441,1023,575",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,351,1023,440",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,156,1023,350",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,0,1023,155",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/ch_2.m4a", "../assets/audio/ch_2_2.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/pointro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/porcupines.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,578,224,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "236,490,440,640",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "450,360,640,512",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "650,230,830,390",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "840,0,1023,270",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/po_2.m4a", "../assets/audio/po_2_2.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/kgintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/kangaroos.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,211,766",
                                    disabled: false
                                },
                                {
                                    coordinate: "212,0,405,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "406,0,600,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "601,0,795,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "796,0,1023,766",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/kg_2.m4a", "../assets/audio/kg_2_2.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/skintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/skunks.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,385,215,660",
                                    disabled: false
                                },
                                {
                                    coordinate: "216,385,410,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "411,385,605,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "606,385,800,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "801,385,1023,660",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/sk_2.m4a", "../assets/audio/sk_2_2.m4a"]
                    },
                ]
            },

            {
                id: "novel", 
                trials: [
                    {
                        id: "virdex", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/vdintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/virdexes.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,264,145",
                                    disabled: false
                                },
                                {
                                    coordinate: "190,155,445,295",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "374,305,660,440",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "560,450,820,580",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "725,590,1013,740",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/vd_2.m4a", "../assets/audio/vd_2_2.m4a"]
                    },
                    {
                        id: "tulver", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/tvintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/tulvers.jpg"],
                            coordinate: [
                                {
                                    coordinate: "740,585,1023,766",
                                    disabled: false
                                },
                                {
                                    coordinate: "560,445,840,584",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "380,305,658,444",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "200,260,480,304",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,0,305,259",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/tv_2.m4a", "../assets/audio/tv_2_2.m4a"]
                    },
                    {
                        id: "upos", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/upintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/uposes.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,191,210",
                                    disabled: false
                                },
                                {
                                    coordinate: "210,175,380,350",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "400,306,565,480",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "580,435,750,615",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "770,550,1020,750",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/up_2.m4a", "../assets/audio/up_2_2.m4a"]
                    },
                    {
                        id: "sibu", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/sbintro1.mp4"], 
                        picture: {
                            picture: ["../assets/image/sibus.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,210,200",
                                    disabled: false
                                },
                                {
                                    coordinate: "220,150,410,338",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "425,508,600,460",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "620,430,805,600",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "820,560,1023,74",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/sb_2.m4a", "../assets/audio/sb_2_2.m4a"]
                    },
                ]
            }
        ]
    },
    {
        id: 3, 
        conditions: [
            {
                id: "affirmation1", 
                trials: [
                    {
                        id: "cheetah", 
                        picture1: ["../assets/image/child.jpg"], 
                        sound1: ["../assets/audio/ch_3_1.m4a"],
                        movie: ["../assets/video/ch_3_1_Aff.mp4"], 
                        picture: {
                            picture: ["../assets/image/cheetahs.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,576,1023,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "0,441,1023,575",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,351,1023,440",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,156,1023,350",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,0,1023,155",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/po_3_1.m4a"],
                        movie: ["../assets/video/po_3_1_Aff.mp4"], 
                        picture: {
                            picture: ["../assets/image/porcupines.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,578,224,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "236,490,440,640",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "450,360,640,512",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "650,230,830,390",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "840,0,1023,270",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/kg_3_1.m4a"],
                        movie: ["../assets/video/kg_3_1_Aff.mp4"], 
                        picture: {
                            picture: ["../assets/image/kangaroos.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,211,766",
                                    disabled: false
                                },
                                {
                                    coordinate: "212,0,405,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "406,0,600,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "601,0,795,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "796,0,1023,766",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/sk_3_1.m4a"],
                        movie: ["../assets/video/sk_3_1_Aff.mp4"], 
                        picture: {
                            picture: ["../assets/image/skunks.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,385,215,660",
                                    disabled: false
                                },
                                {
                                    coordinate: "216,385,410,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "411,385,605,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "606,385,800,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "801,385,1023,660",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/sk_1.m4a"]
                    },
                ]
            },

            {
                id: "affirmation2", 
                trials: [
                    {
                        id: "cheetah", 
                        picture1: ["../assets/image/child.jpg"], 
                        sound1: ["../assets/audio/ch_3_2.m4a"],
                        movie: ["../assets/video/ch_3_2_Aff.mp4"], 
                        picture: {
                            picture: ["../assets/image/cheetahs.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,576,1023,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "0,441,1023,575",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,351,1023,440",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,156,1023,350",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,0,1023,155",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/po_3_2.m4a"],
                        movie: ["../assets/video/po_3_2_Aff.mp4"], 
                        picture: {
                            picture: ["../assets/image/porcupines.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,578,224,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "236,490,440,640",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "450,360,640,512",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "650,230,830,390",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "840,0,1023,270",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/kg_3_2.m4a"],
                        movie: ["../assets/video/kg_3_2_Aff.mp4"], 
                        picture: {
                            picture: ["../assets/image/kangaroos.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,211,766",
                                    disabled: false
                                },
                                {
                                    coordinate: "212,0,405,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "406,0,600,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "601,0,795,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "796,0,1023,766",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/sk_3_2.m4a"],
                        movie: ["../assets/video/sk_3_2_Aff.mp4"], 
                        picture: {
                            picture: ["../assets/image/skunks.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,385,215,660",
                                    disabled: false
                                },
                                {
                                    coordinate: "216,385,410,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "411,385,605,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "606,385,800,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "801,385,1023,660",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/sk_1.m4a"]
                    },
                ]
            },

            {
                id: "correction1", 
                trials: [
                    {
                        id: "cheetah", 
                        picture1: ["../assets/image/child.jpg"], 
                        sound1: ["../assets/audio/ch_3_1.m4a"],
                        movie: ["../assets/video/ch_3_1_Corr.mp4"], 
                        picture: {
                            picture: ["../assets/image/cheetahs.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,576,1023,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "0,441,1023,575",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,351,1023,440",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,156,1023,350",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,0,1023,155",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/po_3_1.m4a"],
                        movie: ["../assets/video/po_3_1_Corr.mp4"], 
                        picture: {
                            picture: ["../assets/image/porcupines.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,578,224,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "236,490,440,640",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "450,360,640,512",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "650,230,830,390",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "840,0,1023,270",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/kg_3_1.m4a"],
                        movie: ["../assets/video/kg_3_1_Corr.mp4"], 
                        picture: {
                            picture: ["../assets/image/kangaroos.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,211,766",
                                    disabled: false
                                },
                                {
                                    coordinate: "212,0,405,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "406,0,600,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "601,0,795,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "796,0,1023,766",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/sk_3_1.m4a"],
                        movie: ["../assets/video/sk_3_1_Corr.mp4"], 
                        picture: {
                            picture: ["../assets/image/skunks.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,385,215,660",
                                    disabled: false
                                },
                                {
                                    coordinate: "216,385,410,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "411,385,605,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "606,385,800,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "801,385,1023,660",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/sk_1.m4a"]
                    },
                ]
            },

            {   
                id: "correction2", 
                trials: [
                    {
                        id: "cheetah", 
                        picture1: ["../assets/image/child.jpg"], 
                        sound1: ["../assets/audio/ch_3_2.m4a"],
                        movie: ["../assets/video/ch_3_2_Corr.mp4"], 
                        picture: {
                            picture: ["../assets/image/cheetahs.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,576,1023,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "0,441,1023,575",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,351,1023,440",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,156,1023,350",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "0,0,1023,155",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/po_3_2.m4a"],
                        movie: ["../assets/video/po_3_2_Corr.mp4"], 
                        picture: {
                            picture: ["../assets/image/porcupines.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,578,224,767",
                                    disabled: false
                                },
                                {
                                    coordinate: "236,490,440,640",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "450,360,640,512",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "650,230,830,390",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "840,0,1023,270",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/kg_3_2.m4a"],
                        movie: ["../assets/video/kg_3_2_Corr.mp4"], 
                        picture: {
                            picture: ["../assets/image/kangaroos.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,0,211,766",
                                    disabled: false
                                },
                                {
                                    coordinate: "212,0,405,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "406,0,600,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "601,0,795,766",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "796,0,1023,766",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/sk_3_2.m4a"],
                        movie: ["../assets/video/sk_3_2_Corr.mp4"], 
                        picture: {
                            picture: ["../assets/image/skunks.jpg"],
                            coordinate: [
                                {
                                    coordinate: "0,385,215,660",
                                    disabled: false
                                },
                                {
                                    coordinate: "216,385,410,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "411,385,605,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "606,385,800,660",
                                    disabled: false
                                },                                
                                {
                                    coordinate: "801,385,1023,660",
                                    disabled: false
                                }
                            ]
                        },
                        sound: ["../assets/audio/sk_1.m4a"]
                    },
                ]
            }
        ]
    },
];


export const ATTENTIONCHECK: AttnCheck = {
    sound: ["../assets/audio/cow.mp3",
            "../assets/audio/chick.mp3",
            "../assets/audio/dog.mp3",
            "../assets/audio/horse.mp3"]                                           
};
 

// rename this condition because this should be the stimuli grouped by condition?? 
// export const STIMULIGROUPED = [
//     {id: "group1", stimuli: ["cheetah1", "porcupine1", "kangaroo1"]},
//     {id: "group2", stimuli: ["cheetah2", "porcupine2", "kangaroo2"]},
//     {id: "group3", stimuli: ["cheetah3", "porcupine3", "kangaroo3"]},
// ];