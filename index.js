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

/*
The function `filterByMedication` takes in an `array` of pet objects and a target `medication`. 
This function should use the native filter method to return a new array of only the pet objects 
that use the medication.

example: filterByMedication(pets, 'Gabepentin'); // => [<Noodles>, <Desi>]
*/

function filterByMedication(array, medication){
  
}