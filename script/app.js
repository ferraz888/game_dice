        let player1Round = 0;
        let player1Global = 0;
        let player2Round = 0;
        let player2Global = 0;
        let currentPlayer = 1;
        let rollNumber = 1; // nouvelle variable pour stocker le nombre de lancé de dé
        document.getElementById("roll-number").src= "img/dee_face_" + rollNumber +".png"
        document.getElementById("roll").addEventListener("click", function() {
          rollNumber = Math.floor(Math.random() * 6) + 1;
          if (rollNumber === 1) {
            if (currentPlayer === 1) {
              player1Round = 0;
              document.getElementById("player1Round").innerHTML = "0";
              
              
            } else {
              player2Round = 0;
              document.getElementById("player2Round").innerHTML = "0";
              
            }
            switchPlayer();
          } else {
            if (currentPlayer === 1) {
              player1Round += rollNumber;
              document.getElementById("player1Round").innerHTML = player1Round;
              document.getElementById("roll-number").src= "img/dee_face_" + rollNumber +".png";
            } else {
              player2Round += rollNumber;
              document.getElementById("player2Round").innerHTML = player2Round;
              document.getElementById("roll-number").src= "img/dee_face_" + rollNumber +".png";
            }
          }
          // afficher le nombre de lancé de dé
          document.getElementById("roll-number").innerHTML = rollNumber;
        });
        document.getElementById("hold").addEventListener("click", function() {
          if (currentPlayer === 1) {
            player1Global += player1Round;
            document.getElementById("player1Global").innerHTML = "current<br>" + player1Global;
            player1Round = 0;
            document.getElementById("player1Round").innerHTML = " 0";
            document.getElementById("roll-number").src= "img/dee_face_1.png";
          } else {
            player2Global += player2Round;
            document.getElementById("player2Global").innerHTML = "current<br>" + player2Global;
            player2Round = 0;
            document.getElementById("player2Round").innerHTML = "0";
            document.getElementById("roll-number").src= "img/dee_face_1.png";
          }
          if (player1Global >= 100) {
            alert("Player 1 wins!");
          } else if (player2Global >= 100) {
            alert("Player 2 wins!");
          } else {
            switchPlayer();
          }
          // réinitialiser le nombre de lancé de dé
          rollNumber = 0;
          document.getElementById("roll-number").innerHTML = "0";
          });

    // Function to handle new game button press
    document.getElementById("newgame").addEventListener("click", function() {
      player1Round = 0;
      player1Global = 0;
      player2Round = 0;
      player2Global = 0;
      currentPlayer = 1;
      rollNumber = 0; // réinitialiser le nombre de lancé de dé
      document.getElementById("player1Round").innerHTML = "0";
      document.getElementById("player1Global").innerHTML = "current<br> 0";
      document.getElementById("player2Round").innerHTML = "0";
      document.getElementById("player2Global").innerHTML = "current<br> 0";
      document.getElementById("roll-number").src="img/dee_face_1.png";
      document.getElementById("player1").style.backgroundColor = "rgb(228, 228, 228)";
      document.getElementById("player2").style.backgroundColor = "rgb(255, 255, 255)";
    });

    // Function to switch current player
    function switchPlayer() {
      if (currentPlayer === 1) {
        currentPlayer = 2;
        document.getElementById("player1").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("player2").style.backgroundColor = "rgb(228, 228, 228)";
        document.getElementById("roll-number").src= "img/dee_face_1.png";
      } else {
        currentPlayer = 1;
        document.getElementById("player1").style.backgroundColor = "rgb(228, 228, 228)";
        document.getElementById("player2").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("roll-number").src= "img/dee_face_1.png";
      }
    }