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
    return {
      allDesk
    }
  },

  getDesk: (id) => {
    console.log("ID "  + id);
    let desk = Database.objects('Desk').filtered('id == $0', id);
    return {
      desk
    }
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

  addCard: (id, keyword) => {
    let desk = getDesk(id);
    //let tango = get

  },

  createKanjiMatome: (data) => {
    //*
    Database.write(() => {
      Database.create('KanjiMatome', data , true);
    });
    //*/
    /*
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
    //*/
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

  getKanjiMatome: (data) => {
    Database.write(() => {
      Database.create('KanjiMatome', {
        keyword: data.keyword,
        onyomi: data.onyomi,
        kunyomi: data.kunyomi,
        jlpt: data.jlpt,
        jouyou: data.jouyou,
        rtk: data.rtk6th
      });
    });
  },

  getSetting: (key_) => {
    let setting = Database.objects('Setting').filtered('key == $0', key_);
    return {
      setting
    }
  },

  setSetting: (key_, value_) => {
    Database.write(() => {
      Database.create('Setting', {
        key: key_,
        value: value_
      });
    });
  },
}
