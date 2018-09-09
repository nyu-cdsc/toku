export class ClickArea {
    area: Coordinate;
    value: string;
    used: false;

    constructor(obj) {
        this.area = new Coordinate(obj.shape, obj.coordinates);
        this.value = obj.value;
    }

    validate() {
    }
}

export class Coordinate {
    shape: string;
    coordinates: Array<number>;

    constructor(shape, coordinates) {
        coordinates = coordinates.split(',').map(val => {
            return Number(val);
        })
        shape = shape || 'rect';
        this.validate(shape, coordinates);

        this.shape = shape, this.coordinates = coordinates;
    }

    validate(shape, coordinates: Array<number>) {
        switch (shape) {
            case 'rect':
                if (coordinates.length != 4) {
                    // throw error with length mismatch - be specific (rather than just returning false)
                }
                break;
            case 'circle':
                if (coordinates.length != 2) {
                    // throw error
                }
                break;
            case 'poly':
                if (coordinates.length < 4) {
                    // throw error
                }
                break;
        }
    }
}
