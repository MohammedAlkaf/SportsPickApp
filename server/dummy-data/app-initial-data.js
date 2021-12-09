const users = 
[
    {
        _id  : '7687930d-aa57-4c34-aebc-167c668a148a',
        handle: '@JefferyB',
        displayName	:'Jeffery B Harrah',
        imgSrc: 'https://www.fakepersongenerator.com/Face/male/male1085358195496.jpg',
        bio : '',
        email: 'teresa.litt@hotmail.com',
        DOB	: '1992-05-15',
        gender:'male',
        location:'Montreal',
        interests:	
        [
            'Soccer',
            'Basketball',
            'Volleyball'
        ],
        followers:[],
        following:[],
        joined: '2016-02-02T12:00',
        postedActivities: [{_id: 'd978f0d6-97f3-43fd-b6b5-3945270ea03e'}],
        joinedActivities: [{_id: 'd978f0d6-97f3-43fd-b6b5-3945270ea03e'},{ _id: '870fe55a-1d2d-44b7-a2e9-b96f23a1f795'}]
    },
    {
        _id  : '897d755b-89bd-4e82-a51e-e81e93a0d246',
        handle: '@RamonaH',
        displayName	:'Ramona H Bourque',
        imgSrc: 'https://www.fakepersongenerator.com/Face/female/female2015102417279316.jpg',
        bio : '',
        email: 'eloise1986@yahoo.com',
        DOB	: '1982-07-07',
        gender:'female',
        location:'Montreal',
        interests:	
        [
            'Baseball',
            'Ice Hockey',
        ],
        followers:[],
        following:[],
        joined: '2019-04-09T12:00',
        postedActivities: [{_id: 'd041be9f-212c-4b54-a400-42fcb96e1d56'}],
        joinedActivities: [{_id: 'd041be9f-212c-4b54-a400-42fcb96e1d56'}]
    },
    {
        _id  : '571abf88-b57d-41a1-9f35-f47141a42363',
        handle: '@DorothyB',
        displayName	:'Dorothy B Scott',
        imgSrc: 'https://www.fakepersongenerator.com/Face/female/female20121023478579468.jpg',
        bio : '',
        email: 'elroy2016@hotmail.com',
        DOB	: '1991-05-15',
        gender:'male',
        location:'Montreal',
        interests:	
        [
            'Soccer',
            'Basketball',
            'Volleyball'
        ],
        followers:[],
        following:[],
        joined: '2020-05-05T12:00',
        postedActivities: [{_id: '870fe55a-1d2d-44b7-a2e9-b96f23a1f795'}],
        joinedActivities: [{_id: 'd978f0d6-97f3-43fd-b6b5-3945270ea03e'},{_id: 'd041be9f-212c-4b54-a400-42fcb96e1d56'},{_id: '870fe55a-1d2d-44b7-a2e9-b96f23a1f795'}]
    },
    {
        _id  : 'e8058cfa-d7ea-492d-9c5f-8a40420420da',
        handle: '@PeterR',
        displayName	:'Peter R Scher',
        imgSrc: 'https://www.fakepersongenerator.com/Face/male/male20161083983864715.jpg',
        bio : '',
        email: 'carole1976@hotmail.com',
        DOB	: '1988-01-12',
        gender:'male',
        location:'Montreal',
        interests:	
        [
            'Soccer',
            'Baseball',
        ],
        followers:[],
        following:[],
        joined: '2020-02-01T12:00',
        postedActivities: [],
        joinedActivities: [{ _id: 'd978f0d6-97f3-43fd-b6b5-3945270ea03e'},{_id: 'd041be9f-212c-4b54-a400-42fcb96e1d56'},{id: '870fe55a-1d2d-44b7-a2e9-b96f23a1f795'}]
    }
];
// d978f0d6-97f3-43fd-b6b5-3945270ea03e
// 6565 Rue des Écores Montréal QC H2G 2J8

// d041be9f-212c-4b54-a400-42fcb96e1d56
//  73 Rue Holtham Hampstead QC H3X 3N3

