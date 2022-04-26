# a99-hamal API Documentation

## Endpoints

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/
```

#### Response body

```
200 OK
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/getCountries (GET)

#### Request cURL

```
curl http://localhost:5000/app/getCountries
```

#### Response body

```
"Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Azores","Bahamas","Bahrain","Balearic Islands","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia",...]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/getCountry/:country/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/getCountry/usa/
```

#### Response body

```
{"names":{"name":"United States","full":"United States of America","iso2":"US","iso3":"USA","continent":"NA"},"maps":{"lat":"37.6","long":"-95.665","zoom":"5"},"timezone":{"name":"America/New_York"},"language":[{"language":"English","official":"Yes"},{"language":"Spanish","official":"No"}],"electricity":{"voltage":"120","frequency":"60","plugs":["A","B"]},"telephone":{"calling_code":"1","police":"911","ambulance":"911","fire":"911"},"water":{"short":"safe","full":""},"vaccinations":[],"currency":{"name":"US Dollar","code":"USD","symbol":"$","rate":"1","compare":[{"name":"Afghani","rate":"86.892932"},{"name":"Algerian Dinar","rate":"144.314002"},{"name":"Argentine Peso","rate":"114.190305"},{"name":"Armenian Dram","rate":"470.779912"},{"name":"Aruban Florin","rate":"1.8005"},{"name":"Australian Dollar","rate":"1.390499"},{"name":"Azerbaijanian Manat","rate":"1.695212"},{"name":"Bahamian Dollar","rate":"1.001208"},{"name":"Bahraini Dinar","rate":"0.377065"},{"name":"Baht","rate":"34.006503"},{"name":"Balboa","rate":"1.001189"},{"name":"Barbados Dollar","rate":"2.021485"},{"name":"Belarussian Ruble","rate":"19600"},{"name":"Belize Dollar","rate":"2.018152"},{"name":"Bermudian Dollar","rate":"1"},{"name":"Bolivar","rate":"213830222338.07"},{"name":"Boliviano","rate":"6.883085"},{"name":"Brazilian Real","rate":"4.795203"},{"name":"Brunei Dollar","rate":"1.367564"},{"name":"Bulgarian Lev","rate":"1.819635"},{"name":"Burundi Franc","rate":"2055.438048"},{"name":"Canadian Dollar","rate":"1.272635"},{"name":"Cape Verde Escudo","rate":"102.073594"},{"name":"Cayman Islands Dollar","rate":"0.834309"},{"name":"CFA Franc BCEAO","rate":"607.201737"},{"name":"CFA Franc BEAC","rate":"607.201737"},{"name":"CFP Franc","rate":"110.999875"},{"name":"Chilean Peso","rate":"837.249588"},{"name":"Colombian Peso","rate":"3856.01"},{"name":"Comoro Franc","rate":"456.397254"},{"name":"Congolese Franc","rate":"2011.99999"},{"name":"Convertible Mark","rate":"1.810426"},{"name":"Cordoba Oro","rate":"35.847284"},{"name":"Costa Rican Colon","rate":"658.391188"},{"name":"Croatian Kuna","rate":"7.036095"},{"name":"Cuban Peso","rate":"26.5"},{"name":"Czech Koruna","rate":"22.669026"},{"name":"Dalasi","rate":"53.875009"},{"name":"Danish Krone","rate":"6.92376"},{"name":"Denar","rate":"57.187806"},{"name":"Djibouti Franc","rate":"178.238352"},{"name":"Dobra","rate":"20697.981008"},{"name":"Dominican Peso","rate":"55.045821"},{"name":"Dong","rate":"22983"},{"name":"East Caribbean Dollar","rate":"2.70255"},{"name":"Egyptian Pound","rate":"18.577296"},{"name":"El Salvador Colon","rate":"8.76057"},{"name":"Ethiopian Birr","rate":"51.583488"},{"name":"Euro","rate":"0.93061"},{"name":"Falkland Islands Pound","rate":"0.768642"},{"name":"Fiji Dollar","rate":"2.14095"},{"name":"Forint","rate":"347.046027"},{"name":"Ghana Cedi","rate":"7.534274"},{"name":"Gibraltar Pound","rate":"0.768642"},{"name":"Gourde","rate":"109.126336"},{"name":"Guarani","rate":"6834.059215"},{"name":"Guinea Franc","rate":"8899.523746"},{"name":"Guyana Dollar","rate":"209.47003"},{"name":"Hong Kong Dollar","rate":"7.84622"},{"name":"Hryvnia","rate":"29.434836"},{"name":"Iceland Krona","rate":"129.540101"},{"name":"Indian Rupee","rate":"76.62775"},{"name":"Iranian Rial","rate":"42349.999852"},{"name":"Iraqi Dinar","rate":"1461.258267"},{"name":"Jamaican Dollar","rate":"155.075234"},{"name":"Jordanian Dinar","rate":"0.708302"},{"name":"Kenyan Shilling","rate":"115.549865"},{"name":"Kina","rate":"3.527833"},{"name":"Kip","rate":"12007.27579"},{"name":"Kuwaiti Dinar","rate":"0.30575"},{"name":"Kwacha","rate":"817.930288"},{"name":"Kwanza","rate":"404.158031"},{"name":"Kyat","rate":"1853.710977"},{"name":"Lari","rate":"3.035017"},{"name":"Lebanese Pound","rate":"1514.03089"},{"name":"Lek","rate":"111.154823"},{"name":"Lempira","rate":"24.57269"},{"name":"Leone","rate":"12439.999955"},{"name":"Liberian Dollar","rate":"151.824984"},{"name":"Libyan Dinar","rate":"4.716119"},{"name":"Lilangeni","rate":"15.503307"},{"name":"Lithuanian Litas","rate":"2.95274"},{"name":"Loti","rate":"15.639606"},{"name":"Malagasy Ariary","rate":"4047.329665"},{"name":"Malaysian Ringgit","rate":"4.353505"},{"name":"Mauritius Rupee","rate":"43.000289"},{"name":"Mexican Peso","rate":"20.38726"},{"name":"Moldovan Leu","rate":"18.482081"},{"name":"Moroccan Dirham","rate":"9.823806"},{"name":"Mozambique Metical","rate":"63.830243"},{"name":"Naira","rate":"415.579545"},{"name":"Nakfa","rate":"15.000002"},{"name":"Namibia Dollar","rate":"15.639617"},{"name":"Nepalese Rupee","rate":"122.306767"},{"name":"Netherlands Antillean Guilder","rate":"1.804415"},{"name":"New Israeli Sheqel","rate":"3.27123"},{"name":"New Romanian Leu","rate":"4.577798"},{"name":"New Taiwan Dollar","rate":"29.342502"},{"name":"New Zealand Dollar","rate":"1.50963"},{"name":"Ngultrum","rate":"76.437315"},{"name":"North Korean Won","rate":"900.000119"},{"name":"Norwegian Krone","rate":"9.010698"},{"name":"Nuevo Sol","rate":"3.742462"},{"name":"Ouguiya","rate":"356.999828"},{"name":"Pa'anga","rate":"2.275102"},{"name":"Pakistan Rupee","rate":"186.472399"},{"name":"Pataca","rate":"8.091123"},{"name":"Peso Convertible","rate":"1"},{"name":"Peso Uruguayo","rate":"40.861569"},{"name":"Philippine Peso","rate":"52.394984"},{"name":"Pound Sterling","rate":"0.78401"},{"name":"Pula","rate":"11.904879"},{"name":"Qatari Rial","rate":"3.640982"},{"name":"Quetzal","rate":"7.668612"},{"name":"Rand","rate":"15.64883"},{"name":"Rial Omani","rate":"0.38501"},{"name":"Riel","rate":"4047.67084"},{"name":"Rufiyaa","rate":"15.449658"},{"name":"Rupiah","rate":"14461.8"},{"name":"Russian Ruble","rate":"74.125992"},{"name":"Rwanda Franc","rate":"1019.499303"},{"name":"Saint Helena Pound","rate":"1.377399"},{"name":"Saudi Riyal","rate":"3.750601"},{"name":"SDR (Special Drawing Right)","rate":"0.732663"},{"name":"Serbian Dinar","rate":"109.519741"},{"name":"Seychelles Rupee","rate":"13.736752"},{"name":"Singapore Dollar","rate":"1.374085"},{"name":"Solomon Islands Dollar","rate":"8.016064"},{"name":"Som","rate":"80.865102"},{"name":"Somali Shilling","rate":"575.999641"},{"name":"Somoni","rate":"12.519102"},{"name":"South Sudanese Pound","rate":"0"},{"name":"Sri Lanka Rupee","rate":"335.400145"},{"name":"Sudanese Pound","rate":"447.505563"},{"name":"Surinam Dollar","rate":"20.733504"},{"name":"Swedish Krona","rate":"9.611015"},{"name":"Swiss Franc","rate":"0.95797"},{"name":"Syrian Pound","rate":"2512.449491"},{"name":"Taka","rate":"86.327195"},{"name":"Tala","rate":"2.585442"},{"name":"Tanzanian Shilling","rate":"2322.999869"},{"name":"Tenge","rate":"444.582267"},{"name":"Trinidad and Tobago Dollar","rate":"6.795551"},{"name":"Tugrik","rate":"2994.863198"},{"name":"Tunisian Dinar","rate":"3.011495"},{"name":"Turkish Lira","rate":"14.760703"},{"name":"Turkmenistan New Manat","rate":"3.5"},{"name":"UAE Dirham","rate":"3.672975"},{"name":"Uganda Shilling","rate":"3527.331636"},{"name":"Unidad de Fomento","rate":"0.030343"},{"name":"Unidad de Valor Real","rate":"0"},{"name":"US Dollar","rate":"1"},{"name":"Uzbekistan Sum","rate":"11273.413093"},{"name":"Vatu","rate":"112.581651"},{"name":"WIR Euro","rate":"0"},{"name":"WIR Franc","rate":"0"},{"name":"Won","rate":"1250.594979"},{"name":"Yemeni Rial","rate":"250.249852"},{"name":"Yen","rate":"128.272504"},{"name":"Yuan Renminbi","rate":"6.553022"},{"name":"Zambian Kwacha","rate":"16.845121"},{"name":"Zimbabwe Dollar","rate":"321.999592"},{"name":"Zloty","rate":"4.324355"}]},"weather":{"January":{"tMin":"-0.139015673","tMax":"-9.621845312","tAvg":"-4.73333333333","pMin":"54.08542875","pMax":"88.9813016478","pAvg":"68.8"},"February":{"tMin":"0.73596492","tMax":"-8.451683216","tAvg":"-3.8","pMin":"50.10966809","pMax":"73.740460051","pAvg":"61.4666666667"},"March":{"tMin":"3.229521754","tMax":"-3.776517949","tAvg":"-0.466666666667","pMin":"58.1606408569","pMax":"80.2483005952","pAvg":"68.6666666667"},"April":{"tMin":"7.71419078","tMax":"2.30682654631","tAvg":"4.26666666667","pMin":"57.06770773","pMax":"80.30451778","pAvg":"67.2666666667"},"May":{"tMin":"14.06583068","tMax":"8.53194710976","tAvg":"10.2666666667","pMin":"60.4331059715","pMax":"91.53901043","pAvg":"71.3333333333"},"June":{"tMin":"19.51112963","tMax":"13.4869441082","tAvg":"15.2666666667","pMin":"59.5099898491","pMax":"92.17370944","pAvg":"69.8666666667"},"July":{"tMin":"22.76577698","tMax":"16.3725594309","tAvg":"18.1333333333","pMin":"58.9463630647","pMax":"97.61402443","pAvg":"70.1333333333"},"August":{"tMin":"22.15372427","tMax":"15.5811626786","tAvg":"17.4666666667","pMin":"57.451923456","pMax":"90.73968503","pAvg":"69.8"},"September":{"tMin":"17.0463237","tMax":"10.8232360992","tAvg":"13.3333333333","pMin":"59.1040968241","pMax":"86.94435889","pAvg":"70.9333333333"},"October":{"tMin":"10.20206655","tMax":"4.62551948376","tAvg":"6.86666666667","pMin":"57.6495639889","pMax":"85.2096176147","pAvg":"71.8"},"November":{"tMin":"3.977919961","tMax":"-1.7966055549","tAvg":"0.866666666667","pMin":"61.9606827667","pMax":"86.1150615007","pAvg":"72.8666666667"},"December":{"tMin":"1.121230356","tMax":"-6.717318604","tAvg":"-3.06666666667","pMin":"57.89741514","pMax":"91.3228435183","pAvg":"73.6666666667"}},"advise":{"UA":{"advise":"Exercise normal safety precautions","url":"http://www.smartraveller.gov.au/zw-cgi/view/Advice/United_States_of_America"},"CA":{"advise":"<!-- START adv-united-states -->Avoid non-essential travel<!-- END adv-united-states -->","url":"http://travel.gc.ca/destinations/united-states"}},"neighbors":[{"id":"40","name":"Canada"},{"id":"142","name":"Mexico"},{"id":"91","name":"Guatemala"},{"id":"23","name":"Belize"},{"id":"67","name":"El Salvador"}]}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/getAllCountriesData/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/getAllCountriesData/
```

