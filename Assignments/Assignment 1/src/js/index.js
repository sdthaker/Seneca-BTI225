(function() {

  let countries = {
  
    // all: window.countriesData,

    getByLanguage: function(language) {

      let country = [];

      if(language == "English" || language == undefined){
      
        for(var i = 0; i < countriesData.length; i++) {
          country[i] = {
           code: countriesData[i].code,
           continent: countriesData[i].continent,
           areaInKm2: countriesData[i].areaInKm2,
           population: countriesData[i].population,
           capital: countriesData[i].capital,
           name: countriesData[i].name.English
          }
       }     
      }
      else if(language == "Arabic"){
        for(var i = 0; i < countriesData.length; i++) {
          country[i] = {
           code: countriesData[i].code,
           continent: countriesData[i].continent,
           areaInKm2: countriesData[i].areaInKm2,
           population: countriesData[i].population,
           capital: countriesData[i].capital,
           name: countriesData[i].name.Arabic
          }
       }
      }
      else if(language == "Chinese"){
        for(var i = 0; i < countriesData.length; i++) {
          country[i] = {
           code: countriesData[i].code,
           continent: countriesData[i].continent,
           areaInKm2: countriesData[i].areaInKm2,
           population: countriesData[i].population,
           capital: countriesData[i].capital,
           name: countriesData[i].name.Chinese
          }
       }
      }
      else if(language == "French"){
        for(var i = 0; i < countriesData.length; i++) {
          country[i] = {
           code: countriesData[i].code,
           continent: countriesData[i].continent,
           areaInKm2: countriesData[i].areaInKm2,
           population: countriesData[i].population,
           capital: countriesData[i].capital,
           name: countriesData[i].name.French
          }
       }
      }
      else if(language == "Hindi"){
        for(var i = 0; i < countriesData.length; i++) {
          country[i] = {
           code: countriesData[i].code,
           continent: countriesData[i].continent,
           areaInKm2: countriesData[i].areaInKm2,
           population: countriesData[i].population,
           capital: countriesData[i].capital,
           name: countriesData[i].name.Hindi
          }
       }
      }
      else if(language == "Korean"){
        for(var i = 0; i < countriesData.length; i++) {
          country[i] = {
           code: countriesData[i].code,
           continent: countriesData[i].continent,
           areaInKm2: countriesData[i].areaInKm2,
           population: countriesData[i].population,
           capital: countriesData[i].capital,
           name: countriesData[i].name.Korean
          }
       }
      }
      else if(language == "Japanese"){
        for(var i = 0; i < countriesData.length; i++) {
          country[i] = {
           code: countriesData[i].code,
           continent: countriesData[i].continent,
           areaInKm2: countriesData[i].areaInKm2,
           population: countriesData[i].population,
           capital: countriesData[i].capital,
           name: countriesData[i].name.Japanese
          }
       }
      }
      else if(language == "Russian"){
        for(var i = 0; i < countriesData.length; i++) {
          country[i] = {
           code: countriesData[i].code,
           continent: countriesData[i].continent,
           areaInKm2: countriesData[i].areaInKm2,
           population: countriesData[i].population,
           capital: countriesData[i].capital,
           name: countriesData[i].name.Russian
          }
       }
      }
      return country;
    },

    getByPopulation: function(minPopulation, maxPopulation) {

      var data = this.getByLanguage("English"), arr = [], flag = true, j = 0;

      if(maxPopulation == undefined) flag = false;

      if(flag) {
        for(var i = 0; i < data.length; i++) {
        if(data[i].population >= minPopulation && data[i].population <= maxPopulation) {
          arr[j] = {
            code: data[i].code,
            continent: data[i].continent,
            areaInKm2: data[i].areaInKm2,
            population: data[i].population,
            capital: data[i].capital,
            name: data[i].name
           }
           j++;
        }
      }
    }
      else{
        for(var i = 0; i < data.length; i++) {
        if(data[i].population >= minPopulation) {
          arr[j] = {
            code: data[i].code,
            continent: data[i].continent,
            areaInKm2: data[i].areaInKm2,
            population: data[i].population,
            capital: data[i].capital,
            name: data[i].name
           }
           j++;
        }
      }
    }
    return arr;
    },

    getByAreaAndContinent: function(continent, minArea) {
      
      var data = this.getByLanguage("English"), arr = [], flag = true, j = 0;

      if(minArea == undefined) flag = false;

      if(flag) {
        for(var i = 0; i < data.length; i++) {
        if(data[i].continent == 'Americas' && data[i].areaInKm2 >= minArea) {
          arr[j] = {
            code: data[i].code,
            continent: data[i].continent,
            areaInKm2: data[i].areaInKm2,
            population: data[i].population,
            capital: data[i].capital,
            name: data[i].name
           }
           j++;
        }
      }
    }
      else{
        for(var i = 0; i < data.length; i++) {
        if(data[i].continent == 'Asia') {
          arr[j] = {
            code: data[i].code,
            continent: data[i].continent,
            areaInKm2: data[i].areaInKm2,
            population: data[i].population,
            capital: data[i].capital,
            name: data[i].name
           }
           j++;
        }
      }
    }
    return arr;
    }
  };

  let tableHelper = {
    
    clearTable: function() {
      document.getElementById('table-rows').innerHTML = "";
    },

    countryCodeToFlagImg: function(countryCode) {
      var flag = document.createElement('img');
      countryCode = countryCode.toLowerCase();
      flag.setAttribute('src',`./flags/${countryCode}.png`);
      flag.setAttribute('alt', '');
      return flag;
    },

    countryToRow: function(country) {
      var row = document.createElement('tr'),cell = [];

      for(var i = 0; i < 7; i++)
        cell[i] = document.createElement('td');

      cell[0].appendChild(tableHelper.countryCodeToFlagImg(country.code));
      cell[1].innerHTML = country.code;
      cell[2].innerHTML = country.name;
      cell[3].innerHTML = country.continent;
      cell[4].innerHTML = country.areaInKm2;
      cell[5].innerHTML = country.population;
      cell[6].innerHTML = country.capital;

      for (var i = 0; i < 7; i++)
        row.appendChild(cell[i]);
      return row;
    },

    countriesToTable: function(countries) {
      tableHelper.clearTable();
      var ref = document.querySelector('#table-rows');
      
      // for(var i = 0; i < countries.length; i++)
      //   arr[i] = tableHelper.countryToRow(countries[i]);

      // for(var i = 0; i < arr.length; i++)
      //   ref.appendChild(arr[i]);

      //  for(var i = 0; i < countries.length; i++) {
      //   countries[i] = tableHelper.countryToRow(countries[i]);
      //   ref.appendChild(countries[i]);
      // }

      for(var i = 0; i < countries.length; i++) {
        ref.appendChild(tableHelper.countryToRow(countries[i]));
      }
  }
}

  function setupMenuHandlers() {

    var countryArray = [], ref = document.querySelector('#subtitle');

    document.querySelector('#menu_english').addEventListener('click', function() {
      countryArray = countries.getByLanguage('English');
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Country/Dep. Name in English';
    });

    document.querySelector('#menu_arabic').addEventListener('click', function() {
      countryArray = countries.getByLanguage('Arabic');
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Country/Dep. Name in Arabic(عربي)';
    });

    document.querySelector('#menu_chinese').addEventListener('click', function() {
      countryArray = countries.getByLanguage('Chinese');
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Country/Dep. Name in Chinese(中国人)';
    });

    document.querySelector('#menu_french').addEventListener('click', function() {
      countryArray = countries.getByLanguage('French');
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Country/Dep. Name in French(français)';
    });

    document.querySelector('#menu_hindi').addEventListener('click', function() {
      countryArray = countries.getByLanguage('Hindi');
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Country/Dep. Name in Hindi(हिन्दी)';
    });

    document.querySelector('#menu_korean').addEventListener('click', function() {
      countryArray = countries.getByLanguage('Korean');
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Country/Dep. Name in Korean(한국어)';
    });

    document.querySelector('#menu_japanese').addEventListener('click', function() {
      countryArray = countries.getByLanguage('Japanese');
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Country/Dep. Name in Japanese(日本語)';
    });

    document.querySelector('#menu_russian').addEventListener('click', function() {
      countryArray = countries.getByLanguage('Russian');
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Country/Dep. Name in Russian(русский)';
    });

    document.querySelector('#menu_population_100_000_000m').addEventListener('click', function() {
      countryArray = countries.getByPopulation(100000000);
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Population &gt; 100,000,000';
    });

    document.querySelector('#menu_population_1m_2m').addEventListener('click', function() {
      countryArray = countries.getByPopulation(1000000, 2000000);
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Population between 1 &#126; 2 million';
    });
    
    document.querySelector('#menu_americas_1mkm').addEventListener('click', function() {
      countryArray = countries.getByAreaAndContinent('Americas', 1000000);
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - Americas, 1 million Km<sup>2</sup>';
    });

    document.querySelector('#menu_asia_all').addEventListener('click', function() {
      countryArray = countries.getByAreaAndContinent('Asia');
      tableHelper.countriesToTable(countryArray);
      ref.innerHTML = 'List of Countries and Dependencies - All Size, Asia';
    });
  }

  window.onload = setupMenuHandlers;
}
)();
