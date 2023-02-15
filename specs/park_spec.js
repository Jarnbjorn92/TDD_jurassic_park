const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let trex1;
  let trex2;
  let trex3;
  let velociraptor1;
  let velociraptor2;
  let diplodocus;
  let gallimimus;
  let park;

  beforeEach(function () {
    trex1 = new Dinosaur('t-rex', 'carnivore', 50);
    trex2 = new Dinosaur('t-rex', 'carnivore', 40);
    trex3 = new Dinosaur('t-rex', 'carnivore', 60);

    velociraptor1 = new Dinosaur('velociraptor', 'carnivore', 25);
    velociraptor2 = new Dinosaur('velociraptor', 'carnivore', 20);

    diplodocus = new Dinosaur('diplodocus', 'herbivore', 30);
    gallimimus = new Dinosaur('gallimimus', 'omnivore', 4);

    park = new Park('Jurassic Park', 20);
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 20);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(trex1);
    assert.strictEqual(park.dinosaurCount(), 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(diplodocus);
    park.addDinosaur(gallimimus);
    park.removeDinosaur(gallimimus);
    assert.deepStrictEqual(park.dinosaurs, [diplodocus]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    assert.deepStrictEqual(park.findMostAttractiveDino(), trex3)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
