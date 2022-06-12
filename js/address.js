// data taken from https://github.com/clavearnel/philippines-region-province-citymun-brgy

let $region = document.querySelector('#region');
let $province = document.querySelector('#province');
let $city = document.querySelector('#city');
let $barangay = document.querySelector('#barangay');

initializeAddress()
setOnchange()

function initializeAddress() {
    if ($region) setRegionSelect($region);
    else if ($province) setProvinceSelect($province);
    else if ($city) setCitySelect($city);
    else if ($barangay) setBarangaySelect($barangay);
}

function setOnchange() {
    if ($region) $region.onchange = changeRegion;
    if ($province) $province.onchange = changeProvince;
    if ($city) $city.onchange = changeCity;
}

function changeRegion() {
    if ($barangay) {
        clearBarangaySelect($barangay);
        $barangay.disabled = true;
    }

    if ($city) {
        clearCitySelect($city);
        $city.disabled = true;
    }

    if ($province) {
        $province.disabled = false;
        setProvinceSelect($province, $region.value);
    }
}

function changeProvince() {
    if ($barangay) {
        clearBarangaySelect($barangay);
        $barangay.disabled = true;
    }

    if ($city) {
        $city.disabled = false;
        setCitySelect($city, $province.value);
    }
}

function changeCity() {
    if ($barangay) {
        $barangay.disabled = false;
        setBarangaySelect($barangay, $city.value);
    }
}

function clearAddress() {
    if ($barangay) {
        clearBarangaySelect($barangay);
        $barangay.disabled = true;
    }
    if ($city) {
        clearCitySelect($city);
        $city.disabled = true;
    }
    if ($province) {
        clearProvinceSelect($province);
        $province.disabled = true;
    }
    if ($region) clearRegionSelect($region);
    initializeAddress();
}



function alphabetize(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}