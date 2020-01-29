const team = {
  _players: [
    {firstName: 'Pablo', lastName: 'Escabar', age: 21},
    {firstName: 'Tony', lastName: 'Soprano',  age: 37},
    {firstName: 'Lucky', lastName: 'Luciano', age: 45},
  ], 
  _games: [
    {oppenent: 'Mexican Cartel', teamPoints: 42, opponentPoints: 41}, 
    {oppenent: 'Columbian Cartel', teamPoints: 41, opponentPoints: 25}, 
    {oppenent: 'South Side Bloods', teamPoints: 65, opponentPoints: 32}
  ], 
  //get method for players 
  get _player(){ 
    return this.player;
  }, 
  
  //get method for games 
  get _game(){ 
    return this.game;
  },
  
  //add player to team _players
   addPlayer(firstName, lastName, age){ 
    let player = { 
      firstName, 
      lastName, 
      age,
    }; 
    this._players.push(player);
  },
  
  //adds new game stats to _games 
   addgame(opponent, teamPoints, opponentPoints ){ 
    let game = { 
      opponent, 
      teamPoints, 
      opponentPoints
    }; 
     this._games.push(game);
  }
  
  
}; 
/////////////////END OF TEAM OBJECT///////////////////////////////////
//adds new members to the bad team
team.addPlayer('Steph', 'Curry', 29); 
team.addPlayer('Lisa', 'Leslie', 44); 
team.addPlayer('Bugs','Bunny', 76)

//adds new records to _game 
team.addgame('LAPD', 54, 45); 
team.addgame('NYPD', 23, 45); 
team.addgame('SPD', 78, 90); 
console.log(team._games);
//console.log(team._players[0].firstName); //access firstName at index 0

