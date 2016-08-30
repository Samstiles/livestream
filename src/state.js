export default {
  session: {},
  forms: {},
  location: {
    selections: {
      country: 1,
      province: 1,
      crag: 1,
      wall: 1,
      climb: 1
    }
  },
  database: {
    countries: [
      {
        id: 1,
        name: 'Canada'
      }
    ],
    provinces: [
      {
        id: 1,
        name: 'New Brunswick',
        country: 1
      },
      {
        id: 2,
        name: 'Nova Scotia',
        country: 1
      }
    ],
    crags: [
      {
        id: 1,
        name: 'Cochrane Lane',
        province: 1
      },
      {
        id: 2,
        name: 'Wolf\'s Head',
        province: 2
      }
    ],
    walls: [
      {
        id: 1,
        name: 'Joe\'s Garage',
        crag: 1
      },
      {
        id: 2,
        name: 'Uppercut',
        crag: 2
      }
    ],
    climbs: [
      {
        id: 1,
        name: 'It\'s a way of life',
        wall: 1
      },
      {
        id: 2,
        name: 'No Diggity',
        wall: 2
      }
    ]
  }
};
