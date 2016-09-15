import Database from '../Store/RealmDatabase'

export default {
  createDesk: (id, name) => {
    Database.write(() => {
      Database.create('Desk', {
        id: id,
        name: name
      });
    });
  },

  getDesks: () => {
    let sortProperties = [];
    sortProperties.push(["id", true]);
    let allDesk = Database.objects('Desk').sorted(sortProperties);
    return allDesk;
  },

  getDesk: (id) => {
    let desk = Database.objects('Desk').filtered('id = $0', id);
    return desk;
  },

  deleteDesk: (id) => {
    Database.write(() => {
      // Find desk by id
      let desk = Database.objects('Desk').filtered('id = $0', id);

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

  addCard: (deskId, front, back, type) => {
    let date = new Date();
    Database.write(() => {
      Database.create('Card', {
        id: date.getTime(),
        deskId: deskId,
        front: front,
        back: back,
        type: type,
        createTime: date.getTime(),
        answerTime: date.getTime(),
        nextTime: date.getTime()
      });
    });
  },

  addCards: (deskId, keywords, back, type) => {
    let date = new Date();
    let id = date.getTime();
    Database.write(() => {
      keywords.map((keyword) => {
        id = id + 1;
        Database.create('Card', {
          id: id,
          deskId: deskId,
          front: keyword,
          back: back,
          type: type,
          createTime: date.getTime(),
          answerTime: date.getTime(),
          nextTime: date.getTime()
        });
      })
    });
  },

  hasCardInDesk: (deskId, keyword, type) => {
    let card = Database.objects('Card').filtered('deskId = $0 AND front = $1 AND type = $2', deskId, keyword, type);
    if (!card || (card && card.length == 0)) {
      return false;
    } else {
      return true;
    }
  },

  getCards: (deskId) => {
    let sortProperties = [];
    sortProperties.push(["createTime", false]);
    let cards = Database.objects('Card').filtered('deskId = $0', deskId).sorted(sortProperties);
    return cards;
  },

  countCard: (deskId) => {
    let cards = Database.objects('Card').filtered('deskId = $0', deskId);
    return cards.length;
  },

  getCardInDesk: (deskId, startIndex, endIndex) => {
    let sortProperties = [];
    sortProperties.push(["createTime", false]);
    let cardByDesk = Database.objects('Card').filtered('deskId = $0', deskId).sorted(sortProperties);
    return cardByDesk.slice(startIndex, endIndex);
  },

  getCardInDeskByNewCard: (deskId, numberCard) => {
    let sortProperties = [];
    sortProperties.push(["nextTime", false]);
    let endDay = new Date();
    endDay.setHours(23,59,59,999);
    let cardByDesk = Database.objects('Card').filtered('deskId = $0 and boxIndex = 0 and nextTime < $1', deskId, endDay.getTime()).sorted(sortProperties);
    if (numberCard == -1) {
      return cardByDesk;
    } else {
      return cardByDesk.slice(0, numberCard);
    }
  },

  getCardInDeskByReviewCard: (deskId, numberCard) => {
    let sortProperties = [];
    sortProperties.push(["nextTime", false]);
    let endDay = new Date();
    endDay.setHours(23,59,59,999);
    let cardByDesk = Database.objects('Card').filtered('deskId = $0 and boxIndex != 0 and nextTime < $1', deskId, endDay.getTime()).sorted(sortProperties);
    if (numberCard == -1) {
      return cardByDesk;
    } else {
      return cardByDesk.slice(0, numberCard);
    }
  },

  answerCard: (id, nextTime, boxIndex) => {
    let cardByDesk = Database.objects('Card').filtered('id = $0', id);
    Database.write(() => {
      cardByDesk.answerTime = new Date(),
      cardByDesk.nextTime = nextTime,
      cardByDesk.boxIndex = boxIndex
    });
  },

  updateCard: (card) => {
    Database.write(() => {
      Database.create('Card', card, true);
    });
  },

  getSetting: (key) => {
    let settings = Database.objects('Setting').filtered('key = $0', key);
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
