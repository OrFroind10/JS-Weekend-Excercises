const initials = (name) => {
    return name.split(" ").map(value => {
      return value.split("")[0].toUpperCase();
    }).join(".");
  }
  
  console.log(initials("Sam Harris"));
  console.log(initials("Patrick Feeney"));