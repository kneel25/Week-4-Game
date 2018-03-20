//Global Variables 

//variables- set a starting number
var winCount = 0;
var loseCount = 0;

var goaltotal;
var firstnum;
var secondnum;
var thirdnum;
var fourthnum;
var totalnum = 0;

//function 1
//assign a random number to each of the enemy and the goal number
function startGame() {
    
   goaltotal = Math.floor(Math.random() * 101) + 19;
   $('#goal').text(goaltotal);
   totalnum = 0

//assign a random number to each enemy between 1 and 11
   firstnum = Math.floor(Math.random() * 11) +1;
   $('#first').text(firstnum);
   secondnum = Math.floor(Math.random() * 11) +1;
   $('#second').text(secondnum);
   thirdnum = Math.floor(Math.random() * 11) +1;
   $('#third').text(thirdnum);
   fourthnum = Math.floor(Math.random() * 11) +1;
   $('#fourth').text(fourthnum);
}
//on click values - adds the totalnum to the firstnum
   $('#first').on('click', function() {
       totalnum += firstnum
       $('#total').text(totalnum);
       checkGame();
        
   });
   $('#second').on('click', function() {
       totalnum += secondnum
       $('#total').text(totalnum);
       checkGame();
			
   });
   $('#third').on('click', function() {
       totalnum += thirdnum
       $('#total').text(totalnum);
       checkGame();
			
   });
   $('#fourth').on('click', function() {
       totalnum += fourthnum
       $('#total').text(totalnum);
       console.log(totalnum);
       checkGame();
			
   });

//function 2
	 function checkGame() {
         
	  if (totalnum === goaltotal) {
	 		 winCount++;
	 		 $('#wins').text(winCount);
              
	 		 startGame();
	  }
	  else if (totalnum > goaltotal) {
	 		 loseCount++;
	 		 $('#losses').text(loseCount);
              
              startGame();
              
              
	  }
	 }

   startGame();


