var taxi = require('../taxi');
var assert = require('assert');

var capeTownTaxis = [{
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Bellville",
  "Fare": 13,
  "Trips": 9
}, {
  "RegistrationNumber": "CA 234 567",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Langa",
  "Fare": 8,
  "Trips": 13
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Cape Town",
  "Fare": 13,
  "Trips": 10
}];

var durbanTaxis = [{
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 18
}, {
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 15
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 20
}];



describe("For processing the data for the taxi drivers,", function() {

  it("I need to find the total trips ", function() {

    var result = taxi.totalTrips(capeTownTaxis);

    assert.equal(54, result);
  });

  it("I need to find the minimum amount of trips ", function() {

    var result = taxi.minTrips(capeTownTaxis);

    assert.equal(9, result);
  });

  it("I need to find what records there are for CA 123 456? ", function() {

    var result = taxi.specificCondition(capeTownTaxis, 'CA 123 456');

    assert.deepEqual(result, [{
      RegistrationNumber: 'CA 123 456',
      Route: 'Cape Town - Bellville',
      Fare: 13,
      Trips: 9
    }, {
      RegistrationNumber: 'CA 123 456',
      Route: 'Cape Town - Gugulethu',
      Fare: 12,
      Trips: 11
    }])

  });

  it("I need to find out How many trips CA 234 567 made?", function() {

    var result = taxi.howMany(capeTownTaxis, 'CA 234 567');

    assert.equal(11, result);
  });

  it("I need to find out the route names that CA 345 678 made?", function() {

    var result = taxi.routeNames(capeTownTaxis, 'CA 345 678');

    assert.equal('Cape Town - Langa, Cape Town - Cape Town, ', result);
  });

  it("I need to find out what the total earnings for CA 234 567 are?", function() {

    var result = taxi.totalEarnings(capeTownTaxis, 'CA 234 567');

    assert.equal(12, result);
  });

  it("I need to find out what the total earnings for each taxi are", function() {

    var result = taxi.eachEarnings(capeTownTaxis);

    assert.deepEqual({
        "CA 123 456": 25,
        "CA 234 567": 12,
        "CA 345 678": 21

      }, result);
    });


  it("I need to find the total trips ", function() {

    var result = taxi.totalTrips(durbanTaxis);

    assert.equal(117, result);
  });

  it("I need to find the minimum amount of trips ", function() {

    var result = taxi.minTrips(durbanTaxis);

    assert.equal(9, result);
  });

  it("I need to find what records there are for ND 123 456? ", function() {

    var result = taxi.specificCondition(durbanTaxis, 'ND 123 456');

    assert.deepEqual(result, [{
      RegistrationNumber: 'ND 123 456',
      Route: 'Durban - University of KZN',
      Fare: 7,
      Trips: 14
    }, {
      RegistrationNumber: 'ND 123 456',
      Route: 'Durban - Umbilo',
      Fare: 8,
      Trips: 15
    }]);

  });
  it("I need to find out how many trips ND 234 567 made?", function() {

    var result = taxi.howMany(durbanTaxis, 'ND 234 567');

    assert.equal(36, result);
  });

  it("I need to find out the route names that ND 345 678 made?", function() {

    var result = taxi.routeNames(durbanTaxis, 'ND 345 678');

    assert.equal('Durban - Umbilo, Durban - University of KZN, Durban - Umlazi Station, ', result);
  });

  it("I need to find out what the total earnings for ND 234 567 are?", function() {

    var result = taxi.totalEarnings(durbanTaxis, 'ND 234 567');

    assert.equal(43, result);
  });

  it("I need to find out what the total earnings for each taxi are", function() {

    var result = taxi.eachEarnings(durbanTaxis);

    assert.deepEqual({
        "ND 123 456": 15,
        "ND 234 567": 43,
        "ND 345 678": 29}, result);
  });

});
