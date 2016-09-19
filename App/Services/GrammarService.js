import Database from '../Store/RealmDatabase'

export default {

  createGrammars: (datas) => {
    Database.write(() => {
      datas.map((data) => {
        Database.create('Grammar', {
          id: data.id,
          grammar: data.grammar,
          hiragana: data.hiragana,
          definition: data.definition
        }, true);
      })
    });
  },

  getById: (id) => {
    let grammar = Database.objects('Grammar').filtered('id = $0', id);
    return grammar;
  },

  getGrammars: () => {
    let sortProperties = [];
    sortProperties.push(["id", false]);
    let allGrammar = Database.objects('Grammar').sorted(sortProperties);
    return allGrammar;
  },

  countGrammars: () => {
    let allGrammar = Database.objects('Grammar');
    return allGrammar.length;
  },

  getGrammars: (startIndex, endIndex) => {
    let sortProperties = [];
    sortProperties.push(["id", false]);
    let allGrammar = Database.objects('Grammar').sorted(sortProperties);
    let rangeGrammar = allGrammar.slice(startIndex,endIndex);
    return rangeGrammar;
  }
}
