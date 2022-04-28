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
GET /app/ HTTP/1.1
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/plain
Date: Thu, 28 Apr 2022 04:02:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked
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
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 3200
ETag: W/"c80-wmXWyvLP12utMdnQN/5A9k73rlM"
Date: Thu, 28 Apr 2022 04:05:57 GMT
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
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 9679
ETag: W/"25cf-1VVryqQGm8sHH7aiHIjtSHlHVfo"
Date: Thu, 28 Apr 2022 04:06:34 GMT
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
[{"names":{"name":"Afghanistan","full":"Islamic Republic of Afghanistan","iso2":"AF","iso3":"AFG","continent":"AS"},"maps":{"lat":"33.9340383","long":"67.7034313","zoom":"6"},"timezone":{"name":"Asia/Kabul"},"language":[{"language":"Persian","official":"Yes"},{"language":"Pashto","official":"Yes"}],"electricity":{"voltage":"220","frequency":"50","plugs":["C","F"]},"telephone":{"calling_code":"93","police":"119","ambulance":"102","fire":"119"},"water":{"short":"not safe","full":""},"vaccinations":[{"name":"Malaria","message":"Malaria occurs in some areas. Protect yourself from mosquito bites. Precautions are personal. Consult a qualified medical professional to determine the right actions"},{"name":"Hepatitis A","message":"Vaccination is recommended for all travelers to this country"},{"name":"Hepatitis B","message":"The vaccination advice is personal. Consult a qualified medical professional to determine whether vaccination is useful for you"},{"name":"Yellow fever","message":"Yellow fever does not occur in this country. However, vaccination is required if you are traveling from a country with the risk of yellow fever"},{"name":"Tyfoid","message":"Vaccination is recommended if you are staying 2 weeks or longer in this country"},{"name":"DTP","message":"Vaccination is recommended for all travelers to this country"}],"currency":{"name":"Afghani","code":"AFN","symbol":"","rate":"86.892932","compare":[{"name":"Afghani","rate":"86.892932"},{"name":"Algerian Dinar","rate":"144.314002"},{"name":"Argentine Peso","rate":"114.190305"},{"name":"Armenian Dram","rate":"470.779912"},{"name":"Aruban Florin","rate":"1.8005"},{"name":"Australian Dollar","rate":"1.390499"},{"name":"Azerbaijanian Manat","rate":"1.695212"},{"name":"Bahamian Dollar","rate":"1.001208"},{"name":"Bahraini Dinar","rate":"0.377065"},{"name":"Baht","rate":"34.006503"},{"name":"Balboa","rate":"1.001189"},{"name":"Barbados Dollar","rate":"2.021485"},{"name":"Belarussian Ruble","rate":"19600"},{"name":"Belize Dollar","rate":"2.018152"},{"name":"Bermudian Dollar","rate":"1"},{"name":"Bolivar","rate":"213830222338.07"},{"name":"Boliviano","rate":"6.883085"},{"name":"Brazilian Real","rate":"4.795203"},{"name":"Brunei Dollar","rate":"1.367564"},{"name":"Bulgarian Lev","rate":"1.819635"},{"name":"Burundi Franc","rate":"2055.438048"},{"name":"Canadian Dollar","rate":"1.272635"},{"name":"Cape Verde Escudo","rate":"102.073594"},{"name":"Cayman Islands Dollar","rate":"0.834309"},{"name":"CFA Franc BCEAO","rate":"607.201737"},{"name":"CFA Franc BEAC","rate":"607.201737"},{"name":"CFP Franc","rate":"110.999875"},{"name":"Chilean Peso","rate":"837.249588"},{"name":"Colombian Peso","rate":"3856.01"},{"name":"Comoro Franc","rate":"456.397254"},{"name":"Congolese Franc","rate":"2011.99999"},{"name":"Convertible Mark","rate":"1.810426"},{"name":"Cordoba Oro","rate":"35.847284"},{"name":"Costa Rican Colon","rate":"658.391188"},{"name":"Croatian Kuna","rate":"7.036095"},{"name":"Cuban Peso","rate":"26.5"},{"name":"Czech Koruna","rate":"22.669026"},{"name":"Dalasi","rate":"53.875009"},{"name":"Danish Krone","rate":"6.92376"},{"name":"Denar","rate":"57.187806"},{"name":"Djibouti Franc","rate":"178.238352"},{"name":"Dobra","rate":"20697.981008"},{"name":"Dominican Peso","rate":"55.045821"},{"name":"Dong","rate":"22983"},{"name":"East Caribbean Dollar","rate":"2.70255"},{"name":"Egyptian Pound","rate":"18.577296"},{"name":"El Salvador Colon","rate":"8.76057"},{"name":"Ethiopian Birr","rate":"51.583488"},{"name":"Euro","rate":"0.93061"},{"name":"Falkland Islands Pound","rate":"0.768642"},{"name":"Fiji Dollar","rate":"2.14095"},{"name":"Forint","rate":"347.046027"},{"name":"Ghana Cedi","rate":"7.534274"},{"name":"Gibraltar Pound","rate":"0.768642"},{"name":"Gourde","rate":"109.126336"},{"name":"Guarani","rate":"6834.059215"},{"name":"Guinea Franc","rate":"8899.523746"},{"name":"Guyana Dollar","rate":"209.47003"},{"name":"Hong Kong Dollar","rate":"7.84622"},{"name":"Hryvnia","rate":"29.434836"},{"name":"Iceland Krona","rate":"129.540101"},{"name":"Indian Rupee","rate":"76.62775"},{"name":"Iranian Rial","rate":"42349.999852"},{"name":"Iraqi Dinar","rate":"1461.258267"},{"name":"Jamaican Dollar","rate":"155.075234"},{"name":"Jordanian Dinar","rate":"0.708302"},{"name":"Kenyan Shilling","rate":"115.549865"},{"name":"Kina","rate":"3.527833"},{"name":"Kip","rate":"12007.27579"},{"name":"Kuwaiti Dinar","rate":"0.30575"},{"name":"Kwacha","rate":"817.930288"},{"name":"Kwanza","rate":"404.158031"},{"name":"Kyat","rate":"1853.710977"},{"name":"Lari","rate":"3.035017"},{"name":"Lebanese Pound","rate":"1514.03089"},{"name":"Lek","rate":"111.154823"},{"name":"Lempira","rate":"24.57269"},{"name":"Leone","rate":"12439.999955"},{"name":"Liberian Dollar","rate":"151.824984"},{"name":"Libyan Dinar","rate":"4.716119"},{"name":"Lilangeni","rate":"15.503307"},{"name":"Lithuanian Litas","rate":"2.95274"},{"name":"Loti","rate":"15.639606"},{"name":"Malagasy Ariary","rate":"4047.329665"},{"name":"Malaysian Ringgit","rate":"4.353505"},{"name":"Mauritius Rupee","rate":"43.000289"},{"name":"Mexican Peso","rate":"20.38726"},{"name":"Moldovan Leu","rate":"18.482081"},{"name":"Moroccan Dirham","rate":"9.823806"},{"name":"Mozambique Metical","rate":"63.830243"},{"name":"Naira","rate":"415.579545"},{"name":"Nakfa","rate":"15.000002"},{"name":"Namibia Dollar","rate":"15.639617"},{"name":"Nepalese Rupee","rate":"122.306767"},{"name":"Netherlands Antillean Guilder","rate":"1.804415"},{"name":"New Israeli Sheqel","rate":"3.27123"},{"name":"New Romanian Leu","rate":"4.577798"},{"name":"New Taiwan Dollar","rate":"29.342502"},{"name":"New Zealand Dollar","rate":"1.50963"},{"name":"Ngultrum","rate":"76.437315"},{"name":"North Korean Won","rate":"900.000119"},{"name":"Norwegian Krone","rate":"9.010698"},{"name":"Nuevo Sol","rate":"3.742462"},{"name":"Ouguiya","rate":"356.999828"},{"name":"Pa'anga","rate":"2.275102"},{"name":"Pakistan Rupee","rate":"186.472399"},{"name":"Pataca","rate":"8.091123"},{"name":"Peso Convertible","rate":"1"},{"name":"Peso Uruguayo","rate":"40.861569"},{"name":"Philippine Peso","rate":"52.394984"},{"name":"Pound Sterling","rate":"0.78401"},{"name":"Pula","rate":"11.904879"},{"name":"Qatari Rial","rate":"3.640982"},{"name":"Quetzal","rate":"7.668612"},{"name":"Rand","rate":"15.64883"},{"name":"Rial Omani","rate":"0.38501"},{"name":"Riel","rate":"4047.67084"},{"name":"Rufiyaa","rate":"15.449658"},{"name":"Rupiah","rate":"14461.8"},{"name":"Russian Ruble","rate":"74.125992"},{"name":"Rwanda Franc","rate":"1019.499303"},{"name":"Saint Helena Pound","rate":"1.377399"},{"name":"Saudi Riyal","rate":"3.750601"},{"name":"SDR (Special Drawing Right)","rate":"0.732663"},{"name":"Serbian Dinar","rate":"109.519741"},{"name":"Seychelles Rupee","rate":"13.736752"},{"name":"Singapore Dollar","rate":"1.374085"},{"name":"Solomon Islands Dollar","rate":"8.016064"},{"name":"Som","rate":"80.865102"},{"name":"Somali Shilling","rate":"575.999641"},{"name":"Somoni","rate":"12.519102"},{"name":"South Sudanese Pound","rate":"0"},{"name":"Sri Lanka Rupee","rate":"335.400145"},{"name":"Sudanese Pound","rate":"447.505563"},{"name":"Surinam Dollar","rate":"20.733504"},{"name":"Swedish Krona","rate":"9.611015"},{"name":"Swiss Franc","rate":"0.95797"},{"name":"Syrian Pound","rate":"2512.449491"},{"name":"Taka","rate":"86.327195"},{"name":"Tala","rate":"2.585442"},{"name":"Tanzanian Shilling","rate":"2322.999869"},{"name":"Tenge","rate":"444.582267"},{"name":"Trinidad and Tobago Dollar","rate":"6.795551"},{"name":"Tugrik","rate":"2994.863198"},{"name":"Tunisian Dinar","rate":"3.011495"},{"name":"Turkish Lira","rate":"14.760703"},{"name":"Turkmenistan New Manat","rate":"3.5"},{"name":"UAE Dirham","rate":"3.672975"},{"name":"Uganda Shilling","rate":"3527.331636"},{"name":"Unidad de Fomento","rate":"0.030343"},{"name":"Unidad de Valor Real","rate":"0"},{"name":"US Dollar","rate":"1"},{"name":"Uzbekistan Sum","rate":"11273.413093"},{"name":"Vatu","rate":"112.581651"},{"name":"WIR Euro","rate":"0"},{"name":"WIR Franc","rate":"0"},{"name":"Won","rate":"1250.594979"},{"name":"Yemeni Rial","rate":"250.249852"},{"name":"Yen","rate":"128.272504"},{"name":"Yuan Renminbi","rate":"6.553022"},{"name":"Zambian Kwacha","rate":"16.845121"},{"name":"Zimbabwe Dollar","rate":"321.999592"},{"name":"Zloty","rate":"4.324355"}]},"weather":{"January":{"tMin":"-0.313655598955","tMax":"-6.60178833007","tAvg":"-2.93333333333","pMin":"12.10116291","pMax":"48.4474933624","pAvg":"30.8"},"February":{"tMin":"1.887270101","tMax":"-3.811761475","tAvg":"-0.666666666667","pMin":"17.34958241","pMax":"53.0846379916","pAvg":"36.3333333333"},"March":{"tMin":"7.68526713054","tMax":"1.422774251","tAvg":"4.2","pMin":"34.72791022","pMax":"70.5439929962","pAvg":"53.4666666667"},"April":{"tMin":"13.6834818522","tMax":"6.95571085612","tAvg":"9.86666666667","pMin":"31.6602178892","pMax":"90.87240489","pAvg":"57.3333333333"},"May":{"tMin":"20.7249633789","tMax":"12.7625569661","tAvg":"15.6666666667","pMin":"12.8144882391","pMax":"72.84781494","pAvg":"36.4"},"June":{"tMin":"25.7420552572","tMax":"17.9809692383","tAvg":"20.8","pMin":"5.43879857568","pMax":"60.58360708","pAvg":"17.9333333333"},"July":{"tMin":"29.0170155843","tMax":"19.8796071371","tAvg":"23.8","pMin":"3.48441728032","pMax":"51.6328721","pAvg":"13.4666666667"},"August":{"tMin":"27.7223063151","tMax":"18.4230224609","tAvg":"21.9333333333","pMin":"0.390503638939","pMax":"54.88477824","pAvg":"12.1333333333"},"September":{"tMin":"22.1689646403","tMax":"13.4062998454","tAvg":"16.8666666667","pMin":"0.544957371281","pMax":"40.53381916","pAvg":"11.1333333333"},"October":{"tMin":"14.2754557292","tMax":"6.74089660645","tAvg":"10.2","pMin":"2.62316718598","pMax":"52.73140087","pAvg":"19"},"November":{"tMin":"6.93214314779","tMax":"0.623092651367","tAvg":"3.2","pMin":"16.2293220679","pMax":"50.4688809077","pAvg":"31.0666666667"},"December":{"tMin":"1.46416727702","tMax":"-4.69517822266","tAvg":"-1.26666666667","pMin":"12.01772493","pMax":"51.2380044937","pAvg":"27.6666666667"}},"advise":{"UA":{"advise":"Do not travel","url":"http://www.smartraveller.gov.au/zw-cgi/view/Advice/Afghanistan"},"CA":{"advise":"<!-- START adv-afghanistan -->Avoid all travel<!-- END adv-afghanistan -->","url":"http://travel.gc.ca/destinations/afghanistan"}},"neighbors":[{"id":"167","name":"Pakistan"},{"id":"219","name":"Tajikistan"},{"id":"239","name":"Uzbekistan"},{"id":"229","name":"Turkmenistan"},{"id":"119","name":"Kyrgyzstan"}]},{"names":{"name":"Aland Islands","full":"&Aring;land Islands","iso2":"AX","iso3":"ALA","continent":"EU"},"maps":{"lat":"0.199542","long":"20.3711715","zoom":"9"},"timezone":{"name":"Europe/Mariehamn"},"language":[],"electricity":{"voltage":"","frequency":"","plugs":[]},"telephone":{"calling_code":"358","police":"","ambulance":"","fire":""},"water":{"short":null,"full":null},"vaccinations":[],"currency":{"name":"Euro","code":"EUR","symbol":"&euro;","rate":"0.93061","compare":[{"name":"Afghani","rate":"86.892932"},{"name":"Algerian Dinar","rate":"144.314002"},{"name":"Argentine Peso","rate":"114.190305"},{"name":"Armenian Dram","rate":"470.779912"},{"name":"Aruban Florin","rate":"1.8005"},{"name":"Australian Dollar","rate":"1.390499"},{"name":"Azerbaijanian Manat","rate":"1.695212"},{"name":"Bahamian Dollar","rate":"1.001208"},{"name":"Bahraini Dinar","rate":"0.377065"},{"name":"Baht","rate":"34.006503"},{"name":"Balboa","rate":"1.001189"},{"name":"Barbados Dollar","rate":"2.021485"},{"name":"Belarussian Ruble","rate":"19600"},{"name":"Belize Dollar","rate":"2.018152"},{"name":"Bermudian Dollar","rate":"1"},{"name":"Bolivar","rate":"213830222338.07"},{"name":"Boliviano","rate":"6.883085"},{"name":"Brazilian Real","rate":"4.795203"},{"name":"Brunei Dollar","rate":"1.367564"},{"name":"Bulgarian Lev","rate":"1.819635"},{"name":"Burundi Franc","rate":"2055.438048"},{"name":"Canadian Dollar","rate":"1.272635"},{"name":"Cape Verde Escudo","rate":"102.073594"},{"name":"Cayman Islands Dollar","rate":"0.834309"},{"name":"CFA Franc BCEAO","rate":"607.201737"},{"name":"CFA Franc BEAC","rate":"607.201737"},{"name":"CFP Franc","rate":"110.999875"},{"name":"Chilean Peso","rate":"837.249588"},{"name":"Colombian Peso","rate":"3856.01"},{"name":"Comoro Franc","rate":"456.397254"},{"name":"Congolese Franc","rate":"2011.99999"},{"name":"Convertible Mark","rate":"1.810426"},{"name":"Cordoba Oro","rate":"35.847284"},{"name":"Costa Rican Colon","rate":"658.391188"},{"name":"Croatian Kuna","rate":"7.036095"},{"name":"Cuban Peso","rate":"26.5"},{"name":"Czech Koruna","rate":"22.669026"},{"name":"Dalasi","rate":"53.875009"},{"name":"Danish Krone","rate":"6.92376"},{"name":"Denar","rate":"57.187806"},{"name":"Djibouti Franc","rate":"178.238352"},{"name":"Dobra","rate":"20697.981008"},{"name":"Dominican Peso","rate":"55.045821"},{"name":"Dong","rate":"22983"},{"name":"East Caribbean Dollar","rate":"2.70255"},{"name":"Egyptian Pound","rate":"18.577296"},{"name":"El Salvador Colon","rate":"8.76057"},{"name":"Ethiopian Birr","rate":"51.583488"},{"name":"Euro","rate":"0.93061"},{"name":"Falkland Islands Pound","rate":"0.768642"},{"name":"Fiji Dollar","rate":"2.14095"},{"name":"Forint","rate":"347.046027"},{"name":"Ghana Cedi","rate":"7.534274"},{"name":"Gibraltar Pound","rate":"0.768642"},{"name":"Gourde","rate":"109.126336"},{"name":"Guarani","rate":"6834.059215"},{"name":"Guinea Franc","rate":"8899.523746"},{"name":"Guyana Dollar","rate":"209.47003"},{"name":"Hong Kong Dollar","rate":"7.84622"},{"name":"Hryvnia","rate":"29.434836"},{"name":"Iceland Krona","rate":"129.540101"},{"name":"Indian Rupee","rate":"76.62775"},{"name":"Iranian Rial","rate":"42349.999852"},{"name":"Iraqi Dinar","rate":"1461.258267"},{"name":"Jamaican Dollar","rate":"155.075234"},{"name":"Jordanian Dinar","rate":"0.708302"},{"name":"Kenyan Shilling","rate":"115.549865"},{"name":"Kina","rate":"3.527833"},{"name":"Kip","rate":"12007.27579"},{"name":"Kuwaiti Dinar","rate":"0.30575"},{"name":"Kwacha","rate":"817.930288"},{"name":"Kwanza","rate":"404.158031"},{"name":"Kyat","rate":"1853.710977"},{"name":"Lari","rate":"3.035017"},{"name":"Lebanese Pound","rate":"1514.03089"},{"name":"Lek","rate":"111.154823"},{"name":"Lempira","rate":"24.57269"},{"name":"Leone","rate":"12439.999955"},{"name":"Liberian Dollar","rate":"151.824984"},{"name":"Libyan Dinar","rate":"4.716119"},{"name":"Lilangeni","rate":"15.503307"},{"name":"Lithuanian Litas","rate":"2.95274"},{"name":"Loti","rate":"15.639606"},{"name":"Malagasy Ariary","rate":"4047.329665"},{"name":"Malaysian Ringgit","rate":"4.353505"},{"name":"Mauritius Rupee","rate":"43.000289"},{"name":"Mexican Peso","rate":"20.38726"},{"name":"Moldovan Leu","rate":"18.482081"},{"name":"Moroccan Dirham","rate":"9.823806"},{"name":"Mozambique Metical","rate":"63.830243"},{"name":"Naira","rate":"415.579545"},{"name":"Nakfa","rate":"15.000002"},{"name":"Namibia Dollar","rate":"15.639617"},{"name":"Nepalese Rupee","rate":"122.306767"},{"name":"Netherlands Antillean Guilder","rate":"1.804415"},{"name":"New Israeli Sheqel","rate":"3.27123"},{"name":"New Romanian Leu","rate":"4.577798"},{"name":"New Taiwan Dollar","rate":"29.342502"},{"name":"New Zealand Dollar","rate":"1.50963"},{"name":"Ngultrum","rate":"76.437315"},{"name":"North Korean Won","rate":"900.000119"},{"name":"Norwegian Krone","rate":"9.010698"},{"name":"Nuevo Sol","rate":"3.742462"},{"name":"Ouguiya","rate":"356.999828"},{"name":"Pa'anga","rate":"2.275102"},{"name":"Pakistan Rupee","rate":"186.472399"},{"name":"Pataca","rate":"8.091123"},{"name":"Peso Convertible","rate":"1"},{"name":"Peso Uruguayo","rate":"40.861569"},{"name":"Philippine Peso","rate":"52.394984"},{"name":"Pound Sterling","rate":"0.78401"},{"name":"Pula","rate":"11.904879"},{"name":"Qatari Rial","rate":"3.640982"},{"name":"Quetzal","rate":"7.668612"},{"name":"Rand","rate":"15.64883"},{"name":"Rial Omani","rate":"0.38501"},{"name":"Riel","rate":"4047.67084"},{"name":"Rufiyaa","rate":"15.449658"},{"name":"Rupiah","rate":"14461.8"},{"name":"Russian Ruble","rate":"74.125992"},{"name":"Rwanda Franc","rate":"1019.499303"},{"name":"Saint Helena Pound","rate":"1.377399"},{"name":"Saudi Riyal","rate":"3.750601"},{"name":"SDR (Special Drawing Right)","rate":"0.732663"},{"name":"Serbian Dinar","rate":"109.519741"},{"name":"Seychelles Rupee","rate":"13.736752"},{"name":"Singapore Dollar","rate":"1.374085"},{"name":"Solomon Islands Dollar","rate":"8.016064"},{"name":"Som","rate":"80.865102"},{"name":"Somali Shilling","rate":"575.999641"},{"name":"Somoni","rate":"12.519102"},{"name":"South Sudanese Pound","rate":"0"},{"name":"Sri Lanka Rupee","rate":"335.400145"},{"name":"Sudanese Pound","rate":"447.505563"},{"name":"Surinam Dollar","rate":"20.733504"},{"name":"Swedish Krona","rate":"9.611015"},{"name":"Swiss Franc","rate":"0.95797"},{"name":"Syrian Pound","rate":"2512.449491"},{"name":"Taka","rate":"86.327195"},{"name":"Tala","rate":"2.585442"},{"name":"Tanzanian Shilling","rate":"2322.999869"},{"name":"Tenge","rate":"444.582267"},{"name":"Trinidad and Tobago Dollar","rate":"6.795551"},{"name":"Tugrik","rate":"2994.863198"},{"name":"Tunisian Dinar","rate":"3.011495"},{"name":"Turkish Lira","rate":"14.760703"},{"name":"Turkmenistan New Manat","rate":"3.5"},{"name":"UAE Dirham","rate":"3.672975"},{"name":"Uganda Shilling","rate":"3527.331636"},{"name":"Unidad de Fomento","rate":"0.030343"},{"name":"Unidad de Valor Real","rate":"0"},{"name":"US Dollar","rate":"1"},{"name":"Uzbekistan Sum","rate":"11273.413093"},{"name":"Vatu","rate":"112.581651"},{"name":"WIR Euro","rate":"0"},{"name":"WIR Franc","rate":"0"},{"name":"Won","rate":"1250.594979"},{"name":"Yemeni Rial","rate":"250.249852"},{"name":"Yen","rate":"128.272504"},{"name":"Yuan Renminbi","rate":"6.553022"},{"name":"Zambian Kwacha","rate":"16.845121"},{"name":"Zimbabwe Dollar","rate":"321.999592"},{"name":"Zloty","rate":"4.324355"}]},"weather":{"January":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"February":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"March":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"April":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"May":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"June":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"July":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"August":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"September":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"October":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"November":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"},"December":{"tMin":"-100","tMax":"100","tAvg":"0","pMin":"100","pMax":"-100","pAvg":"0"}},"advise":[],"neighbors":[{"id":"60","name":"Congo-Kinshasa"},{"id":"51","name":"Congo-Brazzaville"},{"id":"43","name":"Central African Republic"},{"id":"80","name":"Gabon"},{"id":"68","name":"Equatorial Guinea"}]},{"names":{"name":"Albania","full":"Republic of Albania","iso2":"AL","iso3":"ALB","continent":"EU"},"maps":{"lat":"41.1529058","long":"20.1605717","zoom":"8"},"timezone":{"name":"Europe/Tirane"},"language":[{"language":"Albanian","official":"Yes"},{"language":"Greek","official":"Yes"}],"electricity":{"voltage":"230","frequency":"50","plugs":["C","F"]},"telephone":{"calling_code":"355","police":"129","ambulance":"127","fire":"128"},"water":{"short":"not safe","full":""},"vaccinations":[{"name":"Hepatitis A","message":"Vaccination is recommended for all travelers to this country"},{"name":"Hepatitis B","message":"The vaccination advice is personal. Consult a qualified medical professional to determine whether vaccination is useful for you"},{"name":"Yellow fever","message":"Yellow fever does not occur in this country. However, vaccination is required if you are traveling from a country with the risk of yellow fever"},{"name":"Tyfoid","message":"The vaccination advice is personal. Consult a qualified medical professional to determine whether vaccination is useful for you"},{"name":"DTP","message":"Vaccination is recommended for all travelers to this country"}],"currency":{"name":"Lek","code":"ALL","symbol":"Lek","rate":"111.154823","compare":[{"name":"Afghani","rate":"86.892932"},{"name":"Algerian Dinar","rate":"144.314002"},{"name":"Argentine Peso","rate":"114.190305"},{"name":"Armenian Dram","rate":"470.779912"},{"name":"Aruban Florin","rate":"1.8005"},{"name":"Australian Dollar","rate":"1.390499"},{"name":"Azerbaijanian Manat","rate":"1.695212"},{"name":"Bahamian Dollar","rate":"1.001208"},{"name":"Bahraini Dinar","rate":"0.377065"},{"name":"Baht","rate":"34.006503"},{"name":"Balboa","rate":"1.001189"},{"name":"Barbados Dollar","rate":"2.021485"},{"name":"Belarussian Ruble","rate":"19600"},{"name":"Belize Dollar","rate":"2.018152"},{"name":"Bermudian Dollar","rate":"1"},{"name":"Bolivar","rate":"213830222338.07"},{"name":"Boliviano","rate":"6.883085"},{"name":"Brazilian Real","rate":"4.795203"},{"name":"Brunei Dollar","rate":"1.367564"},{"name":"Bulgarian Lev","rate":"1.819635"},{"name":"Burundi Franc","rate":"2055.438048"},{"name":"Canadian Dollar","rate":"1.272635"},{"name":"Cape Verde Escudo","rate":"102.073594"},{"name":"Cayman Islands Dollar","rate":"0.834309"},{"name":"CFA Franc BCEAO","rate":"607.201737"},{"name":"CFA Franc BEAC","rate":"607.201737"},{"name":"CFP Franc","rate":"110.999875"},{"name":"Chilean Peso","rate":"837.249588"},{"name":"Colombian Peso","rate":"3856.01"},{"name":"Comoro Franc","rate":"456.397254"},{"name":"Congolese Franc","rate":"2011.99999"},{"name":"Convertible Mark","rate":"1.810426"},{"name":"Cordoba Oro","rate":"35.847284"},{"name":"Costa Rican Colon","rate":"658.391188"},{"name":"Croatian Kuna","rate":"7.036095"},{"name":"Cuban Peso","rate":"26.5"},{"name":"Czech Koruna","rate":"22.669026"},{"name":"Dalasi","rate":"53.875009"},{"name":"Danish Krone","rate":"6.92376"},{"name":"Denar","rate":"57.187806"},{"name":"Djibouti Franc","rate":"178.238352"},{"name":"Dobra","rate":"20697.981008"},{"name":"Dominican Peso","rate":"55.045821"},{"name":"Dong","rate":"22983"},{"name":"East Caribbean Dollar","rate":"2.70255"},{"name":"Egyptian Pound","rate":"18.577296"},{"name":"El Salvador Colon","rate":"8.76057"},{"name":"Ethiopian Birr","rate":"51.583488"},{"name":"Euro","rate":"0.93061"},{"name":"Falkland Islands Pound","rate":"0.768642"},{"name":"Fiji Dollar","rate":"2.14095"},{"name":"Forint","rate":"347.046027"},{"name":"Ghana Cedi","rate":"7.534274"},{"name":"Gibraltar Pound","rate":"0.768642"},{"name":"Gourde","rate":"109.126336"},{"name":"Guarani","rate":"6834.059215"},{"name":"Guinea Franc","rate":"8899.523746"},{"name":"Guyana Dollar","rate":"209.47003"},{"name":"Hong Kong Dollar","rate":"7.84622"},{"name":"Hryvnia","rate":"29.434836"},{"name":"Iceland Krona","rate":"129.540101"},{"name":"Indian Rupee","rate":"76.62775"},{"name":"Iranian Rial","rate":"42349.999852"},{"name":"Iraqi Dinar","rate":"1461.258267"},{"name":"Jamaican Dollar","rate":"155.075234"},{"name":"Jordanian Dinar","rate":"0.708302"},{"name":"Kenyan Shilling","rate":"115.549865"},{"name":"Kina","rate":"3.527833"},{"name":"Kip","rate":"12007.27579"},{"name":"Kuwaiti Dinar","rate":"0.30575"},{"name":"Kwacha","rate":"817.930288"},{"name":"Kwanza","rate":"404.158031"},{"name":"Kyat","rate":"1853.710977"},{"name":"Lari","rate":"3.035017"},{"name":"Lebanese Pound","rate":"1514.03089"},{"name":"Lek","rate":"111.154823"},{"name":"Lempira","rate":"24.57269"},{"name":"Leone","rate":"12439.999955"},{"name":"Liberian Dollar","rate":"151.824984"},{"name":"Libyan Dinar","rate":"4.716119"},{"name":"Lilangeni","rate":"15.503307"},{"name":"Lithuanian Litas","rate":"2.95274"},{"name":"Loti","rate":"15.639606"},{"name":"Malagasy Ariary","rate":"4047.329665"},{"name":"Malaysian Ringgit","rate":"4.353505"},{"name":"Mauritius Rupee","rate":"43.000289"},{"name":"Mexican Peso","rate":"20.38726"},{"name":"Moldovan Leu","rate":"18.482081"},{"name":"Moroccan Dirham","rate":"9.823806"},{"name":"Mozambique Metical","rate":"63.830243"},{"name":"Naira","rate":"415.579545"},{"name":"Nakfa","rate":"15.000002"},{"name":"Namibia Dollar","rate":"15.639617"},{"name":"Nepalese Rupee","rate":"122.306767"},{"name":"Netherlands Antillean Guilder","rate":"1.804415"},{"name":"New Israeli Sheqel","rate":"3.27123"},{"name":"New Romanian Leu","rate":"4.577798"},{"name":"New Taiwan Dollar","rate":"29.342502"},{"name":"New Zealand Dollar","rate":"1.50963"},{"name":"Ngultrum","rate":"76.437315"},{"name":"North Korean Won","rate":"900.000119"},{"name":"Norwegian Krone","rate":"9.010698"},{"name":"Nuevo Sol","rate":"3.742462"},{"name":"Ouguiya","rate":"356.999828"},{"name":"Pa'anga","rate":"2.275102"},{"name":"Pakistan Rupee","rate":"186.472399"},{"name":"Pataca","rate":"8.091123"},{"name":"Peso Convertible","rate":"1"},{"name":"Peso Uruguayo","rate":"40.861569"},{"name":"Philippine Peso","rate":"52.394984"},{"name":"Pound Sterling","rate":"0.78401"},{"name":"Pula","rate":"11.904879"},{"name":"Qatari Rial","rate":"3.640982"},{"name":"Quetzal","rate":"7.668612"},{"name":"Rand","rate":"15.64883"},{"name":"Rial Omani","rate":"0.38501"},{"name":"Riel","rate":"4047.67084"},{"name":"Rufiyaa","rate":"15.449658"},{"name":"Rupiah","rate":"14461.8"},{"name":"Russian Ruble","rate":"74.125992"},{"name":"Rwanda Franc","rate":"1019.499303"},{"name":"Saint Helena Pound","rate":"1.377399"},{"name":"Saudi Riyal","rate":"3.750601"},{"name":"SDR (Special Drawing Right)","rate":"0.732663"},{"name":"Serbian Dinar","rate":"109.519741"},{"name":"Seychelles Rupee","rate":"13.736752"},{"name":"Singapore Dollar","rate":"1.374085"},{"name":"Solomon Islands Dollar","rate":"8.016064"},{"name":"Som","rate":"80.865102"},{"name":"Somali Shilling","rate":"575.999641"},{"name":"Somoni","rate":"12.519102"},{"name":"South Sudanese Pound","rate":"0"},{"name":"Sri Lanka Rupee","rate":"335.400145"},{"name":"Sudanese Pound","rate":"447.505563"},{"name":"Surinam Dollar","rate":"20.733504"},{"name":"Swedish Krona","rate":"9.611015"},{"name":"Swiss Franc","rate":"0.95797"},{"name":"Syrian Pound","rate":"2512.449491"},{"name":"Taka","rate":"86.327195"},{"name":"Tala","rate":"2.585442"},{"name":"Tanzanian Shilling","rate":"2322.999869"},{"name":"Tenge","rate":"444.582267"},{"name":"Trinidad and Tobago Dollar","rate":"6.795551"},{"name":"Tugrik","rate":"2994.863198"},{"name":"Tunisian Dinar","rate":"3.011495"},{"name":"Turkish Lira","rate":"14.760703"},{"name":"Turkmenistan New Manat","rate":"3.5"},{"name":"UAE Dirham","rate":"3.672975"},{"name":"Uganda Shilling","rate":"3527.331636"},{"name":"Unidad de Fomento","rate":"0.030343"},{"name":"Unidad de Valor Real","rate":"0"},{"name":"US Dollar","rate":"1"},{"name":"Uzbekistan Sum","rate":"11273.413093"},{"name":"Vatu","rate":"112.581651"},{"name":"WIR Euro","rate":"0"},{"name":"WIR Franc","rate":"0"},{"name":"Won","rate":"1250.594979"},{"name":"Yemeni Rial","rate":"250.249852"},{"name":"Yen","rate":"128.272504"},{"name":"Yuan Renminbi","rate":"6.553022"},{"name":"Zambian Kwacha","rate":"16.845121"},{"name":"Zimbabwe Dollar","rate":"321.999592"},{"name":"Zloty","rate":"4.324355"}]},"weather":{"January":{"tMin":"11.14120483","tMax":"1.29560343424","tAvg":"4.26666666667","pMin":"51.3992322286","pMax":"111.649075826","pAvg":"82.0666666667"},"February":{"tMin":"11.56882731","tMax":"1.82764689127","tAvg":"4.66666666667","pMin":"40.7287597656","pMax":"87.46430715","pAvg":"64.8"},"March":{"tMin":"13.03607178","tMax":"3.9894917806","tAvg":"7.13333333333","pMin":"39.880443573","pMax":"92.43916829","pAvg":"63.9333333333"},"April":{"tMin":"16.02459717","tMax":"8.39815266927","tAvg":"10.4666666667","pMin":"32.0213756561","pMax":"88.1388727824","pAvg":"56.5333333333"},"May":{"tMin":"20.23268636","tMax":"12.4230855306","tAvg":"14.8","pMin":"23.4694404602","pMax":"82.2683944702","pAvg":"50.8666666667"},"June":{"tMin":"26.26705933","tMax":"17.2716267903","tAvg":"19.9333333333","pMin":"13.0012426376","pMax":"70.7789421082","pAvg":"40.1333333333"},"July":{"tMin":"29.852712","tMax":"20.5935770671","tAvg":"23.3333333333","pMin":"4.381509384","pMax":"51.7179374695","pAvg":"26.8666666667"},"August":{"tMin":"29.16194661","tMax":"19.9036865234","tAvg":"23.1333333333","pMin":"6.674437205","pMax":"43.1841945648","pAvg":"22.8"},"September":{"tMin":"23.70999146","tMax":"15.6882019043","tAvg":"18.5333333333","pMin":"9.881790002","pMax":"69.0700480143","pAvg":"39.8666666667"},"October":{"tMin":"18.00969442","tMax":"10.4103088379","tAvg":"13.2","pMin":"32.76820882","pMax":"134.323125203","pAvg":"68.2"},"November":{"tMin":"14.12413534","tMax":"6.75893147786","tAvg":"8.86666666667","pMin":"49.4758987427","pMax":"136.221252441","pAvg":"81.1333333333"},"December":{"tMin":"11.87378947","tMax":"3.45556640625","tAvg":"5.8","pMin":"60.5264256795","pMax":"130.8369954","pAvg":"82.0666666667"}},"advise":{"UA":{"advise":"Exercise normal safety precautions","url":"http://www.smartraveller.gov.au/zw-cgi/view/Advice/Albania"},"CA":{"advise":"<!-- START adv-albania -->Avoid non-essential travel<!-- END adv-albania -->","url":"http://travel.gc.ca/destinations/albania"}},"neighbors":[{"id":"130","name":"Macedonia"},{"id":"117","name":"Kosovo"},{"id":"147","name":"Montenegro"},{"id":"196","name":"Serbia"},{"id":"29","name":"Bosnia and Herzegovina"}]},...]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 2558063
ETag: W/"27086f-rC1lvgPs28nY3doihEMc9v56aPE"
Date: Thu, 28 Apr 2022 04:09:03 GMT
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
[{"_id":"user3","name":"User Name","email":"email@email.com","password":"password123","vaccinations":{"malaria":false,"hepatitisA":false,"hepatitisB":false,"yellowFever":false,"tyfoid":false,"dtp":false,"cholera":false},"languages":[]},{"_id":"user4","name":"User Name","email":"email1@email.com","password":"password123","vaccinations":{"malaria":true,"hepatitisA":true,"hepatitisB":false,"yellowFever":false,"tyfoid":false,"dtp":false,"cholera":false},"languages":["English"]}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 994
ETag: W/"3e2-RJmD3j7B10YSE+DRz0PLQt9R/IM"
Date: Thu, 28 Apr 2022 04:09:55 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/users/:id/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/users/user3/
```

#### Response body

```
{"_id":"user3","name":"User Name","email":"email@email.com","password":"password123","vaccinations":{"malaria":false,"hepatitisA":false,"hepatitisB":false,"yellowFever":false,"tyfoid":false,"dtp":false,"cholera":false},"languages":[]}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 234
ETag: W/"ea-2XudjtrBAh/NrQ69gFpuaokOlxQ"
Date: Thu, 28 Apr 2022 04:12:21 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/getUserCountries/:id/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/getUserCountries/testUser/
```

#### Response body

```
[{"names":{"name":"Australia","full":"Commonwealth of Australia","iso2":"AU","iso3":"AUS","continent":"OC"},"maps":{"lat":"-26.4390743","long":"133.281323","zoom":"4"},"timezone":{"name":"Australia/Sydney"},"language":[{"language":"English","official":"Yes"}],"electricity":{"voltage":"230","frequency":"50","plugs":["I"]},"telephone":{"calling_code":"61","police":"112","ambulance":"112","fire":"112"},"water":{"short":"safe","full":""},"vaccinations":[],"currency":{"name":"Australian Dollar","code":"AUD","symbol":"$","rate":"1.390499","compare":[{"name":"Afghani","rate":"86.892932"},{"name":"Algerian Dinar","rate":"144.314002"},{"name":"Argentine Peso","rate":"114.190305"},{"name":"Armenian Dram","rate":"470.779912"},{"name":"Aruban Florin","rate":"1.8005"},{"name":"Australian Dollar","rate":"1.390499"},{"name":"Azerbaijanian Manat","rate":"1.695212"},{"name":"Bahamian Dollar","rate":"1.001208"},{"name":"Bahraini Dinar","rate":"0.377065"},{"name":"Baht","rate":"34.006503"},{"name":"Balboa","rate":"1.001189"},{"name":"Barbados Dollar","rate":"2.021485"},{"name":"Belarussian Ruble","rate":"19600"},{"name":"Belize Dollar","rate":"2.018152"},{"name":"Bermudian Dollar","rate":"1"},{"name":"Bolivar","rate":"213830222338.07"},{"name":"Boliviano","rate":"6.883085"},{"name":"Brazilian Real","rate":"4.795203"},{"name":"Brunei Dollar","rate":"1.367564"},{"name":"Bulgarian Lev","rate":"1.819635"},{"name":"Burundi Franc","rate":"2055.438048"},{"name":"Canadian Dollar","rate":"1.272635"},{"name":"Cape Verde Escudo","rate":"102.073594"},{"name":"Cayman Islands Dollar","rate":"0.834309"},{"name":"CFA Franc BCEAO","rate":"607.201737"},{"name":"CFA Franc BEAC","rate":"607.201737"},{"name":"CFP Franc","rate":"110.999875"},{"name":"Chilean Peso","rate":"837.249588"},{"name":"Colombian Peso","rate":"3856.01"},{"name":"Comoro Franc","rate":"456.397254"},{"name":"Congolese Franc","rate":"2011.99999"},{"name":"Convertible Mark","rate":"1.810426"},{"name":"Cordoba Oro","rate":"35.847284"},{"name":"Costa Rican Colon","rate":"658.391188"},{"name":"Croatian Kuna","rate":"7.036095"},{"name":"Cuban Peso","rate":"26.5"},{"name":"Czech Koruna","rate":"22.669026"},{"name":"Dalasi","rate":"53.875009"},{"name":"Danish Krone","rate":"6.92376"},{"name":"Denar","rate":"57.187806"},{"name":"Djibouti Franc","rate":"178.238352"},{"name":"Dobra","rate":"20697.981008"},{"name":"Dominican Peso","rate":"55.045821"},{"name":"Dong","rate":"22983"},{"name":"East Caribbean Dollar","rate":"2.70255"},{"name":"Egyptian Pound","rate":"18.577296"},{"name":"El Salvador Colon","rate":"8.76057"},{"name":"Ethiopian Birr","rate":"51.583488"},{"name":"Euro","rate":"0.93061"},{"name":"Falkland Islands Pound","rate":"0.768642"},{"name":"Fiji Dollar","rate":"2.14095"},{"name":"Forint","rate":"347.046027"},{"name":"Ghana Cedi","rate":"7.534274"},{"name":"Gibraltar Pound","rate":"0.768642"},{"name":"Gourde","rate":"109.126336"},{"name":"Guarani","rate":"6834.059215"},{"name":"Guinea Franc","rate":"8899.523746"},{"name":"Guyana Dollar","rate":"209.47003"},{"name":"Hong Kong Dollar","rate":"7.84622"},{"name":"Hryvnia","rate":"29.434836"},{"name":"Iceland Krona","rate":"129.540101"},{"name":"Indian Rupee","rate":"76.62775"},{"name":"Iranian Rial","rate":"42349.999852"},{"name":"Iraqi Dinar","rate":"1461.258267"},{"name":"Jamaican Dollar","rate":"155.075234"},{"name":"Jordanian Dinar","rate":"0.708302"},{"name":"Kenyan Shilling","rate":"115.549865"},{"name":"Kina","rate":"3.527833"},{"name":"Kip","rate":"12007.27579"},{"name":"Kuwaiti Dinar","rate":"0.30575"},{"name":"Kwacha","rate":"817.930288"},{"name":"Kwanza","rate":"404.158031"},{"name":"Kyat","rate":"1853.710977"},{"name":"Lari","rate":"3.035017"},{"name":"Lebanese Pound","rate":"1514.03089"},{"name":"Lek","rate":"111.154823"},{"name":"Lempira","rate":"24.57269"},{"name":"Leone","rate":"12439.999955"},{"name":"Liberian Dollar","rate":"151.824984"},{"name":"Libyan Dinar","rate":"4.716119"},{"name":"Lilangeni","rate":"15.503307"},{"name":"Lithuanian Litas","rate":"2.95274"},{"name":"Loti","rate":"15.639606"},{"name":"Malagasy Ariary","rate":"4047.329665"},{"name":"Malaysian Ringgit","rate":"4.353505"},{"name":"Mauritius Rupee","rate":"43.000289"},{"name":"Mexican Peso","rate":"20.38726"},{"name":"Moldovan Leu","rate":"18.482081"},{"name":"Moroccan Dirham","rate":"9.823806"},{"name":"Mozambique Metical","rate":"63.830243"},{"name":"Naira","rate":"415.579545"},{"name":"Nakfa","rate":"15.000002"},{"name":"Namibia Dollar","rate":"15.639617"},{"name":"Nepalese Rupee","rate":"122.306767"},{"name":"Netherlands Antillean Guilder","rate":"1.804415"},{"name":"New Israeli Sheqel","rate":"3.27123"},{"name":"New Romanian Leu","rate":"4.577798"},{"name":"New Taiwan Dollar","rate":"29.342502"},{"name":"New Zealand Dollar","rate":"1.50963"},{"name":"Ngultrum","rate":"76.437315"},{"name":"North Korean Won","rate":"900.000119"},{"name":"Norwegian Krone","rate":"9.010698"},{"name":"Nuevo Sol","rate":"3.742462"},{"name":"Ouguiya","rate":"356.999828"},{"name":"Pa'anga","rate":"2.275102"},{"name":"Pakistan Rupee","rate":"186.472399"},{"name":"Pataca","rate":"8.091123"},{"name":"Peso Convertible","rate":"1"},{"name":"Peso Uruguayo","rate":"40.861569"},{"name":"Philippine Peso","rate":"52.394984"},{"name":"Pound Sterling","rate":"0.78401"},{"name":"Pula","rate":"11.904879"},{"name":"Qatari Rial","rate":"3.640982"},{"name":"Quetzal","rate":"7.668612"},{"name":"Rand","rate":"15.64883"},{"name":"Rial Omani","rate":"0.38501"},{"name":"Riel","rate":"4047.67084"},{"name":"Rufiyaa","rate":"15.449658"},{"name":"Rupiah","rate":"14461.8"},{"name":"Russian Ruble","rate":"74.125992"},{"name":"Rwanda Franc","rate":"1019.499303"},{"name":"Saint Helena Pound","rate":"1.377399"},{"name":"Saudi Riyal","rate":"3.750601"},{"name":"SDR (Special Drawing Right)","rate":"0.732663"},{"name":"Serbian Dinar","rate":"109.519741"},{"name":"Seychelles Rupee","rate":"13.736752"},{"name":"Singapore Dollar","rate":"1.374085"},{"name":"Solomon Islands Dollar","rate":"8.016064"},{"name":"Som","rate":"80.865102"},{"name":"Somali Shilling","rate":"575.999641"},{"name":"Somoni","rate":"12.519102"},{"name":"South Sudanese Pound","rate":"0"},{"name":"Sri Lanka Rupee","rate":"335.400145"},{"name":"Sudanese Pound","rate":"447.505563"},{"name":"Surinam Dollar","rate":"20.733504"},{"name":"Swedish Krona","rate":"9.611015"},{"name":"Swiss Franc","rate":"0.95797"},{"name":"Syrian Pound","rate":"2512.449491"},{"name":"Taka","rate":"86.327195"},{"name":"Tala","rate":"2.585442"},{"name":"Tanzanian Shilling","rate":"2322.999869"},{"name":"Tenge","rate":"444.582267"},{"name":"Trinidad and Tobago Dollar","rate":"6.795551"},{"name":"Tugrik","rate":"2994.863198"},{"name":"Tunisian Dinar","rate":"3.011495"},{"name":"Turkish Lira","rate":"14.760703"},{"name":"Turkmenistan New Manat","rate":"3.5"},{"name":"UAE Dirham","rate":"3.672975"},{"name":"Uganda Shilling","rate":"3527.331636"},{"name":"Unidad de Fomento","rate":"0.030343"},{"name":"Unidad de Valor Real","rate":"0"},{"name":"US Dollar","rate":"1"},{"name":"Uzbekistan Sum","rate":"11273.413093"},{"name":"Vatu","rate":"112.581651"},{"name":"WIR Euro","rate":"0"},{"name":"WIR Franc","rate":"0"},{"name":"Won","rate":"1250.594979"},{"name":"Yemeni Rial","rate":"250.249852"},{"name":"Yen","rate":"128.272504"},{"name":"Yuan Renminbi","rate":"6.553022"},{"name":"Zambian Kwacha","rate":"16.845121"},{"name":"Zimbabwe Dollar","rate":"321.999592"},{"name":"Zloty","rate":"4.324355"}]},"weather":{"January":{"tMin":"29.591368","tMax":"25.4170841471","tAvg":"26.0666666667","pMin":"28.4266726351","pMax":"156.253053284","pAvg":"95.2666666667"},"February":{"tMin":"28.12588542","tMax":"25.2854802789","tAvg":"26","pMin":"30.0704637167","pMax":"152.1000659","pAvg":"94.9333333333"},"March":{"tMin":"26.79962389","tMax":"23.5442900933","tAvg":"24.3333333333","pMin":"34.3486802355","pMax":"132.2469297","pAvg":"79.8"},"April":{"tMin":"23.360803087","tMax":"20.8366593424","tAvg":"21.4","pMin":"19.2030104648","pMax":"95.78192808","pAvg":"48.8"},"May":{"tMin":"20.4104954698","tMax":"16.5901710341","tAvg":"17.6666666667","pMin":"19.4903975307","pMax":"65.68873722","pAvg":"37.0666666667"},"June":{"tMin":"18.1302601454","tMax":"13.4658966743","tAvg":"14.6666666667","pMin":"21.505637224","pMax":"46.8300100326","pAvg":"32.9333333333"},"July":{"tMin":"17.406950548","tMax":"12.4329286024","tAvg":"13.8666666667","pMin":"15.5427346961","pMax":"47.37453042","pAvg":"29.9333333333"},"August":{"tMin":"18.7771202257","tMax":"13.7592569987","tAvg":"15.4","pMin":"12.30734975","pMax":"43.1850116009","pAvg":"26.1333333333"},"September":{"tMin":"21.5116912164","tMax":"16.4718253581","tAvg":"18.5333333333","pMin":"8.2393931765","pMax":"49.62307584","pAvg":"22.8"},"October":{"tMin":"24.6162643772","tMax":"19.2542766656","tAvg":"21.8","pMin":"8.23687063538","pMax":"58.67578397","pAvg":"26.1333333333"},"November":{"tMin":"26.70650825","tMax":"22.011647271","tAvg":"24.2","pMin":"9.76089313517","pMax":"86.57668973","pAvg":"41.4"},"December":{"tMin":"28.69827474","tMax":"24.2885427517","tAvg":"25.7333333333","pMin":"11.2782949955","pMax":"136.4244906","pAvg":"71.9333333333"}},"advise":{"CA":{"advise":"<!-- START adv-australia -->Avoid non-essential travel<!-- END adv-australia -->","url":"http://travel.gc.ca/destinations/australia"}},"neighbors":[{"id":"222","name":"Timor-Leste"},{"id":"168","name":"Palau"},{"id":"171","name":"Papua New Guinea"},{"id":"162","name":"Norfolk Island"},{"id":"156","name":"New Caledonia"}]},{"names":{"name":"Barbados","full":"Barbados","iso2":"BB","iso3":"BRB","continent":"NA"},"maps":{"lat":"13.1900628","long":"-59.5355639","zoom":"11"},"timezone":{"name":"America/Barbados"},"language":[{"language":"English","official":"Yes"}],"electricity":{"voltage":"115","frequency":"50","plugs":["A","B"]},"telephone":{"calling_code":"1+246","police":"211","ambulance":"511","fire":"311"},"water":{"short":null,"full":null},"vaccinations":[],"currency":{"name":"Barbados Dollar","code":"BBD","symbol":"$","rate":"2.021485","compare":[{"name":"Afghani","rate":"86.892932"},{"name":"Algerian Dinar","rate":"144.314002"},{"name":"Argentine Peso","rate":"114.190305"},{"name":"Armenian Dram","rate":"470.779912"},{"name":"Aruban Florin","rate":"1.8005"},{"name":"Australian Dollar","rate":"1.390499"},{"name":"Azerbaijanian Manat","rate":"1.695212"},{"name":"Bahamian Dollar","rate":"1.001208"},{"name":"Bahraini Dinar","rate":"0.377065"},{"name":"Baht","rate":"34.006503"},{"name":"Balboa","rate":"1.001189"},{"name":"Barbados Dollar","rate":"2.021485"},{"name":"Belarussian Ruble","rate":"19600"},{"name":"Belize Dollar","rate":"2.018152"},{"name":"Bermudian Dollar","rate":"1"},{"name":"Bolivar","rate":"213830222338.07"},{"name":"Boliviano","rate":"6.883085"},{"name":"Brazilian Real","rate":"4.795203"},{"name":"Brunei Dollar","rate":"1.367564"},{"name":"Bulgarian Lev","rate":"1.819635"},{"name":"Burundi Franc","rate":"2055.438048"},{"name":"Canadian Dollar","rate":"1.272635"},{"name":"Cape Verde Escudo","rate":"102.073594"},{"name":"Cayman Islands Dollar","rate":"0.834309"},{"name":"CFA Franc BCEAO","rate":"607.201737"},{"name":"CFA Franc BEAC","rate":"607.201737"},{"name":"CFP Franc","rate":"110.999875"},{"name":"Chilean Peso","rate":"837.249588"},{"name":"Colombian Peso","rate":"3856.01"},{"name":"Comoro Franc","rate":"456.397254"},{"name":"Congolese Franc","rate":"2011.99999"},{"name":"Convertible Mark","rate":"1.810426"},{"name":"Cordoba Oro","rate":"35.847284"},{"name":"Costa Rican Colon","rate":"658.391188"},{"name":"Croatian Kuna","rate":"7.036095"},{"name":"Cuban Peso","rate":"26.5"},{"name":"Czech Koruna","rate":"22.669026"},{"name":"Dalasi","rate":"53.875009"},{"name":"Danish Krone","rate":"6.92376"},{"name":"Denar","rate":"57.187806"},{"name":"Djibouti Franc","rate":"178.238352"},{"name":"Dobra","rate":"20697.981008"},{"name":"Dominican Peso","rate":"55.045821"},{"name":"Dong","rate":"22983"},{"name":"East Caribbean Dollar","rate":"2.70255"},{"name":"Egyptian Pound","rate":"18.577296"},{"name":"El Salvador Colon","rate":"8.76057"},{"name":"Ethiopian Birr","rate":"51.583488"},{"name":"Euro","rate":"0.93061"},{"name":"Falkland Islands Pound","rate":"0.768642"},{"name":"Fiji Dollar","rate":"2.14095"},{"name":"Forint","rate":"347.046027"},{"name":"Ghana Cedi","rate":"7.534274"},{"name":"Gibraltar Pound","rate":"0.768642"},{"name":"Gourde","rate":"109.126336"},{"name":"Guarani","rate":"6834.059215"},{"name":"Guinea Franc","rate":"8899.523746"},{"name":"Guyana Dollar","rate":"209.47003"},{"name":"Hong Kong Dollar","rate":"7.84622"},{"name":"Hryvnia","rate":"29.434836"},{"name":"Iceland Krona","rate":"129.540101"},{"name":"Indian Rupee","rate":"76.62775"},{"name":"Iranian Rial","rate":"42349.999852"},{"name":"Iraqi Dinar","rate":"1461.258267"},{"name":"Jamaican Dollar","rate":"155.075234"},{"name":"Jordanian Dinar","rate":"0.708302"},{"name":"Kenyan Shilling","rate":"115.549865"},{"name":"Kina","rate":"3.527833"},{"name":"Kip","rate":"12007.27579"},{"name":"Kuwaiti Dinar","rate":"0.30575"},{"name":"Kwacha","rate":"817.930288"},{"name":"Kwanza","rate":"404.158031"},{"name":"Kyat","rate":"1853.710977"},{"name":"Lari","rate":"3.035017"},{"name":"Lebanese Pound","rate":"1514.03089"},{"name":"Lek","rate":"111.154823"},{"name":"Lempira","rate":"24.57269"},{"name":"Leone","rate":"12439.999955"},{"name":"Liberian Dollar","rate":"151.824984"},{"name":"Libyan Dinar","rate":"4.716119"},{"name":"Lilangeni","rate":"15.503307"},{"name":"Lithuanian Litas","rate":"2.95274"},{"name":"Loti","rate":"15.639606"},{"name":"Malagasy Ariary","rate":"4047.329665"},{"name":"Malaysian Ringgit","rate":"4.353505"},{"name":"Mauritius Rupee","rate":"43.000289"},{"name":"Mexican Peso","rate":"20.38726"},{"name":"Moldovan Leu","rate":"18.482081"},{"name":"Moroccan Dirham","rate":"9.823806"},{"name":"Mozambique Metical","rate":"63.830243"},{"name":"Naira","rate":"415.579545"},{"name":"Nakfa","rate":"15.000002"},{"name":"Namibia Dollar","rate":"15.639617"},{"name":"Nepalese Rupee","rate":"122.306767"},{"name":"Netherlands Antillean Guilder","rate":"1.804415"},{"name":"New Israeli Sheqel","rate":"3.27123"},{"name":"New Romanian Leu","rate":"4.577798"},{"name":"New Taiwan Dollar","rate":"29.342502"},{"name":"New Zealand Dollar","rate":"1.50963"},{"name":"Ngultrum","rate":"76.437315"},{"name":"North Korean Won","rate":"900.000119"},{"name":"Norwegian Krone","rate":"9.010698"},{"name":"Nuevo Sol","rate":"3.742462"},{"name":"Ouguiya","rate":"356.999828"},{"name":"Pa'anga","rate":"2.275102"},{"name":"Pakistan Rupee","rate":"186.472399"},{"name":"Pataca","rate":"8.091123"},{"name":"Peso Convertible","rate":"1"},{"name":"Peso Uruguayo","rate":"40.861569"},{"name":"Philippine Peso","rate":"52.394984"},{"name":"Pound Sterling","rate":"0.78401"},{"name":"Pula","rate":"11.904879"},{"name":"Qatari Rial","rate":"3.640982"},{"name":"Quetzal","rate":"7.668612"},{"name":"Rand","rate":"15.64883"},{"name":"Rial Omani","rate":"0.38501"},{"name":"Riel","rate":"4047.67084"},{"name":"Rufiyaa","rate":"15.449658"},{"name":"Rupiah","rate":"14461.8"},{"name":"Russian Ruble","rate":"74.125992"},{"name":"Rwanda Franc","rate":"1019.499303"},{"name":"Saint Helena Pound","rate":"1.377399"},{"name":"Saudi Riyal","rate":"3.750601"},{"name":"SDR (Special Drawing Right)","rate":"0.732663"},{"name":"Serbian Dinar","rate":"109.519741"},{"name":"Seychelles Rupee","rate":"13.736752"},{"name":"Singapore Dollar","rate":"1.374085"},{"name":"Solomon Islands Dollar","rate":"8.016064"},{"name":"Som","rate":"80.865102"},{"name":"Somali Shilling","rate":"575.999641"},{"name":"Somoni","rate":"12.519102"},{"name":"South Sudanese Pound","rate":"0"},{"name":"Sri Lanka Rupee","rate":"335.400145"},{"name":"Sudanese Pound","rate":"447.505563"},{"name":"Surinam Dollar","rate":"20.733504"},{"name":"Swedish Krona","rate":"9.611015"},{"name":"Swiss Franc","rate":"0.95797"},{"name":"Syrian Pound","rate":"2512.449491"},{"name":"Taka","rate":"86.327195"},{"name":"Tala","rate":"2.585442"},{"name":"Tanzanian Shilling","rate":"2322.999869"},{"name":"Tenge","rate":"444.582267"},{"name":"Trinidad and Tobago Dollar","rate":"6.795551"},{"name":"Tugrik","rate":"2994.863198"},{"name":"Tunisian Dinar","rate":"3.011495"},{"name":"Turkish Lira","rate":"14.760703"},{"name":"Turkmenistan New Manat","rate":"3.5"},{"name":"UAE Dirham","rate":"3.672975"},{"name":"Uganda Shilling","rate":"3527.331636"},{"name":"Unidad de Fomento","rate":"0.030343"},{"name":"Unidad de Valor Real","rate":"0"},{"name":"US Dollar","rate":"1"},{"name":"Uzbekistan Sum","rate":"11273.413093"},{"name":"Vatu","rate":"112.581651"},{"name":"WIR Euro","rate":"0"},{"name":"WIR Franc","rate":"0"},{"name":"Won","rate":"1250.594979"},{"name":"Yemeni Rial","rate":"250.249852"},{"name":"Yen","rate":"128.272504"},{"name":"Yuan Renminbi","rate":"6.553022"},{"name":"Zambian Kwacha","rate":"16.845121"},{"name":"Zimbabwe Dollar","rate":"321.999592"},{"name":"Zloty","rate":"4.324355"}]},"weather":{"January":{"tMin":"26.7997741699","tMax":"23.1133422852","tAvg":"24.2","pMin":"21.20677948","pMax":"123.2033081","pAvg":"49.1333333333"},"February":{"tMin":"26.4996032715","tMax":"22.717376709","tAvg":"23.8","pMin":"13.820069313","pMax":"92.26955414","pAvg":"34.3333333333"},"March":{"tMin":"26.5527038574","tMax":"22.7799072266","tAvg":"23.8","pMin":"14.3607664108","pMax":"81.12828064","pAvg":"32.1333333333"},"April":{"tMin":"26.8973693848","tMax":"23.27859497","tAvg":"24.0666666667","pMin":"15.104092598","pMax":"79.59857178","pAvg":"31.5333333333"},"May":{"tMin":"27.3953552246","tMax":"23.770111084","tAvg":"24.7333333333","pMin":"13.2507266998","pMax":"97.3495330811","pAvg":"44.9333333333"},"June":{"tMin":"27.85922241","tMax":"24.3911743164","tAvg":"25.3333333333","pMin":"12.1440925598","pMax":"163.965179443","pAvg":"71.2"},"July":{"tMin":"28.35949707","tMax":"24.9901428223","tAvg":"25.8","pMin":"21.0980243683","pMax":"187.19519043","pAvg":"101.066666667"},"August":{"tMin":"28.83477783","tMax":"25.6690979004","tAvg":"26.2666666667","pMin":"40.3172035217","pMax":"226.933578491","pAvg":"124"},"September":{"tMin":"28.94512939","tMax":"25.8980102539","tAvg":"26.5333333333","pMin":"48.6477432251","pMax":"215.102356","pAvg":"127"},"October":{"tMin":"28.70077515","tMax":"25.5056762695","tAvg":"26.3333333333","pMin":"44.2442550659","pMax":"233.5466156","pAvg":"124.8"},"November":{"tMin":"28.15646362","tMax":"25.0324401855","tAvg":"26","pMin":"42.9541625977","pMax":"178.235443115","pAvg":"97.7333333333"},"December":{"tMin":"27.3255310059","tMax":"24.1421813965","tAvg":"25.0666666667","pMin":"27.6536273956","pMax":"140.87588501","pAvg":"60.4666666667"}},"advise":{"UA":{"advise":"No advice","url":"http://smartraveller.gov.au/countries/barbados"},"CA":{"advise":"<!-- START adv-barbados -->Avoid non-essential travel<!-- END adv-barbados -->","url":"http://travel.gc.ca/destinations/barbados"}},"neighbors":[{"id":"190","name":"Saint Vincent and the Grenadines"},{"id":"187","name":"Saint Lucia"},{"id":"138","name":"Martinique"},{"id":"88","name":"Grenada"},{"id":"63","name":"Dominica"}]},...]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 133921
ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
Date: Thu, 28 Apr 2022 04:13:29 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/users/add/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username": "user", "name": "name", "password":"password123", "email":"email@email.com"}' http://localhost:5000/app/users/add/
```

#### Response body

```
{"message":"Username or email already taken"}
```
```
{"acknowledged":true,"insertedId":"user"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 41
ETag: W/"29-QHbEuKnvCor6EeXUchGRtTtxjPg"
Date: Thu, 28 Apr 2022 04:16:32 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/update/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username": "user", "name": "new_name", "password":"new_pass", "email":"new_email@email.com", "malaria":true, "hepatitisA":true, "hepatitisB":false, "yellowFever":true, "tyfoid":false, "dtp":true, "cholera":true, "languages":["Spanish"]}' http://localhost:5000/app/update/
```

#### Response body

```
{"message":"Email already taken"}
```
```
{"acknowledged":true,"modifiedCount":1,"upsertedId":null,"upsertedCount":0,"matchedCount":1}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 33
ETag: W/"21-Kn4KmlA/JoCJaWrSi6SRyOmnmRk"
Date: Thu, 28 Apr 2022 04:22:18 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```


### /app/:id/ (DELETE)

#### Request cURL

```
curl -X DELETE http://localhost:5000/app/user_to_delete/
```

#### Response body

```
{"acknowledged":true,"deletedCount":1}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 38
ETag: W/"26-fgR5yLHQ1Hpp6zDESHaY9wJreYE"
Date: Thu, 28 Apr 2022 04:22:55 GMT
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
[{"_id":"6261c14927c947f8c0c1e451","remote_addr":"::1","date":"2022-04-21T20:40:41.672Z","method":"GET","url":"/app/","protocol":"http","http_version":"1.1","status":200,"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"},{"_id":"6261c17b27c947f8c0c1e452","remote_addr":"::1","date":"2022-04-21T20:41:31.165Z","method":"GET","url":"/app/users","protocol":"http","http_version":"1.1","status":200,"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"},{"_id":"6261c19027c947f8c0c1e453","remote_addr":"::1","date":"2022-04-21T20:41:52.648Z","method":"GET","url":"/app/getAllCountriesData/","protocol":"http","http_version":"1.1","status":200,"referrer_url":"http://localhost:3000/","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"},{"_id":"6261c1a727c947f8c0c1e454","remote_addr":"::1","date":"2022-04-21T20:42:15.044Z","method":"GET","url":"/app/getAllCountriesData/","protocol":"http","http_version":"1.1","status":200,"referrer_url":"http://localhost:3000/","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 101478
ETag: W/"18c66-DYbGAOVUETaL88uZZf1L6aRkNtU"
Date: Thu, 28 Apr 2022 04:23:29 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/logs/:id (GET)

#### Request cURL

```
curl http://localhost:5000/app/logs/6261c14927c947f8c0c1e451
```

#### Response body

```
{"_id":"6261c14927c947f8c0c1e451","remote_addr":"::1","date":"2022-04-21T20:40:41.672Z","method":"GET","url":"/app/","protocol":"http","http_version":"1.1","status":200,"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 301
ETag: W/"12d-Bmnvg41DRbTYumYtmkStgVBWwd4"
Date: Thu, 28 Apr 2022 04:24:14 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/* (POST)
*Adds a log to the database for every endpoint starting with /app/*

### /app/login/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username": "user3", "password":"password123"}' http://localhost:5000/app/login/
```

#### Response body

```
{"message":"success","token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIxIiwiaWF0IjoxNjUxMTE4NDE2LCJleHAiOjE2NTEyMDQ4MTZ9.O-1kGP-NN7MJKFQZws1h1kux7ToC9NfzcZF_DHHGneA"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 184
ETag: W/"b8-mhyAaZ7/UR5P/Rip+wYNkDYeNKM"
Date: Thu, 28 Apr 2022 04:26:04 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
