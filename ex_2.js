const personnes = [
  { nom: 'Rami', age: 33, estMembre: true },
  { nom: 'Fatihi', age: 24, estMembre: false },
  { nom: 'Chakib', age: 45, estMembre: true },
  { nom: 'Mounir', age: 37, estMembre: false }
];

const nomAges = personnes
  .filter(personne => personne.estMembre === true)
  .map(personne => personne.nom);

  
console.log(nomAges);