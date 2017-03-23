import Database from '../Store/RealmDatabase'

export default {

  createKanjis: (datas) => {
    Database.write(() => {
      datas.map((data) => {
        Database.create('KanjiObject', {
          code: data.code,
          sequenceId: data.sequenceId,
          meaning: data.meaning,
          onReading: data.onReading,
          kunReading: data.kunReading,
          kanjiRadicals: data.kanjiRadicals,
          strokeCount: data.strokeCount,
          jlptLevel: data.jlptLevel,
          gradeLevel: data.gradeLevel,
          frequency: data.frequency,
          strokePaths: data.strokePaths,
          koohiiStory1: data.koohiiStory1,
          koohiiStory2: data.koohiiStory2
        }, true);
      })
    });
  },

  createKanjiMatome: (data) => {
    Database.write(() => {
      Database.create('KanjiMatome', {
        keyword: data.keyword,
        onyomi: data.onyomi,
        kunyomi: data.kunyomi,
        radical: data.radical,
        strokes: data.strokes,
        grade: data.grade,
        jlpt: data.jlpt,
        jouyou: data.jouyou,
        rtk6th: data.rtk6th,
        rank: data.rank,
        hantu: data.hantu,
        definition: data.definition,
        meanings: data.meanings
      }, true);
    });
  },

  createKanjiMatomes: (datas) => {
    Database.write(() => {
      datas.map((data) => {
        Database.create('KanjiMatome', {
          keyword: data.keyword,
          onyomi: data.onyomi,
          kunyomi: data.kunyomi,
          radical: data.radical,
          strokes: data.strokes,
          grade: data.grade,
          jlpt: data.jlpt,
          jouyou: data.jouyou,
          rtk6th: data.rtk6th,
          rank: data.rank,
          hantu: data.hantu,
          definition: data.definition,
          meanings: data.meanings
        }, true);
      })
    });
  },

  getKanjiMatome: (keyword) => {
    let kanji = Database.objects('KanjiMatome').filtered('keyword = $0', keyword);
    return kanji;
  },

  getKanjiMatomes: () => {
    let sortProperties = [];
    sortProperties.push(["jlpt", true]);
    sortProperties.push(["rtk6th", false]);
    sortProperties.push(["rank", false]);
    let allKanji = Database.objects('KanjiMatome').sorted(sortProperties);
    return allKanji;
  },

  getKanjiMatomes: (startIndex, endIndex) => {
    let sortProperties = [];
    sortProperties.push(["jlpt", true]);
    sortProperties.push(["rtk6th", false]);
    sortProperties.push(["rank", false]);
    let allKanji = Database.objects('KanjiMatome').sorted(sortProperties);
    let rangeKanji = allKanji.slice(startIndex,endIndex);
    return rangeKanji;
  },

  getKanjis: (startIndex, endIndex) => {
    let sortProperties = [];
    sortProperties.push(["code", true]);
    let allKanji = Database.objects('KanjiObject').sorted(sortProperties);
    let rangeKanji = allKanji.slice(startIndex,endIndex);
    return rangeKanji;
  },

  getKanjiMatomeByJLPT: (jlpt) => {
    let sortProperties = [];
    sortProperties.push(["jlpt", true]);
    sortProperties.push(["rtk6th", false]);
    sortProperties.push(["rank", false]);
    let allKanji = Database.objects('KanjiMatome').filtered('jlpt = $0', jlpt).sorted(sortProperties);
    return allKanji;
  },

  deleteKanjiMatomes: () => {
    Database.write(() => {
      let allKanji = Database.objects('KanjiMatome');
      Database.delete(allKanji);
    });
  },

  createKanjiMatomeTangos: (datas) => {
    Database.write(() => {
      datas.map((data) => {
        Database.create('KanjiMatomeTango', {
          keyword: data.keyword,
          tango: data.tango,
          hiragana: data.hiragana,
          hanViet: data.hanViet,
          meanings: data.meanings
        }, true);
      })
    });
  },

  getKanjiMatomeTangos: () => {
    // let allKanji = Database.objects('KanjiMatomeTango');
    // return allKanji;
    let sortProperties = [];
    sortProperties.push(["keyword", true]);
    sortProperties.push(["tango", true]);
    return Database.objects('KanjiMatomeTango').sorted(sortProperties);;
  },

  getKanjiMatomeTangos: (startIndex, endIndex) => {
    let allKanji = Database.objects('KanjiMatomeTango');
    let rangeKanji = allKanji.slice(startIndex,endIndex);
    return rangeKanji;
  },

  getTangoByKeyword: (keyword) => {
    let allKanji = Database.objects('KanjiMatomeTango').filtered('keyword = $0', keyword);
    return allKanji;
  },

  deleteKanjiMatomeTangos: () => {
    Database.write(() => {
      // Find desk by id
      let allTango = Database.objects('KanjiMatomeTango');

      // Delete the tango
      Database.delete(allTango);
    });
  }
}
