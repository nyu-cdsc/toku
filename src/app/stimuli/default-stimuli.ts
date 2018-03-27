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
                ]
            },

            {
                id: "novel", 
                trials: [
                    {
                        id: "bosa", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/chintro1.mp4"], 
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                    {
                        id: "tulver", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/pointro1.mp4"], 
                        picture: ["../assets/image/porcupines.jpg"],
                        sound: ["../assets/audio/po_1.m4a"]
                    },
                    {
                        id: "undo", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/kgintro1.mp4"], 
                        picture: ["../assets/image/kangaroos.jpg"],
                        sound: ["../assets/audio/kg_1.m4a"]
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
                ]
            },

            {
                id: "novel", 
                trials: [
                    {
                        id: "bosa", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/chintro1.mp4"], 
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_2.m4a", "../assets/audio/ch_2_2.m4a"]
                    },
                    {
                        id: "tulver", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/pointro1.mp4"], 
                        picture: ["../assets/image/porcupines.jpg"],
                        sound: ["../assets/audio/po_2.m4a", "../assets/audio/po_2_2.m4a"]
                    },
                    {
                        id: "undo", 
                        picture1: [""],
                        sound1: [""],
                        movie: ["../assets/video/kgintro1.mp4"], 
                        picture: ["../assets/image/kangaroos.jpg"],
                        sound: ["../assets/audio/kg_2.m4a", "../assets/audio/kg_2_2.m4a"]
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
                        picture1: ["../assets/image/corgi.jpg"], 
                        sound1: ["../assets/audio/ch_3_1.m4a"],
                        movie: ["../assets/video/ch_3_1_Aff.mp4"], 
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                ]
            },

            {
                id: "affirmation2", 
                trials: [
                    {
                        id: "cheetah", 
                        picture1: ["../assets/image/corgi.jpg"], 
                        sound1: ["../assets/audio/ch_3_2.m4a"],
                        movie: ["../assets/video/ch_3_2_Aff.mp4"], 
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                ]
            },

            {
                id: "correction1", 
                trials: [
                    {
                        id: "cheetah", 
                        picture1: ["../assets/image/corgi.jpg"], 
                        sound1: ["../assets/audio/ch_3_1.m4a"],
                        movie: ["../assets/video/ch_3_1_Corr.mp4"], 
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
                    },
                ]
            },

            {   
                id: "correction2", 
                trials: [
                    {
                        id: "cheetah", 
                        picture1: ["../assets/image/corgi.jpg"], 
                        sound1: ["../assets/audio/ch_3_2.m4a"],
                        movie: ["../assets/video/ch_3_2_Corr.mp4"], 
                        picture: ["../assets/image/cheetahs.jpg"],
                        sound: ["../assets/audio/ch_1.m4a"]
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