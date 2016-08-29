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

  createKanjiMatome(data) {
    Database.write(() => {
      // Find desk by id
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

  getKanjiMatome(data) {
    Database.write(() => {
      // Find desk by id
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
}
