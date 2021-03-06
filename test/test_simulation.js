'use strict';

const root_dir   = '../'
const test       = require('tape');
const sim_lib    = require(`${root_dir}src/simulation.js`);
const Simulation = sim_lib.Simulation;

test('Simulation has default values when initialized without params', assert => {

  let simulation = new Simulation();

  assert.equals(simulation.name, 'Sample Simulation');
  assert.equals(simulation.direction, true);
  assert.equals(simulation.position, 0);
  assert.equals(typeof simulation.lotsBatch, 'object');

  assert.end();
});

test('Simulation gives precedence to args passed on initialization', assert => {

  let params = {
    name: 'Mire Vea',
    direction: false,
    position: 235,
    lots: [1, 2, 3],
  };

  let simulation = new Simulation(params);

  assert.equals(simulation.name, 'Mire Vea');
  assert.equals(simulation.direction, false);
  assert.equals(simulation.position, 235);
  assert.equals(simulation.lots.length, 3);

  assert.end();
});

test('Simulation initializes with default params and updates only args passed to contructor', assert => {

  let params = {direction: false};

  let simulation = new Simulation(params);

  assert.equals(simulation.name, 'Sample Simulation');
  assert.equals(simulation.direction, false);
  assert.equals(simulation.position, 0);
  assert.equals(typeof simulation.lotsBatch, 'object');
  assert.end();
});
