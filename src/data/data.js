const data = [
  {
    country: "Germany",
    capital: "Berlin",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  },
  {
    country: "France",
    capital: "Paris",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    country: "Italy",
    capital: "Rome",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
  },
  {
    country: "Spain",
    capital: "Madrid",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
  },
  {
    country: "United Kingdom",
    capital: "London",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    country: "Netherlands",
    capital: "Amsterdam",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  },
  {
    country: "Belgium",
    capital: "Brussels",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
  },
  {
    country: "Sweden",
    capital: "Stockholm",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
  },
  {
    country: "Norway",
    capital: "Oslo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  },
  {
    country: "Denmark",
    capital: "Copenhagen",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
  },
  {
    country: "Finland",
    capital: "Helsinki",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
  },
  {
    country: "Poland",
    capital: "Warsaw",
    flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
  },
  {
    country: "Austria",
    capital: "Vienna",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
  },
  {
    country: "Switzerland",
    capital: "Bern",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
  },
  {
    country: "Greece",
    capital: "Athens",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
  },
  {
    country: "Portugal",
    capital: "Lisbon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  },
  {
    country: "Ireland",
    capital: "Dublin",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  },
  {
    country: "Czech Republic",
    capital: "Prague",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
  },
  {
    country: "Hungary",
    capital: "Budapest",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
  },
  {
    country: "Slovakia",
    capital: "Bratislava",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
  },
  {
    country: "Croatia",
    capital: "Zagreb",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
  },
  {
    country: "Bulgaria",
    capital: "Sofia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
  },
  {
    country: "Romania",
    capital: "Bucharest",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
  },
  {
    country: "Serbia",
    capital: "Belgrade",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
  },
  {
    country: "Slovenia",
    capital: "Ljubljana",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
  },
  {
    country: "Estonia",
    capital: "Tallinn",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
  },
  {
    country: "Latvia",
    capital: "Riga",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
  },
  {
    country: "Lithuania",
    capital: "Vilnius",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
  },
  {
    country: "Iceland",
    capital: "Reykjavik",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
  },
  {
    country: "Luxembourg",
    capital: "Luxembourg",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
  },
  {
    country: "Andorra",
    capital: "Andorra la Vella",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
  },
  {
    country: "Malta",
    capital: "Valletta",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
  },
  {
    country: "Monaco",
    capital: "Monaco",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
  },
  {
    country: "San Marino",
    capital: "San Marino",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
  },
  {
    country: "Liechtenstein",
    capital: "Vaduz",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
  },
  {
    country: "Montenegro",
    capital: "Podgorica",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
  },
  {
    country: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
  },
  {
    country: "Albania",
    capital: "Tirana",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
  },
  {
    country: "North Macedonia",
    capital: "Skopje",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg",
  },
  {
    country: "Ukraine",
    capital: "Kyiv",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  },
  {
    country: "Belarus",
    capital: "Minsk",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
  },
  {
    country: "Moldova",
    capital: "Chisinau",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
  },
  {
    country: "Russia",
    capital: "Moscow",
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
  },
  {
    country: "Georgia",
    capital: "Tbilisi",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
  },
  {
    country: "Armenia",
    capital: "Yerevan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
  },
  {
    country: "Azerbaijan",
    capital: "Baku",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
  },
];

module.exports = data;
