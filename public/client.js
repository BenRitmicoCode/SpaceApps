var points;
var initMap;
var waterDataOne = [ 
  {
   "FIELD1": "Afghanistan",
   "FIELD2": "1,055"
 },
 {
   "FIELD1": "Albania",
   "FIELD2": "597.5"
 },
 {
   "FIELD1": "Algeria",
   "FIELD2": "196.1"
 },
 {
   "FIELD1": "Angola",
   "FIELD2": "42.24"
 },
 {
   "FIELD1": "Antigua and Barbuda",
   "FIELD2": "79.37"
 },
 {
   "FIELD1": "Argentina",
   "FIELD2": "864.5"
 },
 {
   "FIELD1": "Armenia",
   "FIELD2": "920.2"
     
 },
 {
   "FIELD1": "Australia",
   "FIELD2": "1,149"
 },
 {
   "FIELD1": "Austria",
   "FIELD2": "452.4"
 },
 {
   "FIELD1": "Azerbaijan",
   "FIELD2": "1,415"
     
 },
 {
   "FIELD1": "Bahrain",
   "FIELD2": "470.3"
 },
 {
   "FIELD1": "Bangladesh",
   "FIELD2": "224.2"
 },
 {
   "FIELD1": "Barbados",
   "FIELD2": "242.6"
 },
 {
   "FIELD1": "Belarus",
   "FIELD2": "435.7"
 },
 {
   "FIELD1": "Belgium",
   "FIELD2": "590.3"
 },
 {
   "FIELD1": "Belize",
   "FIELD2": "568.2"
 },
 {
   "FIELD1": "Benin",
   "FIELD2": "18.28"
     
 },
 {
   "FIELD1": "Bhutan",
   "FIELD2": "492"
 },
 {
   "FIELD1": "Bolivia (Plurinational State of)",
   "FIELD2": "234"
 },
 {
   "FIELD1": "Bosnia and Herzegovina",
   "FIELD2": "89.85"
 },
 {
   "FIELD1": "Botswana",
   "FIELD2": "109.5"
 },
 {
   "FIELD1": "Brazil",
   "FIELD2": "305.4"
 },
 {
   "FIELD1": "Brunei Darussalam",
   "FIELD2": "296.8"
 },
 {
   "FIELD1": "Bulgaria",
   "FIELD2": "805.9"
 },
 {
   "FIELD1": "Burkina Faso",
   "FIELD2": "79.19"
 },
 {
   "FIELD1": "Burundi",
   "FIELD2": "42.56"
     
 },
 {
   "FIELD1": "C�te d'Ivoire",
   "FIELD2": "77.95",
   "FIELD4": ""
 },
 {
   "FIELD1": "Cambodia",
   "FIELD2": "152.5"
 },
 {
   "FIELD1": "Cameroon",
   "FIELD2": "57.7",
   "FIELD4": ""
 },
 {
   "FIELD1": "Canada",
   "FIELD2": "1,468",
   "FIELD4": ""
 },
 {
   "FIELD1": "Cape Verde",
   "FIELD2": "48.35"
 },
 {
   "FIELD1": "Central African Republic",
   "FIELD2": "17.17"
 },
 {
   "FIELD1": "Chad",
   "FIELD2": "40.63"
 },
 {
   "FIELD1": "Chile",
   "FIELD2": "718.6"
 },
 {
   "FIELD1": "China",
   "FIELD2": "414.6"
 },
 {
   "FIELD1": "Colombia",
   "FIELD2": "307.9"
 },
 {
   "FIELD1": "Comoros",
   "FIELD2": "13.59"
 },
 {
   "FIELD1": "Congo",
   "FIELD2": "14.47"
 },
 {
   "FIELD1": "Costa Rica",
   "FIELD2": "653.7"
 },
 {
   "FIELD1": "Croatia",
   "FIELD2": "142.7"
 },
 {
   "FIELD1": "Cuba",
   "FIELD2": "678.2"
 },
 {
   "FIELD1": "Cyprus",
   "FIELD2": "213.5"
 },
 {
   "FIELD1": "Czech Republic",
   "FIELD2": "188.7"
 },
 {
   "FIELD1": "Democratic People's Republic of Korea",
   "FIELD2": "298"
 },
 {
   "FIELD1": "Democratic Republic of the Congo",
   "FIELD2": "11.55"
 },
 {
   "FIELD1": "Denmark",
   "FIELD2": "120.9"
 },
 {
   "FIELD1": "Djibouti",
   "FIELD2": "24.9"
 },
 {
   "FIELD1": "Dominica",
   "FIELD2": "247.8"
 },
 {
   "FIELD1": "Dominican Republic",
   "FIELD2": "382.5"
 },
 {
   "FIELD1": "Ecuador",
   "FIELD2": "1,208"
 },
 {
   "FIELD1": "Egypt",
   "FIELD2": "937"
 },
 {
   "FIELD1": "El Salvador",
   "FIELD2": "229.5"
 },
 {
   "FIELD1": "Equatorial Guinea",
   "FIELD2": "31.1"
 },
 {
   "FIELD1": "Eritrea",
   "FIELD2": "121.7"
 },
 {
   "FIELD1": "Estonia",
   "FIELD2": "1,337"
 },
 {
   "FIELD1": "Ethiopia",
   "FIELD2": "80.48"
     
 },
 {
   "FIELD1": "Fiji",
   "FIELD2": "100.5"
     
 },
 {
   "FIELD1": "Finland",
   "FIELD2": "309.3"
 },
 {
   "FIELD1": "France",
   "FIELD2": "512.4"
 },
 {
   "FIELD1": "Gabon",
   "FIELD2": "100.9"
 },
 {
   "FIELD1": "Gambia",
   "FIELD2": "51.26"
 },
 {
   "FIELD1": "Georgia",
   "FIELD2": "372"
 },
 {
   "FIELD1": "Germany",
   "FIELD2": "392.3"
 },
 {
   "FIELD1": "Ghana",
   "FIELD2": "47.96"
 },
 {
   "FIELD1": "Greece",
   "FIELD2": "852.3"
 },
 {
   "FIELD1": "Grenada",
   "FIELD2": "97.1"
 },
 {
   "FIELD1": "Guatemala",
   "FIELD2": "248.7"
 },
 {
   "FIELD1": "Guinea",
   "FIELD2": "186.1"
 },
 {
   "FIELD1": "Guinea-Bissau",
   "FIELD2": "127.8"
 },
 {
   "FIELD1": "Guyana",
   "FIELD2": "2,161"
 },
 {
   "FIELD1": "Haiti",
   "FIELD2": "134"
 },
 {
   "FIELD1": "Honduras",
   "FIELD2": "184"
 },
 {
   "FIELD1": "Hungary",
   "FIELD2": "557.2"
 },
 {
   "FIELD1": "Iceland",
   "FIELD2": "535.7"
   
 },
 {
   "FIELD1": "India",
   "FIELD2": "644.1"
 },
 {
   "FIELD1": "Indonesia",
   "FIELD2": "537.3"
 },
 {
   "FIELD1": "Iran (Islamic Republic of)",
   "FIELD2": "1,288"
 },
 {
   "FIELD1": "Iraq",
   "FIELD2": "2,525"
 },
 {
   "FIELD1": "Ireland",
   "FIELD2": "227.4"
 },
 {
   "FIELD1": "Israel",
   "FIELD2": "281.9"
 },
 {
   "FIELD1": "Italy",
   "FIELD2": "788.6"
 },
 {
   "FIELD1": "Jamaica",
   "FIELD2": "224"
 },
 {
   "FIELD1": "Japan",
   "FIELD2": "708.4"
 },
 {
   "FIELD1": "Jordan",
   "FIELD2": "158.4"
 },
 {
   "FIELD1": "Kazakhstan",
   "FIELD2": "2,214"
 },
 {
   "FIELD1": "Kenya",
   "FIELD2": "72.44"
   },
 {
   "FIELD1": "Kuwait",
   "FIELD2": "374.4"
 },
 {
   "FIELD1": "Kyrgyzstan",
   "FIELD2": "1,989"
 },
 {
   "FIELD1": "Lao People's Democratic Republic",
   "FIELD2": "535.8"
 },
 {
   "FIELD1": "Latvia",
   "FIELD2": "176.7"
 },
 {
   "FIELD1": "Lebanon",
   "FIELD2": "314.8"
 },
 {
   "FIELD1": "Lesotho",
   "FIELD2": "25.81"
 },
 {
   "FIELD1": "Liberia",
   "FIELD2": "58.39"
 },
 {
   "FIELD1": "Libyan Arab Jamahiriya",
   "FIELD2": "776.8"
 },
 {
   "FIELD1": "Lithuania",
   "FIELD2": "708.6"
 },
 {
   "FIELD1": "Luxembourg",
   "FIELD2": "134.4"
 },
 {
   "FIELD1": "Madagascar",
   "FIELD2": "906.7"
 },
 {
   "FIELD1": "Malawi",
   "FIELD2": "77.23"
 },
 {
   "FIELD1": "Malaysia",
   "FIELD2": "511.3"
 },
 {
   "FIELD1": "Maldives",
   "FIELD2": "19.34"
 },
 {
   "FIELD1": "Mali",
   "FIELD2": "594.5"
 },
 {
   "FIELD1": "Malta",
   "FIELD2": "136.8"
 },
 {
   "FIELD1": "Mauritania",
   "FIELD2": "581.5"
 },
 {
   "FIELD1": "Mauritius",
   "FIELD2": "570.4"
 },
 {
   "FIELD1": "Mexico",
   "FIELD2": "735.1"
 },
 {
   "FIELD1": "Mongolia",
   "FIELD2": "204.1"
 },
 {
   "FIELD1": "Morocco",
   "FIELD2": "427.2"
 },
 {
   "FIELD1": "Mozambique",
   "FIELD2": "38.64"
 },
 {
   "FIELD1": "Myanmar",
   "FIELD2": "701.6"
 },
 {
   "FIELD1": "Namibia",
   "FIELD2": "158.1"
 },
 {
   "FIELD1": "Nepal",
   "FIELD2": "393.5"
 },
 {
   "FIELD1": "Netherlands",
   "FIELD2": "641.9"
 },
 {
   "FIELD1": "New Zealand",
   "FIELD2": "1,200"
 },
 {
   "FIELD1": "Nicaragua",
   "FIELD2": "245.4"
 },
 {
   "FIELD1": "Niger",
   "FIELD2": "200.4"
   },
 {
   "FIELD1": "Nigeria",
   "FIELD2": "78.67"
 },
 {
   "FIELD1": "Norway",
   "FIELD2": "622.7"
 },
 {
   "FIELD1": "Occupied Palestinian Territory",
   "FIELD2": "104.1"
 },
 {
   "FIELD1": "Oman",
   "FIELD2": "484.6"
 },
 {
   "FIELD1": "Pakistan",
   "FIELD2": "1,037"
 },
 {
   "FIELD1": "Panama",
   "FIELD2": "147.5"
 },
 {
   "FIELD1": "Papua New Guinea",
   "FIELD2": "47.82"
 },
 {
   "FIELD1": "Paraguay",
   "FIELD2": "87.96"
 },
 {
   "FIELD1": "Peru",
   "FIELD2": "722.6"
 },
 {
   "FIELD1": "Philippines",
   "FIELD2": "902.7"
 },
 {
   "FIELD1": "Poland",
   "FIELD2": "313.9"
 },
 {
   "FIELD1": "Portugal",
   "FIELD2": "817.5"
 },
 {
   "FIELD1": "Puerto Rico",
   "FIELD2": "252"
 },
 {
   "FIELD1": "Qatar",
   "FIELD2": "390.2"
 },
 {
   "FIELD1": "Republic of Korea",
   "FIELD2": "542.5"
 },
 {
   "FIELD1": "Republic of Moldova",
   "FIELD2": "483.5"
 },
 {
   "FIELD1": "Romania",
   "FIELD2": "321.9"
 },
 {
   "FIELD1": "Russian Federation",
   "FIELD2": "455.5"
 },
 {
   "FIELD1": "Rwanda",
   "FIELD2": "17.57"
 },
 {
   "FIELD1": "Saint Lucia",
   "FIELD2": "98.22"
   },
 {
   "FIELD1": "Saint Vincent and the Grenadines",
   "FIELD2": "92.59"
 },
 {
   "FIELD1": "Sao Tome and Principe",
   "FIELD2": "52.63"
 },
 {
   "FIELD1": "Saudi Arabia",
   "FIELD2": "959.1"
 },
 {
   "FIELD1": "Senegal",
   "FIELD2": "212.9"
   },
 {
   "FIELD1": "Serbia",
   "FIELD2": "418.8"
 },
 {
   "FIELD1": "Seychelles",
   "FIELD2": "165.1"
 },
 {
   "FIELD1": "Sierra Leone",
   "FIELD2": "108.6"
 },
 {
   "FIELD1": "Singapore",
   "FIELD2": "81.97"
 },
 {
   "FIELD1": "Slovakia",
   "FIELD2": "127.5"
 },
 {
   "FIELD1": "Slovenia",
   "FIELD2": "467.5"
 },
 {
   "FIELD1": "Somalia",
   "FIELD2": "377.6"
 },
 {
   "FIELD1": "South Africa",
   "FIELD2": "270.6"
 },
 {
   "FIELD1": "Spain",
   "FIELD2": "729.7"
 },
 {
   "FIELD1": "Sri Lanka",
   "FIELD2": "651.3"
 },
 {
   "FIELD1": "Sudan",
   "FIELD2": "1,020"
 },
 {
   "FIELD1": "Suriname",
   "FIELD2": "1,393"
 },
 {
   "FIELD1": "Swaziland",
   "FIELD2": "946.4"
 },
 {
   "FIELD1": "Sweden",
   "FIELD2": "285.6"
 },
 {
   "FIELD1": "Switzerland",
   "FIELD2": "359"
 },
 {
   "FIELD1": "Syrian Arab Republic",
   "FIELD2": "817.4"
 },
 {
   "FIELD1": "Tajikistan",
   "FIELD2": "1,895"
 },
 {
   "FIELD1": "Thailand",
   "FIELD2": "855.6"
 },
 {
   "FIELD1": "The former Yugoslav Republic of Macedonia",
   "FIELD2": "503.9"
 },
 {
   "FIELD1": "Timor-Leste",
   "FIELD2": "1,102"
 },
 {
   "FIELD1": "Togo",
   "FIELD2": "30.43"
 },
 {
   "FIELD1": "Trinidad and Tobago",
   "FIELD2": "177.5"
 },
 {
   "FIELD1": "Tunisia",
   "FIELD2": "296.2"
 },
 {
   "FIELD1": "Turkey",
   "FIELD2": "549.3"
 },
 {
   "FIELD1": "Turkmenistan",
   "FIELD2": "5,375"
 },
 {
   "FIELD1": "Uganda",
   "FIELD2": "12.66"
   },
 {
   "FIELD1": "Ukraine",
   "FIELD2": "801.2"
 },
 {
   "FIELD1": "United Arab Emirates",
   "FIELD2": "916.1"
 },
 {
   "FIELD1": "United Kingdom",
   "FIELD2": "212.5"
 },
 {
   "FIELD1": "United Republic of Tanzania",
   "FIELD2": "144.2"
 },
 {
   "FIELD1": "United States of America",
   "FIELD2": "1,550"
 },
 {
   "FIELD1": "Uruguay",
   "FIELD2": "1,100"
 },
 {
   "FIELD1": "Uzbekistan",
   "FIELD2": "2,345"
 },
 {
   "FIELD1": "Venezuela (Bolivarian Republic of)",
   "FIELD2": "357.8"
 },
 {
   "FIELD1": "Viet Nam",
   "FIELD2": "952.6"
 },
 {
   "FIELD1": "Yemen",
   "FIELD2": "160.1"
 },
 {
   "FIELD1": "Zambia",
   "FIELD2": "158.6"
 },
 {
   "FIELD1": "Zimbabwe",
   "FIELD2": "513.6"
 }
]
var  waterDataTwo = [
 {
   "FIELD1": "Country Name",
   "FIELD2": "Indicator Name",
   "FIELD3": 2015
 },
 {
   "FIELD1": "Aruba",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.1
 },
 {
   "FIELD1": "Afghanistan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 55.3
 },
 {
   "FIELD1": "Angola",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 49
 },
 {
   "FIELD1": "Albania",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.1
 },
 {
   "FIELD1": "Andorra",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Arab World",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 92.08670312
 },
 {
   "FIELD1": "United Arab Emirates",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.6
 },
 {
   "FIELD1": "Argentina",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.1
 },
 {
   "FIELD1": "Armenia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "American Samoa",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Antigua and Barbuda",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.9
 },
 {
   "FIELD1": "Australia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Austria",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Azerbaijan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 87
 },
 {
   "FIELD1": "Burundi",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 75.9
 },
 {
   "FIELD1": "Belgium",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Benin",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 77.9
 },
 {
   "FIELD1": "Burkina Faso",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 82.3
 },
 {
   "FIELD1": "Bangladesh",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 86.9
 },
 {
   "FIELD1": "Bulgaria",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.4
 },
 {
   "FIELD1": "Bahrain",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Bahamas, The",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.4
 },
 {
   "FIELD1": "Bosnia and Herzegovina",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.9
 },
 {
   "FIELD1": "Belarus",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.7
 },
 {
   "FIELD1": "Belize",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.5
 },
 {
   "FIELD1": "Bermuda",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Bolivia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90
 },
 {
   "FIELD1": "Brazil",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.1
 },
 {
   "FIELD1": "Barbados",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.7
 },
 {
   "FIELD1": "Brunei Darussalam",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Bhutan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Botswana",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.2
 },
 {
   "FIELD1": "Central African Republic",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 68.5
 },
 {
   "FIELD1": "Canada",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.8
 },
 {
   "FIELD1": "Central Europe and the Baltics",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.19246263
 },
 {
   "FIELD1": "Switzerland",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Channel Islands",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Chile",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99
 },
 {
   "FIELD1": "China",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.5
 },
 {
   "FIELD1": "Cote d'Ivoire",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 81.9
 },
 {
   "FIELD1": "Cameroon",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 75.6
 },
 {
   "FIELD1": "Congo, Dem. Rep.",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 52.4
 },
 {
   "FIELD1": "Congo, Rep.",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 76.5
 },
 {
   "FIELD1": "Colombia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 91.4
 },
 {
   "FIELD1": "Comoros",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90.1
 },
 {
   "FIELD1": "Cabo Verde",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 91.7
 },
 {
   "FIELD1": "Costa Rica",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.8
 },
 {
   "FIELD1": "Caribbean small states",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.61767196
 },
 {
   "FIELD1": "Cuba",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.9
 },
 {
   "FIELD1": "Curacao",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Cayman Islands",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.4
 },
 {
   "FIELD1": "Cyprus",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Czech Republic",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Germany",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Djibouti",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90
 },
 {
   "FIELD1": "Dominica",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Denmark",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Dominican Republic",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 84.7
 },
 {
   "FIELD1": "Algeria",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 83.6
 },
 {
   "FIELD1": "East Asia & Pacific (excluding high income)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.66919419
 },
 {
   "FIELD1": "Early-demographic dividend",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90.9277774
 },
 {
   "FIELD1": "East Asia & Pacific",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.13481315
 },
 {
   "FIELD1": "Europe & Central Asia (excluding high income)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.72730767
 },
 {
   "FIELD1": "Europe & Central Asia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.49359157
 },
 {
   "FIELD1": "Ecuador",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 86.9
 },
 {
   "FIELD1": "Egypt, Arab Rep.",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.4
 },
 {
   "FIELD1": "Euro area",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.93349391
 },
 {
   "FIELD1": "Eritrea",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 57.8
 },
 {
   "FIELD1": "Spain",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Estonia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.6
 },
 {
   "FIELD1": "Ethiopia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 57.3
 },
 {
   "FIELD1": "European Union",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.81722276
 },
 {
   "FIELD1": "Fragile and conflict affected situations",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 67.83306983
 },
 {
   "FIELD1": "Finland",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Fiji",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.7
 },
 {
   "FIELD1": "France",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Faroe Islands",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Micronesia, Fed. Sts.",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 89
 },
 {
   "FIELD1": "Gabon",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.2
 },
 {
   "FIELD1": "United Kingdom",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Georgia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Ghana",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 88.7
 },
 {
   "FIELD1": "Gibraltar",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Guinea",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 76.8
 },
 {
   "FIELD1": "Gambia, The",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90.2
 },
 {
   "FIELD1": "Guinea-Bissau",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 79.3
 },
 {
   "FIELD1": "Equatorial Guinea",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 47.9
 },
 {
   "FIELD1": "Greece",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Grenada",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.6
 },
 {
   "FIELD1": "Greenland",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Guatemala",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 92.8
 },
 {
   "FIELD1": "Guam",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.5
 },
 {
   "FIELD1": "Guyana",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.3
 },
 {
   "FIELD1": "High income",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.53382077
 },
 {
   "FIELD1": "Hong Kong SAR, China",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Honduras",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 91.2
 },
 {
   "FIELD1": "Heavily indebted poor countries (HIPC)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 65.91586401
 },
 {
   "FIELD1": "Croatia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.6
 },
 {
   "FIELD1": "Haiti",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 57.7
 },
 {
   "FIELD1": "Hungary",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "IBRD only",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.33470398
 },
 {
   "FIELD1": "IDA & IBRD total",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 89.48026001
 },
 {
   "FIELD1": "IDA total",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 75.33342704
 },
 {
   "FIELD1": "IDA blend",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 82.92509995
 },
 {
   "FIELD1": "Indonesia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 87.4
 },
 {
   "FIELD1": "IDA only",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 71.10029485
 },
 {
   "FIELD1": "Isle of Man",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "India",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.1
 },
 {
   "FIELD1": "Not classified",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Ireland",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.9
 },
 {
   "FIELD1": "Iran, Islamic Rep.",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.2
 },
 {
   "FIELD1": "Iraq",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 86.6
 },
 {
   "FIELD1": "Iceland",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Israel",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Italy",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Jamaica",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.8
 },
 {
   "FIELD1": "Jordan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.9
 },
 {
   "FIELD1": "Japan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Kazakhstan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 92.9
 },
 {
   "FIELD1": "Kenya",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 63.2
 },
 {
   "FIELD1": "Kyrgyz Republic",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90
 },
 {
   "FIELD1": "Cambodia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 75.5
 },
 {
   "FIELD1": "Kiribati",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 66.9
 },
 {
   "FIELD1": "St. Kitts and Nevis",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.3
 },
 {
   "FIELD1": "Korea, Rep.",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Kuwait",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99
 },
 {
   "FIELD1": "Latin America & Caribbean (excluding high income)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.48140861
 },
 {
   "FIELD1": "Lao PDR",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 75.7
 },
 {
   "FIELD1": "Lebanon",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99
 },
 {
   "FIELD1": "Liberia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 75.6
 },
 {
   "FIELD1": "Libya",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "St. Lucia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.3
 },
 {
   "FIELD1": "Latin America & Caribbean",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.64749903
 },
 {
   "FIELD1": "Least developed countries: UN classification",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 69.1316894
 },
 {
   "FIELD1": "Low income",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 65.63169677
 },
 {
   "FIELD1": "Liechtenstein",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Sri Lanka",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.6
 },
 {
   "FIELD1": "Lower middle income",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 89.54235469
 },
 {
   "FIELD1": "Low & middle income",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 89.41215832
 },
 {
   "FIELD1": "Lesotho",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 81.8
 },
 {
   "FIELD1": "Late-demographic dividend",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.93090062
 },
 {
   "FIELD1": "Lithuania",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.6
 },
 {
   "FIELD1": "Luxembourg",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Latvia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.3
 },
 {
   "FIELD1": "Macao SAR, China",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "St. Martin (French part)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Morocco",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 85.4
 },
 {
   "FIELD1": "Monaco",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Moldova",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 88.4
 },
 {
   "FIELD1": "Madagascar",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 51.5
 },
 {
   "FIELD1": "Maldives",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.6
 },
 {
   "FIELD1": "Middle East & North Africa",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.45656743
 },
 {
   "FIELD1": "Mexico",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.1
 },
 {
   "FIELD1": "Marshall Islands",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.6
 },
 {
   "FIELD1": "Middle income",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 92.17072385
 },
 {
   "FIELD1": "Macedonia, FYR",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.4
 },
 {
   "FIELD1": "Mali",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 77
 },
 {
   "FIELD1": "Malta",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Myanmar",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 80.6
 },
 {
   "FIELD1": "Middle East & North Africa (excluding high income)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 92.63544916
 },
 {
   "FIELD1": "Montenegro",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.7
 },
 {
   "FIELD1": "Mongolia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 64.4
 },
 {
   "FIELD1": "Northern Mariana Islands",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.5
 },
 {
   "FIELD1": "Mozambique",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 51.1
 },
 {
   "FIELD1": "Mauritania",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 57.9
 },
 {
   "FIELD1": "Mauritius",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.9
 },
 {
   "FIELD1": "Malawi",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90.2
 },
 {
   "FIELD1": "Malaysia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.2
 },
 {
   "FIELD1": "North America",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.26020467
 },
 {
   "FIELD1": "Namibia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 91
 },
 {
   "FIELD1": "New Caledonia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.5
 },
 {
   "FIELD1": "Niger",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 58.2
 },
 {
   "FIELD1": "Nigeria",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 68.5
 },
 {
   "FIELD1": "Nicaragua",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 87
 },
 {
   "FIELD1": "Netherlands",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Norway",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Nepal",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 91.6
 },
 {
   "FIELD1": "Nauru",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.5
 },
 {
   "FIELD1": "New Zealand",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "OECD members",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.30625506
 },
 {
   "FIELD1": "Oman",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.4
 },
 {
   "FIELD1": "Other small states",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90.29693829
 },
 {
   "FIELD1": "Pakistan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 91.4
 },
 {
   "FIELD1": "Panama",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.7
 },
 {
   "FIELD1": "Peru",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 86.7
 },
 {
   "FIELD1": "Philippines",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 91.8
 },
 {
   "FIELD1": "Palau",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Papua New Guinea",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 40
 },
 {
   "FIELD1": "Poland",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98.3
 },
 {
   "FIELD1": "Pre-demographic dividend",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 66.11459602
 },
 {
   "FIELD1": "Puerto Rico",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Korea, Dem. People’s Rep.",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.7
 },
 {
   "FIELD1": "Portugal",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Paraguay",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 98
 },
 {
   "FIELD1": "West Bank and Gaza",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 58.4
 },
 {
   "FIELD1": "Pacific island small states",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90.58540029
 },
 {
   "FIELD1": "Post-demographic dividend",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.50496099
 },
 {
   "FIELD1": "French Polynesia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Qatar",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Romania",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Russian Federation",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.9
 },
 {
   "FIELD1": "Rwanda",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 76.1
 },
 {
   "FIELD1": "South Asia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 92.40020371
 },
 {
   "FIELD1": "Saudi Arabia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97
 },
 {
   "FIELD1": "Sudan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Senegal",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 78.5
 },
 {
   "FIELD1": "Singapore",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Solomon Islands",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 80.8
 },
 {
   "FIELD1": "Sierra Leone",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 62.6
 },
 {
   "FIELD1": "El Salvador",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.8
 },
 {
   "FIELD1": "San Marino",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Somalia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Serbia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.2
 },
 {
   "FIELD1": "Sub-Saharan Africa (excluding high income)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 67.5858652
 },
 {
   "FIELD1": "South Sudan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 58.7
 },
 {
   "FIELD1": "Sub-Saharan Africa",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 67.58862978
 },
 {
   "FIELD1": "Small states",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 91.31390003
 },
 {
   "FIELD1": "Sao Tome and Principe",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.1
 },
 {
   "FIELD1": "Suriname",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.8
 },
 {
   "FIELD1": "Slovak Republic",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Slovenia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.5
 },
 {
   "FIELD1": "Sweden",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Swaziland",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 74.1
 },
 {
   "FIELD1": "Sint Maarten (Dutch part)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Seychelles",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.7
 },
 {
   "FIELD1": "Syrian Arab Republic",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90.1
 },
 {
   "FIELD1": "Turks and Caicos Islands",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Chad",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 50.8
 },
 {
   "FIELD1": "East Asia & Pacific (IDA & IBRD countries)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.5935555
 },
 {
   "FIELD1": "Europe & Central Asia (IDA & IBRD countries)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.90035706
 },
 {
   "FIELD1": "Togo",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 63.1
 },
 {
   "FIELD1": "Thailand",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.8
 },
 {
   "FIELD1": "Tajikistan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 73.8
 },
 {
   "FIELD1": "Turkmenistan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Latin America & the Caribbean (IDA & IBRD countries)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.63640079
 },
 {
   "FIELD1": "Timor-Leste",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 71.9
 },
 {
   "FIELD1": "Middle East & North Africa (IDA & IBRD countries)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.10102789
 },
 {
   "FIELD1": "Tonga",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.6
 },
 {
   "FIELD1": "South Asia (IDA & IBRD)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 92.40020371
 },
 {
   "FIELD1": "Sub-Saharan Africa (IDA & IBRD countries)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 67.58862978
 },
 {
   "FIELD1": "Trinidad and Tobago",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.1
 },
 {
   "FIELD1": "Tunisia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.7
 },
 {
   "FIELD1": "Turkey",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Tuvalu",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.7
 },
 {
   "FIELD1": "Tanzania",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 55.6
 },
 {
   "FIELD1": "Uganda",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 79
 },
 {
   "FIELD1": "Ukraine",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 96.2
 },
 {
   "FIELD1": "Upper middle income",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.04867456
 },
 {
   "FIELD1": "Uruguay",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.7
 },
 {
   "FIELD1": "United States",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99.2
 },
 {
   "FIELD1": "Uzbekistan",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "St. Vincent and the Grenadines",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 95.1
 },
 {
   "FIELD1": "Venezuela, RB",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.1
 },
 {
   "FIELD1": "British Virgin Islands",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Virgin Islands (U.S.)",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 100
 },
 {
   "FIELD1": "Vietnam",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 97.6
 },
 {
   "FIELD1": "Vanuatu",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 94.5
 },
 {
   "FIELD1": "World",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 90.97274905
 },
 {
   "FIELD1": "Samoa",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 99
 },
 {
   "FIELD1": "Kosovo",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "Yemen, Rep.",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": null
 },
 {
   "FIELD1": "South Africa",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 93.2
 },
 {
   "FIELD1": "Zambia",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 65.4
 },
 {
   "FIELD1": "Zimbabwe",
   "FIELD2": "Improved water source (% of population with access)",
   "FIELD3": 76.9
 }
];
$.get("https://ipinfo.io/json", (data) => {
    var locations = data.loc;
    locations = locations.split(",");
    var lat = parseFloat(locations[0]);
    var long = parseFloat(locations[1]);
    console.log(lat + "," + long)
    var locArr = [];
    var finalArr = [];
    const mapElement = document.getElementById("map");
    
    for (var i = lat; i < lat + 1; i += 0.05) {
        for (var j = long; j < long + 1; j += 0.05) {
            locArr.push({ lat: i, lng: j })
        }
    }
    var elevation = new google.maps.ElevationService;
    elevation.getElevationForLocations({
        'locations': locArr
    }, (result, status) => {
        // work with the data here
        console.log(result)
        if (result[0].elevation < 0) {
        
            finalArr.push(result);
        }
    });
    if(finalArr.length ===0){
      $('#text').text('There are no water bodies near your location')
    }else{
      var map = L.map('map', {
      center: [finalArr[0][0].location.lat,finalArr[0][0].location.lng],
      zoom: 13
    
});
       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
 
  $.ajax({
    type:"get",
    url:"https://ipfind.co/?ip="+data.ip,
    error:function(err){console.log(err)},
    success:function(a){
      var country = a.country;
      $('.country').text("In " + country);
      var dataOne;
      var dataTwo;
      waterDataOne.forEach(function(r){
        if(r.FIELD1 == country){
        dataOne = r.FIELD2;
        $('.nonPercent').text(dataOne);
        console.log(dataOne);
      }
    })
    waterDataTwo.forEach(function(s){
      if(s.FIELD1 === country){
        dataTwo = s.FIELD3
        console.log(dataTwo);
        $('.percent').text(dataTwo);
      }
    })
  }
      })  
})
  
  
