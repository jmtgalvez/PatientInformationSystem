const PROVINCES = [
{
"id":1,
"psgcCode":"012800000",
"name":"ILOCOS NORTE",
"regCode":"01",
"provCode":"0128"
},
{
"id":2,
"psgcCode":"012900000",
"name":"ILOCOS SUR",
"regCode":"01",
"provCode":"0129"
},
{
"id":3,
"psgcCode":"013300000",
"name":"LA UNION",
"regCode":"01",
"provCode":"0133"
},
{
"id":4,
"psgcCode":"015500000",
"name":"PANGASINAN",
"regCode":"01",
"provCode":"0155"
},
{
"id":5,
"psgcCode":"020900000",
"name":"BATANES",
"regCode":"02",
"provCode":"0209"
},
{
"id":6,
"psgcCode":"021500000",
"name":"CAGAYAN",
"regCode":"02",
"provCode":"0215"
},
{
"id":7,
"psgcCode":"023100000",
"name":"ISABELA",
"regCode":"02",
"provCode":"0231"
},
{
"id":8,
"psgcCode":"025000000",
"name":"NUEVA VIZCAYA",
"regCode":"02",
"provCode":"0250"
},
{
"id":9,
"psgcCode":"025700000",
"name":"QUIRINO",
"regCode":"02",
"provCode":"0257"
},
{
"id":10,
"psgcCode":"030800000",
"name":"BATAAN",
"regCode":"03",
"provCode":"0308"
},
{
"id":11,
"psgcCode":"031400000",
"name":"BULACAN",
"regCode":"03",
"provCode":"0314"
},
{
"id":12,
"psgcCode":"034900000",
"name":"NUEVA ECIJA",
"regCode":"03",
"provCode":"0349"
},
{
"id":13,
"psgcCode":"035400000",
"name":"PAMPANGA",
"regCode":"03",
"provCode":"0354"
},
{
"id":14,
"psgcCode":"036900000",
"name":"TARLAC",
"regCode":"03",
"provCode":"0369"
},
{
"id":15,
"psgcCode":"037100000",
"name":"ZAMBALES",
"regCode":"03",
"provCode":"0371"
},
{
"id":16,
"psgcCode":"037700000",
"name":"AURORA",
"regCode":"03",
"provCode":"0377"
},
{
"id":17,
"psgcCode":"041000000",
"name":"BATANGAS",
"regCode":"04",
"provCode":"0410"
},
{
"id":18,
"psgcCode":"042100000",
"name":"CAVITE",
"regCode":"04",
"provCode":"0421"
},
{
"id":19,
"psgcCode":"043400000",
"name":"LAGUNA",
"regCode":"04",
"provCode":"0434"
},
{
"id":20,
"psgcCode":"045600000",
"name":"QUEZON",
"regCode":"04",
"provCode":"0456"
},
{
"id":21,
"psgcCode":"045800000",
"name":"RIZAL",
"regCode":"04",
"provCode":"0458"
},
{
"id":22,
"psgcCode":"174000000",
"name":"MARINDUQUE",
"regCode":"17",
"provCode":"1740"
},
{
"id":23,
"psgcCode":"175100000",
"name":"OCCIDENTAL MINDORO",
"regCode":"17",
"provCode":"1751"
},
{
"id":24,
"psgcCode":"175200000",
"name":"ORIENTAL MINDORO",
"regCode":"17",
"provCode":"1752"
},
{
"id":25,
"psgcCode":"175300000",
"name":"PALAWAN",
"regCode":"17",
"provCode":"1753"
},
{
"id":26,
"psgcCode":"175900000",
"name":"ROMBLON",
"regCode":"17",
"provCode":"1759"
},
{
"id":27,
"psgcCode":"050500000",
"name":"ALBAY",
"regCode":"05",
"provCode":"0505"
},
{
"id":28,
"psgcCode":"051600000",
"name":"CAMARINES NORTE",
"regCode":"05",
"provCode":"0516"
},
{
"id":29,
"psgcCode":"051700000",
"name":"CAMARINES SUR",
"regCode":"05",
"provCode":"0517"
},
{
"id":30,
"psgcCode":"052000000",
"name":"CATANDUANES",
"regCode":"05",
"provCode":"0520"
},
{
"id":31,
"psgcCode":"054100000",
"name":"MASBATE",
"regCode":"05",
"provCode":"0541"
},
{
"id":32,
"psgcCode":"056200000",
"name":"SORSOGON",
"regCode":"05",
"provCode":"0562"
},
{
"id":33,
"psgcCode":"060400000",
"name":"AKLAN",
"regCode":"06",
"provCode":"0604"
},
{
"id":34,
"psgcCode":"060600000",
"name":"ANTIQUE",
"regCode":"06",
"provCode":"0606"
},
{
"id":35,
"psgcCode":"061900000",
"name":"CAPIZ",
"regCode":"06",
"provCode":"0619"
},
{
"id":36,
"psgcCode":"063000000",
"name":"ILOILO",
"regCode":"06",
"provCode":"0630"
},
{
"id":37,
"psgcCode":"064500000",
"name":"NEGROS OCCIDENTAL",
"regCode":"06",
"provCode":"0645"
},
{
"id":38,
"psgcCode":"067900000",
"name":"GUIMARAS",
"regCode":"06",
"provCode":"0679"
},
{
"id":39,
"psgcCode":"071200000",
"name":"BOHOL",
"regCode":"07",
"provCode":"0712"
},
{
"id":40,
"psgcCode":"072200000",
"name":"CEBU",
"regCode":"07",
"provCode":"0722"
},
{
"id":41,
"psgcCode":"074600000",
"name":"NEGROS ORIENTAL",
"regCode":"07",
"provCode":"0746"
},
{
"id":42,
"psgcCode":"076100000",
"name":"SIQUIJOR",
"regCode":"07",
"provCode":"0761"
},
{
"id":43,
"psgcCode":"082600000",
"name":"EASTERN SAMAR",
"regCode":"08",
"provCode":"0826"
},
{
"id":44,
"psgcCode":"083700000",
"name":"LEYTE",
"regCode":"08",
"provCode":"0837"
},
{
"id":45,
"psgcCode":"084800000",
"name":"NORTHERN SAMAR",
"regCode":"08",
"provCode":"0848"
},
{
"id":46,
"psgcCode":"086000000",
"name":"SAMAR (WESTERN SAMAR)",
"regCode":"08",
"provCode":"0860"
},
{
"id":47,
"psgcCode":"086400000",
"name":"SOUTHERN LEYTE",
"regCode":"08",
"provCode":"0864"
},
{
"id":48,
"psgcCode":"087800000",
"name":"BILIRAN",
"regCode":"08",
"provCode":"0878"
},
{
"id":49,
"psgcCode":"097200000",
"name":"ZAMBOANGA DEL NORTE",
"regCode":"09",
"provCode":"0972"
},
{
"id":50,
"psgcCode":"097300000",
"name":"ZAMBOANGA DEL SUR",
"regCode":"09",
"provCode":"0973"
},
{
"id":51,
"psgcCode":"098300000",
"name":"ZAMBOANGA SIBUGAY",
"regCode":"09",
"provCode":"0983"
},
{
"id":52,
"psgcCode":"099700000",
"name":"CITY OF ISABELA",
"regCode":"09",
"provCode":"0997"
},
{
"id":53,
"psgcCode":"101300000",
"name":"BUKIDNON",
"regCode":"10",
"provCode":"1013"
},
{
"id":54,
"psgcCode":"101800000",
"name":"CAMIGUIN",
"regCode":"10",
"provCode":"1018"
},
{
"id":55,
"psgcCode":"103500000",
"name":"LANAO DEL NORTE",
"regCode":"10",
"provCode":"1035"
},
{
"id":56,
"psgcCode":"104200000",
"name":"MISAMIS OCCIDENTAL",
"regCode":"10",
"provCode":"1042"
},
{
"id":57,
"psgcCode":"104300000",
"name":"MISAMIS ORIENTAL",
"regCode":"10",
"provCode":"1043"
},
{
"id":58,
"psgcCode":"112300000",
"name":"DAVAO DEL NORTE",
"regCode":"11",
"provCode":"1123"
},
{
"id":59,
"psgcCode":"112400000",
"name":"DAVAO DEL SUR",
"regCode":"11",
"provCode":"1124"
},
{
"id":60,
"psgcCode":"112500000",
"name":"DAVAO ORIENTAL",
"regCode":"11",
"provCode":"1125"
},
{
"id":61,
"psgcCode":"118200000",
"name":"COMPOSTELA VALLEY",
"regCode":"11",
"provCode":"1182"
},
{
"id":62,
"psgcCode":"118600000",
"name":"DAVAO OCCIDENTAL",
"regCode":"11",
"provCode":"1186"
},
{
"id":63,
"psgcCode":"124700000",
"name":"COTABATO (NORTH COTABATO)",
"regCode":"12",
"provCode":"1247"
},
{
"id":64,
"psgcCode":"126300000",
"name":"SOUTH COTABATO",
"regCode":"12",
"provCode":"1263"
},
{
"id":65,
"psgcCode":"126500000",
"name":"SULTAN KUDARAT",
"regCode":"12",
"provCode":"1265"
},
{
"id":66,
"psgcCode":"128000000",
"name":"SARANGANI",
"regCode":"12",
"provCode":"1280"
},
{
"id":67,
"psgcCode":"129800000",
"name":"COTABATO CITY",
"regCode":"12",
"provCode":"1298"
},
{
"id":68,
"psgcCode":"133900000",
"name":"NCR, CITY OF MANILA, FIRST DISTRICT",
"regCode":"13",
"provCode":"1339"
},
{
"id":69,
"psgcCode":"133900000",
"name":"CITY OF MANILA",
"regCode":"13",
"provCode":"1339"
},
{
"id":70,
"psgcCode":"137400000",
"name":"NCR, SECOND DISTRICT",
"regCode":"13",
"provCode":"1374"
},
{
"id":71,
"psgcCode":"137500000",
"name":"NCR, THIRD DISTRICT",
"regCode":"13",
"provCode":"1375"
},
{
"id":72,
"psgcCode":"137600000",
"name":"NCR, FOURTH DISTRICT",
"regCode":"13",
"provCode":"1376"
},
{
"id":73,
"psgcCode":"140100000",
"name":"ABRA",
"regCode":"14",
"provCode":"1401"
},
{
"id":74,
"psgcCode":"141100000",
"name":"BENGUET",
"regCode":"14",
"provCode":"1411"
},
{
"id":75,
"psgcCode":"142700000",
"name":"IFUGAO",
"regCode":"14",
"provCode":"1427"
},
{
"id":76,
"psgcCode":"143200000",
"name":"KALINGA",
"regCode":"14",
"provCode":"1432"
},
{
"id":77,
"psgcCode":"144400000",
"name":"MOUNTAIN PROVINCE",
"regCode":"14",
"provCode":"1444"
},
{
"id":78,
"psgcCode":"148100000",
"name":"APAYAO",
"regCode":"14",
"provCode":"1481"
},
{
"id":79,
"psgcCode":"150700000",
"name":"BASILAN",
"regCode":"15",
"provCode":"1507"
},
{
"id":80,
"psgcCode":"153600000",
"name":"LANAO DEL SUR",
"regCode":"15",
"provCode":"1536"
},
{
"id":81,
"psgcCode":"153800000",
"name":"MAGUINDANAO",
"regCode":"15",
"provCode":"1538"
},
{
"id":82,
"psgcCode":"156600000",
"name":"SULU",
"regCode":"15",
"provCode":"1566"
},
{
"id":83,
"psgcCode":"157000000",
"name":"TAWI-TAWI",
"regCode":"15",
"provCode":"1570"
},
{
"id":84,
"psgcCode":"160200000",
"name":"AGUSAN DEL NORTE",
"regCode":"16",
"provCode":"1602"
},
{
"id":85,
"psgcCode":"160300000",
"name":"AGUSAN DEL SUR",
"regCode":"16",
"provCode":"1603"
},
{
"id":86,
"psgcCode":"166700000",
"name":"SURIGAO DEL NORTE",
"regCode":"16",
"provCode":"1667"
},
{
"id":87,
"psgcCode":"166800000",
"name":"SURIGAO DEL SUR",
"regCode":"16",
"provCode":"1668"
},
{
"id":88,
"psgcCode":"168500000",
"name":"DINAGAT ISLANDS",
"regCode":"16",
"provCode":"1685"
}
]

function getProvNameByCode(provCode) {
    return PROVINCES.filter(
        prov => 
            prov.provCode == provCode
        )[0].name;
}

function logProvinces() {
    PROVINCES.forEach( province => {
        console.log(province.name + " " + province.provCode)
    })
}

function setProvinceSelect($provinceSelectElem, regCode = null) {
    clearProvinceSelect($provinceSelectElem)
    PROVINCES.filter( province => {
        if (regCode) {
            if (province.regCode == regCode)
                return province;
        } else {
            return province;
        }
    }).sort(
        alphabetize
    )
    .forEach( province => {
        let $provinceOption = document.createElement('option')
        $provinceOption.value = province.provCode;
        $provinceOption.textContent = province.name;
        $provinceSelectElem.appendChild($provinceOption);
    })
}

function clearProvinceSelect($provinceSelectElem) {
    $provinceSelectElem.innerHTML = null;
    let $nullOption = document.createElement('option')
    $nullOption.value = null;
    $nullOption.textContent = 'Select Province'
    $nullOption.selected = true;
    $nullOption.disabled = true;
    $provinceSelectElem.appendChild($nullOption)
}