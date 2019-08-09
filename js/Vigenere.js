var L=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];



function mes_crypte(){

	var message_code="";

	var clef=document.getElementById("clef").value.toUpperCase();

	var texte=document.getElementById("texte_vigenere").value.toUpperCase();

	var L_clef=clef.length;

	var L_texte=texte.length;

	var j=0;

	for (var i=0;i<L_texte;i++){

		var lettre=texte[i];

		var cle_j=clef[j].charCodeAt(0)-65;

		if (L.includes(lettre)){

			nb=lettre.charCodeAt(0)-65;

            nb_crypte=(nb+cle_j)%26;

            lettre_crypte=String.fromCharCode(nb_crypte+65);

		}

		else{

			lettre_crypte=lettre;

		}

		j=(j+1)%L_clef;

		message_code+=lettre_crypte;

	}

	var texte_trad=document.getElementById("trad_vigenere");

	texte_trad.innerText=message_code;
}

