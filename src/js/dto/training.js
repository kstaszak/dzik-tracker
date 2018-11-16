class Training {
    constructor(){
        this.Excercises = [];

    }

    addExcercise(excercise) {
        this.Excercises.push(excercise);
    }

    getExcercises(){
        return this.Excercises;
    }
}

export default Training