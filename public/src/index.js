import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDQuDkAErVuA53Qf2qMz7GdU6Pl312Lv1Y",
  authDomain: "kronerstats.firebaseapp.com",
  databaseURL: "https://kronerstats-default-rtdb.firebaseio.com",
  projectId: "kronerstats",
  storageBucket: "kronerstats.appspot.com",
  messagingSenderId: "358876490906",
  appId: "1:358876490906:web:8cb460fc0d8e55dd220323"
};

initializeApp(firebaseConfig)


function addItemsToList(_p1sips, _p2sips, _winner, _round, _time){
  var container=document.querySelector(".container")
  var leaderboardContainer=document.createElement("div")
  leaderboardContainer.classList.add("leaderboard-container")
  var ul=document.createElement("ul")
  ul.classList.add("leaderboard-container__table")
  var winner=document.createElement("li")
  winner.classList.add("table-item__winner")
  var p1Sips=document.createElement("li")
  p1Sips.classList.add("table-item__player1")
  var p2Sips=document.createElement("li")
  p2Sips.classList.add("table-item__player2")
  var table=document.createElement("li")
  var time=document.createElement("div")
  var round=document.createElement("div")


  container.appendChild(leaderboardContainer);
  leaderboardContainer.appendChild(ul);
  ul.appendChild(winner);
  ul.appendChild(p1Sips);
  ul.appendChild(p2Sips);
  ul.appendChild(table);
  table.appendChild(time);
  table.appendChild(round);

  winner.textContent = _winner;
  p1Sips.textContent=_p1sips;
  p2Sips.textContent=_p2sips;
  time.innerHTML=_time;
  round.innerHTML=_round;

  

}



const dbRef = ref(getDatabase());
get(child(dbRef, `Kroner`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    snapshot.forEach(
      function(ChildSnapshot){
          let _p1sips = ChildSnapshot.val().playerOneSips;
          let _p2sips = ChildSnapshot.val().playerTwoSips;
          let _winner = ChildSnapshot.val().winner;
          let _round = ChildSnapshot.val().round;
          let _time = ChildSnapshot.val().time;
          addItemsToList(_p1sips, _p2sips, _winner, _round, _time)
      }
  )
    
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});









/* import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: "AIzaSyDQuDkAErVuA53Qf2qMz7GdU6Pl312Lv1Y",
    authDomain: "kronerstats.firebaseapp.com",
    databaseURL: "https://kronerstats-default-rtdb.firebaseio.com",
    projectId: "kronerstats",
    storageBucket: "kronerstats.appspot.com",
    messagingSenderId: "358876490906",
    appId: "1:358876490906:web:8cb460fc0d8e55dd220323"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

  var gameNo=0;
  function addItemsToList(winner, p1Sips, p2Sips){
    var container=document.querySelector("container")
    var leaderboardContainer=document.querySelector(".leaderboard-container")
    var ul=document.getElementById("list")
    var winner=document.createElement("li")
    var p1Sips=document.createElement("li")
    var p2Sips=document.createElement("li")
    var table=document.createElement("li")
    var time=document.createElement("div")
    var round=document.createElement("div")

    winner.innerHtml=_winner;
    p1Sips.innerHtml=_p1sips;
    p2Sips.innerHtml=_p2sips;
    time.innerHTML=_time;
    round.innerHTML=_round;

    container.appendChild(leaderboardContainer);
    leaderboardContainer.appendChild(ul);
    ul.appendChild(winner);
    ul.appendChild(p1Sips);
    ul.appendChild(p2Sips);
    ul.appendChild(table);
    table.appendChild(time);
    table.appendChild(round);

  }

  function fetchData(){
    firebase.database().ref("Kroner").once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let _p1sips = ChildSnapshot.val().playerOneSips;
                let _p2sips = ChildSnapshot.val().playerTwoSips;
                let _winner = ChildSnapshot.val().winner;
                let _round = ChildSnapshot.val().round;
                let _time = ChildSnapshot.val().time;
                addItemsToList(_p1sips, _p2sips, _winner, _round, _time)
            }
        )
    })
  }

  window.onload(fetchData()); */