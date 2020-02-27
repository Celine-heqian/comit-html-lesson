"use strict";
let partialResult = 0;
let n = 1;
while (partialResult <= 400) {
  partialResult = (n * (1 + n)) / 2;
  n++;
}
alert(partialResult);

//loop from 0 to 10
let i;
for (i = 0; i <= 10; i++) {
  console.log("for loop 0 to 10:", i);
}
i = 0;
while (i <= 10) {
  console.log("while loop 0 to 10:", i);
  i++;
}
i = 0;
do {
  console.log("do while loop 0 to 10:", i);
  i++;
} while (i <= 10);

//loop from 100 to 0
i = 100;
for (let i = 100; i >= 0; i--) {
  console.log("for loop 100 to 0:", i);
}
i = 100;
while (i >= 0) {
  console.log("while loop 100 to 0:", i);
  i--;
}
i = 100;
do {
  console.log("do while loop 100 to 0:", i);
  i--;
} while (i >= 0);

//loop for even number between 0-100

for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("even number between 0-100", i);
  }
}
i = 0;
while (i <= 100) {
  if (i % 2 == 0) {
    console.log("even number between 0-100", i);
  }
  i++;
}
i = 0;
do {
  if (i % 2 == 0) {
    console.log("even number between 0-100", i);
  }
  i++;
} while (i <= 100);

//star out put
let j, starString;
starString = "";
for (i = 0; i <= 13; i++) {
  for (j = 0; j <= i; j++) {
    starString = starString + "*";
  }

  console.log(starString);
  starString = "";
}
