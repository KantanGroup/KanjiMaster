const Realm = require('realm');

const KanjiMatomeSchema = {
  name: 'KanjiMatome',
  primaryKey: 'keyword',
  properties: {
    keyword:      {type: 'string'},
    onyomi:       {type: 'string', optional: true},
    kunyomi:      {type: 'string', optional: true},
    jlpt:         {type: 'int', optional: true},
    jouyou:       {type: 'string', optional: true},
    rtk:          {type: 'string', optional: true}
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

export default new Realm({path: 'kanji.realm', schema: [KanjiMatomeSchema, DeskSchema, CardSchema], schemaVersion: 0});
