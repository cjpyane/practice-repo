# practice-repo

### Directions: Create a series of functions that interact with our `pets` array.

#### Problem #1
Create a function called `filterByMedication` that takes in two parameters - `array` and `medication`. `array` represents an array of pet objects; `medication` represents a string of medication. This function should use the native filter method to return a new array of only the pets that use the target medication.

```
filterByMedication(pets, 'Gabepentin'); // => [<Noodles>, <Desi>]
```

#### Problem #2
Create a function called `speciesAndNumberOfMedications` that takes in one parameter  - `array` and `species`. `array` represents an array of pet objects; `species` represents a string of an animal species. This function should use the native filter method to return a new array of only the pet objects that match the input `species` AND take more than one medication.

```
speciesAndNumberOfMedications(pets, 'cat'); // => [<Noodles>, <Desi>]
```

#### Problem #3
Create a function called `getDailyFrequency` takes in an `array` of pet objects. This function should use the native reduce method to return the number of pets that take medication daily.

```
getDailyFrequency(pets); // => 3
```

#### Problem #4
Create a function called `createPetStrings` that takes in an `array` of pet objects. This function should use the native map method to createy an array of strings formatted like this:

```
createPetStrings(pets); // =>

[
 "name: Noodles - age: 6 - species: cat - location: New Orleans, LA - treatments: 2",
 "name: Dezi - age: 14 - species: cat - location: New Orleans, LA - treatmetns: 2",
 ...etc

]
```

#### Problem #5
Create a function called `reduceSpecies` that takes in an `array` of pet objects and a target `species`. This function should use the native reduce method to return an array of objects based on the input species.
```
reduceSpecies(pets, 'cat'); // =>
[
    { name: 'Noodles', species: 'cat', age: 6 },
    { name: 'Dezi', species: 'cat', age: 14 }
]
```

#### Problem #6
Create a function called `namesAndMedication` takes in an `array` of pet objects. This function should use the native map method to return a new array of strings that includes every pet's name and medication they take.

```
namesAndMedication(pets); // =>
[
 "Noodles - Gabepentin, Laxitone",
 "Dezi - Methimazole, Gapentin"
 "Bart - Diphenhydramine",
 "Bernie - Meloxicam, Diphenhydramine"
]
```

#### Problem #7
Create a function called `filterByDailyFrequency` that takes in an `array` of pet objects. This function should use the native filter method return a new array of only the pets that take medication daily.

```
filterbyDailyFrequency(pets); // =>
[ <Noodles>, <Dezi>, <Bernie> ]
```

#### Problem #8
Create a function called `createEntriesByLocation` that takes in an array of `pets` and a `location`. This function should create a new array of subarrays that looks like this:
```
createEntriesByLocation(pets, 'New Orleans'); // =>
[
    ["Noodles", "cat"], ["Dezi", "cat"]
]
```