/*
 * Add your JavaScript to this file to complete the assignment.
 */



 // Below is the serch bar function it is not efficent but its gets the job done
window.onload = function () {// This is the search function v1
  var twitsCash = [];
  var twits = document.getElementsByClassName('twit');// get all the twits
  var tmp = document.getElementsByClassName('twit-container');
  var twContainer = tmp[0];
  tmp = null;

  var inputs = document.getElementsByTagName('input');// This sould be less genral but it works for now

  var whiteList = [];// Create our whiteList
  twitsCash.length = 0;
  var change = '';

  for (i = 0; i < inputs.length; i++) {// Go through all the inputs
      inputs[i].onkeyup = function() {// Adding a listner


      p1 = document.getElementById("navbar-search-input").value;// Get the inputs
      whiteList.length = 0;// Clearing the whitelist

      for (var i = 0; i < twitsCash.length; i++) {
        twContainer.appendChild(twitsCash[i]);
        console.log(twitsCash[i]);
      }
      twitsCash.length = 0;//Clearing the cash

      twits = document.getElementsByClassName('twit');// get all the twits

      for(i = 0; i < twits.length; i++){// Fixing the whitelist
        if(twits[i].textContent.includes(p1)){// See if the string is included in the twit textContent
          //console.log("Contains: ",p1," ",twits[i]);// Log all members that have the input
          whiteList.push(twits[i]);// Then add them to the whiteList
        }
      }


      while(twits.length > whiteList.length){// Go through all the twits
        for(i = 0; i < twits.length; i++){// Go through all the twits
          if(!whiteList.includes(twits[i])){// Set their visability based on weather or not they are on the whiteList
            twitsCash.push(twits[i]);
            twContainer.removeChild(twits[i]);
          }
        }
      }
    };
  }
};


function search() {// Repete of the above code for single run
  var twitsCash = [];
  var twits = document.getElementsByClassName('twit');// get all the twits
  var tmp = document.getElementsByClassName('twit-container');
  var twContainer = tmp[0];
  tmp = null;

  var inputs = document.getElementsByTagName('input');// This sould be less genral but it works for now

  var whiteList = [];// Create our whiteList
  twitsCash.length = 0;
  var change = '';
  p1 = document.getElementById("navbar-search-input").value;// Get the inputs
  whiteList.length = 0;// Clearing the whitelist

  for (var i = 0; i < twitsCash.length; i++) {
    twContainer.appendChild(twitsCash[i]);
  }
  twitsCash.length = 0;//Clearing the cash

  twits = document.getElementsByClassName('twit');// get all the twits

  for(i = 0; i < twits.length; i++){// Fixing the whitelist
    if(twits[i].textContent.includes(p1)){// See if the string is included in the twit textContent
      //console.log("Contains: ",p1," ",twits[i]);// Log all members that have the input
      whiteList.push(twits[i]);// Then add them to the whiteList
    }
  }


  while(twits.length > whiteList.length){// Go through all the twits
    for(i = 0; i < twits.length; i++){// Go through all the twits
      if(!whiteList.includes(twits[i])){// Set their visability based on weather or not they are on the whiteList
        twitsCash.push(twits[i]);
        twContainer.removeChild(twits[i]);
      }
    }
  }
}

function hidden(p1){
  if (p1 == false){
    document.getElementById('modal-backdrop').classList.remove("hidden");
    document.getElementById('create-twit-modal').classList.remove("hidden");
    //console.log("Made visible");
  }
  else{
    document.getElementById('modal-backdrop').classList.add("hidden");
    document.getElementById('create-twit-modal').classList.add("hidden");
    document.getElementById('twit-text-input').value = "";
    document.getElementById('twit-attribution-input').value = "";
    //console.log("Made hidden");
  }
}

function makeTwit(in1,in2){
  var userText = in1;
  var user = in2;
  userText = userText.replace(/[\.,]/g, '');
  user = user.replace(/[\.,]/g, '');
  if(userText == ''){
    window.alert("ERROR: No user text")
    return;
  }
  if(user == ''){
    window.alert("ERROR: No user")
    return;
  }

  console.log(user);
  console.log(userText);

  var tmp = document.getElementsByClassName('twit-container');
  var twContainer = tmp[0];
  tmp = null;

  var t1 = document.createElement('article');// Create the article
  t1.classList.add('twit');

    var t2 = document.createElement('div');// Create the first div
    t1.appendChild(t2);// Add it to the article
    t2.classList.add('twit-icon');
      var t3 = document.createElement('i');// create the image
      t3.classList.add('fa');
      t3.classList.add('fa-bullhorn');
      t2.appendChild(t3);// Add it to the first div

    var t4 = document.createElement('div');
    t1.appendChild(t4);// Add it to the article
    t4.classList.add('twit-content');
      var t5 = document.createElement('p');// Create the user text
        t5.classList.add('twit-text');
        var userTextInput = document.createTextNode(userText);
        t5.appendChild(userTextInput);
        t4.appendChild(t5);
      var t6 = document.createElement('p');// Create the atrabution
        t6.classList.add('twit-attribution');
        var userInput = document.createTextNode(user);
        var t7 = document.createElement('a');
        t7.setAttribute('href',"#");
        t7.appendChild(userInput);
        t6.appendChild(t7);
        t4.appendChild(t6);

  twContainer.appendChild(t1);
  hidden(true);
}


var twitButton = document.getElementById('create-twit-button');

var tmp = document.getElementsByClassName("modal-cancel-button");
var tbCancelButton = tmp[0];
tmp = null;

var tmp2 = document.getElementsByClassName("modal-close-button");
var tbXButton = tmp2[0];
tmp2 = null;

var tmp3 = document.getElementsByClassName("modal-accept-button");
var createTwit = tmp3[0];
tmp3 = null;

var navSearch = document.getElementById("navbar-search-button");

createTwit.addEventListener('click', function(){
  //console.log("createTwit clicked");
  makeTwit(document.getElementById('twit-text-input').value,document.getElementById('twit-attribution-input').value);
});

tbCancelButton.addEventListener('click', function(){
  //console.log("Cancel clicked");
  hidden(true);
});

tbXButton.addEventListener('click', function(){
  //console.log("X clicked");
  hidden(true);
});

twitButton.addEventListener('click', function (){
  console.log("Add twit clicked");
  hidden(false);
});

navSearch.addEventListener('click', function (){
  search();
});
