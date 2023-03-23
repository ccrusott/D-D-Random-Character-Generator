const raceSelect = () =>{
    const races = [
        "Dragonborn",
        "Dwarf",
        "Elf",
        "Gnome",
        "Half-Elf",
        "Half-Orc",
        "Halfling",
        "Human",
        "Tiefling",
        "Aasimar",
        "Firbolg",
        "Genasi",
        "Goliath",
        "Kenku",
        "Lizardfolk",
        "Tabaxi",
        "Tortle",
        "Aarakocra",
        "Bugbear",
        "Goblin",
        "Hobgoblin",
        "Kobold",
        "Orc",
        "Yuan-ti Pureblood"
      ];
    return races[Math.floor(Math.random()*races.length)]
}

let playerRace = raceSelect();

const classSelect = () =>{
    const classes = [
        "Barbarian",
        "Bard",
        "Cleric",
        "Druid",
        "Fighter",
        "Monk",
        "Paladin",
        "Ranger",
        "Rogue",
        "Sorcerer",
        "Warlock",
        "Wizard"
      ];
    return classes[Math.floor(Math.random()*classes.length)]
}
let playerclass = classSelect();

let skillValues = [];
const getSkillValues = () =>{
    for(i=0; i<6; i++){
        skillValues.push(Math.floor(Math.random()* (18-9+1))+9);
    }
    return skillValues.sort(function(a,b){return a-b})
}

let playerSkills = getSkillValues();

console.log(`Your character race is: ${playerRace}. Your character class is: ${playerclass}. 
Your available skill amounts are: ${playerSkills}.`);

