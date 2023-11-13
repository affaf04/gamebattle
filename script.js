// // //Make A Ship Class

// // Make the Human Ship sub-class.

// // Make an Alien Ship sub-class.

// // Make an instance of each class
// // Simulate a battle between your ship and a single alien ship first.
//        // aliens attack back

class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
}

class HumanShip extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
  }
}

const USSAssembly = new HumanShip("USSAssembly", 20, 5, 0.7);

class AlienShip extends Ship {
  constructor(name) {
    const hull = Math.floor(Math.random() * 4) + 3;
    const firepower = Math.floor(Math.random() * 3) + 2;
    const accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    super(name, hull, firepower, accuracy);
  }
}

const alienShips = [];
for (let i = 0; i <= 6; i++) {
  alienShips.push(new AlienShip(`Alien Ship ${i}`));
}

/// round 1
// Human ship's attack
let currentAlienIndex = 0;

function battle(USSAssembly, alienShip) {
  while (USSAssembly.hull > 0 && alienShip.hull > 0) {
    if (Math.random() < USSAssembly.accuracy) {
      alienShip.hull -= USSAssembly.firepower;
      alert(`Successful shot Now alien life is ${alienShip.hull}`);
    } else {
      alert(`You missed, try again`);
    }

    // Alien's attack
    if (USSAssembly.hull > 0 && alienShip.hull > 0) {
      if (Math.random() < alienShip.accuracy) {
        USSAssembly.hull -= alienShip.firepower;
        alert("Alien attacked you");
        alert(`Now USS Assembly's life is ${USSAssembly.hull}`);
      } else {
        alert("Alien tried to attack you");
      }
    }
  }
}

const startButton = document.getElementById("buttonStart");

startButton.addEventListener("click", () => {
  if (currentAlienIndex < alienShips.length) {
    battle(USSAssembly, alienShips[currentAlienIndex]);
  }
});

/////////////////// other rounds :

function battleNext(USSAssembly, alienShips) {

  while (currentAlienIndex < alienShips.length) {
    let alienShip = alienShips[currentAlienIndex];

    while (USSAssembly.hull > 0 && alienShip.hull > 0) {
      if (Math.random() < USSAssembly.accuracy) {
        alienShip.hull -= USSAssembly.firepower;
        alert(`Successful shot Now alien life is ${alienShip.hull}`);
      } else {
        alert(`You missed, try again`);
      }
      // Alien's attack
      if (USSAssembly.hull > 0 && alienShip.hull > 0) {
        if (Math.random() < alienShip.accuracy) {
          USSAssembly.hull -= alienShip.firepower;
          alert("Alien attacked you");
          alert(`Now USS Assembly's life is ${USSAssembly.hull}`);
        } else {
          alert("Alien tried to attack you");
        }
      }
    }
    alert(`Great Job Hero! Alien Ship is destroyed!`);
    currentAlienIndex++;
  }
  // Check if all alien ships are destroyed
  if (currentAlienIndex >= alienShips.length) {
    alert("Congratulations! All the alien ships are destroyed");
  }
}

/// buttons :

const nextButton = document.getElementById("buttonNext");

const retreatButton = document.getElementById("buttonRetreat");

nextButton.addEventListener("click", () => {
  if (currentAlienIndex < alienShips.length) {
    battleNext(USSAssembly, alienShips);
    currentAlienIndex++;
  }
});
retreatButton.addEventListener("click", () => {
  const retreatConfirm = confirm("Are you sure you want to retreat?");
  if (retreatConfirm) {
    alert("You retreated");
  } 
});
