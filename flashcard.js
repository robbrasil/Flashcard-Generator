var inquirer = require("inquirer");
var factsArray = ["Brazil is the largest country in South America.|Brazil","Russia is the only bicontinental country in the world.|Russia"];
function BasicCard(front,back) {
    this.front = front;
    this.back = back;
};

function ClozeDeletion(text, cloze) {
    this.cloze = cloze;
    this.partialText = text;
    this.fullText = text;
    this.brokenCloze = function(){ 
    var temp = this.fullText;   
      if(temp.includes(this.cloze) === false){
          console.log("ERROR! " + this.cloze)
       }
    }
};


var president = new BasicCard("Italy is located in Europe?","europe")
console.log(president.front + " " + president.back)
var presidentCloze = new ClozeDeletion("Asia is the largest continent.","Asia");
console.log(presidentCloze.fullText)
presidentCloze.brokenCloze();


inquirer.prompt([
    {
    type: "list",
    message: "Basic or Cloze?",
    choices: ["Basic","Cloze"],
    name: "item"
    }
]).then(function(user) {
    if (user.item === Cloze){
        var i = 0;
        var temp1 = new presidentCloze(factsArray[i],"Brazil");
        
        inquirer.prompt([
    {
    type: "input",
    message: temp1.partialText,
    name: "answer"
    }
]).then(function(user) {        
            if(user.name === temp1.cloze){
                console.log("Correct!")
        }else{
            console.log("Incorrect!")
        }
        
        
        
    })
 
}})













