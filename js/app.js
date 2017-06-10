(function(){
// Person 4

function getPerson4(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load',function(){

    var personName  = document.getElementById("person4Name");
    var response = JSON.parse(this.responseText);
    var person = document.createElement('div');
    person.innerHTML = response.name;
    personName.appendChild(person);

  });
  oReq.open('GET',`http://www.swapi.co/api/people/4`);
  oReq.send();
}

//Person 14

function getPerson14(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load',function(){

    var personName  = document.getElementById("person14Name");
    var response = JSON.parse(this.responseText);
    var person = document.createElement('div');
    person.innerHTML = response.name;
    personName.appendChild(person);

  });
  oReq.open('GET',`http://www.swapi.co/api/people/14`);
  oReq.send();
}

//Species

function getSpecies(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load',function(){

    var personSpecies  = document.getElementById("person14Species");
    var response = JSON.parse(this.responseText);
    var person = document.createElement('div');
    person.innerHTML = response.name;
    personSpecies.appendChild(person);

  });
  oReq.open('GET',`http://www.swapi.co/api/species/1`);
  oReq.send();
}

//Home World

function getHomeWorld(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load',function(){

    var personSpecies  = document.getElementById("person4HomeWorld");
    var response = JSON.parse(this.responseText);
    var person = document.createElement('div');
    person.innerHTML = response.name;
    personSpecies.appendChild(person);

  });
  oReq.open('GET',`http://www.swapi.co/api/planets/1`);
  oReq.send();

}

//Films

function getFilm(){

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load",function(){

   var response = JSON.parse(this.responseText);

   for (var i = 0, len = response.results.length; i < len; i++){

      var film  = document.getElementById("filmList");

      var filmList = document.createElement('li');
      filmList.className = "film";
      film.appendChild(filmList);

      var head2 = document.createElement('h2');
      head2.innerHTML = response.results[i].title;
      filmList.appendChild(head2);

      var head3 = document.createElement('h3');
      head3.innerHTML = "Planets";
      filmList.appendChild(head3);

      var filmPlanets = document.createElement('ul');
      filmList.appendChild(filmPlanets);


      for (var p = 0; p < response.results[i].planets.length; p++){

        (function(myPlanets){

          var pReq = new XMLHttpRequest();
          pReq.addEventListener("load", function(){

            var presponse = JSON.parse(this.responseText);

            var planet = document.createElement('li');

            var planetName = document.createElement('h4');
            planetName.innerHTML = presponse.name;
            planet.appendChild(planetName);
            myPlanets.appendChild(planet);

          });

          pReq.open("GET",response.results[i].planets[p]);
          pReq.send();


        })(filmPlanets);

      }
    }
  });

    oReq.open("GET","http://www.swapi.co/api/films/");
    oReq.send();

}


getPerson4();

getPerson14();

getSpecies();

getHomeWorld();

getFilm();

})();