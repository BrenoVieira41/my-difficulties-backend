export { }

type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';

type RecordItem = {
    gameTitle: string;
    gamePlatform: Platform,
    genreName: string;
}

type Game = {
    id: number;
    title: string;
    platform: Platform;
}

const gameList : Game[] = [
    {
        "id": 1,
        "title": "The Witcher 3",
        "platform": "XBOX"
    },
    {
        "id": 2,
        "title": "The Witcher 3",
        "platform": "PLAYSTATION"
    },
    {
        "id": 3,
        "title": "Overwatch",
        "platform": "PC"
    }
]

const recordItemList : RecordItem[] = [
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "PLAYSTATION",
        "genreName": "RPG"
    },
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "XBOX",
        "genreName": "RPG"
    },
    {
        "gameTitle": "Overwatch",
        "gamePlatform": "PC",
        "genreName": "Shooter"
    },
    {
        "gameTitle": "Overwatch",
        "gamePlatform": "PC",
        "genreName": "Shooter"
    },
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "PLAYSTATION",
        "genreName": "RPG"
    },
]

// explicação Map: map pega uma informação (gameList) e cria uma função baseada nela (game) apartir desse momento a função que possui as informações do mesmo
// * e após tratar o a informação a chamada (mappedGames) tem as novas informações para uso
// Exemple:
const mappedGames = gameList.map(game => {
  return {
    x: `${game.title} | ${game.platform}`,
    y: 0
  }
});

console.log('examples');
console.log(mappedGames);

// FILTER
// Ele pega para conferir em todas as tabelas (RecordItem) se existem mais de uma com o mesmo titulo (gameTitle) 
// * e plataforma pra assim fazer a contagem e então  em outro momendo passar para o mapeamento 

// SORT
// Ele na (Constante) ele informa a ordem (Decrescente)

const buildBarSeries = (games: Game[], records: RecordItem[]) => {

  const mappedGames = gameList.map(game => {


  const filteredGames = records.filter(record => {
    return record.gameTitle == game.title && record.gamePlatform === game.platform;
  })

    return {
      x: `${game.title} | ${game.platform}`,
      y: filteredGames.length
    }
  });

  const sortedGames = mappedGames.sort((a, b) => b.y - a.y);
  return sortedGames.slice(0, 8);
}
console.log('GRÁFICO DE BARRAS: ------------------------------');
console.log(buildBarSeries(gameList, recordItemList))

// ----------------------------------------------------------------------------------------------------------------------------------------------------------


const getPlatformChartData = (records: RecordItem[]) => {
  
  const platforms = ['PC', 'PLAYSTATION', 'XBOX'];

  const series = platforms.map(platform => {
    const filteredGames = records.filter(record => {
      return record.gamePlatform === platform;
    });

    return filteredGames.length;
  })

  return {
    labels: platforms,
    series
  }

}

console.log('GRÁFICO DE ROSCA (PLATAFORMAS): ------------------------------')
console.log(getPlatformChartData(recordItemList))

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//COMPLEX_LIST
//Começa com uma a chamada da contagem que diz asim se os (RecordItem) se for diferente de nada (undefined) ele acrescenta mais um na contagem
// * ele acrescenta mais um na contagem se não existir ele cria o primeiro depois chama a contagem em si depois passa as informações que vão ser
// * chamadas e as retorna (Return)

const getGenreChartData = (records : RecordItem[]) => {

  const computeRecordsItem = (obj, record) => {
    if (obj[record.genreName] !== undefined) { //se ele ja existir diferente 
        obj[record.genreName] += 1;  //ele mesmo e mais 1
    }
    else {
      obj[record.genreName] = 1; //se ele não existir
    }

    return obj
  }

  const genreByAmount = records.reduce(computeRecordsItem, {});

  const labels =  Object.keys(genreByAmount) //macete para pegar o nome dos objetos
  const series = labels.map(x => genreByAmount[x]) // faz a contade diretamente do labels

  return {
    labels,
    series
  }
}

console.log('GRÁFICO DE ROSCA (Generos): ------------------------------')
console.log(getGenreChartData(recordItemList))