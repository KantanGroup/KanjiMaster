const Realm = require('realm');

const CarSchema = {
  name: 'Car',
  primaryKey: 'make',
  properties: {
    make:  'string',
    model: 'string',
    miles: {type: 'int', default: 0},
  }
};

const PersonSchema = {
  name: 'Person',
  primaryKey: 'name',
  properties: {
    name:     {type: 'string'},               // required property
    birthday: {type: 'date', optional: true}, // optional property

    // object properties are always optional
    car:      {type: 'Car'},
  }
};

const KanjiSchema = {
  name: 'Kanji',
  primaryKey: 'define',
  properties: {
    define:       {type: 'string'},
    hantu:        {type: 'string', optional: true},
    onyomi:       {type: 'string', optional: true},
    kunyomi:      {type: 'string', optional: true},
    level:        {type: 'int', optional: true},
    part:         {type: 'string', optional: true},
    setsumei:     {type: 'string', optional: true}
  }
};

export default new Realm({schema: [CarSchema, PersonSchema, KanjiSchema], schemaVersion: 4});
