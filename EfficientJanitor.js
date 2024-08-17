const assert = require("node:assert").strict;

// If the janitor has a weight limit of 3.0,
// and the bags weigh [1.01, 1.99, 2.5, 1.5],
// calculate the minimum number of trips

function EfficientJanitor(bagWeights, maxWeight) {
  // Sort the bag weights
  bagWeights.sort((a, b) => a - b);

  let i = 0;
  let j = bagWeights.length - 1;
  let trips = 0;

  while (i <= j) {
    // If the lightest and heaviest bags can be paired
    if (bagWeights[i] + bagWeights[j] <= maxWeight) {
      i++; // Move pointer from the beginning
    }
    // Always move the pointer from the end (heaviest)
    j--;
    trips++; // Count one trip
  }

  return trips;
}

assert.equal(EfficientJanitor([1.01, 1.99, 2.5, 1.5], 3.0), 3);
assert.equal(EfficientJanitor([1.5], 3.0), 1);
assert.equal(EfficientJanitor([1.5, 1.5], 3.0), 1);
assert.equal(EfficientJanitor([1.8, 1.8], 3.0), 2);
assert.equal(EfficientJanitor([1.0, 1.0, 1.0, 1.0], 2.0), 2);
assert.equal(EfficientJanitor([1.1, 2.2, 1.5, 2.5, 1.0, 1.8], 3.0), 4);
