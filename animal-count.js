function animalCount(miles) {
    const animalDensityFirst10miles = 100;
    const animalDensity20miles = 600;
    if (miles <= 10) {
        const count = miles * 10;
        return count;
    }
    else if (miles <= 20) {
        let count = miles - 10;
        count = count * 50;
        const totalAnimal = animalDensityFirst10miles + count;
        return totalAnimal;
    }
    else if (miles > 20) {
        let count = miles - 20;
        count = count * 100;
        const totalAnimal = animalDensity20miles + count;
        return totalAnimal;
    }
}

const animals = animalCount(35);
console.log(animals);