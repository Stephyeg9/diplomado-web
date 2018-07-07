$(function () {
    // Selectors
        var pageNav = $('#pageNav'),
        cardCurrentMatch = $('#cardCurrentMatch'),
        currentMatchHomeTeam = $('#currentMatchHomeTeam'),
        currentMatchAwayTeam = $('#currentMatchAwayTeam'),
        currentMatchMinute = $('#currentMatchMinute'),
        currentMatchHomeGoals =$('#currentMatchHomeGoals'),
        currentMatchHomePenalties =$('#currentMatchHomePenalties'),
        currentMatchAwayGoals =$('#currentMatchAwayGoals'),
        currentMatchAwayPenalties =$('#currentMatchAwayPenalties'),
        currentMatchHomeYellowCard =$('#currentMatchHomeYellowCard'),
        currentMatchHomeRedCards =$('#currentMatchHomeRedCards'),
        currentMatchAwayYellowCard =$('#currentMatchAwayYellowCard'),
        currentMatchAwayRedCards =$('#currentMatchAwayRedCards'),
        cardTemplate = $('#cardTemplate').html(),
        cardContent = $('#cardContent');


    var tabsItems=$('.tabs__item');
    var tabsContents = $('.tabs__content');



            //para quitar la variable
            //var pageNav = $('#pageNav');
            //var currentMatchHomeTeam = $('#currentMatchHomeTeam');
            //var currentMatchAwayTeam = $('#currentMatchAwayTeam');
            //var currentMatchMinute = $('#currentMatchMinute');
            //var currentMatchHomeGoals =$('#currentMatchHomeGoals');
            //var currentMatchHomePenalties =$('#currentMatchHomePenalties');
            //var currentMatchAwayGoals =$('#currentMatchAwayGoals');
            //var currentMatchAwayPenalties =$('#currentMatchAwayPenalties');
            //var currentMatchHomeYellowCard =$('#currentMatchHomeYellowCard');
            //var currentMatchHomeRedCards =$('#currentMatchHomeRedCards');
            //var currentMatchAwayYellowCard =$('#currentMatchAwayYellowCard');
            //var currentMatchAwayRedCards =$('#currentMatchAwayRedCards');


    // Statements
    pageNav.sticky({
        //topSpacing: 25,
        zIndex: 10,
    });

    var template = Handlebars.compile(cardTemplate);
   
    var setCurrentMatchValues = function (data) {
        //MATCH
        var firstMatch = data[0],
         time = firstMatch.time;

        //Home Team 
        var homeTeam = firstMatch.home_team.country,
            homeGoals = firstMatch.home_team.goals,
            homePenalties = firstMatch.home_team.penalties,
            homeYellowCards = firstMatch.home_team_statistics.yellow_cards,
            homeRedCards = firstMatch.home_team_statistics.red_cards;
     

        //Away Team 
        var awayTeam = firstMatch.away_team.country,
            awayGoals = firstMatch.away_team.goals,
            awayPenalties = firstMatch.away_team.penalties,
            awayYellowCards = firstMatch.away_team_statistics.yellow_cards,
            awayRedCards = firstMatch.away_team_statistics.red_cards;

        //Set Values

        currentMatchMinute.text(time);
        currentMatchHomeTeam.text(homeTeam)
        currentMatchAwayTeam.text(awayTeam)
        currentMatchHomeGoals.text(homeGoals);
        currentMatchHomePenalties.text(homePenalties);
        currentMatchAwayGoals.text(awayGoals);
        currentMatchAwayPenalties.text(awayPenalties);
        currentMatchHomeYellowCard.text(homeYellowCards);
        currentMatchHomeRedCards.text(homeRedCards);
        currentMatchAwayYellowCard.text(awayYellowCards);
        currentMatchAwayRedCards.text(awayRedCards);
    };

    // Request 
    $.ajax('https://worldcup.sfg.io/matches/current',{
        beforeSend: function(){
            cardCurrentMatch.addClass('loading');
        },
        success: function (data){
                //setCurrentMatchValues(data);
                var myCard = template(data[0]);
                cardContent.append(myCard);
    
          
        },
        error: function(jqXHR, textStatus) {
            alert('Sólo se permiten 10 peticiones por minuto');
         
        },
        complete: function(){
            cardCurrentMatch.removeClass('loading');
        }


    })
        //.done(setCurrentMatchValues);
    
        
      
    // Lightbox configuracion 
    lightbox.option({
        albumLabel: "Esta es la imagen  %1 of %2",
        disableScrolling: true, 
        positionFromTop: 100,
        fadeDuration: 1200,
        imageFadeDuration: 5000,

    });

// TABS ITEM- tabs component
tabsItems.on('click' , function() {
    //se obtiene el numero de indice que ocupa el item al que le hacemos clic.
    var indexItem = tabsItems.index(this);
 

    //Se elimina la clase "active! a todos los elemtentos"
    tabsItems.removeClass('active');

    //Se elimina la clase "active! a todos los elemtentos"
    tabsContents.removeClass('active');

    //Se añade la clase "active" al item sobre el que se hace click
   $(this).addClass('active');
   $(tabsContents[indexItem]).addClass('active');
})
});
