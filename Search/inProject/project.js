"use strict";
exports.__esModule = true;
var gameList = [
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
];
var recordItemList = [
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
];
// explicação Map: map pega uma informação (gameList) e cria uma função baseada nela (game) apartir desse momento a função que possui as informações do mesmo
// * e após tratar o a informação a chamada (mappedGames) tem as novas informações para uso
// Exemple:
var mappedGames = gameList.map(function (game) {
    return {
        x: game.title + " | " + game.platform,
        y: 0
    };
});
console.log('examples');
console.log(mappedGames);
// FILTER
// Ele pega para conferir em todas as tabelas (RecordItem) se existem mais de uma com o mesmo titulo (gameTitle) 
// * e plataforma pra assim fazer a contagem e então  em outro momendo passar para o mapeamento 
// SORT
// Ele na (Constante) ele informa a ordem (Decrescente)
var buildBarSeries = function (games, records) {
    var mappedGames = gameList.map(function (game) {
        var filteredGames = records.filter(function (record) {
            return record.gameTitle == game.title && record.gamePlatform === game.platform;
        });
        return {
            x: game.title + " | " + game.platform,
            y: filteredGames.length
        };
    });
    var sortedGames = mappedGames.sort(function (a, b) { return b.y - a.y; });
    return sortedGames.slice(0, 8);
};
console.log('GRÁFICO DE BARRAS: ------------------------------');
console.log(buildBarSeries(gameList, recordItemList));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
var getPlatformChartData = function (records) {
    var platforms = ['PC', 'PLAYSTATION', 'XBOX'];
    var series = platforms.map(function (platform) {
        var filteredGames = records.filter(function (record) {
            return record.gamePlatform === platform;
        });
        return filteredGames.length;
    });
    return {
        labels: platforms,
        series: series
    };
};
console.log('GRÁFICO DE ROSCA (PLATAFORMAS): ------------------------------');
console.log(getPlatformChartData(recordItemList));
//---------------------------------------------------------------------------------------------------------------------------------------------------------
//COMPLEX_LIST
//Começa com uma a chamada da contagem que diz asim se os (RecordItem) se for diferente de nada (undefined) ele acrescenta mais um na contagem
// * ele acrescenta mais um na contagem se não existir ele cria o primeiro depois chama a contagem em si depois passa as informações que vão ser
// * chamadas e as retorna (Return)
var getGenreChartData = function (records) {
    var computeRecordsItem = function (obj, record) {
        if (obj[record.genreName] !== undefined) { //se ele ja existir diferente 
            obj[record.genreName] += 1; //ele mesmo e mais 1
        }
        else {
            obj[record.genreName] = 1; //se ele não existir
        }
        return obj;
    };
    var genreByAmount = records.reduce(computeRecordsItem, {});
    var labels = Object.keys(genreByAmount); //macete para pegar o nome dos objetos
    var series = labels.map(function (x) { return genreByAmount[x]; }); // faz a contade diretamente do labels
    return {
        labels: labels,
        series: series
    };
};
console.log('GRÁFICO DE ROSCA (Generos): ------------------------------');
console.log(getGenreChartData(recordItemList));
