import React from 'react';

const CountriesDropdown = props => (
  <div className="field countriesDropdownContainer">
    <label>Country</label>

    <select
      className="ui fluid search selection dropdown"
      onChange={props.handleCountryChange}
    >
      {/* <input type="hidden" name="country" />
hidropdown icon"></i>
<div className="default text">Select Country</div>
      <div className="menu">*/}
      <option value="">Select Country</option>

      <option className="item" data-value="af">
        Afghanistan
      </option>
      <option className="item" data-value="ax">
        Aland Islands
      </option>
      <option className="item" data-value="al">
        Albania
      </option>
      <option className="item" data-value="dz">
        Algeria
      </option>
      <option className="item" data-value="as">
        American Samoa
      </option>
      <option className="item" data-value="ad">
        Andorra
      </option>
      <option className="item" data-value="ao">
        Angola
      </option>
      <option className="item" data-value="ai">
        Anguilla
      </option>
      <option className="item" data-value="ag">
        Antigua
      </option>
      <option className="item" data-value="ar">
        Argentina
      </option>
      <option className="item" data-value="am">
        Armenia
      </option>
      <option className="item" data-value="aw">
        Aruba
      </option>
      <option className="item" data-value="au">
        Australia
      </option>
      <option className="item" data-value="at">
        Austria
      </option>
      <option className="item" data-value="az">
        Azerbaijan
      </option>
      <option className="item" data-value="bs">
        Bahamas
      </option>
      <option className="item" data-value="bh">
        Bahrain
      </option>
      <option className="item" data-value="bd">
        Bangladesh
      </option>
      <option className="item" data-value="bb">
        Barbados
      </option>
      <option className="item" data-value="by">
        Belarus
      </option>
      <option className="item" data-value="be">
        Belgium
      </option>
      <option className="item" data-value="bz">
        Belize
      </option>
      <option className="item" data-value="bj">
        Benin
      </option>
      <option className="item" data-value="bm">
        Bermuda
      </option>
      <option className="item" data-value="bt">
        Bhutan
      </option>
      <option className="item" data-value="bo">
        Bolivia
      </option>
      <option className="item" data-value="ba">
        Bosnia
      </option>
      <option className="item" data-value="bw">
        Botswana
      </option>
      <option className="item" data-value="bv">
        Bouvet Island
      </option>
      <option className="item" data-value="br">
        Brazil
      </option>
      <option className="item" data-value="vg">
        British Virgin Islands
      </option>
      <option className="item" data-value="bn">
        Brunei
      </option>
      <option className="item" data-value="bg">
        Bulgaria
      </option>
      <option className="item" data-value="bf">
        Burkina Faso
      </option>
      <option className="item" data-value="mm">
        Burma
      </option>
      <option className="item" data-value="bi">
        Burundi
      </option>
      <option className="item" data-value="tc">
        Caicos Islands
      </option>
      <option className="item" data-value="kh">
        Cambodia
      </option>
      <option className="item" data-value="cm">
        Cameroon
      </option>
      <option className="item" data-value="ca">
        Canada
      </option>
      <option className="item" data-value="cv">
        Cape Verde
      </option>
      <option className="item" data-value="ky">
        Cayman Islands
      </option>
      <option className="item" data-value="cf">
        Central African Republic
      </option>
      <option className="item" data-value="td">
        Chad
      </option>
      <option className="item" data-value="cl">
        Chile
      </option>
      <option className="item" data-value="cn">
        China
      </option>
      <option className="item" data-value="cx">
        Christmas Island
      </option>
      <option className="item" data-value="cc">
        Cocos Islands
      </option>
      <option className="item" data-value="co">
        Colombia
      </option>
      <option className="item" data-value="km">
        Comoros
      </option>
      <option className="item" data-value="cg">
        Congo Brazzaville
      </option>
      <option className="item" data-value="cd">
        Congo
      </option>
      <option className="item" data-value="ck">
        Cook Islands
      </option>
      <option className="item" data-value="cr">
        Costa Rica
      </option>
      <option className="item" data-value="ci">
        Cote optionoire
      </option>
      <option className="item" data-value="hr">
        Croatia
      </option>
      <option className="item" data-value="cu">
        Cuba
      </option>
      <option className="item" data-value="cy">
        Cyprus
      </option>
      <option className="item" data-value="cz">
        Czech Republic
      </option>
      <option className="item" data-value="dk">
        Denmark
      </option>
      <option className="item" data-value="dj">
        Djibouti
      </option>
      <option className="item" data-value="dm">
        Dominica
      </option>
      <option className="item" data-value="do">
        Dominican Republic
      </option>
      <option className="item" data-value="ec">
        Ecuador
      </option>
      <option className="item" data-value="eg">
        Egypt
      </option>
      <option className="item" data-value="sv">
        El Salvador
      </option>
      <option className="item" data-value="gb">
        England
      </option>
      <option className="item" data-value="gq">
        Equatorial Guinea
      </option>
      <option className="item" data-value="er">
        Eritrea
      </option>
      <option className="item" data-value="ee">
        Estonia
      </option>
      <option className="item" data-value="et">
        Ethiopia
      </option>
      <option className="item" data-value="eu">
        European Union
      </option>
      <option className="item" data-value="fk">
        Falkland Islands
      </option>
      <option className="item" data-value="fo">
        Faroe Islands
      </option>
      <option className="item" data-value="fj">
        Fiji
      </option>
      <option className="item" data-value="fi">
        Finland
      </option>
      <option className="item" data-value="fr">
        France
      </option>
      <option className="item" data-value="gf">
        French Guiana
      </option>
      <option className="item" data-value="pf">
        French Polynesia
      </option>
      <option className="item" data-value="tf">
        French Territories
      </option>
      <option className="item" data-value="ga">
        Gabon
      </option>
      <option className="item" data-value="gm">
        Gambia
      </option>
      <option className="item" data-value="ge">
        Georgia
      </option>
      <option className="item" data-value="de">
        Germany
      </option>
      <option className="item" data-value="gh">
        Ghana
      </option>
      <option className="item" data-value="gi">
        Gibraltar
      </option>
      <option className="item" data-value="gr">
        Greece
      </option>
      <option className="item" data-value="gl">
        Greenland
      </option>
      <option className="item" data-value="gd">
        Grenada
      </option>
      <option className="item" data-value="gp">
        Guadeloupe
      </option>
      <option className="item" data-value="gu">
        Guam
      </option>
      <option className="item" data-value="gt">
        Guatemala
      </option>
      <option className="item" data-value="gw">
        Guinea-Bissau
      </option>
      <option className="item" data-value="gn">
        Guinea
      </option>
      <option className="item" data-value="gy">
        Guyana
      </option>
      <option className="item" data-value="ht">
        Haiti
      </option>
      <option className="item" data-value="hm">
        Heard Island
      </option>
      <option className="item" data-value="hn">
        Honduras
      </option>
      <option className="item" data-value="hk">
        Hong Kong
      </option>
      <option className="item" data-value="hu">
        Hungary
      </option>
      <option className="item" data-value="is">
        Iceland
      </option>
      <option className="item" data-value="in">
        India
      </option>
      <option className="item" data-value="io">
        Indian Ocean Territory
      </option>
      <option className="item" data-value="id">
        Indonesia
      </option>
      <option className="item" data-value="ir">
        Iran
      </option>
      <option className="item" data-value="iq">
        Iraq
      </option>
      <option className="item" data-value="ie">
        Ireland
      </option>
      <option className="item" data-value="il">
        Israel
      </option>
      <option className="item" data-value="it">
        Italy
      </option>
      <option className="item" data-value="jm">
        Jamaica
      </option>
      <option className="item" data-value="jp">
        Japan
      </option>
      <option className="item" data-value="jo">
        Jordan
      </option>
      <option className="item" data-value="kz">
        Kazakhstan
      </option>
      <option className="item" data-value="ke">
        Kenya
      </option>
      <option className="item" data-value="ki">
        Kiribati
      </option>
      <option className="item" data-value="kw">
        Kuwait
      </option>
      <option className="item" data-value="kg">
        Kyrgyzstan
      </option>
      <option className="item" data-value="la">
        Laos
      </option>
      <option className="item" data-value="lv">
        Latvia
      </option>
      <option className="item" data-value="lb">
        Lebanon
      </option>
      <option className="item" data-value="ls">
        Lesotho
      </option>
      <option className="item" data-value="lr">
        Liberia
      </option>
      <option className="item" data-value="ly">
        Libya
      </option>
      <option className="item" data-value="li">
        Liechtenstein
      </option>
      <option className="item" data-value="lt">
        Lithuania
      </option>
      <option className="item" data-value="lu">
        Luxembourg
      </option>
      <option className="item" data-value="mo">
        Macau
      </option>
      <option className="item" data-value="mk">
        Macedonia
      </option>
      <option className="item" data-value="mg">
        Madagascar
      </option>
      <option className="item" data-value="mw">
        Malawi
      </option>
      <option className="item" data-value="my">
        Malaysia
      </option>
      <option className="item" data-value="mv">
        Maloptiones
      </option>
      <option className="item" data-value="ml">
        Mali
      </option>
      <option className="item" data-value="mt">
        Malta
      </option>
      <option className="item" data-value="mh">
        Marshall Islands
      </option>
      <option className="item" data-value="mq">
        Martinique
      </option>
      <option className="item" data-value="mr">
        Mauritania
      </option>
      <option className="item" data-value="mu">
        Mauritius
      </option>
      <option className="item" data-value="yt">
        Mayotte
      </option>
      <option className="item" data-value="mx">
        Mexico
      </option>
      <option className="item" data-value="fm">
        Micronesia
      </option>
      <option className="item" data-value="md">
        Moldova
      </option>
      <option className="item" data-value="mc">
        Monaco
      </option>
      <option className="item" data-value="mn">
        Mongolia
      </option>
      <option className="item" data-value="me">
        Montenegro
      </option>
      <option className="item" data-value="ms">
        Montserrat
      </option>
      <option className="item" data-value="ma">
        Morocco
      </option>
      <option className="item" data-value="mz">
        Mozambique
      </option>
      <option className="item" data-value="na">
        Namibia
      </option>
      <option className="item" data-value="nr">
        Nauru
      </option>
      <option className="item" data-value="np">
        Nepal
      </option>
      <option className="item" data-value="an">
        Netherlands Antilles
      </option>
      <option className="item" data-value="nl">
        Netherlands
      </option>
      <option className="item" data-value="nc">
        New Caledonia
      </option>
      <option className="item" data-value="pg">
        New Guinea
      </option>
      <option className="item" data-value="nz">
        New Zealand
      </option>
      <option className="item" data-value="ni">
        Nicaragua
      </option>
      <option className="item" data-value="ne">
        Niger
      </option>
      <option className="item" data-value="ng">
        Nigeria
      </option>
      <option className="item" data-value="nu">
        Niue
      </option>
      <option className="item" data-value="nf">
        Norfolk Island
      </option>
      <option className="item" data-value="kp">
        North Korea
      </option>
      <option className="item" data-value="mp">
        Northern Mariana Islands
      </option>
      <option className="item" data-value="no">
        Norway
      </option>
      <option className="item" data-value="om">
        Oman
      </option>
      <option className="item" data-value="pk">
        Pakistan
      </option>
      <option className="item" data-value="pw">
        Palau
      </option>
      <option className="item" data-value="ps">
        Palestine
      </option>
      <option className="item" data-value="pa">
        Panama
      </option>
      <option className="item" data-value="py">
        Paraguay
      </option>
      <option className="item" data-value="pe">
        Peru
      </option>
      <option className="item" data-value="ph">
        Philippines
      </option>
      <option className="item" data-value="pn">
        Pitcairn Islands
      </option>
      <option className="item" data-value="pl">
        Poland
      </option>
      <option className="item" data-value="pt">
        Portugal
      </option>
      <option className="item" data-value="pr">
        Puerto Rico
      </option>
      <option className="item" data-value="qa">
        Qatar
      </option>
      <option className="item" data-value="re">
        Reunion
      </option>
      <option className="item" data-value="ro">
        Romania
      </option>
      <option className="item" data-value="ru">
        Russia
      </option>
      <option className="item" data-value="rw">
        Rwanda
      </option>
      <option className="item" data-value="sh">
        Saint Helena
      </option>
      <option className="item" data-value="kn">
        Saint Kitts and Nevis
      </option>
      <option className="item" data-value="lc">
        Saint Lucia
      </option>
      <option className="item" data-value="pm">
        Saint Pierre
      </option>
      <option className="item" data-value="vc">
        Saint Vincent
      </option>
      <option className="item" data-value="ws">
        Samoa
      </option>
      <option className="item" data-value="sm">
        San Marino
      </option>
      <option className="item" data-value="gs">
        Sandwich Islands
      </option>
      <option className="item" data-value="st">
        Sao Tome
      </option>
      <option className="item" data-value="sa">
        Saudi Arabia
      </option>
      <option className="item" data-value="sn">
        Senegal
      </option>
      <option className="item" data-value="cs">
        Serbia
      </option>
      <option className="item" data-value="rs">
        Serbia
      </option>
      <option className="item" data-value="sc">
        Seychelles
      </option>
      <option className="item" data-value="sl">
        Sierra Leone
      </option>
      <option className="item" data-value="sg">
        Singapore
      </option>
      <option className="item" data-value="sk">
        Slovakia
      </option>
      <option className="item" data-value="si">
        Slovenia
      </option>
      <option className="item" data-value="sb">
        Solomon Islands
      </option>
      <option className="item" data-value="so">
        Somalia
      </option>
      <option className="item" data-value="za">
        South Africa
      </option>
      <option className="item" data-value="kr">
        South Korea
      </option>
      <option className="item" data-value="es">
        Spain
      </option>
      <option className="item" data-value="lk">
        Sri Lanka
      </option>
      <option className="item" data-value="sd">
        Sudan
      </option>
      <option className="item" data-value="sr">
        Suriname
      </option>
      <option className="item" data-value="sj">
        Svalbard
      </option>
      <option className="item" data-value="sz">
        Swaziland
      </option>
      <option className="item" data-value="se">
        Sweden
      </option>
      <option className="item" data-value="ch">
        Switzerland
      </option>
      <option className="item" data-value="sy">
        Syria
      </option>
      <option className="item" data-value="tw">
        Taiwan
      </option>
      <option className="item" data-value="tj">
        Tajikistan
      </option>
      <option className="item" data-value="tz">
        Tanzania
      </option>
      <option className="item" data-value="th">
        Thailand
      </option>
      <option className="item" data-value="tl">
        Timorleste
      </option>
      <option className="item" data-value="tg">
        Togo
      </option>
      <option className="item" data-value="tk">
        Tokelau
      </option>
      <option className="item" data-value="to">
        Tonga
      </option>
      <option className="item" data-value="tt">
        Trinidad
      </option>
      <option className="item" data-value="tn">
        Tunisia
      </option>
      <option className="item" data-value="tr">
        Turkey
      </option>
      <option className="item" data-value="tm">
        Turkmenistan
      </option>
      <option className="item" data-value="tv">
        Tuvalu
      </option>
      <option className="item" data-value="ug">
        Uganda
      </option>
      <option className="item" data-value="ua">
        Ukraine
      </option>
      <option className="item" data-value="ae">
        United Arab Emirates
      </option>
      <option className="item" data-value="us">
        United States
      </option>
      <option className="item" data-value="uy">
        Uruguay
      </option>
      <option className="item" data-value="um">
        Us Minor Islands
      </option>
      <option className="item" data-value="vi">
        Us Virgin Islands
      </option>
      <option className="item" data-value="uz">
        Uzbekistan
      </option>
      <option className="item" data-value="vu">
        Vanuatu
      </option>
      <option className="item" data-value="va">
        Vatican City
      </option>
      <option className="item" data-value="ve">
        Venezuela
      </option>
      <option className="item" data-value="vn">
        Vietnam
      </option>
      <option className="item" data-value="wf">
        Wallis and Futuna
      </option>
      <option className="item" data-value="eh">
        Western Sahara
      </option>
      <option className="item" data-value="ye">
        Yemen
      </option>
      <option className="item" data-value="zm">
        Zambia
      </option>
      <option className="item" data-value="zw">
        zw flag" />Zimbabwe
      </option>

      {/*</div>*/}
    </select>
  </div>
);

export default CountriesDropdown;
