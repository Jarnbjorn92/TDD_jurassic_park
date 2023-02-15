const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.dinosaurCount = function(){
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.findMostAttractiveDino = function(){
    let mostAttractiveDino = this.dinosaurs[0];
    for (const dino of this.dinosaurs){
        if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay){
            mostAttractiveDino = dino;
        }
    }
    return mostAttractiveDino;
}

Park.prototype.findBySpecies = function(species){
    let allOfSearchSpecies = [];
    for (const dinos of this.dinosaurs){
        if (dinos.species === species){
            allOfSearchSpecies.push(dinos);
        }
    }
    return allOfSearchSpecies
}

module.exports = Park;