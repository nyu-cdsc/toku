import { Study, Trial } from './stimuli';

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
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/pointro1.mp4"], 
                        picture: ["../assets/image/porcupines.jpg"],
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/kgintro1.mp4"], 
                        picture: ["../assets/image/kangaroos.jpg"],
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/skintro1.mp4"], 
                        picture: ["../assets/image/skunks.jpg"],
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
                        picture: ["../assets/image/virdexes.jpg"],
                        sound: ["../assets/audio/vd_1.m4a"]
                    },
                    {
                        id: "tulver", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/tvintro1.mp4"], 
                        picture: ["../assets/image/tulvers.jpg"], 
                        sound: ["../assets/audio/tv_1.m4a"]
                    },
                    {
                        id: "upos", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/upintro1.mp4"], 
                        picture: ["../assets/image/uposes.jpg"], 
                        sound: ["../assets/audio/up_1.m4a"]
                    },
                    {
                        id: "sibu", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/sbintro1.mp4"], 
                        picture: ["../assets/image/sibus.jpg"],
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
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_2.m4a", "../assets/audio/ch_2_2.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/pointro1.mp4"], 
                        picture: ["../assets/image/porcupines.jpg"],
                        sound: ["../assets/audio/po_2.m4a", "../assets/audio/po_2_2.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/kgintro1.mp4"], 
                        picture: ["../assets/image/kangaroos.jpg"],
                        sound: ["../assets/audio/kg_2.m4a", "../assets/audio/kg_2_2.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/skintro1.mp4"], 
                        picture: ["../assets/image/skunks.jpg"],
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
                        picture: ["../assets/image/virdexes.jpg"],
                        sound: ["../assets/audio/vd_2.m4a", "../assets/audio/vd_2_2.m4a"]
                    },
                    {
                        id: "tulver", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/tvintro1.mp4"], 
                        picture: ["../assets/image/child.jpg"], //"../assets/image/tulvers.jpg"
                        sound: ["../assets/audio/tv_2.m4a", "../assets/audio/tv_2_2.m4a"]
                    },
                    {
                        id: "upos", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/upintro1.mp4"], 
                        picture: ["../assets/image/child.jpg"], //"../assets/image/upos.jpg"
                        sound: ["../assets/audio/up_2.m4a", "../assets/audio/up_2_2.m4a"]
                    },
                    {
                        id: "sibu", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/sbintro1.mp4"], 
                        picture: ["../assets/image/sibus.jpg"],
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
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/po_3_1.m4a"],
                        movie: ["../assets/video/po_3_1_Aff.mp4"], 
                        picture: ["../assets/image/porcupines.jpg"],
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/kg_3_1.m4a"],
                        movie: ["../assets/video/kg_3_1_Aff.mp4"], 
                        picture: ["../assets/image/kangaroos.jpg"],
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/sk_3_1.m4a"],
                        movie: ["../assets/video/sk_3_1_Aff.mp4"], 
                        picture: ["../assets/image/skunks.jpg"],
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
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/po_3_2.m4a"],
                        movie: ["../assets/video/po_3_2_Aff.mp4"], 
                        picture: ["../assets/image/porcupines.jpg"],
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/kg_3_2.m4a"],
                        movie: ["../assets/video/kg_3_2_Aff.mp4"], 
                        picture: ["../assets/image/kangaroos.jpg"],
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/sk_3_2.m4a"],
                        movie: ["../assets/video/sk_3_2_Aff.mp4"], 
                        picture: ["../assets/image/skunks.jpg"],
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
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/po_3_1.m4a"],
                        movie: ["../assets/video/po_3_1_Corr.mp4"], 
                        picture: ["../assets/image/porcupines.jpg"],
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/kg_3_1.m4a"],
                        movie: ["../assets/video/kg_3_1_Corr.mp4"], 
                        picture: ["../assets/image/kangaroos.jpg"],
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/sk_3_1.m4a"],
                        movie: ["../assets/video/sk_3_1_Corr.mp4"], 
                        picture: ["../assets/image/skunks.jpg"],
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
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "porcupine", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/po_3_2.m4a"],
                        movie: ["../assets/video/po_3_2_Corr.mp4"], 
                        picture: ["../assets/image/porcupines.jpg"],
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "kangaroo", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/kg_3_2.m4a"],
                        movie: ["../assets/video/kg_3_2_Corr.mp4"], 
                        picture: ["../assets/image/kangaroos.jpg"],
                        sound: ["../assets/audio/kg_1.m4a"]
                    },
                    {
                        id: "skunk", 
                        picture1: ["../assets/image/child.jpg"],
                        sound1: ["../assets/audio/sk_3_2.m4a"],
                        movie: ["../assets/video/sk_3_2_Corr.mp4"], 
                        picture: ["../assets/image/skunks.jpg"],
                        sound: ["../assets/audio/sk_1.m4a"]
                    },
                ]
            }
        ]
    },
];


 

// rename this condition because this should be the stimuli grouped by condition?? 
// export const STIMULIGROUPED = [
//     {id: "group1", stimuli: ["cheetah1", "porcupine1", "kangaroo1"]},
//     {id: "group2", stimuli: ["cheetah2", "porcupine2", "kangaroo2"]},
//     {id: "group3", stimuli: ["cheetah3", "porcupine3", "kangaroo3"]},
// ];