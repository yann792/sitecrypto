
var alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
text = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, "");

function GetIC(text) {
    var counts = new Array(26);
    var totcount=0;
    for(i=0; i<26; i++) counts[i] = 0;
    for(i=0; i<text.length; i++){
        counts[text.charCodeAt(i) - 65]++;
        totcount++;
    }
    var sum = 0;
    for(i=0; i<26; i++) sum = sum + counts[i]*(counts[i]-1);
    ic = sum / (totcount*(totcount-1));
    return ic;
    
}

function afficherictext(text){
  var text = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, ""); 
  var IC_text=GetIC(text)
  document.getElementById("IC_text").value = IC_text;
}

function L_cle(text){
  var text = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, ""); 
  var distances=[];
  var n=text.length;
  for (var lsubstr=3; lsubstr<10; lsubstr++ ){
    for (var i=0; i<n; i++ ){
      var sc=text.substring(i,i+lsubstr);

      var scr=text.substring(i+1,n);
      j=scr.indexOf(sc)+1;
      if (j>0){distances.push(j);}
      }
    }
  var nbMax=0;
  for (var lg=3; lg<20; lg++){
    var nb=0;
    for (var d=0; d<distances.length; d++){
      if (distances[d]%lg==0){
        nb=nb+1;
      }
      if (nb>=nbMax){
        nbMax=nb;
        lgcle=lg;

      }
    }
  }

  document.getElementById("lgcle").value = lgcle;
  return lgcle;
  }
function convert(car){
  var carconv=(car.charCodeAt(0)-"A".charCodeAt(0));
  return carconv;
}

function decal(car,d){
  var dec=((car.charCodeAt(0)-"A".charCodeAt(0)+d)%26+"A".charCodeAt(0));
  var decale=String.fromCharCode(dec);
  return decale;
}

function cesar(text,cle){
  var d=L_cle(text);
  var texteDecale="";
  for (i=0;i<text.length;i++){
    var car=text[i];
    texteDecale=texteDecale+decal(car,cle);
  }
  return texteDecale;
}



function clesans(text,lgcle) {

 var text = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, ""); 
 var cle1="";
 var sous="";
 var lgcle=L_cle(text);
 var counts = new Array(26);
 for ( var i=0;i<lgcle;i++){
  var sous="";
  for(var j=0; j<26; j++) {counts[j] = 0};
  for (var k=i; k<text.length;k=k+lgcle){
    sous=sous+text[k];}
  for (var k=0;k<sous.length;k++){
      counts[alpha.indexOf(sous[k])]=counts[alpha.indexOf(sous[k])]+1;
  }  
  var p=0;
  for (var n=0;n<counts.length;n++){
    if (counts[n]>counts[p]){p=n;}
  }
  var test=alpha[(p+26-(alpha.indexOf("E")))%26];
  cle1=cle1+alpha[(p+26-(alpha.indexOf("E")))%26];
 } 
  document.getElementById("clesansic").value = cle1;
  return cle1
} 

function rechercheCle(text,lgcle){
var text = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, ""); 
var lgcle=L_cle(text);

var text0=""; 
for (var i=0;i<text.length;i=i+lgcle){
  text0=text0+text[i];
}  
var decalages=[0];
for (var k=1;k<lgcle;k++){
  var Icmax=0;
  var dec=-1;
  var textk="";
  for (j=k;j<text.length;j=j+lgcle){
    textk=textk+text[j];
   
  }
  console.log(textk,k);
  for (d=0;d<26;d++){
    var IC=GetIC(text0+cesar(textk,d));
    if (IC>Icmax){
      Icmax=IC;
      dec=d;
    }
   } 
 decalages.push(dec);
}
console.log(decalages);
var occ = {};

for (var n=0; n<text.length; n++) {
  var car = cesar(text[n],decalages[n%lgcle]);
  if ( typeof occ[car]==="undefined") {
    occ[car]=1;}
  else{occ[car]++;}
} 

var max=0;



for (var car in occ){
  if(occ[car]>max){
    max=occ[car];
    var carE=car;
  }  
}


var delta=(26 +carE.charCodeAt(0)-"E".charCodeAt(0))%26;
var cle="";
for (var d=0;d<decalages.length;d++){
  cle=cle+alpha[(delta-decalages[d])%26]


}

document.getElementById("cle").value = cle
return cle;
}

function decrypte(text,cle){
var text = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, "");
var lgcle=L_cle(text);
var cle=rechercheCle(text,lgcle);
var l=cle.length;
var clair="";
var code;
for (var e=0;e<text.length;e++){

  code=((text[e].charCodeAt(0)-65)-(cle[e%l].charCodeAt(0)-65))%26;
  if (code<0){
    code=26+code;
  }
clair=clair+alpha[code]

}
var textclair=document.getElementById("textclair");

  textclair.innerText=clair;
}
