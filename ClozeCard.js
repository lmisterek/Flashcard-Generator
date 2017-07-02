// this function assumes the "cloze" phrase is ony written once


  // * The constructor should accept two arguments: `text` and `cloze`.
var ClozeCard = function(text, cloze) {
  
  // * The constructed object should have a `cloze` property that contains _only_ the 
  // cloze-deleted portion of the text.
  this.cloze = cloze;

   // * The constructed object should have a `fullText` property that contains _only_ the full text.
   this.fullText = text;

   // This will be the first index of the cloze within the text
   var last = text.indexOf(cloze);
  
  // This means the cloze is within the text
  if(last != -1) {

   // This will be the place to pick up the next part of the string
   var next = last + cloze.length;
  		// * The constructed object should have a `partial` property that contains _only_ 
  		// the partial text.
  		this.partial = text.substring(0, last) + "..." + text.substring(next, text.length);
  		console.log(this.partial);
  } 

  // // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
  // * The constructor should throw or log an error when the cloze deletion does _not_ appear 
  // in the input text.
  else {
  		console.log("The statement provided does not contain '" + cloze + "'.");
  }  
  
  
};


// * Use prototypes to attach these methods, wherever possible.
ClozeCard.prototype.printInfo = function() {

};




// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "





  // * This file should define a Node module that exports a constructor for creating cloze-deletion 
  // flashcards, e.g.:
  module.exports = ClozeCard;