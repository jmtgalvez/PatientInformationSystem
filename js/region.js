const REGIONS = [
{
"id":1,
"psgcCode":"010000000",
"name":"REGION I (ILOCOS REGION)",
"regCode":"01"
},
{
"id":2,
"psgcCode":"020000000",
"name":"REGION II (CAGAYAN VALLEY)",
"regCode":"02"
},
{
"id":3,
"psgcCode":"030000000",
"name":"REGION III (CENTRAL LUZON)",
"regCode":"03"
},
{
"id":4,
"psgcCode":"040000000",
"name":"REGION IV-A (CALABARZON)",
"regCode":"04"
},
{
"id":5,
"psgcCode":"170000000",
"name":"REGION IV-B (MIMAROPA)",
"regCode":"17"
},
{
"id":6,
"psgcCode":"050000000",
"name":"REGION V (BICOL REGION)",
"regCode":"05"
},
{
"id":7,
"psgcCode":"060000000",
"name":"REGION VI (WESTERN VISAYAS)",
"regCode":"06"
},
{
"id":8,
"psgcCode":"070000000",
"name":"REGION VII (CENTRAL VISAYAS)",
"regCode":"07"
},
{
"id":9,
"psgcCode":"080000000",
"name":"REGION VIII (EASTERN VISAYAS)",
"regCode":"08"
},
{
"id":10,
"psgcCode":"090000000",
"name":"REGION IX (ZAMBOANGA PENINSULA)",
"regCode":"09"
},
{
"id":11,
"psgcCode":"100000000",
"name":"REGION X (NORTHERN MINDANAO)",
"regCode":"10"
},
{
"id":12,
"psgcCode":"110000000",
"name":"REGION XI (DAVAO REGION)",
"regCode":"11"
},
{
"id":13,
"psgcCode":"120000000",
"name":"REGION XII (SOCCSKSARGEN)",
"regCode":"12"
},
{
"id":14,
"psgcCode":"130000000",
"name":"NATIONAL CAPITAL REGION (NCR)",
"regCode":"13"
},
{
"id":15,
"psgcCode":"140000000",
"name":"CORDILLERA ADMINISTRATIVE REGION (CAR)",
"regCode":"14"
},
{
"id":16,
"psgcCode":"150000000",
"name":"AUTONOMOUS REGION IN MUSLIM MINDANAO (ARMM)",
"regCode":"15"
},
{
"id":17,
"psgcCode":"160000000",
"name":"REGION XIII (Caraga)",
"regCode":"16"
}
]

function getRegNameByCode(regCode) {
    return REGIONS.filter(
        region => 
            region.regCode == regCode
        )[0].name;
}

function logRegions() {
    PROVINCES.forEach( region => {
        console.log(region.provDesc + " " + region.provCode)
    })
}

function setRegionSelect($regionSelectElem) {
    clearRegionSelect($regionSelectElem);
    REGIONS.sort(
        alphabetize
    ).forEach( region => {
        let $regionOption = document.createElement('option')
        $regionOption.value = region.regCode;
        $regionOption.textContent = region.name;
        $regionSelectElem.appendChild($regionOption);
    })
}

function clearRegionSelect($regionSelectElem) {
    $regionSelectElem.innerHTML = null;
    let $nullOption = document.createElement('option')
    $nullOption.value = null;
    $nullOption.textContent = 'Select Region'
    // $nullOption.disabled = true;
    $nullOption.selected = true;
    $regionSelectElem.appendChild($nullOption)
}