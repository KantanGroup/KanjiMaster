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
    meanings:     {type: 'list', objectType: 'KanjiMatomeMeaningByLanguage'}
  }
};

const KanjiMatomeMeaningByLanguageSchema = {
  name: 'KanjiMatomeMeaningByLanguage',
  properties: {
    language:     {type: 'string', indexed: true},
    meaning:      {type: 'string'}
  }
};

const DeskSchema = {
  name: "Desk",
  primaryKey: "id",
  properties: {
    id:           {type: 'int'},
    name:         {type: 'string', indexed: true},
    description:  {type: 'string', optional: true}
  }
}

const CardSchema = {
  name: "Card",
  primaryKey: "id",
  properties: {
    id:           {type: 'int'},
    deskId:       {type: 'int', indexed: true},
    front:        {type: 'string', indexed: true},
    back:         {type: 'string', optional: true, indexed: true},
    type:         {type: 'int', indexed: true},
    due:          {type: 'float', default: 0, indexed: true},
    point:        {type: 'float', default: 1.0, indexed: true},
    createTime:   {type: 'int', default: Date.now(), indexed: true},
    answerTime:   {type: 'int', default: Date.now()},
    nextTime:     {type: 'int', default: Date.now(), indexed: true},
    boxIndex:     {type: 'int', default: 0, indexed: true}
  }
};

const SettingSchema = {
  name: "Setting",
  primaryKey: "key",
  properties: {
    key:          {type: 'string', indexed: true},
    value:        {type: 'bool', default: false}
  }
};

export default new Realm({path: 'kanji.realm', schema: [KanjiMatomeSchema, KanjiMatomeTangoSchema, KanjiMatomeMeaningByLanguageSchema, DeskSchema, CardSchema, SettingSchema], schemaVersion: 1});
