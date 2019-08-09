var clair=document.getElementById("lg_en_clair");
var code=document.getElementById("lg_en_code");
var clef1=document.getElementById("clef1");
var clef2=document.getElementById("clef2");
var Liste=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Long_liste=Liste.length;
for (var i =0;i<Long_liste; i++) {
	var case_clair=document.createElement("td");
	case_clair.innerText=Liste[i];
	clair.appendChild(case_clair);
}
for (var i =0;i<Long_liste; i++) {
	var case_code=document.createElement("td");
	case_code.innerText=" ";
	case_code.id="case"+i;
	code.appendChild(case_code);
}
function creation_liste(elem){
	choix=document.createElement("option");
		choix.innerText=" ";
		elem.appendChild(choix);
	for (var j=1;j<=25;j++){
		var choix=document.createElement("option");
		choix.innerText=j;
		elem.appendChild(choix);
	}
}
creation_liste(clef1);
creation_liste(clef2);

function tab_crypte(elem){
	valeur_clef=elem.value-1;
	for (var k=0 ; k<Long_liste;k++){
		valeur_clef++;
		var case_modif=document.getElementById("case"+k);
		case_modif.innerText=Liste[(valeur_clef)%26];
	}
}

function mes_crypte(){
	var message_code="";
	var clef=+document.getElementById("clef2").value.toUpperCase();
	var texte=document.getElementById("texte_cesar").value.toUpperCase();
	var L=texte.length;
	for (var i=0;i<L;i++){
		var lettre=texte[i];
		if (Liste.includes(lettre)){
			nb=lettre.charCodeAt(0)-65;
            nb_crypte=(nb+clef)%26;
            lettre_crypte=String.fromCharCode(nb_crypte+65);
		}
		else{
			lettre_crypte=lettre;
		}
		message_code+=lettre_crypte;
	}
	var texte_trad=document.getElementById("trad_cesar");
	texte_trad.innerText=message_code;
}

function mes_decrypte(){
	var message_decode="";
	var texte=document.getElementById("texte_crypte").value.toUpperCase();
	var L=texte.length;
	for (var cle=1;cle<=25;cle++){
		message_decode+="\n";
		for (var i=0;i<L;i++){
			var lettre=texte[i];
			if (Liste.includes(lettre)){
				nb=lettre.charCodeAt(0)-65;
            	nb_decrypte=((nb-cle)%26+26)%26;
            	lettre_decrypte=String.fromCharCode(nb_decrypte+65);
			}
			else{
				lettre_decrypte=lettre;
			}
			message_decode+=lettre_decrypte;
		var texte_trad=document.getElementById("decrypt");
		texte_trad.innerText=message_decode;
		}	
	}
}
