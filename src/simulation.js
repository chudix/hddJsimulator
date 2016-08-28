'use strict';

class Requirement
{

  constructor(value, isPageFault = false)
  {
    this.value = value;
    this.isPageFault = isPageFault;
  }

  equals(other){
    return this.value === other.value &&
      this.isPageFault === other.isPageFault
  }
}

class PageFault extends Requirement
{
  constructor(value)
  {
    super(value, true);
  }

}

class Lot
{

  constructor(reqs = [], entry = 0)
  {
    this.requirements = reqs;
    this.entry = entry;
  }

  add(req)
  {
    this.requirements = [].concat.apply(this.requirements,[req]);
  }

  size()
  {
    return this.requirements.length;
  }

}

class Hdd
{
  constructor(params)
  {
    // Set default hdd values
    var defaultValues = {
    name:      'Sample Hdd',
    tracks:    512,
    rpm:       5400,
    seek_time: 500
    }
    Object.assign(this, defaultValues)
    // Updates default values with params
    Object.assign(this, params)
  }
}

class Simulation
{

  constructor(params)
  {
    // Set default simulation values
    var defaultValues = {
      name:      'Sample Simulation',
      direction: true,
      position:  0,
      hdd:       new Hdd(),
      lots:      []
    };
    Object.assign(this, defaultValues);
    // Updates default values with params
    Object.assign(this, params);
  }

}

module.exports = {
  Simulation,
  Hdd,
  Lot,
  Requirement,
  PageFault,
}
