const Realm = require('realm');

const KanjiMatomeSchema = {
  name: 'KanjiMatome',
  primaryKey: 'keyword',
  properties: {
    keyword:      {type: 'string'},
    hanViet:      {type: 'string', optional: true, indexed: true},
    onyomi:       {type: 'string', optional: true, indexed: true},
    kunyomi:      {type: 'string', optional: true, indexed: true},
    radical:      {type: 'string', optional: true, indexed: true},
    strokes:      {type: 'int', optional: true, indexed: true},
    grade:        {type: 'int', optional: true, indexed: true},
    jlpt:         {type: 'int', optional: true, indexed: true},
    jouyou:       {type: 'int', optional: true, indexed: true},
    rtk6th:       {type: 'int', optional: true, indexed: true},
    rank:         {type: 'int', optional: true, indexed: true}
  }
};

const KanjiMatomeMeaningSchema = {
  name: 'KanjiMatomeMeaning',
  primaryKey: 'keyword',
  properties: {
    keyword:      {type: 'string'},
    type:         {type: 'int', indexed: true},
    language:     {type: 'string', indexed: true},
    meaning:      {type: 'string'}
  }
};

const KanjiMatomeTangoSchema = {
  name: 'KanjiMatomeTango',
  properties: {
    keyword:      {type: 'string', indexed: true},
    tango:        {type: 'string', indexed: true},
    hiragana:     {type: 'string', indexed: true},
    hanViet:      {type: 'string', indexed: true},
    meaning:      {type: 'string'}
  }
};

const DeskSchema = {
  name: "Desk",
  primaryKey: "id",
  properties: {
    id:           {type: 'int'},
    name:         {type: 'string'},
    description:  {type: 'string'}
  }
}

const CardSchema = {
  name: "Card",
  properties: {
    deskId:       {type: 'int'},
    keyword:      {type: 'string'},
    type:         {type: 'int'},
    createTime:   {type: 'date', default: new Date()},
    answerTime:   {type: 'date', default: new Date()},
    nextTime:     {type: 'date', default: new Date()},
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

export default new Realm({path: 'kanji.realm', schema: [KanjiMatomeSchema, DeskSchema, CardSchema, SettingSchema], schemaVersion: 3});
