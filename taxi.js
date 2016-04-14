exports.totalTrips = function(tripList) {
  var totalTripsMade = 0;

  tripList.forEach(function(taxiInfo) {

    totalTripsMade = totalTripsMade + taxiInfo.Trips;
  });
  return totalTripsMade;
};

exports.minTrips = function(tripList) {
  var minTaxiTrips = 1000000;

  tripList.forEach(function(taxiInfo) {
    if (taxiInfo.Trips < minTaxiTrips) {
      minTaxiTrips = taxiInfo.Trips;
    }
  });
  return minTaxiTrips;
};

exports.specificCondition = function(tripList, regNumber) {

  var records = tripList.filter(function(a) {
    return a.RegistrationNumber === regNumber;
  });

  return records;
};

exports.howMany = function(tripList, regNumber) {

  var records = tripList.filter(function(a) {
    return a.RegistrationNumber === regNumber;
  });

  var totalTripsMade = 0;

  records.forEach(function(taxiInfo) {
    totalTripsMade = totalTripsMade + taxiInfo.Trips;
  });

  return totalTripsMade;
};

exports.routeNames = function(tripList, regNumber) {

  var records = tripList.filter(function(a) {
    return a.RegistrationNumber === regNumber;
  });

  var routes = '';

  records.forEach(function(taxiInfo) {
    routes += (taxiInfo.Route + ", ");
  });

  return routes;
};

exports.totalEarnings = function(tripList, regNumber) {

  var records = tripList.filter(function(a) {
    return a.RegistrationNumber === regNumber;
  });

  var profit = 0;

  records.forEach(function(taxiInfo) {
    profit += (Number(taxiInfo.Fare));
  });


  return profit;
};

exports.eachEarnings = function(tripList) {

  var allThoseEarnings = {};

  tripList.forEach (function(taxiInfo) {
    if (!allThoseEarnings.hasOwnProperty(taxiInfo.RegistrationNumber)) {
      allThoseEarnings[taxiInfo.RegistrationNumber] = Number(taxiInfo.Fare);
    } else {
      allThoseEarnings[taxiInfo.RegistrationNumber] += Number(taxiInfo.Fare);
    }

  });

  return allThoseEarnings;
};
