import FastPriorityQueue from "fastpriorityqueue"

const AGAIN = 1; //The card is placed into relearning mode
const HARD = 2; //
const GOOD = 3;
const EASY = 4;

const A_MINUTE = 1000 * 60;
const A_HOUR =  A_MINUTE * 60;
const A_DAY = A_HOUR * 24;

var queue;
var doingSize = 0;
var newSize = 0;
var reviewSize = 0;

export default {

  startStudy: (newCards, reviewCards) => {
    doingSize = 0;
    queue = new FastPriorityQueue(function(a,b) {return a.nextTime > b.nextTime});
    newSize = Object.keys(newCards).length;
    Object.keys(newCards).forEach(function(key) {
      queue.add(newCards[key]);
    });
    reviewSize = Object.keys(reviewCards).length;
    Object.keys(reviewCards).forEach(function(key) {
      queue.add(reviewCards[key]);
    });
  },

  addCard: (card) => {
    queue.add(card);
  },

  nextCard: () => {
    var card = null;
    if (!queue.isEmpty()) {
      card = queue.poll();
    }
  },

  countDoingCard: () => {
    return doingSize;
  },

  countNewCard: () => {
    return newSize;
  },

  countReviewCard: () => {
    return reviewSize;
  },

  feedbackCard: (card, feedback) => {
    switch (feedback) {
      case AGAIN:
        return feedbackAgain(card);
      case HARD:
        return feedbackHard(card);
      case GOOD:
        return feedbackGood(card);
      case EASY:
        return feedbackEasy(card);
    }
  },

  feedbackAgain: (card) => {
    card.due = 0;
    card.point = 1;
    card.nextTime = Date().now + A_MINUTE;
    card.answerTime = Date().now;
    if (card.boxIndex === 0) {
      newSize--;
      doingSize++;
    } else if (card.boxIndex === 2) {
      reviewSize--;
      doingSize++;
    }
    card.boxIndex = 1;
    return card;
  },

  feedbackHard: (card) => {
    let nextDue = card.due * 1.2;
    let nextPoint = card.point * 0.85;
    if (card.boxIndex == 0) {
      newSize--;
      doingSize++;
      card.boxIndex = 1;
      card.nextTime = Date().now + A_MINUTE * 10;
    } else {
      if (card.boxIndex === 2) {
        reviewSize--;
      } else {
        doingSize--;
      }
      card.boxIndex = 2;
      card.point = nextPoint;
      card.nextDay = nextPoint * nextDue * A_DAY;
      card.nextTime = Date().now + card.nextDay * A_DAY;
    }
    card.answerTime = Date().now;
    return card;
  },

  feedbackGood: (card) => {
    if (card.boxIndex === 0) {
      newSize--;
    } else if (card.boxIndex === 2) {
      reviewSize--;
    } else {
      doingSize--;
    }
    let nextDue = card.due * 2.5;
    card.nextDay = nextDue * A_DAY;
    card.nextTime = Date().now + card.nextDay * A_DAY;
    card.answerTime = Date().now;
    card.boxIndex = 2;
    return card;
  },

  feedbackEasy: (card) => {
    if (card.boxIndex === 0) {
      newSize--;
    } else if (card.boxIndex === 2) {
      reviewSize--;
    } else {
      doingSize--;
    }
    let nextDue = card.due * 3.25;
    let nextPoint = card.point * 1.15;
    card.point = nextPoint;
    card.nextDay = nextPoint * nextDue;
    card.nextTime = Date().now + card.nextDay * A_DAY;
    card.answerTime = Date().now;
    card.boxIndex = 2;
    return card;
  }
}
