function woodCalculator(chairQuentity, tableQuentity, bedquentity) {

    const parChairWood = 5;
    const parTableWood = 20;
    const parBedWood = 50;

    const chairWoodQuetity = chairQuentity * parChairWood;
    const tableWoodQuentity = tableQuentity * parTableWood;
    const bedWoodQuentity = bedquentity * parBedWood;

    const totalWood = chairWoodQuetity + tableWoodQuentity + bedWoodQuentity;

    return totalWood;

}

const firstPerson = woodCalculator(4, 2, 1);
console.log(firstPerson);

const secound = woodCalculator(4, 5, 3);
console.log(secound);
