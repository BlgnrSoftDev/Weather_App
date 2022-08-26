export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast?";
export const WEATHER_API_KEY = "ef9b12747d0223c5e1ca54a2fcb9bf5e";
export const WEATHER_API_OPTIONS = {
    method: "GET",
};


export const GEO_DB_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?";
export const GEO_DB_API_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b2406cf40msh6b1b57f5f33abe1p1b571ejsnab42a83edb6a',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};




// navigator.geolocation.getCurrentPosition((position) => {
//     fetch(`${WEATHER_API_URL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&cnt=5&appid=${WEATHER_API_KEY}`, WEATHER_API_OPTIONS)
//         .then((re) => {
//             return re.json();
//         })
//         .then((re) => {
//             export const sampleData = re;
//         });
// });

export const sampleData = {
    cod: "200",
    message: 0,
    cnt: 5,
    list: [
        {
            dt: 1661353200,
            main: {
                temp: 23.16,
                feels_like: 23.54,
                temp_min: 23.16,
                temp_max: 23.43,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 1006,
                humidity: 77,
                temp_kf: -0.27,
            },
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10d",
                },
            ],
            clouds: {
                all: 83,
            },
            wind: {
                speed: 0.84,
                deg: 319,
                gust: 1.22,
            },
            visibility: 10000,
            pop: 0.76,
            rain: {
                "3h": 10.3,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2022-08-24 15:00:00",
        },
        {
            dt: 1661364000,
            main: {
                temp: 22.3,
                feels_like: 22.7,
                temp_min: 21.94,
                temp_max: 22.3,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 1007,
                humidity: 81,
                temp_kf: 0.36,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n",
                },
            ],
            clouds: {
                all: 89,
            },
            wind: {
                speed: 0.65,
                deg: 186,
                gust: 0.7,
            },
            visibility: 10000,
            pop: 0.87,
            rain: {
                "3h": 0.36,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2022-08-24 18:00:00",
        },
        {
            dt: 1661374800,
            main: {
                temp: 21.65,
                feels_like: 21.96,
                temp_min: 21.65,
                temp_max: 21.65,
                pressure: 1010,
                sea_level: 1010,
                grnd_level: 1007,
                humidity: 80,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 1.01,
                deg: 103,
                gust: 1.14,
            },
            visibility: 10000,
            pop: 0.07,
            sys: {
                pod: "n",
            },
            dt_txt: "2022-08-24 21:00:00",
        },
        {
            dt: 1661385600,
            main: {
                temp: 21.6,
                feels_like: 21.9,
                temp_min: 21.6,
                temp_max: 21.6,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 1006,
                humidity: 80,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 0.35,
                deg: 166,
                gust: 0.46,
            },
            visibility: 10000,
            pop: 0.01,
            sys: {
                pod: "n",
            },
            dt_txt: "2022-08-25 00:00:00",
        },
        {
            dt: 1661396400,
            main: {
                temp: 20.64,
                feels_like: 20.93,
                temp_min: 20.64,
                temp_max: 20.64,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 1006,
                humidity: 83,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 0.61,
                deg: 104,
                gust: 0.7,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2022-08-25 03:00:00",
        },
    ],
    city: {
        id: 322830,
        name: "Aydin",
        coord: {
            lat: 37.8,
            lon: 27.8,
        },
        country: "TR",
        population: 163022,
        timezone: 10800,
        sunrise: 1661311916,
        sunset: 1661359857,
    },
};
