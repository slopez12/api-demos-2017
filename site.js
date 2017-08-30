console.log("You have JavaScript!");
function howManyPets(user) {
  var plural = "s";
  if (user.pets.length === 1) {
    plural = "";
  }
  return user.name + " has " + user.pets.length + " pet" + plural;
}
user = {
  name: "Sara",
  age: 21,
  pets: ["Jack", "Chiquis", "Mama Cat"],
  num_pets: function() {
    return this.pets.length;
  }
}
