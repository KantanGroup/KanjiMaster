const Realm = require('realm');

const KanjiMatomeSchema = {
  name: 'KanjiMatome',
  primaryKey: 'keyword',
  properties: {
    keyword:      {type: 'string'},
    hanViet:      {type: 'string', optional: true},
    onyomi:       {type: 'string', optional: true},
    kunyomi:      {type: 'string', optional: true},
    radical:      {type: 'int', optional: true},
    strokes:      {type: 'int', optional: true},
    grade:        {type: 'int', optional: true},
    jlpt:         {type: 'int', optional: true},
    jouyou:       {type: 'int', optional: true},
    rtk6th:       {type: 'int', optional: true},
    rank:         {type: 'int', optional: true}
  }
};

const KanjiMatomeMeaningSchema = {
  name: 'KanjiMatomeMeaning',
  primaryKey: 'keyword',
  properties: {
    keyword:      {type: 'string'},
    type:         {type: 'int'},
    language:     {type: 'string'},
    meaning:      {type: 'string'}
  }
};

const DeskSchema = {
  name: "Desk",
  primaryKey: "id",
  properties: {
    id:           {type: 'int'},
    name:         {type: 'string'},
    cards:        {type: 'Card'}
  }
}

const CardSchema = {
  name: "Card",
  primaryKey: "keyword",
  properties: {
    keyword:      {type: 'string'},
    keywordType:  {type: 'int'},
    cardType:     {type: 'int'},
    data:         {type: 'string'},
    answerTime:   {type: 'date', default: new Date()},
    nextTime:     {type: 'data', default: new Date()},
    boxIndex:     {type: 'int', default: 1}
  }
}

const SettingSchema = {
  name: "Setting",
  primaryKey: "key",
  properties: {
    key:          {type: 'string'},
    value:        {type: 'bool', default: false}
  }
}

export default new Realm({path: 'kanji.realm', schema: [KanjiMatomeSchema, DeskSchema, CardSchema, SettingSchema], schemaVersion: 1});
