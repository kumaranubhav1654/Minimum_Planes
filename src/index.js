function minimumPlanes(fuelUnits) {
  const n = fuelUnits.length; // Number of airports

  // Initialize the minimum planes required array with Infinity
  const minPlanes = new Array(n).fill(Infinity);

  // The first airport can be reached with 0 planes
  minPlanes[0] = 0;

  // Iterate through the fuel units array
  for (let i = 0; i < n; i++) {
    // Update the minimum planes required for the current airport
    for (let j = i + 1; j < Math.min(i + fuelUnits[i] + 1, n); j++) {
      minPlanes[j] = Math.min(minPlanes[j], minPlanes[i] + 1);
    }
  }

  // If the last airport is reachable, return the minimum planes required
  if (minPlanes[n - 1] !== Infinity) {
    return minPlanes[n - 1];
  } else {
    return -1;
  }
}

const fuelUnits = [1, 6, 3, 4, 5, 0, 0, 0, 6];
const result = minimumPlanes(fuelUnits);
console.log(result);
