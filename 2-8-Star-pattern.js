let n = 5;

for (i = 0; i < n; i++) {
  let row = " ";
  for (j = 0; j < n; j++) {
    row = row + " " + " * ";
  }
  console.log("1- " + row);
}

for (i = 0; i < n; i++) {
  let row = " ";
  for (j = 0; j <= i; j++) {
    row = row + " " + " * ";
  }
  console.log("2- " + row);
}

for (i = 0; i < n; i++) {
  let row = " ";
  for (j = 0; j <= i; j++) {
    row = row + " " + (j + 1);
  }
  console.log("3- " + row);
}

for (i = 0; i < n; i++) {
  let row = " ";
  for (j = 0; j <= i; j++) {
    row = row + " " + (i + 1);
  }
  console.log("4- " + row);
}

for (i = 1; i <= n; i++) {
  let row = " ";
  for (j = 1; j <= i; j++) {
    row = row + " " + i;
  }
  console.log("5- " + row);
}

for (i = n; i > 0; i--) {
  let row = " ";
  for (j = 0; j < i; j++) {
    row = row + " " + (j + 1);
  }
  console.log("6- " + row);
}

//alternative way
for (i = 0; i < n; i++) {
  let row = " ";
  for (j = 0; j < n - i; j++) {
    row = row + " " + (j + 1);
  }
  console.log("7- " + row);
}

for (i = 0; i < n; i++) {
  let row = " ";
  for (j = 0; j < n - i; j++) {
    row = row + " " + "*";
  }
  console.log("8- " + row);
}

// i loop is for number of row
for (i = 0; i < n; i++) {
  let row = " ";
  //adding empty spaces
  for (j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }
  // adding starts
  for (k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log("9- " + row);
}

for (i = 0; i <= n; i++) {
  let row = " ";
  let s = 1;
  for (j = 0; j < i + 1; j++) {
    row = row + " " + s;
    if (s === 1) {
      s = 0;
    } else {
      s = 1;
    }
  }
  console.log("10- " + row);
}

let s = 1;
for (i = 0; i <= n; i++) {
  let row = " ";
  for (j = 0; j < i + 1; j++) {
    row = row + " " + s;
    if (s === 1) {
      s = 0;
    } else {
      s = 1;
    }
  }
  console.log("11- " + row);
}
