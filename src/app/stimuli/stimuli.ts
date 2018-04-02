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
    picture: Picture;
}

export class Picture {
    picture: string[];
    coordinate: Coordinate[];
}

export class Coordinate {
    coordinate: string;
    disabled: boolean;
}

export class AttnCheck {
    sound: string[];
}

