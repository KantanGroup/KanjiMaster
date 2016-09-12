import FastPriorityQueue from "fastpriorityqueue"
import Constant from '../Transforms/Constant'

var queue;
var doingSize = 0;
var newSize = 0;
var reviewSize = 0;

export default {

  startStudy: (newCards, reviewCards) => {
    doingSize = 0;
    queue = new FastPriorityQueue(function(a,b) {return a.nextTime < b.nextTime});
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
    return card;
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

  feedbackAgain: (card) => {
    let cloneCard = clone(card);
    let date = new Date();
    cloneCard.due = 1;
    cloneCard.point = 1;
    cloneCard.nextDay = 1;
    cloneCard.nextTime = date.getTime() + Constant.A_MINUTE;
    cloneCard.answerTime = date.getTime();
    if (cloneCard.boxIndex === 0) {
      newSize--;
      doingSize++;
    } else if (cloneCard.boxIndex === 2) {
      reviewSize--;
      doingSize++;
    }
    cloneCard.boxIndex = 1;
    return cloneCard;
  },

  feedbackHard: (card) => {
    let cloneCard = clone(card);
    let date = new Date();
    let nextDue = cloneCard.due * 1.2;
    let nextPoint = cloneCard.point * 0.85;
    if (cloneCard.boxIndex == 0) {
      newSize--;
      doingSize++;
      cloneCard.boxIndex = 1;
      cloneCard.nextDay = 10 / (60 * 24);
      cloneCard.nextTime = date.getTime() + Constant.A_MINUTE * 10;
    } else {
      if (cloneCard.boxIndex === 2) {
        reviewSize--;
      } else {
        doingSize--;
      }
      cloneCard.boxIndex = 2;
      cloneCard.point = nextPoint;
      cloneCard.nextDay = cloneCard.nextDay * nextPoint * nextDue;
      cloneCard.nextDay = cloneCard.nextDay > 1 ? cloneCard.nextDay : 1;
      cloneCard.nextTime = date.getTime() + cloneCard.nextDay * Constant.A_DAY;
    }
    cloneCard.answerTime = date.getTime();
    return cloneCard;
  },

  feedbackGood: (card) => {
    let cloneCard = clone(card);
    let date = new Date();
    if (cloneCard.boxIndex === 0) {
      newSize--;
    } else if (cloneCard.boxIndex === 2) {
      reviewSize--;
    } else {
      doingSize--;
    }
    let nextDue = cloneCard.due * 2.5;
    cloneCard.nextDay = cloneCard.nextDay * nextDue;
    cloneCard.nextDay = cloneCard.nextDay > 1 ? cloneCard.nextDay : 1;
    cloneCard.nextTime = date.getTime() + cloneCard.nextDay * Constant.A_DAY;
    cloneCard.answerTime = date.getTime();
    cloneCard.boxIndex = 2;
    return cloneCard;
  },

  feedbackEasy: (card) => {
    let cloneCard = clone(card);
    let date = new Date();
    if (cloneCard.boxIndex === 0) {
      newSize--;
    } else if (cloneCard.boxIndex === 2) {
      reviewSize--;
    } else {
      doingSize--;
    }
    let nextDue = cloneCard.due * 3.25;
    let nextPoint = cloneCard.point * 1.15;
    cloneCard.point = nextPoint;
    cloneCard.nextDay = cloneCard.nextDay * nextPoint * nextDue;
    cloneCard.nextDay = cloneCard.nextDay > 1 ? cloneCard.nextDay : 1;
    cloneCard.nextTime = date.getTime() + cloneCard.nextDay * Constant.A_DAY;
    cloneCard.answerTime = date.getTime();
    cloneCard.boxIndex = 2;
    return cloneCard;
  },
}

function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
