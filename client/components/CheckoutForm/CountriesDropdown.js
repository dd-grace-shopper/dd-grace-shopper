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


        <option className="item" data-value="af"><i className="af flag"></i>Afghanistan</option>
        <option className="item" data-value="ax"><i className="ax flag"></i>Aland Islands</option>
        <option className="item" data-value="al"><i className="al flag"></i>Albania</option>
        <option className="item" data-value="dz"><i className="dz flag"></i>Algeria</option>
        <option className="item" data-value="as"><i className="as flag"></i>American Samoa</option>
        <option className="item" data-value="ad"><i className="ad flag"></i>Andorra</option>
        <option className="item" data-value="ao"><i className="ao flag"></i>Angola</option>
        <option className="item" data-value="ai"><i className="ai flag"></i>Anguilla</option>
        <option className="item" data-value="ag"><i className="ag flag"></i>Antigua</option>
        <option className="item" data-value="ar"><i className="ar flag"></i>Argentina</option>
        <option className="item" data-value="am"><i className="am flag"></i>Armenia</option>
        <option className="item" data-value="aw"><i className="aw flag"></i>Aruba</option>
        <option className="item" data-value="au"><i className="au flag"></i>Australia</option>
        <option className="item" data-value="at"><i className="at flag"></i>Austria</option>
        <option className="item" data-value="az"><i className="az flag"></i>Azerbaijan</option>
        <option className="item" data-value="bs"><i className="bs flag"></i>Bahamas</option>
        <option className="item" data-value="bh"><i className="bh flag"></i>Bahrain</option>
        <option className="item" data-value="bd"><i className="bd flag"></i>Bangladesh</option>
        <option className="item" data-value="bb"><i className="bb flag"></i>Barbados</option>
        <option className="item" data-value="by"><i className="by flag"></i>Belarus</option>
        <option className="item" data-value="be"><i className="be flag"></i>Belgium</option>
        <option className="item" data-value="bz"><i className="bz flag"></i>Belize</option>
        <option className="item" data-value="bj"><i className="bj flag"></i>Benin</option>
        <option className="item" data-value="bm"><i className="bm flag"></i>Bermuda</option>
        <option className="item" data-value="bt"><i className="bt flag"></i>Bhutan</option>
        <option className="item" data-value="bo"><i className="bo flag"></i>Bolivia</option>
        <option className="item" data-value="ba"><i className="ba flag"></i>Bosnia</option>
        <option className="item" data-value="bw"><i className="bw flag"></i>Botswana</option>
        <option className="item" data-value="bv"><i className="bv flag"></i>Bouvet Island</option>
        <option className="item" data-value="br"><i className="br flag"></i>Brazil</option>
        <option className="item" data-value="vg"><i className="vg flag"></i>British Virgin Islands</option>
        <option className="item" data-value="bn"><i className="bn flag"></i>Brunei</option>
        <option className="item" data-value="bg"><i className="bg flag"></i>Bulgaria</option>
        <option className="item" data-value="bf"><i className="bf flag"></i>Burkina Faso</option>
        <option className="item" data-value="mm"><i className="mm flag"></i>Burma</option>
        <option className="item" data-value="bi"><i className="bi flag"></i>Burundi</option>
        <option className="item" data-value="tc"><i className="tc flag"></i>Caicos Islands</option>
        <option className="item" data-value="kh"><i className="kh flag"></i>Cambodia</option>
        <option className="item" data-value="cm"><i className="cm flag"></i>Cameroon</option>
        <option className="item" data-value="ca"><i className="ca flag"></i>Canada</option>
        <option className="item" data-value="cv"><i className="cv flag"></i>Cape Verde</option>
        <option className="item" data-value="ky"><i className="ky flag"></i>Cayman Islands</option>
        <option className="item" data-value="cf"><i className="cf flag"></i>Central African Republic</option>
        <option className="item" data-value="td"><i className="td flag"></i>Chad</option>
        <option className="item" data-value="cl"><i className="cl flag"></i>Chile</option>
        <option className="item" data-value="cn"><i className="cn flag"></i>China</option>
        <option className="item" data-value="cx"><i className="cx flag"></i>Christmas Island</option>
        <option className="item" data-value="cc"><i className="cc flag"></i>Cocos Islands</option>
        <option className="item" data-value="co"><i className="co flag"></i>Colombia</option>
        <option className="item" data-value="km"><i className="km flag"></i>Comoros</option>
        <option className="item" data-value="cg"><i className="cg flag"></i>Congo Brazzaville</option>
        <option className="item" data-value="cd"><i className="cd flag"></i>Congo</option>
        <option className="item" data-value="ck"><i className="ck flag"></i>Cook Islands</option>
        <option className="item" data-value="cr"><i className="cr flag"></i>Costa Rica</option>
        <option className="item" data-value="ci"><i className="ci flag"></i>Cote optionoire</option>
        <option className="item" data-value="hr"><i className="hr flag"></i>Croatia</option>
        <option className="item" data-value="cu"><i className="cu flag"></i>Cuba</option>
        <option className="item" data-value="cy"><i className="cy flag"></i>Cyprus</option>
        <option className="item" data-value="cz"><i className="cz flag"></i>Czech Republic</option>
        <option className="item" data-value="dk"><i className="dk flag"></i>Denmark</option>
        <option className="item" data-value="dj"><i className="dj flag"></i>Djibouti</option>
        <option className="item" data-value="dm"><i className="dm flag"></i>Dominica</option>
        <option className="item" data-value="do"><i className="do flag"></i>Dominican Republic</option>
        <option className="item" data-value="ec"><i className="ec flag"></i>Ecuador</option>
        <option className="item" data-value="eg"><i className="eg flag"></i>Egypt</option>
        <option className="item" data-value="sv"><i className="sv flag"></i>El Salvador</option>
        <option className="item" data-value="gb"><i className="gb flag"></i>England</option>
        <option className="item" data-value="gq"><i className="gq flag"></i>Equatorial Guinea</option>
        <option className="item" data-value="er"><i className="er flag"></i>Eritrea</option>
        <option className="item" data-value="ee"><i className="ee flag"></i>Estonia</option>
        <option className="item" data-value="et"><i className="et flag"></i>Ethiopia</option>
        <option className="item" data-value="eu"><i className="eu flag"></i>European Union</option>
        <option className="item" data-value="fk"><i className="fk flag"></i>Falkland Islands</option>
        <option className="item" data-value="fo"><i className="fo flag"></i>Faroe Islands</option>
        <option className="item" data-value="fj"><i className="fj flag"></i>Fiji</option>
        <option className="item" data-value="fi"><i className="fi flag"></i>Finland</option>
        <option className="item" data-value="fr"><i className="fr flag"></i>France</option>
        <option className="item" data-value="gf"><i className="gf flag"></i>French Guiana</option>
        <option className="item" data-value="pf"><i className="pf flag"></i>French Polynesia</option>
        <option className="item" data-value="tf"><i className="tf flag"></i>French Territories</option>
        <option className="item" data-value="ga"><i className="ga flag"></i>Gabon</option>
        <option className="item" data-value="gm"><i className="gm flag"></i>Gambia</option>
        <option className="item" data-value="ge"><i className="ge flag"></i>Georgia</option>
        <option className="item" data-value="de"><i className="de flag"></i>Germany</option>
        <option className="item" data-value="gh"><i className="gh flag"></i>Ghana</option>
        <option className="item" data-value="gi"><i className="gi flag"></i>Gibraltar</option>
        <option className="item" data-value="gr"><i className="gr flag"></i>Greece</option>
        <option className="item" data-value="gl"><i className="gl flag"></i>Greenland</option>
        <option className="item" data-value="gd"><i className="gd flag"></i>Grenada</option>
        <option className="item" data-value="gp"><i className="gp flag"></i>Guadeloupe</option>
        <option className="item" data-value="gu"><i className="gu flag"></i>Guam</option>
        <option className="item" data-value="gt"><i className="gt flag"></i>Guatemala</option>
        <option className="item" data-value="gw"><i className="gw flag"></i>Guinea-Bissau</option>
        <option className="item" data-value="gn"><i className="gn flag"></i>Guinea</option>
        <option className="item" data-value="gy"><i className="gy flag"></i>Guyana</option>
        <option className="item" data-value="ht"><i className="ht flag"></i>Haiti</option>
        <option className="item" data-value="hm"><i className="hm flag"></i>Heard Island</option>
        <option className="item" data-value="hn"><i className="hn flag"></i>Honduras</option>
        <option className="item" data-value="hk"><i className="hk flag"></i>Hong Kong</option>
        <option className="item" data-value="hu"><i className="hu flag"></i>Hungary</option>
        <option className="item" data-value="is"><i className="is flag"></i>Iceland</option>
        <option className="item" data-value="in"><i className="in flag"></i>India</option>
        <option className="item" data-value="io"><i className="io flag"></i>Indian Ocean Territory</option>
        <option className="item" data-value="id"><i className="id flag"></i>Indonesia</option>
        <option className="item" data-value="ir"><i className="ir flag"></i>Iran</option>
        <option className="item" data-value="iq"><i className="iq flag"></i>Iraq</option>
        <option className="item" data-value="ie"><i className="ie flag"></i>Ireland</option>
        <option className="item" data-value="il"><i className="il flag"></i>Israel</option>
        <option className="item" data-value="it"><i className="it flag"></i>Italy</option>
        <option className="item" data-value="jm"><i className="jm flag"></i>Jamaica</option>
        <option className="item" data-value="jp"><i className="jp flag"></i>Japan</option>
        <option className="item" data-value="jo"><i className="jo flag"></i>Jordan</option>
        <option className="item" data-value="kz"><i className="kz flag"></i>Kazakhstan</option>
        <option className="item" data-value="ke"><i className="ke flag"></i>Kenya</option>
        <option className="item" data-value="ki"><i className="ki flag"></i>Kiribati</option>
        <option className="item" data-value="kw"><i className="kw flag"></i>Kuwait</option>
        <option className="item" data-value="kg"><i className="kg flag"></i>Kyrgyzstan</option>
        <option className="item" data-value="la"><i className="la flag"></i>Laos</option>
        <option className="item" data-value="lv"><i className="lv flag"></i>Latvia</option>
        <option className="item" data-value="lb"><i className="lb flag"></i>Lebanon</option>
        <option className="item" data-value="ls"><i className="ls flag"></i>Lesotho</option>
        <option className="item" data-value="lr"><i className="lr flag"></i>Liberia</option>
        <option className="item" data-value="ly"><i className="ly flag"></i>Libya</option>
        <option className="item" data-value="li"><i className="li flag"></i>Liechtenstein</option>
        <option className="item" data-value="lt"><i className="lt flag"></i>Lithuania</option>
        <option className="item" data-value="lu"><i className="lu flag"></i>Luxembourg</option>
        <option className="item" data-value="mo"><i className="mo flag"></i>Macau</option>
        <option className="item" data-value="mk"><i className="mk flag"></i>Macedonia</option>
        <option className="item" data-value="mg"><i className="mg flag"></i>Madagascar</option>
        <option className="item" data-value="mw"><i className="mw flag"></i>Malawi</option>
        <option className="item" data-value="my"><i className="my flag"></i>Malaysia</option>
        <option className="item" data-value="mv"><i className="mv flag"></i>Maloptiones</option>
        <option className="item" data-value="ml"><i className="ml flag"></i>Mali</option>
        <option className="item" data-value="mt"><i className="mt flag"></i>Malta</option>
        <option className="item" data-value="mh"><i className="mh flag"></i>Marshall Islands</option>
        <option className="item" data-value="mq"><i className="mq flag"></i>Martinique</option>
        <option className="item" data-value="mr"><i className="mr flag"></i>Mauritania</option>
        <option className="item" data-value="mu"><i className="mu flag"></i>Mauritius</option>
        <option className="item" data-value="yt"><i className="yt flag"></i>Mayotte</option>
        <option className="item" data-value="mx"><i className="mx flag"></i>Mexico</option>
        <option className="item" data-value="fm"><i className="fm flag"></i>Micronesia</option>
        <option className="item" data-value="md"><i className="md flag"></i>Moldova</option>
        <option className="item" data-value="mc"><i className="mc flag"></i>Monaco</option>
        <option className="item" data-value="mn"><i className="mn flag"></i>Mongolia</option>
        <option className="item" data-value="me"><i className="me flag"></i>Montenegro</option>
        <option className="item" data-value="ms"><i className="ms flag"></i>Montserrat</option>
        <option className="item" data-value="ma"><i className="ma flag"></i>Morocco</option>
        <option className="item" data-value="mz"><i className="mz flag"></i>Mozambique</option>
        <option className="item" data-value="na"><i className="na flag"></i>Namibia</option>
        <option className="item" data-value="nr"><i className="nr flag"></i>Nauru</option>
        <option className="item" data-value="np"><i className="np flag"></i>Nepal</option>
        <option className="item" data-value="an"><i className="an flag"></i>Netherlands Antilles</option>
        <option className="item" data-value="nl"><i className="nl flag"></i>Netherlands</option>
        <option className="item" data-value="nc"><i className="nc flag"></i>New Caledonia</option>
        <option className="item" data-value="pg"><i className="pg flag"></i>New Guinea</option>
        <option className="item" data-value="nz"><i className="nz flag"></i>New Zealand</option>
        <option className="item" data-value="ni"><i className="ni flag"></i>Nicaragua</option>
        <option className="item" data-value="ne"><i className="ne flag"></i>Niger</option>
        <option className="item" data-value="ng"><i className="ng flag"></i>Nigeria</option>
        <option className="item" data-value="nu"><i className="nu flag"></i>Niue</option>
        <option className="item" data-value="nf"><i className="nf flag"></i>Norfolk Island</option>
        <option className="item" data-value="kp"><i className="kp flag"></i>North Korea</option>
        <option className="item" data-value="mp"><i className="mp flag"></i>Northern Mariana Islands</option>
        <option className="item" data-value="no"><i className="no flag"></i>Norway</option>
        <option className="item" data-value="om"><i className="om flag"></i>Oman</option>
        <option className="item" data-value="pk"><i className="pk flag"></i>Pakistan</option>
        <option className="item" data-value="pw"><i className="pw flag"></i>Palau</option>
        <option className="item" data-value="ps"><i className="ps flag"></i>Palestine</option>
        <option className="item" data-value="pa"><i className="pa flag"></i>Panama</option>
        <option className="item" data-value="py"><i className="py flag"></i>Paraguay</option>
        <option className="item" data-value="pe"><i className="pe flag"></i>Peru</option>
        <option className="item" data-value="ph"><i className="ph flag"></i>Philippines</option>
        <option className="item" data-value="pn"><i className="pn flag"></i>Pitcairn Islands</option>
        <option className="item" data-value="pl"><i className="pl flag"></i>Poland</option>
        <option className="item" data-value="pt"><i className="pt flag"></i>Portugal</option>
        <option className="item" data-value="pr"><i className="pr flag"></i>Puerto Rico</option>
        <option className="item" data-value="qa"><i className="qa flag"></i>Qatar</option>
        <option className="item" data-value="re"><i className="re flag"></i>Reunion</option>
        <option className="item" data-value="ro"><i className="ro flag"></i>Romania</option>
        <option className="item" data-value="ru"><i className="ru flag"></i>Russia</option>
        <option className="item" data-value="rw"><i className="rw flag"></i>Rwanda</option>
        <option className="item" data-value="sh"><i className="sh flag"></i>Saint Helena</option>
        <option className="item" data-value="kn"><i className="kn flag"></i>Saint Kitts and Nevis</option>
        <option className="item" data-value="lc"><i className="lc flag"></i>Saint Lucia</option>
        <option className="item" data-value="pm"><i className="pm flag"></i>Saint Pierre</option>
        <option className="item" data-value="vc"><i className="vc flag"></i>Saint Vincent</option>
        <option className="item" data-value="ws"><i className="ws flag"></i>Samoa</option>
        <option className="item" data-value="sm"><i className="sm flag"></i>San Marino</option>
        <option className="item" data-value="gs"><i className="gs flag"></i>Sandwich Islands</option>
        <option className="item" data-value="st"><i className="st flag"></i>Sao Tome</option>
        <option className="item" data-value="sa"><i className="sa flag"></i>Saudi Arabia</option>
        <option className="item" data-value="sn"><i className="sn flag"></i>Senegal</option>
        <option className="item" data-value="cs"><i className="cs flag"></i>Serbia</option>
        <option className="item" data-value="rs"><i className="rs flag"></i>Serbia</option>
        <option className="item" data-value="sc"><i className="sc flag"></i>Seychelles</option>
        <option className="item" data-value="sl"><i className="sl flag"></i>Sierra Leone</option>
        <option className="item" data-value="sg"><i className="sg flag"></i>Singapore</option>
        <option className="item" data-value="sk"><i className="sk flag"></i>Slovakia</option>
        <option className="item" data-value="si"><i className="si flag"></i>Slovenia</option>
        <option className="item" data-value="sb"><i className="sb flag"></i>Solomon Islands</option>
        <option className="item" data-value="so"><i className="so flag"></i>Somalia</option>
        <option className="item" data-value="za"><i className="za flag"></i>South Africa</option>
        <option className="item" data-value="kr"><i className="kr flag"></i>South Korea</option>
        <option className="item" data-value="es"><i className="es flag"></i>Spain</option>
        <option className="item" data-value="lk"><i className="lk flag"></i>Sri Lanka</option>
        <option className="item" data-value="sd"><i className="sd flag"></i>Sudan</option>
        <option className="item" data-value="sr"><i className="sr flag"></i>Suriname</option>
        <option className="item" data-value="sj"><i className="sj flag"></i>Svalbard</option>
        <option className="item" data-value="sz"><i className="sz flag"></i>Swaziland</option>
        <option className="item" data-value="se"><i className="se flag"></i>Sweden</option>
        <option className="item" data-value="ch"><i className="ch flag"></i>Switzerland</option>
        <option className="item" data-value="sy"><i className="sy flag"></i>Syria</option>
        <option className="item" data-value="tw"><i className="tw flag"></i>Taiwan</option>
        <option className="item" data-value="tj"><i className="tj flag"></i>Tajikistan</option>
        <option className="item" data-value="tz"><i className="tz flag"></i>Tanzania</option>
        <option className="item" data-value="th"><i className="th flag"></i>Thailand</option>
        <option className="item" data-value="tl"><i className="tl flag"></i>Timorleste</option>
        <option className="item" data-value="tg"><i className="tg flag"></i>Togo</option>
        <option className="item" data-value="tk"><i className="tk flag"></i>Tokelau</option>
        <option className="item" data-value="to"><i className="to flag"></i>Tonga</option>
        <option className="item" data-value="tt"><i className="tt flag"></i>Trinidad</option>
        <option className="item" data-value="tn"><i className="tn flag"></i>Tunisia</option>
        <option className="item" data-value="tr"><i className="tr flag"></i>Turkey</option>
        <option className="item" data-value="tm"><i className="tm flag"></i>Turkmenistan</option>
        <option className="item" data-value="tv"><i className="tv flag"></i>Tuvalu</option>
        <option className="item" data-value="ug"><i className="ug flag"></i>Uganda</option>
        <option className="item" data-value="ua"><i className="ua flag"></i>Ukraine</option>
        <option className="item" data-value="ae"><i className="ae flag"></i>United Arab Emirates</option>
        <option className="item" data-value="us"><i className="us flag"></i>United States</option>
        <option className="item" data-value="uy"><i className="uy flag"></i>Uruguay</option>
        <option className="item" data-value="um"><i className="um flag"></i>Us Minor Islands</option>
        <option className="item" data-value="vi"><i className="vi flag"></i>Us Virgin Islands</option>
        <option className="item" data-value="uz"><i className="uz flag"></i>Uzbekistan</option>
        <option className="item" data-value="vu"><i className="vu flag"></i>Vanuatu</option>
        <option className="item" data-value="va"><i className="va flag"></i>Vatican City</option>
        <option className="item" data-value="ve"><i className="ve flag"></i>Venezuela</option>
        <option className="item" data-value="vn"><i className="vn flag"></i>Vietnam</option>
        <option className="item" data-value="wf"><i className="wf flag"></i>Wallis and Futuna</option>
        <option className="item" data-value="eh"><i className="eh flag"></i>Western Sahara</option>
        <option className="item" data-value="ye"><i className="ye flag"></i>Yemen</option>
        <option className="item" data-value="zm"><i className="zm flag"></i>Zambia</option>
        <option className="item" data-value="zw"><i className="zw flag"></i>Zimbabwe</option>
      {/*</div>*/}
    </select>
  </div>
);

export default CountriesDropdown;
