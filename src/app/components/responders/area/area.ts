export class ClickArea {
    coordinates: Array<number>;
    shape: string;
    value: string;
    used: false;

    constructor(obj) {
        const coordinates = obj.coordinates.split(',').map(coord => {
            return Number(coord);
        });
        const shape = obj.shape || 'rect';
        this.validate(shape, coordinates);

        this.coordinates = coordinates, this.shape = shape, this.value = obj.value;
    }

    validate(shape, coordinates: Array<number>) {
        switch (shape) {
            case 'rect':
                if (coordinates.length !== 4) {
                    // throw error with length mismatch - be specific (rather than just returning false)
                }
                break;
            case 'circle':
                if (coordinates.length !== 2) {
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
