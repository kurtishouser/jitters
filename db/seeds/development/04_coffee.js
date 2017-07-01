
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      // Inserts seed entries
      return knex('coffee').insert([
        {
          id: 1,
          name: 'Three Africas',
          producer_id: 1,
          flavor_profile: 'Fruity, radiant, creamy',
          varieties: 'Heirloom',
          description: 'Three Africas marries the radiant fruit of two coffees from Ethiopia, one washed and one natural, with the balance and authority of a washed coffee from Uganda. Each component excels on its own, but together, they traverse boundaries. No matter the brew method, this blend, which is our brightest, has good body and an approachable complexity that takes to cream well, but stands just as radiantly on its own.',
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 2,
          name: 'Ethiopia Bulga',
          producer_id: 2,
          flavor_profile: 'Cotton Candy, Strawberry, Sugar, Tangerine',
          varieties: 'Heirloom',
          description: 'Lorem ipsum',
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 3,
          name: 'Columbia Andino',
          producer_id: 2,
          flavor_profile: 'Butterscotch Citrus',
          varieties: 'Bourbon, Caturra, Typica',
          description: 'Lorem ipsum',
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 4,
          name: 'Colombia Popayán Fall Harvest',
          producer_id: 1,
          flavor_profile: 'Baking spice, red apple, nougat',
          varieties: '',
          description: '',
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 5,
          name: 'Guatemala Coban Santa Isabel',
          producer_id: 1,
          flavor_profile: 'Apricot, marjoram, boysenberry',
          varieties: '',
          description: 'In the remarkably wet and humid part of the Cobán region where Santa Isabel is grown, drying coffee is no small feat. Farmer Luis "Wicho" Valdes uses three different methods to achieve the optimum effect in a climate with nine months of rain and ninety percent humidity. In this veritable rainforest, flavor profiles can turn swampy. But Wicho’s coffee is intricate and beautiful, growing more delicious with time.',
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        }])
        .then(() => {
          return knex.raw("SELECT setval('coffee_id_seq', (SELECT MAX(id) FROM coffee));");
        });
    });
};
