define({ "api": [  {    "type": "get",    "url": "/countries",    "title": "List all countries",    "group": "Countries",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "countries",            "description": "<p>Country's list</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "countries.id",            "description": "<p>Country id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "countries.name",            "description": "<p>Country name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "countries.lat",            "description": "<p>Country latitude</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "countries.long",            "description": "<p>Country longitude</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "countries.created_at",            "description": "<p>Created date</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "countries.updated_at",            "description": "<p>Update date</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n[ {\n     \"id\": 2,\n     \"name\": \"Ethiopia\",\n     \"lat\": \"9.1450000\",\n     \"long\": \"40.4896730\",\n     \"createdAt\": \"2017-06-23T14:56:16.000Z\",\n     \"updatedAt\": \"2017-06-23T14:56:16.000Z\"\n }]",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "List error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/routes/countries.js",    "groupTitle": "Countries",    "name": "GetCountries"  },  {    "type": "get",    "url": "/producers",    "title": "List all producers",    "version": "1.0.0",    "group": "Producers",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "producers",            "description": "<p>Producers list</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "producers.id",            "description": "<p>Producer id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "producers.name",            "description": "<p>Producer name</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "producers.created_at",            "description": "<p>Created date</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "producers.updated_at",            "description": "<p>Update date</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n[ {\n     \"id\": 1,\n     \"name\": \"Blue Bottle Coffee\",\n     \"country_id\": 1,\n     \"createdAt\": \"2017-06-23T14:56:16.000Z\",\n     \"updatedAt\": \"2017-06-23T14:56:16.000Z\"\n }]",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "List error",          "content": "HTTP/1.1 500 Internal Server Error",          "type": "json"        }      ]    },    "filename": "src/routes/producers.js",    "groupTitle": "Producers",    "name": "GetProducers"  }] });
