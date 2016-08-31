import Database from '../Store/RealmDatabase'

export default {
  createDesk: (name) => {
    Database.write(() => {
      Database.create('Desk', {
        id: Date.now(),
        name: name,
      });
    });
  },

  getDesks: () => {
    let allDesk = Database.objects('Desk');
    return allDesk;
  },

  getDesk: (id) => {
    let desk = Database.objects('Desk').filtered('id == $0', id);
    return desk;
  },

  deleteDesk: (id) => {
    Database.write(() => {
      // Find desk by id
      let desk = Database.objects('Desk').filtered('id == $0', id);

      // Delete the desk
      Database.delete(desk);
    });
  },

  deleteDesks: () => {
    Database.write(() => {
      // Find desk by id
      let allDesk = Database.objects('Desk');

      // Delete the desk
      Database.delete(allDesk);
    });
  },

  addCard: (deskId, keyword, type) => {
    Database.write(() => {
      Database.create('Card', {
        id: Date.now(),
        deskId: deskId,
        keyword: keyword,
        type: type
      });
    });
  },

  getCardInDesk: (deskId, startIndex, endIndex) => {
    let sortProperties = [];
    sortProperties.push(["createTime", false]);
    let cardByDesk = Database.objects('Card').filtered('deskId == $0', deskId).sorted(sortProperties);
    return cardByDesk.slice(startIndex, endIndex);
  },

  getCardInDeskByNewCard: (deskId, numberCard) => {
    let sortProperties = [];
    sortProperties.push(["nextTime", false]);
    let cardByDesk = Database.objects('Card').filtered('deskId == $0 and boxIndex == 1 and nextTime == $1', deskId, new Date()).sorted(sortProperties);
    if (numberCard === -1) {
      return cardByDesk;
    } else {
      return cardByDesk.slice(0, numberCard);
    }
  },

  getCardInDeskByReviewCard: (deskId, numberCard) => {
    let sortProperties = [];
    sortProperties.push(["nextTime", false]);
    let cardByDesk = Database.objects('Card').filtered('deskId == $0 and boxIndex != 1 and nextTime == $1', deskId, new Date()).sorted(sortProperties);
    if (numberCard === -1) {
      return cardByDesk;
    } else {
      return cardByDesk.slice(0, numberCard);
    }
  },

  answerCard: (id, nextTime, boxIndex) => {
    let cardByDesk = Database.objects('Card').filtered('id == $0', id);
    Database.write(() => {
      cardByDesk.answerTime = new Date(),
      cardByDesk.nextTime = nextTime,
      cardByDesk.boxIndex = boxIndex
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
          rank: data.rank
        }, true);
      })
    });
  },

  createKanjiMatomeTangos: (datas) => {
    Database.write(() => {
      datas.map((data) => {
        let tango  = Database.create('KanjiMatomeTango', {
          keyword: data.keyword,
          tango: data.tango,
          hiragana: data.hiragana,
          hanViet: data.hanViet,
          meanings: data.meanings
        }, true);
      })
    });
  },

  deleteKanjiMatomeTangos: () => {
    Database.write(() => {
      // Find desk by id
      let allTango = Database.objects('KanjiMatomeTango');

      // Delete the tango
      Database.delete(allTango);
    });
  },

  getKanjiMatome: (keyword) => {
    let kanji = Database.objects('KanjiMatome').filtered('keyword == $0', keyword);
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

  getKanjiMatomeTangos: () => {
    return Database.objects('KanjiMatomeTango');
  },

  getKanjiMatomeTangos: (startIndex, endIndex) => {
    let allKanji = Database.objects('KanjiMatomeTango');
    let rangeKanji = allKanji.slice(startIndex,endIndex);
    return rangeKanji;
  },

  getSetting: (key) => {
    let settings = Database.objects('Setting').filtered('key == $0', key);
    return settings;
  },

  setSetting: (key_, value_) => {
    Database.write(() => {
      Database.create('Setting', {
        key: key_,
        value: value_
      }, true);
    });
  },
}
