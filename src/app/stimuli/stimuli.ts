export class Study {
    id: number; 
    conditions: Condition[];
}

export class Condition {
    id: string;
    trials: Trial[];
}

export class Trial {
    id: string; 
    picture1: string[];
    sound1: string[];
    movie: string[]; 
    sound: string[];
    picture: string[];
}

export class AttnCheck {
    sound: string[];
}