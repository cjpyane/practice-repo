// Data
const pets = [
    {
      name: 'Noodles',
      age: 6,
      species: 'cat',
      location: 'New Orleans, LA',
      treatments: [
        {
          name: 'Gabepentin',
          type: 'Liquid',
          dosage: '5 ml',
          frequency: 'Daily',
          notes: 'Can increase dosage to 7 ml.'
        },
        {
          name: 'Laxitone',
          type: 'Paste',
          dosage: 'Dab',
          frequency: 'Daily',
          notes: 'Apply with food.'
        }
      ]
    },
    {
      name: 'Dezi',
      age: 14,
      species: 'cat',
      location: 'New Orleans, LA',
      treatments: [
        {
          name: 'Methimazole',
          type: 'Liquid',
          dosage: '5 ml',
          frequency: 'Daily',
          notes: 'Prescribed for kidney functioning.'
        },
        {
          name: 'Gabepentin',
          type: 'Liquid',
          dosage: '7 ml',
          frequency: 'As needed',
          notes: 'Give at least one hour before vet vists.'
        }
      ]
    },
    {
      name: 'Bart',
      age: 2,
      species: 'dog',
      location: 'Baton Rouge, LA',
      treatments: [
        {
          name: 'Diphenhydramine',
          type: 'capsule',
          dosage: '50 mg',
          frequency: 'As needed',
          notes: 'Give as needed during allergy season.'
        }
      ]
    },
    {
      name: 'Bernie',
      age: 5,
      species: 'dog',
      location: 'Baltimore, Maryland',
      treatments: [
        {
          name: 'Meloxicam',
          type: 'capsule',
          dosage: '15 mg',
          frequency: 'Daily',
          notes: 'Re-evaluate symptoms after 1 month of using medication.'
        },
        {
          name: 'Diphenhydramine',
          type: 'capsule',
          dosage: '50 mg',
          frequency: 'As needed',
          notes: 'Give as needed during allergy season'
        }
      ]
    }
  ];
//Create a function called filterByMedication that takes in two parameters - array and medication. 
//array represents an array of pet objects; medication represents a string of medication. 
//This function should use the native filter method to return a new array of only the pets that use the target medication.

//filterByMedication(pets, 'Gabepentin'); // => [<Noodles>, <Desi>]
// Problem #1 //
function filterByMedication(array, medication){
  return array.filter((pet) => 
  pet.medication === medication);
  
}
console.log(filterByMedication(pets, 'Gabepentin'))

//Create a function called speciesAndNumberOfMedications that takes in one parameter - array and species.
// array represents an array of pet objects; species represents a string of an animal species. 
//This function should use the native filter method to return a new array of only the pet objects that match the input species AND take more than one medication.

//speciesAndNumberOfMedications(pets, 'cat'); // => [<Noodles>, <Desi>]

// Problem #2 //
function speciesAndNumberOfMedications(array, species){
return array.filter(pet => pet.species === species && pet.treatments.length > 1)
}
console.log(speciesAndNumberOfMedications(pets, 'dog'));

/*
Create a function called getDailyFrequency takes in an array of pet objects. 
This function should use the native reduce method to return the number of pets that take medication daily.

getDailyFrequency(pets); // => 3
*/


// Problem #3 //
function getDailyFrequency(array){
let meds = array.reduce((count, pet) => {
  if(pet.medication && pet.medication.frequency === 'Daily'){
    return count ++
  }else {
    return count
  }
}, 0);
return meds

}
console.log(getDailyFrequency(pets))

// Problem #4 //
function createStrings(array){
  return array.map(pet => `name: ${pet.name} - age: ${pet.age} - species: ${pet.species} - location: ${pet.location} - treatments: ${pet.treatments}`)

}
console.log(createStrings(pets))

// Problem #5 //
function reduceSpecies(array, tarspecies){
  return pets.reduce((acc, pet) => {
    if(pet.species === tarspecies){
      return [...acc, {name: pet.name, species: pet.species, age: pet.age}]
    }
    return acc
  }, [])
};
console.log(reduceSpecies(pets, 'dog'));

// Problem #6 //
function namesAndMedications(array){
return array.map(pet => `${pet.name} - ${pet.treatments.join(', ')}`);
}
console.log(namesAndMedications(pets))

// Problem #7 //
function filterByDailyFrequency(array){
return array.filter(pet => pet.treatments.frequency === 'Daily')
}
console.log(filterByDailyFrequency(pets))
// Problem #8 // 
function createEntriesByLocation(array, location){
  
}