#### Response body

```
200 OK
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/users/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/users/
```

#### Response body

```
200 OK
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/users/:id/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/users/:id/
```

#### Response body

```
200 OK
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/getUserCountries/:id/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/getUserCountries/user/
```

#### Response body

```
200 OK
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/users/add/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username": "user", "name": "name", malaria": true, hepatitisA": true, "hepatitisB": true, "yellowFever": true, "tyfoid": true, "dtp": true, "cholera": true, "languages": ["English", "Spanish"]}' http://localhost:5000/app/users/add/
```

#### Response body

```

```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Thu, 07 Apr 2022 16:30:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/users/update/:id/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username": "same_user", "name": "new_name", "malaria": false, "hepatitisA": false, "hepatitisB": false, "yellowFever": false, "tyfoid": false, "dtp": false, "cholera": false, "languages": ["English", "Spanish", "French"]}' http://localhost:5000/app/users/add/
```

#### Response body

```

```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Thu, 07 Apr 2022 16:30:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```


### /app/:id/ (DELETE)

#### Request cURL

```
curl -X DELETE http://localhost:5000/app/id/
```

#### Response body

```

```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 401
ETag: W/"191-zIX/D9vHmBhTLyWkUb1+6Em57CE"
Date: Tue, 26 Apr 2022 02:18:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/logs/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/logs/
```

#### Response body

```

```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/logs/:id (GET)

#### Request cURL

```
curl http://localhost:5000/app/logs/:id
```

#### Response body

```

```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/logs/add/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"_id":"6261c14927c947f8c0c1e451","remote_addr":"::1","date":"2022-04-21T20:40:41.672Z","method":"GET","url":"/app/","protocol":"http","http_version":"1.1","status":200,"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"}' http://localhost:5000/app/logs/add/
```

#### Response body

```

```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Thu, 07 Apr 2022 16:30:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/* (POST)
*Adds a log to the database for every endpoint starting with /app/
#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"_id":"6261c14927c947f8c0c1e451","remote_addr":"::1","date":"2022-04-21T20:40:41.672Z","method":"GET","url":"/app/","protocol":"http","http_version":"1.1","status":200,"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"}' http://localhost:5000/app/
```

#### Response body

```

```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Thu, 07 Apr 2022 16:30:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

