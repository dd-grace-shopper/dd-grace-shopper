import React from 'react';

const CountriesDropdown = () => (
  <div className="field countriesDropdownContainer">
    <label>Country</label>

    <select className="ui fluid search selection dropdown">
      {/* <input type="hidden" name="country" />
<i className="dropdown icon"></i>
<div className="default text">Select Country</div>
      <div className="menu">*/}
      <option value="">Select Country</option>

      <option className="item" data-value="af">
        <i className="af flag" />Afghanistan
      </option>
      <option className="item" data-value="ax">
        <i className="ax flag" />Aland Islands
      </option>
      <option className="item" data-value="al">
        <i className="al flag" />Albania
      </option>
      <option className="item" data-value="dz">
        <i className="dz flag" />Algeria
      </option>
      <option className="item" data-value="as">
        <i className="as flag" />American Samoa
      </option>
      <option className="item" data-value="ad">
        <i className="ad flag" />Andorra
      </option>
      <option className="item" data-value="ao">
        <i className="ao flag" />Angola
      </option>
      <option className="item" data-value="ai">
        <i className="ai flag" />Anguilla
      </option>
      <option className="item" data-value="ag">
        <i className="ag flag" />Antigua
      </option>
      <option className="item" data-value="ar">
        <i className="ar flag" />Argentina
      </option>
      <option className="item" data-value="am">
        <i className="am flag" />Armenia
      </option>
      <option className="item" data-value="aw">
        <i className="aw flag" />Aruba
      </option>
      <option className="item" data-value="au">
        <i className="au flag" />Australia
      </option>
      <option className="item" data-value="at">
        <i className="at flag" />Austria
      </option>
      <option className="item" data-value="az">
        <i className="az flag" />Azerbaijan
      </option>
      <option className="item" data-value="bs">
        <i className="bs flag" />Bahamas
      </option>
      <option className="item" data-value="bh">
        <i className="bh flag" />Bahrain
      </option>
      <option className="item" data-value="bd">
        <i className="bd flag" />Bangladesh
      </option>
      <option className="item" data-value="bb">
        <i className="bb flag" />Barbados
      </option>
      <option className="item" data-value="by">
        <i className="by flag" />Belarus
      </option>
      <option className="item" data-value="be">
        <i className="be flag" />Belgium
      </option>
      <option className="item" data-value="bz">
        <i className="bz flag" />Belize
      </option>
      <option className="item" data-value="bj">
        <i className="bj flag" />Benin
      </option>
      <option className="item" data-value="bm">
        <i className="bm flag" />Bermuda
      </option>
      <option className="item" data-value="bt">
        <i className="bt flag" />Bhutan
      </option>
      <option className="item" data-value="bo">
        <i className="bo flag" />Bolivia
      </option>
      <option className="item" data-value="ba">
        <i className="ba flag" />Bosnia
      </option>
      <option className="item" data-value="bw">
        <i className="bw flag" />Botswana
      </option>
      <option className="item" data-value="bv">
        <i className="bv flag" />Bouvet Island
      </option>
      <option className="item" data-value="br">
        <i className="br flag" />Brazil
      </option>
      <option className="item" data-value="vg">
        <i className="vg flag" />British Virgin Islands
      </option>
      <option className="item" data-value="bn">
        <i className="bn flag" />Brunei
      </option>
      <option className="item" data-value="bg">
        <i className="bg flag" />Bulgaria
      </option>
      <option className="item" data-value="bf">
        <i className="bf flag" />Burkina Faso
      </option>
      <option className="item" data-value="mm">
        <i className="mm flag" />Burma
      </option>
      <option className="item" data-value="bi">
        <i className="bi flag" />Burundi
      </option>
      <option className="item" data-value="tc">
        <i className="tc flag" />Caicos Islands
      </option>
      <option className="item" data-value="kh">
        <i className="kh flag" />Cambodia
      </option>
      <option className="item" data-value="cm">
        <i className="cm flag" />Cameroon
      </option>
      <option className="item" data-value="ca">
        <i className="ca flag" />Canada
      </option>
      <option className="item" data-value="cv">
        <i className="cv flag" />Cape Verde
      </option>
      <option className="item" data-value="ky">
        <i className="ky flag" />Cayman Islands
      </option>
      <option className="item" data-value="cf">
        <i className="cf flag" />Central African Republic
      </option>
      <option className="item" data-value="td">
        <i className="td flag" />Chad
      </option>
      <option className="item" data-value="cl">
        <i className="cl flag" />Chile
      </option>
      <option className="item" data-value="cn">
        <i className="cn flag" />China
      </option>
      <option className="item" data-value="cx">
        <i className="cx flag" />Christmas Island
      </option>
      <option className="item" data-value="cc">
        <i className="cc flag" />Cocos Islands
      </option>
      <option className="item" data-value="co">
        <i className="co flag" />Colombia
      </option>
      <option className="item" data-value="km">
        <i className="km flag" />Comoros
      </option>
      <option className="item" data-value="cg">
        <i className="cg flag" />Congo Brazzaville
      </option>
      <option className="item" data-value="cd">
        <i className="cd flag" />Congo
      </option>
      <option className="item" data-value="ck">
        <i className="ck flag" />Cook Islands
      </option>
      <option className="item" data-value="cr">
        <i className="cr flag" />Costa Rica
      </option>
      <option className="item" data-value="ci">
        <i className="ci flag" />Cote optionoire
      </option>
      <option className="item" data-value="hr">
        <i className="hr flag" />Croatia
      </option>
      <option className="item" data-value="cu">
        <i className="cu flag" />Cuba
      </option>
      <option className="item" data-value="cy">
        <i className="cy flag" />Cyprus
      </option>
      <option className="item" data-value="cz">
        <i className="cz flag" />Czech Republic
      </option>
      <option className="item" data-value="dk">
        <i className="dk flag" />Denmark
      </option>
      <option className="item" data-value="dj">
        <i className="dj flag" />Djibouti
      </option>
      <option className="item" data-value="dm">
        <i className="dm flag" />Dominica
      </option>
      <option className="item" data-value="do">
        <i className="do flag" />Dominican Republic
      </option>
      <option className="item" data-value="ec">
        <i className="ec flag" />Ecuador
      </option>
      <option className="item" data-value="eg">
        <i className="eg flag" />Egypt
      </option>
      <option className="item" data-value="sv">
        <i className="sv flag" />El Salvador
      </option>
      <option className="item" data-value="gb">
        <i className="gb flag" />England
      </option>
      <option className="item" data-value="gq">
        <i className="gq flag" />Equatorial Guinea
      </option>
      <option className="item" data-value="er">
        <i className="er flag" />Eritrea
      </option>
      <option className="item" data-value="ee">
        <i className="ee flag" />Estonia
      </option>
      <option className="item" data-value="et">
        <i className="et flag" />Ethiopia
      </option>
      <option className="item" data-value="eu">
        <i className="eu flag" />European Union
      </option>
      <option className="item" data-value="fk">
        <i className="fk flag" />Falkland Islands
      </option>
      <option className="item" data-value="fo">
        <i className="fo flag" />Faroe Islands
      </option>
      <option className="item" data-value="fj">
        <i className="fj flag" />Fiji
      </option>
      <option className="item" data-value="fi">
        <i className="fi flag" />Finland
      </option>
      <option className="item" data-value="fr">
        <i className="fr flag" />France
      </option>
      <option className="item" data-value="gf">
        <i className="gf flag" />French Guiana
      </option>
      <option className="item" data-value="pf">
        <i className="pf flag" />French Polynesia
      </option>
      <option className="item" data-value="tf">
        <i className="tf flag" />French Territories
      </option>
      <option className="item" data-value="ga">
        <i className="ga flag" />Gabon
      </option>
      <option className="item" data-value="gm">
        <i className="gm flag" />Gambia
      </option>
      <option className="item" data-value="ge">
        <i className="ge flag" />Georgia
      </option>
      <option className="item" data-value="de">
        <i className="de flag" />Germany
      </option>
      <option className="item" data-value="gh">
        <i className="gh flag" />Ghana
      </option>
      <option className="item" data-value="gi">
        <i className="gi flag" />Gibraltar
      </option>
      <option className="item" data-value="gr">
        <i className="gr flag" />Greece
      </option>
      <option className="item" data-value="gl">
        <i className="gl flag" />Greenland
      </option>
      <option className="item" data-value="gd">
        <i className="gd flag" />Grenada
      </option>
      <option className="item" data-value="gp">
        <i className="gp flag" />Guadeloupe
      </option>
      <option className="item" data-value="gu">
        <i className="gu flag" />Guam
      </option>
      <option className="item" data-value="gt">
        <i className="gt flag" />Guatemala
      </option>
      <option className="item" data-value="gw">
        <i className="gw flag" />Guinea-Bissau
      </option>
      <option className="item" data-value="gn">
        <i className="gn flag" />Guinea
      </option>
      <option className="item" data-value="gy">
        <i className="gy flag" />Guyana
      </option>
      <option className="item" data-value="ht">
        <i className="ht flag" />Haiti
      </option>
      <option className="item" data-value="hm">
        <i className="hm flag" />Heard Island
      </option>
      <option className="item" data-value="hn">
        <i className="hn flag" />Honduras
      </option>
      <option className="item" data-value="hk">
        <i className="hk flag" />Hong Kong
      </option>
      <option className="item" data-value="hu">
        <i className="hu flag" />Hungary
      </option>
      <option className="item" data-value="is">
        <i className="is flag" />Iceland
      </option>
      <option className="item" data-value="in">
        <i className="in flag" />India
      </option>
      <option className="item" data-value="io">
        <i className="io flag" />Indian Ocean Territory
      </option>
      <option className="item" data-value="id">
        <i className="id flag" />Indonesia
      </option>
      <option className="item" data-value="ir">
        <i className="ir flag" />Iran
      </option>
      <option className="item" data-value="iq">
        <i className="iq flag" />Iraq
      </option>
      <option className="item" data-value="ie">
        <i className="ie flag" />Ireland
      </option>
      <option className="item" data-value="il">
        <i className="il flag" />Israel
      </option>
      <option className="item" data-value="it">
        <i className="it flag" />Italy
      </option>
      <option className="item" data-value="jm">
        <i className="jm flag" />Jamaica
      </option>
      <option className="item" data-value="jp">
        <i className="jp flag" />Japan
      </option>
      <option className="item" data-value="jo">
        <i className="jo flag" />Jordan
      </option>
      <option className="item" data-value="kz">
        <i className="kz flag" />Kazakhstan
      </option>
      <option className="item" data-value="ke">
        <i className="ke flag" />Kenya
      </option>
      <option className="item" data-value="ki">
        <i className="ki flag" />Kiribati
      </option>
      <option className="item" data-value="kw">
        <i className="kw flag" />Kuwait
      </option>
      <option className="item" data-value="kg">
        <i className="kg flag" />Kyrgyzstan
      </option>
      <option className="item" data-value="la">
        <i className="la flag" />Laos
      </option>
      <option className="item" data-value="lv">
        <i className="lv flag" />Latvia
      </option>
      <option className="item" data-value="lb">
        <i className="lb flag" />Lebanon
      </option>
      <option className="item" data-value="ls">
        <i className="ls flag" />Lesotho
      </option>
      <option className="item" data-value="lr">
        <i className="lr flag" />Liberia
      </option>
      <option className="item" data-value="ly">
        <i className="ly flag" />Libya
      </option>
      <option className="item" data-value="li">
        <i className="li flag" />Liechtenstein
      </option>
      <option className="item" data-value="lt">
        <i className="lt flag" />Lithuania
      </option>
      <option className="item" data-value="lu">
        <i className="lu flag" />Luxembourg
      </option>
      <option className="item" data-value="mo">
        <i className="mo flag" />Macau
      </option>
      <option className="item" data-value="mk">
        <i className="mk flag" />Macedonia
      </option>
      <option className="item" data-value="mg">
        <i className="mg flag" />Madagascar
      </option>
      <option className="item" data-value="mw">
        <i className="mw flag" />Malawi
      </option>
      <option className="item" data-value="my">
        <i className="my flag" />Malaysia
      </option>
      <option className="item" data-value="mv">
        <i className="mv flag" />Maloptiones
      </option>
      <option className="item" data-value="ml">
        <i className="ml flag" />Mali
      </option>
      <option className="item" data-value="mt">
        <i className="mt flag" />Malta
      </option>
      <option className="item" data-value="mh">
        <i className="mh flag" />Marshall Islands
      </option>
      <option className="item" data-value="mq">
        <i className="mq flag" />Martinique
      </option>
      <option className="item" data-value="mr">
        <i className="mr flag" />Mauritania
      </option>
      <option className="item" data-value="mu">
        <i className="mu flag" />Mauritius
      </option>
      <option className="item" data-value="yt">
        <i className="yt flag" />Mayotte
      </option>
      <option className="item" data-value="mx">
        <i className="mx flag" />Mexico
      </option>
      <option className="item" data-value="fm">
        <i className="fm flag" />Micronesia
      </option>
      <option className="item" data-value="md">
        <i className="md flag" />Moldova
      </option>
      <option className="item" data-value="mc">
        <i className="mc flag" />Monaco
      </option>
      <option className="item" data-value="mn">
        <i className="mn flag" />Mongolia
      </option>
      <option className="item" data-value="me">
        <i className="me flag" />Montenegro
      </option>
      <option className="item" data-value="ms">
        <i className="ms flag" />Montserrat
      </option>
      <option className="item" data-value="ma">
        <i className="ma flag" />Morocco
      </option>
      <option className="item" data-value="mz">
        <i className="mz flag" />Mozambique
      </option>
      <option className="item" data-value="na">
        <i className="na flag" />Namibia
      </option>
      <option className="item" data-value="nr">
        <i className="nr flag" />Nauru
      </option>
      <option className="item" data-value="np">
        <i className="np flag" />Nepal
      </option>
      <option className="item" data-value="an">
        <i className="an flag" />Netherlands Antilles
      </option>
      <option className="item" data-value="nl">
        <i className="nl flag" />Netherlands
      </option>
      <option className="item" data-value="nc">
        <i className="nc flag" />New Caledonia
      </option>
      <option className="item" data-value="pg">
        <i className="pg flag" />New Guinea
      </option>
      <option className="item" data-value="nz">
        <i className="nz flag" />New Zealand
      </option>
      <option className="item" data-value="ni">
        <i className="ni flag" />Nicaragua
      </option>
      <option className="item" data-value="ne">
        <i className="ne flag" />Niger
      </option>
      <option className="item" data-value="ng">
        <i className="ng flag" />Nigeria
      </option>
      <option className="item" data-value="nu">
        <i className="nu flag" />Niue
      </option>
      <option className="item" data-value="nf">
        <i className="nf flag" />Norfolk Island
      </option>
      <option className="item" data-value="kp">
        <i className="kp flag" />North Korea
      </option>
      <option className="item" data-value="mp">
        <i className="mp flag" />Northern Mariana Islands
      </option>
      <option className="item" data-value="no">
        <i className="no flag" />Norway
      </option>
      <option className="item" data-value="om">
        <i className="om flag" />Oman
      </option>
      <option className="item" data-value="pk">
        <i className="pk flag" />Pakistan
      </option>
      <option className="item" data-value="pw">
        <i className="pw flag" />Palau
      </option>
      <option className="item" data-value="ps">
        <i className="ps flag" />Palestine
      </option>
      <option className="item" data-value="pa">
        <i className="pa flag" />Panama
      </option>
      <option className="item" data-value="py">
        <i className="py flag" />Paraguay
      </option>
      <option className="item" data-value="pe">
        <i className="pe flag" />Peru
      </option>
      <option className="item" data-value="ph">
        <i className="ph flag" />Philippines
      </option>
      <option className="item" data-value="pn">
        <i className="pn flag" />Pitcairn Islands
      </option>
      <option className="item" data-value="pl">
        <i className="pl flag" />Poland
      </option>
      <option className="item" data-value="pt">
        <i className="pt flag" />Portugal
      </option>
      <option className="item" data-value="pr">
        <i className="pr flag" />Puerto Rico
      </option>
      <option className="item" data-value="qa">
        <i className="qa flag" />Qatar
      </option>
      <option className="item" data-value="re">
        <i className="re flag" />Reunion
      </option>
      <option className="item" data-value="ro">
        <i className="ro flag" />Romania
      </option>
      <option className="item" data-value="ru">
        <i className="ru flag" />Russia
      </option>
      <option className="item" data-value="rw">
        <i className="rw flag" />Rwanda
      </option>
      <option className="item" data-value="sh">
        <i className="sh flag" />Saint Helena
      </option>
      <option className="item" data-value="kn">
        <i className="kn flag" />Saint Kitts and Nevis
      </option>
      <option className="item" data-value="lc">
        <i className="lc flag" />Saint Lucia
      </option>
      <option className="item" data-value="pm">
        <i className="pm flag" />Saint Pierre
      </option>
      <option className="item" data-value="vc">
        <i className="vc flag" />Saint Vincent
      </option>
      <option className="item" data-value="ws">
        <i className="ws flag" />Samoa
      </option>
      <option className="item" data-value="sm">
        <i className="sm flag" />San Marino
      </option>
      <option className="item" data-value="gs">
        <i className="gs flag" />Sandwich Islands
      </option>
      <option className="item" data-value="st">
        <i className="st flag" />Sao Tome
      </option>
      <option className="item" data-value="sa">
        <i className="sa flag" />Saudi Arabia
      </option>
      <option className="item" data-value="sn">
        <i className="sn flag" />Senegal
      </option>
      <option className="item" data-value="cs">
        <i className="cs flag" />Serbia
      </option>
      <option className="item" data-value="rs">
        <i className="rs flag" />Serbia
      </option>
      <option className="item" data-value="sc">
        <i className="sc flag" />Seychelles
      </option>
      <option className="item" data-value="sl">
        <i className="sl flag" />Sierra Leone
      </option>
      <option className="item" data-value="sg">
        <i className="sg flag" />Singapore
      </option>
      <option className="item" data-value="sk">
        <i className="sk flag" />Slovakia
      </option>
      <option className="item" data-value="si">
        <i className="si flag" />Slovenia
      </option>
      <option className="item" data-value="sb">
        <i className="sb flag" />Solomon Islands
      </option>
      <option className="item" data-value="so">
        <i className="so flag" />Somalia
      </option>
      <option className="item" data-value="za">
        <i className="za flag" />South Africa
      </option>
      <option className="item" data-value="kr">
        <i className="kr flag" />South Korea
      </option>
      <option className="item" data-value="es">
        <i className="es flag" />Spain
      </option>
      <option className="item" data-value="lk">
        <i className="lk flag" />Sri Lanka
      </option>
      <option className="item" data-value="sd">
        <i className="sd flag" />Sudan
      </option>
      <option className="item" data-value="sr">
        <i className="sr flag" />Suriname
      </option>
      <option className="item" data-value="sj">
        <i className="sj flag" />Svalbard
      </option>
      <option className="item" data-value="sz">
        <i className="sz flag" />Swaziland
      </option>
      <option className="item" data-value="se">
        <i className="se flag" />Sweden
      </option>
      <option className="item" data-value="ch">
        <i className="ch flag" />Switzerland
      </option>
      <option className="item" data-value="sy">
        <i className="sy flag" />Syria
      </option>
      <option className="item" data-value="tw">
        <i className="tw flag" />Taiwan
      </option>
      <option className="item" data-value="tj">
        <i className="tj flag" />Tajikistan
      </option>
      <option className="item" data-value="tz">
        <i className="tz flag" />Tanzania
      </option>
      <option className="item" data-value="th">
        <i className="th flag" />Thailand
      </option>
      <option className="item" data-value="tl">
        <i className="tl flag" />Timorleste
      </option>
      <option className="item" data-value="tg">
        <i className="tg flag" />Togo
      </option>
      <option className="item" data-value="tk">
        <i className="tk flag" />Tokelau
      </option>
      <option className="item" data-value="to">
        <i className="to flag" />Tonga
      </option>
      <option className="item" data-value="tt">
        <i className="tt flag" />Trinidad
      </option>
      <option className="item" data-value="tn">
        <i className="tn flag" />Tunisia
      </option>
      <option className="item" data-value="tr">
        <i className="tr flag" />Turkey
      </option>
      <option className="item" data-value="tm">
        <i className="tm flag" />Turkmenistan
      </option>
      <option className="item" data-value="tv">
        <i className="tv flag" />Tuvalu
      </option>
      <option className="item" data-value="ug">
        <i className="ug flag" />Uganda
      </option>
      <option className="item" data-value="ua">
        <i className="ua flag" />Ukraine
      </option>
      <option className="item" data-value="ae">
        <i className="ae flag" />United Arab Emirates
      </option>
      <option className="item" data-value="us">
        <i className="us flag" />United States
      </option>
      <option className="item" data-value="uy">
        <i className="uy flag" />Uruguay
      </option>
      <option className="item" data-value="um">
        <i className="um flag" />Us Minor Islands
      </option>
      <option className="item" data-value="vi">
        <i className="vi flag" />Us Virgin Islands
      </option>
      <option className="item" data-value="uz">
        <i className="uz flag" />Uzbekistan
      </option>
      <option className="item" data-value="vu">
        <i className="vu flag" />Vanuatu
      </option>
      <option className="item" data-value="va">
        <i className="va flag" />Vatican City
      </option>
      <option className="item" data-value="ve">
        <i className="ve flag" />Venezuela
      </option>
      <option className="item" data-value="vn">
        <i className="vn flag" />Vietnam
      </option>
      <option className="item" data-value="wf">
        <i className="wf flag" />Wallis and Futuna
      </option>
      <option className="item" data-value="eh">
        <i className="eh flag" />Western Sahara
      </option>
      <option className="item" data-value="ye">
        <i className="ye flag" />Yemen
      </option>
      <option className="item" data-value="zm">
        <i className="zm flag" />Zambia
      </option>
      <option className="item" data-value="zw">
        <i className="zw flag" />Zimbabwe
      </option>

      {/*</div>*/}
    </select>
  </div>
);

export default CountriesDropdown;
