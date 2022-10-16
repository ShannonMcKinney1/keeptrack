import { Project } from './Project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: 'Buckeye Donuts',
    description:
      'Needs more space for a line. Will knock out walls.',
    imageUrl: '/assets/buckeye_donuts.jpg',
    contractTypeId: 3,
    contractSignedOn: '2013-08-04T22:39:41.473Z',
    budget: 54637,
    isActive: false,
  }),
  new Project({
    id: 2,
    name: 'Curl Market',
    description:
      'Tables and chairs for more indoor seating.',
    imageUrl: '/assets/curl_market.jpg',
    contractTypeId: 4,
    contractSignedOn: '2012-08-06T21:21:31.419Z',
    budget: 91638,
    isActive: true,
  }),
  new Project({
    id: 3,
    name: 'Hitchcock Hall',
    description:
      'Another big cool engine to have around for fun.',
    imageUrl: '/assets/hitchcock.jpg',
    contractTypeId: 4,
    contractSignedOn: '2013-05-26T01:10:42.344Z',
    budget: 45660,
    isActive: true,
  }),
  new Project({
    id: 4,
    name: 'Mirror Lake Eatery',
    description:
      'More chicken per box.',
    imageUrl: '/assets/mirror_lake.jpg',
    contractTypeId: 2,
    contractSignedOn: '2009-12-18T21:46:47.944Z',
    budget: 81188,
    isActive: true,
  }),
  new Project({
    id: 5,
    name: 'Ohio Union',
    description:
      'Year-round garlin and other unnecessary decor.',
    imageUrl: '/assets/ohio_union.jpg',
    contractTypeId: 3,
    contractSignedOn: '2016-09-23T21:27:25.035Z',
    budget: 53407,
    isActive: false,
  }),
  new Project({
    id: 6,
    name: 'Thompson Library',
    description:
      'Getting some actual fiction books.',
    imageUrl: '/assets/thompson_library.jpg',
    contractTypeId: 3,
    contractSignedOn: '2016-09-23T21:27:25.035Z',
    budget: 65423,
    isActive: false,
  }),
  new Project({
    id: 7,
    name: 'RPAC',
    description:
      'Less cardio and more free weights.',
    imageUrl: '/assets/rpac.jpg',
    contractTypeId: 2,
    contractSignedOn: '2016-09-23T21:27:25.035Z',
    budget: 98732,
    isActive: false,
  }),
  new Project({
    id: 8,
    name: 'Dreese Labs',
    description:
      'Quieter elevators installed.',
    imageUrl: '/assets/dreese.jpg',
    contractTypeId: 6,
    contractSignedOn: '2016-06-26T18:24:01.706Z',
    budget: 29729,
    isActive: true,
  }),
];