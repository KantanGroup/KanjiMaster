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
    meanings:     {type: 'list', objectType: 'MeaningByLanguage'}
  }
};

const MeaningByLanguageSchema = {
  name: 'MeaningByLanguage',
  properties: {
    language:     {type: 'string', indexed: true},
    meaning:      {type: 'string'}
  }
}

const DeskSchema = {
  name: "Desk",
  primaryKey: "id",
  properties: {
    id:           {type: 'int'},
    name:         {type: 'string', indexed: true},
    description:  {type: 'string'}
  }
}

const CardSchema = {
  name: "Card",
  properties: {
    deskId:       {type: 'int', indexed: true},
    keyword:      {type: 'string', indexed: true},
    type:         {type: 'int', indexed: true},
    createTime:   {type: 'date', default: new Date(), indexed: true},
    answerTime:   {type: 'date', default: new Date()},
    nextTime:     {type: 'date', default: new Date(), indexed: true},
    boxIndex:     {type: 'int', default: 1, indexed: true}
  }
}

const SettingSchema = {
  name: "Setting",
  primaryKey: "key",
  properties: {
    key:          {type: 'string', indexed: true},
    value:        {type: 'bool', default: false}
  }
}

export default new Realm({path: 'kanji.realm', schema: [KanjiMatomeSchema, KanjiMatomeTangoSchema, MeaningByLanguageSchema, DeskSchema, CardSchema, SettingSchema], schemaVersion: 1});
