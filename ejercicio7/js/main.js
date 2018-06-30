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
    
        
      

    


});


    
