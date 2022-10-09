const game = {
  gamePices: [
    {
      type: 'stupidity', location: 'Library', name: 'Taylor Swift'
    }, {
      type: 'stinky feet', location: 'Bounce House', name: 'Harry Styles'
    }, {
      type: 'in-laws', location: 'Master Suite', name: 'Myself'
    }
  ]
};

function interator() {
  for (let i = 0; i < game.gamePices.length; i++) {
    console.log(game.gamePices[i]);
  }
}

interator();

// game.name = [];
// game.name[0] = 'Harry Styles';
// game.name[1] = 'Myself';
// game.name.push('Taylor Swift');
