#!/usr/bin/node

const data = require('./101-data');

const originalDict = data.dict;
const newDict = {};

// Invert the original dictionary to create the new dictionary
Object.keys(originalDict).forEach(userId => {
  const occurrences = originalDict[userId].toString();
  
  if (!(occurrences in newDict)) {
    newDict[occurrences] = [];
  }

  newDict[occurrences].push(userId);
});

console.log(newDict);