console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) {
    console.log("Invalid input. Please provide a positive count.");
    return;
  }

  for (let i = 1; i <= count; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOdds(100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  if (!userName || !age) {
    console.log("Please provide both userName and age.");
    return;
  }

  if (age < 16) {
    console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
  } else {
    console.log(`Congrats ${userName}, you can drive!`);
  }
}

checkAge("Seth", 29);


console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y) {
  if (x === 0 && y === 0) {
    console.log("The point is at the origin.");
  } else if (x === 0) {
    console.log(`(${x}, ${y}) is on the y axis.`);
  } else if (y === 0) {
    console.log(`(${x}, ${y}) is on the x axis.`);
  } else if (x > 0 && y > 0) {
    console.log(`(${x}, ${y}) is in Quadrant 1.`);
  } else if (x < 0 && y > 0) {
    console.log(`(${x}, ${y}) is in Quadrant 2.`);
  } else if (x < 0 && y < 0) {
    console.log(`(${x}, ${y}) is in Quadrant 3.`);
  } else {
    console.log(`(${x}, ${y}) is in Quadrant 4.`);
  }
}

checkQuadrant(1, 2); // Example usage: prints "(1, 2) is in Quadrant 1"


console.log("EXERCISE 4:\n==========\n");

function checkTriangleType(side1, side2, side3) {
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    console.log("Invalid triangle.");
  } else if (side1 === side2 && side1 === side3) {
    console.log("Equilateral triangle.");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles triangle.");
  } else {
    console.log("Scalene triangle.");
  }
}

checkTriangleType(1, 2, 2); // Example usage: prints "Isosceles triangle"


console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage) {
  const daysRemaining = 30 - day;
  const averageDailyUsage = usage / day;

  console.log(`${day} days used, ${daysRemaining} days remaining`);
  console.log(`Average daily use: ${averageDailyUsage.toFixed(3)} GB/day`);

  if (averageDailyUsage > planLimit) {
    const excessUsage = (averageDailyUsage - planLimit) * daysRemaining;
    console.log(`You are EXCEEDING your average daily use (${average})`);

