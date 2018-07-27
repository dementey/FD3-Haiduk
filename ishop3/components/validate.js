"use strict";

function validateText(b) {
  if (Boolean(b) === false || b == ""||typeof b == "undefined") return false;
  else {
    var result = true, resultAll;
    for (var i = 0; i < b.length; i++) resultAll = (result && (b.charCodeAt(i) < 1040 || b.charCodeAt(i) > 1103));
    return !resultAll;
  }
}

function validateUrl(str) {
  
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if (!regex.test(str)) {
    return false;
  } else {
    return true;
  }
}


function validateNumber(a) {
  if ((a instanceof Number || typeof a === 'number') && !isNaN(a) && a!=0) return true;
  else return false;
};

export {validateText, validateUrl, validateNumber };