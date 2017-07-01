
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {
          id: 1,
          lat: 37.09024,
          long: -95.712891,
          name: "United States",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 2,
          lat: 9.145,
          long: 40.489673,
          name: "Ethiopia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 3,
          lat: 4.570868,
          long: -74.297333,
          name: "Colombia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 4,
          lat: 42.546245,
          long: 1.601554,
          name: "Andorra",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 5,
          lat: 23.424076,
          long: 53.847818,
          name: "United Arab Emirates",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 6,
          lat: 33.93911,
          long: 67.709953,
          name: "Afghanistan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 7,
          lat: 17.060816,
          long: -61.796428,
          name: "Antigua and Barbuda",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 8,
          lat: 18.220554,
          long: -63.068615,
          name: "Anguilla",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 9,
          lat: 41.153332,
          long: 20.168331,
          name: "Albania",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 10,
          lat: 40.069099,
          long: 45.038189,
          name: "Armenia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 11,
          lat: 12.226079,
          long: -69.060087,
          name: "Netherlands Antilles",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 12,
          lat: -11.202692,
          long: 17.873887,
          name: "Angola",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 13,
          lat: -75.250973,
          long: -0.071389,
          name: "Antarctica",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 14,
          lat: -38.416097,
          long: -63.616672,
          name: "Argentina",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 15,
          lat: -14.270972,
          long: -170.132217,
          name: "American Samoa",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 16,
          lat: 47.516231,
          long: 14.550072,
          name: "Austria",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 17,
          lat: -25.274398,
          long: 133.775136,
          name: "Australia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 18,
          lat: 12.52111,
          long: -69.968338,
          name: "Aruba",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 19,
          lat: 40.143105,
          long: 47.576927,
          name: "Azerbaijan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 20,
          lat: 43.915886,
          long: 17.679076,
          name: "Bosnia and Herzegovina",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 21,
          lat: 13.193887,
          long: -59.543198,
          name: "Barbados",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 22,
          lat: 23.684994,
          long: 90.356331,
          name: "Bangladesh",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 23,
          lat: 50.503887,
          long: 4.469936,
          name: "Belgium",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 24,
          lat: 12.238333,
          long: -1.561593,
          name: "Burkina Faso",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 25,
          lat: 42.733883,
          long: 25.48583,
          name: "Bulgaria",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 26,
          lat: 25.930414,
          long: 50.637772,
          name: "Bahrain",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 27,
          lat: -3.373056,
          long: 29.918886,
          name: "Burundi",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 28,
          lat: 9.30769,
          long: 2.315834,
          name: "Benin",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 29,
          lat: 32.321384,
          long: -64.75737,
          name: "Bermuda",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 30,
          lat: 4.535277,
          long: 114.727669,
          name: "Brunei",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 31,
          lat: -16.290154,
          long: -63.588653,
          name: "Bolivia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 32,
          lat: -14.235004,
          long: -51.92528,
          name: "Brazil",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 33,
          lat: 25.03428,
          long: -77.39628,
          name: "Bahamas",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 34,
          lat: 27.514162,
          long: 90.433601,
          name: "Bhutan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 35,
          lat: -54.423199,
          long: 3.413194,
          name: "Bouvet Island",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 36,
          lat: -22.328474,
          long: 24.684866,
          name: "Botswana",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 37,
          lat: 53.709807,
          long: 27.953389,
          name: "Belarus",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 38,
          lat: 17.189877,
          long: -88.49765,
          name: "Belize",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 39,
          lat: 56.130366,
          long: -106.346771,
          name: "Canada",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 40,
          lat: -12.164165,
          long: 96.870956,
          name: "Cocos [Keeling] Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 41,
          lat: -4.038333,
          long: 21.758664,
          name: "Congo [DRC]",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 42,
          lat: 6.611111,
          long: 20.939444,
          name: "Central African Republic",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 43,
          lat: -0.228021,
          long: 15.827659,
          name: "Congo [Republic]",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 44,
          lat: 46.818188,
          long: 8.227512,
          name: "Switzerland",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 45,
          lat: 7.539989,
          long: -5.54708,
          name: "Côte d'Ivoire",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 46,
          lat: -21.236736,
          long: -159.777671,
          name: "Cook Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 47,
          lat: -35.675147,
          long: -71.542969,
          name: "Chile",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 48,
          lat: 7.369722,
          long: 12.354722,
          name: "Cameroon",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 49,
          lat: 35.86166,
          long: 104.195397,
          name: "China",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 50,
          lat: 9.748917,
          long: -83.753428,
          name: "Costa Rica",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 51,
          lat: 21.521757,
          long: -77.781167,
          name: "Cuba",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 52,
          lat: 16.002082,
          long: -24.013197,
          name: "Cape Verde",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 53,
          lat: -10.447525,
          long: 105.690449,
          name: "Christmas Island",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 54,
          lat: 35.126413,
          long: 33.429859,
          name: "Cyprus",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 55,
          lat: 49.817492,
          long: 15.472962,
          name: "Czech Republic",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 56,
          lat: 51.165691,
          long: 10.451526,
          name: "Germany",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 57,
          lat: 11.825138,
          long: 42.590275,
          name: "Djibouti",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 58,
          lat: 56.26392,
          long: 9.501785,
          name: "Denmark",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 59,
          lat: 15.414999,
          long: -61.370976,
          name: "Dominica",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 60,
          lat: 18.735693,
          long: -70.162651,
          name: "Dominican Republic",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 61,
          lat: 28.033886,
          long: 1.659626,
          name: "Algeria",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 62,
          lat: -1.831239,
          long: -78.183406,
          name: "Ecuador",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 63,
          lat: 58.595272,
          long: 25.013607,
          name: "Estonia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 64,
          lat: 26.820553,
          long: 30.802498,
          name: "Egypt",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 65,
          lat: 24.215527,
          long: -12.885834,
          name: "Western Sahara",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 66,
          lat: 15.179384,
          long: 39.782334,
          name: "Eritrea",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 67,
          lat: 40.463667,
          long: -3.74922,
          name: "Spain",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 68,
          lat: 61.92411,
          long: 25.748151,
          name: "Finland",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 69,
          lat: -16.578193,
          long: 179.414413,
          name: "Fiji",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 70,
          lat: -51.796253,
          long: -59.523613,
          name: "Falkland Islands [Islas Malvinas]",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 71,
          lat: 7.425554,
          long: 150.550812,
          name: "Micronesia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 72,
          lat: 61.892635,
          long: -6.911806,
          name: "Faroe Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 73,
          lat: 46.227638,
          long: 2.213749,
          name: "France",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 74,
          lat: -0.803689,
          long: 11.609444,
          name: "Gabon",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 75,
          lat: 55.378051,
          long: -3.435973,
          name: "United Kingdom",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 76,
          lat: 12.262776,
          long: -61.604171,
          name: "Grenada",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 77,
          lat: 42.315407,
          long: 43.356892,
          name: "Georgia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 78,
          lat: 3.933889,
          long: -53.125782,
          name: "French Guiana",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 79,
          lat: 49.465691,
          long: -2.585278,
          name: "Guernsey",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 80,
          lat: 7.946527,
          long: -1.023194,
          name: "Ghana",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 81,
          lat: 36.137741,
          long: -5.345374,
          name: "Gibraltar",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 82,
          lat: 71.706936,
          long: -42.604303,
          name: "Greenland",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 83,
          lat: 13.443182,
          long: -15.310139,
          name: "Gambia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 84,
          lat: 9.945587,
          long: -9.696645,
          name: "Guinea",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 85,
          lat: 16.995971,
          long: -62.067641,
          name: "Guadeloupe",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 86,
          lat: 1.650801,
          long: 10.267895,
          name: "Equatorial Guinea",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 87,
          lat: 39.074208,
          long: 21.824312,
          name: "Greece",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 88,
          lat: -54.429579,
          long: -36.587909,
          name: "South Georgia and the South Sandwich Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 89,
          lat: 15.783471,
          long: -90.230759,
          name: "Guatemala",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 90,
          lat: 13.444304,
          long: 144.793731,
          name: "Guam",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 91,
          lat: 11.803749,
          long: -15.180413,
          name: "Guinea-Bissau",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 92,
          lat: 4.860416,
          long: -58.93018,
          name: "Guyana",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 93,
          lat: 31.354676,
          long: 34.308825,
          name: "Gaza Strip",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 94,
          lat: 22.396428,
          long: 114.109497,
          name: "Hong Kong",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 95,
          lat: -53.08181,
          long: 73.504158,
          name: "Heard Island and McDonald Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 96,
          lat: 15.199999,
          long: -86.241905,
          name: "Honduras",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 97,
          lat: 45.1,
          long: 15.2,
          name: "Croatia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 98,
          lat: 18.971187,
          long: -72.285215,
          name: "Haiti",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 99,
          lat: 47.162494,
          long: 19.503304,
          name: "Hungary",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 100,
          lat: -0.789275,
          long: 113.921327,
          name: "Indonesia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 101,
          lat: 53.41291,
          long: -8.24389,
          name: "Ireland",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 102,
          lat: 31.046051,
          long: 34.851612,
          name: "Israel",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 103,
          lat: 54.236107,
          long: -4.548056,
          name: "Isle of Man",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 104,
          lat: 20.593684,
          long: 78.96288,
          name: "India",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 105,
          lat: -6.343194,
          long: 71.876519,
          name: "British Indian Ocean Territory",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 106,
          lat: 33.223191,
          long: 43.679291,
          name: "Iraq",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 107,
          lat: 32.427908,
          long: 53.688046,
          name: "Iran",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 108,
          lat: 64.963051,
          long: -19.020835,
          name: "Iceland",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 109,
          lat: 41.87194,
          long: 12.56738,
          name: "Italy",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 110,
          lat: 49.214439,
          long: -2.13125,
          name: "Jersey",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 111,
          lat: 18.109581,
          long: -77.297508,
          name: "Jamaica",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 112,
          lat: 30.585164,
          long: 36.238414,
          name: "Jordan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 113,
          lat: 36.204824,
          long: 138.252924,
          name: "Japan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 114,
          lat: -0.023559,
          long: 37.906193,
          name: "Kenya",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 115,
          lat: 41.20438,
          long: 74.766098,
          name: "Kyrgyzstan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 116,
          lat: 12.565679,
          long: 104.990963,
          name: "Cambodia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 117,
          lat: -3.370417,
          long: -168.734039,
          name: "Kiribati",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 118,
          lat: -11.875001,
          long: 43.872219,
          name: "Comoros",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 119,
          lat: 17.357822,
          long: -62.782998,
          name: "Saint Kitts and Nevis",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 120,
          lat: 40.339852,
          long: 127.510093,
          name: "North Korea",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 121,
          lat: 35.907757,
          long: 127.766922,
          name: "South Korea",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 122,
          lat: 29.31166,
          long: 47.481766,
          name: "Kuwait",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 123,
          lat: 19.513469,
          long: -80.566956,
          name: "Cayman Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 124,
          lat: 48.019573,
          long: 66.923684,
          name: "Kazakhstan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 125,
          lat: 19.85627,
          long: 102.495496,
          name: "Laos",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 126,
          lat: 33.854721,
          long: 35.862285,
          name: "Lebanon",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 127,
          lat: 13.909444,
          long: -60.978893,
          name: "Saint Lucia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 128,
          lat: 47.166,
          long: 9.555373,
          name: "Liechtenstein",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 129,
          lat: 7.873054,
          long: 80.771797,
          name: "Sri Lanka",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 130,
          lat: 6.428055,
          long: -9.429499,
          name: "Liberia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 131,
          lat: -29.609988,
          long: 28.233608,
          name: "Lesotho",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 132,
          lat: 55.169438,
          long: 23.881275,
          name: "Lithuania",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 133,
          lat: 49.815273,
          long: 6.129583,
          name: "Luxembourg",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 134,
          lat: 56.879635,
          long: 24.603189,
          name: "Latvia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 135,
          lat: 26.3351,
          long: 17.228331,
          name: "Libya",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 136,
          lat: 31.791702,
          long: -7.09262,
          name: "Morocco",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 137,
          lat: 43.750298,
          long: 7.412841,
          name: "Monaco",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 138,
          lat: 47.411631,
          long: 28.369885,
          name: "Moldova",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 139,
          lat: 42.708678,
          long: 19.37439,
          name: "Montenegro",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 140,
          lat: -18.766947,
          long: 46.869107,
          name: "Madagascar",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 141,
          lat: 7.131474,
          long: 171.184478,
          name: "Marshall Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 142,
          lat: 41.608635,
          long: 21.745275,
          name: "Macedonia [FYROM]",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 143,
          lat: 17.570692,
          long: -3.996166,
          name: "Mali",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 144,
          lat: 21.913965,
          long: 95.956223,
          name: "Myanmar [Burma]",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 145,
          lat: 46.862496,
          long: 103.846656,
          name: "Mongolia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 146,
          lat: 22.198745,
          long: 113.543873,
          name: "Macau",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 147,
          lat: 17.33083,
          long: 145.38469,
          name: "Northern Mariana Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 148,
          lat: 14.641528,
          long: -61.024174,
          name: "Martinique",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 149,
          lat: 21.00789,
          long: -10.940835,
          name: "Mauritania",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 150,
          lat: 16.742498,
          long: -62.187366,
          name: "Montserrat",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 151,
          lat: 35.937496,
          long: 14.375416,
          name: "Malta",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 152,
          lat: -20.348404,
          long: 57.552152,
          name: "Mauritius",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 153,
          lat: 3.202778,
          long: 73.22068,
          name: "Maldives",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 154,
          lat: -13.254308,
          long: 34.301525,
          name: "Malawi",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 155,
          lat: 23.634501,
          long: -102.552784,
          name: "Mexico",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 156,
          lat: 4.210484,
          long: 101.975766,
          name: "Malaysia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 157,
          lat: -18.665695,
          long: 35.529562,
          name: "Mozambique",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 158,
          lat: -22.95764,
          long: 18.49041,
          name: "Namibia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 159,
          lat: -20.904305,
          long: 165.618042,
          name: "New Caledonia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 160,
          lat: 17.607789,
          long: 8.081666,
          name: "Niger",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 161,
          lat: -29.040835,
          long: 167.954712,
          name: "Norfolk Island",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 162,
          lat: 9.081999,
          long: 8.675277,
          name: "Nigeria",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 163,
          lat: 12.865416,
          long: -85.207229,
          name: "Nicaragua",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 164,
          lat: 52.132633,
          long: 5.291266,
          name: "Netherlands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 165,
          lat: 60.472024,
          long: 8.468946,
          name: "Norway",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 166,
          lat: 28.394857,
          long: 84.124008,
          name: "Nepal",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 167,
          lat: -0.522778,
          long: 166.931503,
          name: "Nauru",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 168,
          lat: -19.054445,
          long: -169.867233,
          name: "Niue",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 169,
          lat: -40.900557,
          long: 174.885971,
          name: "New Zealand",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 170,
          lat: 21.512583,
          long: 55.923255,
          name: "Oman",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 171,
          lat: 8.537981,
          long: -80.782127,
          name: "Panama",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 172,
          lat: -9.189967,
          long: -75.015152,
          name: "Peru",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 173,
          lat: -17.679742,
          long: -149.406843,
          name: "French Polynesia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 174,
          lat: -6.314993,
          long: 143.95555,
          name: "Papua New Guinea",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 175,
          lat: 12.879721,
          long: 121.774017,
          name: "Philippines",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 176,
          lat: 30.375321,
          long: 69.345116,
          name: "Pakistan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 177,
          lat: 51.919438,
          long: 19.145136,
          name: "Poland",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 178,
          lat: 46.941936,
          long: -56.27111,
          name: "Saint Pierre and Miquelon",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 179,
          lat: -24.703615,
          long: -127.439308,
          name: "Pitcairn Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 180,
          lat: 18.220833,
          long: -66.590149,
          name: "Puerto Rico",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 181,
          lat: 31.952162,
          long: 35.233154,
          name: "Palestinian Territories",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 182,
          lat: 39.399872,
          long: -8.224454,
          name: "Portugal",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 183,
          lat: 7.51498,
          long: 134.58252,
          name: "Palau",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 184,
          lat: -23.442503,
          long: -58.443832,
          name: "Paraguay",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 185,
          lat: 25.354826,
          long: 51.183884,
          name: "Qatar",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 186,
          lat: -21.115141,
          long: 55.536384,
          name: "Réunion",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 187,
          lat: 45.943161,
          long: 24.96676,
          name: "Romania",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 188,
          lat: 44.016521,
          long: 21.005859,
          name: "Serbia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 189,
          lat: 61.52401,
          long: 105.318756,
          name: "Russia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 190,
          lat: -1.940278,
          long: 29.873888,
          name: "Rwanda",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 191,
          lat: 23.885942,
          long: 45.079162,
          name: "Saudi Arabia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 192,
          lat: -9.64571,
          long: 160.156194,
          name: "Solomon Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 193,
          lat: -4.679574,
          long: 55.491977,
          name: "Seychelles",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 194,
          lat: 12.862807,
          long: 30.217636,
          name: "Sudan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 195,
          lat: 60.128161,
          long: 18.643501,
          name: "Sweden",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 196,
          lat: 1.352083,
          long: 103.819836,
          name: "Singapore",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 197,
          lat: -24.143474,
          long: -10.030696,
          name: "Saint Helena",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 198,
          lat: 46.151241,
          long: 14.995463,
          name: "Slovenia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 199,
          lat: 77.553604,
          long: 23.670272,
          name: "Svalbard and Jan Mayen",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 200,
          lat: 48.669026,
          long: 19.699024,
          name: "Slovakia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 201,
          lat: 8.460555,
          long: -11.779889,
          name: "Sierra Leone",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 202,
          lat: 43.94236,
          long: 12.457777,
          name: "San Marino",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 203,
          lat: 14.497401,
          long: -14.452362,
          name: "Senegal",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 204,
          lat: 5.152149,
          long: 46.199616,
          name: "Somalia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 205,
          lat: 3.919305,
          long: -56.027783,
          name: "Suriname",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 206,
          lat: 0.18636,
          long: 6.613081,
          name: "São Tomé and Príncipe",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 207,
          lat: 13.794185,
          long: -88.89653,
          name: "El Salvador",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 208,
          lat: 34.802075,
          long: 38.996815,
          name: "Syria",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 209,
          lat: -26.522503,
          long: 31.465866,
          name: "Swaziland",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 210,
          lat: 21.694025,
          long: -71.797928,
          name: "Turks and Caicos Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 211,
          lat: 15.454166,
          long: 18.732207,
          name: "Chad",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 212,
          lat: -49.280366,
          long: 69.348557,
          name: "French Southern Territories",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 213,
          lat: 8.619543,
          long: 0.824782,
          name: "Togo",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 214,
          lat: 15.870032,
          long: 100.992541,
          name: "Thailand",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 215,
          lat: 38.861034,
          long: 71.276093,
          name: "Tajikistan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 216,
          lat: -8.967363,
          long: -171.855881,
          name: "Tokelau",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 217,
          lat: -8.874217,
          long: 125.727539,
          name: "Timor-Leste",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 218,
          lat: 38.969719,
          long: 59.556278,
          name: "Turkmenistan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 219,
          lat: 33.886917,
          long: 9.537499,
          name: "Tunisia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 220,
          lat: -21.178986,
          long: -175.198242,
          name: "Tonga",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 221,
          lat: 38.963745,
          long: 35.243322,
          name: "Turkey",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 222,
          lat: 10.691803,
          long: -61.222503,
          name: "Trinidad and Tobago",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 223,
          lat: -7.109535,
          long: 177.64933,
          name: "Tuvalu",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 224,
          lat: 23.69781,
          long: 120.960515,
          name: "Taiwan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 225,
          lat: -6.369028,
          long: 34.888822,
          name: "Tanzania",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 226,
          lat: 48.379433,
          long: 31.16558,
          name: "Ukraine",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 227,
          lat: 1.373333,
          long: 32.290275,
          name: "Uganda",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 228,
          lat: -32.522779,
          long: -55.765835,
          name: "Uruguay",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 229,
          lat: 41.377491,
          long: 64.585262,
          name: "Uzbekistan",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 230,
          lat: 41.902916,
          long: 12.453389,
          name: "Vatican City",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 231,
          lat: 12.984305,
          long: -61.287228,
          name: "Saint Vincent and the Grenadines",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 232,
          lat: 6.42375,
          long: -66.58973,
          name: "Venezuela",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 233,
          lat: 18.420695,
          long: -64.639968,
          name: "British Virgin Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 234,
          lat: 18.335765,
          long: -64.896335,
          name: "U.S. Virgin Islands",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 235,
          lat: 14.058324,
          long: 108.277199,
          name: "Vietnam",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 236,
          lat: -15.376706,
          long: 166.959158,
          name: "Vanuatu",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 237,
          lat: -13.768752,
          long: -177.156097,
          name: "Wallis and Futuna",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 238,
          lat: -13.759029,
          long: -172.104629,
          name: "Samoa",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 239,
          lat: 42.602636,
          long: 20.902977,
          name: "Kosovo",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 240,
          lat: 15.552727,
          long: 48.516388,
          name: "Yemen",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 241,
          lat: -12.8275,
          long: 45.166244,
          name: "Mayotte",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 242,
          lat: -30.559482,
          long: 22.937506,
          name: "South Africa",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 243,
          lat: -13.133897,
          long: 27.849332,
          name: "Zambia",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        },
        {
          id: 244,
          lat: -19.015438,
          long: 29.154857,
          name: "Zimbabwe",
          created_at: new Date('2017-06-23 14:56:16 UTC'),
          updated_at: new Date('2017-06-23 14:56:16 UTC')
        }
      ])
      .then( () => {
        return knex.raw("SELECT setval('countries_id_seq', (SELECT MAX(id) FROM countries));");
      });
    });
};