// 870fe55a-1d2d-44b7-a2e9-b96f23a1f795
// 2630 St Germain Street Montreal QC H1W 2V3

// b749ff3c-d014-43f6-aa31-119faa6b72cc
// 12225 Av de Saint-Castin Montréal QC H3M 2L6

// 32727efd-5950-4c25-9ce5-13799eb56fb1
// 4040 Bd Grand Montreal QC H4B 2X5

// b61f8c14-175c-4203-b4c8-71564cfaa50f
// 4965 De La Cote St Luc Ch Montreal QC H3W 2H5

// 9ddd5702-1207-4500-b59e-b81153678d52
// 1566 Rue Cardinal Saint-Laurent QC H4L 3G2

// 2f50e187-f8f1-4551-b528-19189e25a981
// 4652 Av Carlton Montreal QC H3W 1G4

const posts = [
    {
        _id: 'd978f0d6-97f3-43fd-b6b5-3945270ea03e',
        creator_id  : '7687930d-aa57-4c34-aebc-167c668a148a',
        limit: 8,
        joining: 
        [
            {
                _id  : 'e8058cfa-d7ea-492d-9c5f-8a40420420da'
            },
            {
                _id  : '571abf88-b57d-41a1-9f35-f47141a42363'
            },
            {
                _id  : '7687930d-aa57-4c34-aebc-167c668a148a'
            }
        ],
        dateCreated: '2021-12-01T9:00',
        activityDate: {
            date:'2021-12-21',
            from: '14:00',
            to: '16:00'
        },
        activityAddress: {
            street: '6565 Rue des Écores',
            city: 'Montréal',
            province: 'QC',
            postalCode: "H2G 2J8"
        },
        activityType: 'soccer',
        desciption: 'Hi, I am looking for people to play indoor soccer 4 vs 4. Please prepare to wear indoor soccer shoes. I would be great if you get bring an extra ball.',
        level: 'average',
    },
    {
        _id: 'd041be9f-212c-4b54-a400-42fcb96e1d56',
        creator_id  : '897d755b-89bd-4e82-a51e-e81e93a0d246',
        limit: 7,
        joining: 
        [
            {
                _id  : '897d755b-89bd-4e82-a51e-e81e93a0d246'
            },
            {
                _id  : '571abf88-b57d-41a1-9f35-f47141a42363'
            },
            {
                _id  : 'e8058cfa-d7ea-492d-9c5f-8a40420420da'
            }
        ],
        dateCreated: '2021-12-04T17:00',
        activityDate: {
            date: '2021-12-25',
            from: '18:00',
            to: '20:00'
        },
        activityAddress: {
            street: '73 Rue Holtham',
            city: 'Hampstead',
            province: 'QC',
            postalCode: "H3X 3N3"
        },
        activityType: 'basketball',
        desciption: 'Me and my freinds are looking for some beginner-level basketball players for a 2 hour training. We are missing 7 poeple.',
        level: 'beginner',
    },
    {
        _id: '870fe55a-1d2d-44b7-a2e9-b96f23a1f795',
        creator_id  : '571abf88-b57d-41a1-9f35-f47141a42363',
        limit: 4,
        joining: 
        [
            {
                _id  : '571abf88-b57d-41a1-9f35-f47141a42363'
            },
            {
                _id  : 'e8058cfa-d7ea-492d-9c5f-8a40420420da'
            },
            {
                _id  : '7687930d-aa57-4c34-aebc-167c668a148a'
            }
        ],
        dateCreated: '2021-11-27T13:00',
        activityDate: {
            date: '2021-12-14',
            from: '17:00',
            to: '18:30'
        },
        activityAddress: {
            street: '2630 St Germain Street',
            city: 'Montréal',
            province: 'QC',
            postalCode: "H1W 2V3"
        },
        activityType: 'Tennis',
        desciption: 'Hi there !, do play tennis ? Did you say yes ?! great ! I am looking for some people to join mr for a one-hour tennis session. Please join us if you are avaiable !',
        level: 'average',
    }
]
module.exports = { users, posts };
