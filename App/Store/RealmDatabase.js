const Realm = require('realm');

class KanjiMatomeSchema {}
KanjiMatomeSchema.schema = {
  name: 'KanjiMatome',
  primaryKey: 'keyword',
  properties: {
    keyword:      {type: 'string'},
    hantu:        {type: 'string', optional: true, indexed: true},
    definition:   {type: 'string', optional: true, indexed: true},
    onyomi:       {type: 'string', optional: true, indexed: true},
    kunyomi:      {type: 'string', optional: true, indexed: true},
    radical:      {type: 'string', optional: true, indexed: true},
    strokes:      {type: 'int', optional: true, indexed: true},
    grade:        {type: 'int', optional: true, indexed: true},
    jlpt:         {type: 'int', optional: true, indexed: true},
    jouyou:       {type: 'int', optional: true, indexed: true},
    rtk6th:       {type: 'int', optional: true, indexed: true},
    rank:         {type: 'int', optional: true, indexed: true},
    meanings:     {type: 'list', objectType: 'KanjiMatomeMeaningByLanguage'}
  }
};

class KanjiMatomeMeaningSchema {}
KanjiMatomeMeaningSchema.schema = {
  name: 'KanjiMatomeMeaning',
  primaryKey: 'keyword',
  properties: {
    keyword:      {type: 'string'},
    type:         {type: 'int', indexed: true},
    language:     {type: 'string', indexed: true},
    meaning:      {type: 'string'}
  }
};

class KanjiMatomeTangoSchema {}
KanjiMatomeTangoSchema.schema = {
  name: 'KanjiMatomeTango',
  properties: {
    keyword:      {type: 'string', indexed: true},
    tango:        {type: 'string', indexed: true},
    hiragana:     {type: 'string', indexed: true},
    hanViet:      {type: 'string', indexed: true},
    meanings:     {type: 'list', objectType: 'KanjiMatomeMeaningByLanguage'}
  }
};

class KanjiMatomeMeaningByLanguageSchema {}
KanjiMatomeMeaningByLanguageSchema.schema = {
  name: 'KanjiMatomeMeaningByLanguage',
  properties: {
    language:     {type: 'string', indexed: true},
    meaning:      {type: 'string'}
  }
};

class DeskSchema {}
DeskSchema.schema = {
  name: "Desk",
  primaryKey: "id",
  properties: {
    id:           {type: 'int'},
    name:         {type: 'string', indexed: true},
    description:  {type: 'string', optional: true}
  }
}

class CardSchema {}
CardSchema.schema = {
  name: "Card",
  primaryKey: "id",
  properties: {
    id:           {type: 'int'},
    deskId:       {type: 'int', indexed: true},
    front:        {type: 'string', indexed: true},
    back:         {type: 'string', optional: true, indexed: true},
    type:         {type: 'int', indexed: true},
    due:          {type: 'float', default: 1.0},
    point:        {type: 'float', default: 1.0},
    nextDay:      {type: 'float', default: 1.0},
    createTime:   {type: 'int', default: Date.now(), indexed: true},
    answerTime:   {type: 'int', default: Date.now()},
    nextTime:     {type: 'int', default: Date.now(), indexed: true},
    boxIndex:     {type: 'int', default: 0, indexed: true}
  }
};

class GrammarSchema {}
GrammarSchema.schema = {
  name: "Grammar",
  primaryKey: "id",
  properties: {
    id:           {type: 'int'},
    grammar:      {type: 'string', indexed: true},
    hiragana:     {type: 'string', indexed: true},
    definition:   {type: 'string'}
  }
}

class SettingSchema {}
SettingSchema.schema = {
  name: "Setting",
  primaryKey: "key",
  properties: {
    key:          {type: 'string', indexed: true},
    value:        {type: 'bool', default: false}
  }
};

export default new Realm({path: 'kanjidaily.realm', schema: [GrammarSchema, KanjiMatomeSchema, KanjiMatomeTangoSchema, KanjiMatomeMeaningByLanguageSchema, DeskSchema, CardSchema, SettingSchema], schemaVersion: 1});
