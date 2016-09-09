import FastPriorityQueue from "fastpriorityqueue"

const AGAIN = 1; //The card is placed into relearning mode
const HARD = 2; //
const GOOD = 3;
const EASY = 4;

const A_MINUTE = 1000 * 60;
const A_HOUR =  A_MINUTE * 60;
const A_DAY = A_HOUR * 24;

var queue;

export default {

  function * startStudy(newCards, reviewCards) {
    queue = new FastPriorityQueue(function(a,b) {return a.createTime > b.createTime});
    newCards.forEach((card) => {
      queue.add(card);
    })
    reviewCards.forEach((card) => {
      queue.add(card);
    })
  }

  fucntion * nextCard() {
    var card = null;
    if (!queue.isEmpty()) {
      card = queue.poll();
    }
  }

  function * feedbackCard(card: Card, int feedback) {
    switch (feedback) {
      case AGAIN:
        return feedbackAgain(card);
        break;
      case AGAIN:
        return feedbackHard(card);
        break;
      case AGAIN:
        return feedbackGood(card);
        break;
      case AGAIN:
        return feedbackEasy(card);
        break;
    }
  }

  function * feedbackAgain(card: Card) {
    card.due = 0;
    card.point = 1;
    card.nextTime = Date().now + A_MINUTE;
    card.answerTime = Date().now;
    card.boxIndex = 1;
    return card;
  }

  function * feedbackHard(card: Card) {
    float nextDue = 2 + card.due * 1.2;
    float nextPoint = card.point * 0.85;
    if (card.boxIndex == 0) {
      card.boxIndex = 1;
      card.nextTime = Date().now + A_MINUTE * 10;
    } else {
      card.boxIndex = 2;
      card.point = nextPoint;
      card.nextDay = nextPoint * nextDue * A_DAY;
      card.nextTime = Date().now + card.nextDay * A_DAY;
    }
    card.answerTime = Date().now;
    return card;
  }

  function * feedbackGood(card: Card) {
    float nextDue = 3 + card.due * 2.5;
    card.nextDay = nextDue * A_DAY;
    card.nextTime = Date().now + card.nextDay * A_DAY;
    card.answerTime = Date().now;
    card.boxIndex = 3;
    return card;
  }

  function * feedbackEasy(card: Card) {
    float nextDue = 4 + card.due * 3.25;
    float nextPoint = card.point * 1.15;
    card.point = nextPoint;
    card.nextDay = nextPoint * nextDue;
    card.nextTime = Date().now + card.nextDay * A_DAY;
    card.answerTime = Date().now;
    card.boxIndex = 4;
    return card;
  }
}
