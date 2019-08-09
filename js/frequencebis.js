              //compter que les caractères imprimable pour calcul des fréquencesi
              
          function CountWithoutSpecial(TheText) {
                        var NbCar=0;
                                for (var i = 0; i < TheText.length; i++) {
                                        ASCIICode=TheText.charCodeAt(i);
                                        if (65 <= ASCIICode) {
                                                NbCar=NbCar+1;
                                        }
                                }
                        return NbCar
                        }
 
                        //Calcul des frequences et occurences
                        function calcFreq(TheText) {
                        var MyTable = [];
                                for (var i = 0; i < TheText.length; i++) {
                                        // inverser les 2 lignes ci-dessous prendre en compte que les caratères non imprimables
                                        ASCIICode=TheText.charCodeAt(i)-65;
                                        // ASCIICode=Mytext.charCodeAt(i)
                                        if(typeof MyTable[ASCIICode] === 'undefined') {
                                                MyTable[ASCIICode]=[0,0];
                                                MyTable[ASCIICode][0]=0;
                                                MyTable[ASCIICode][1]=0;
                                        }
                                        MyTable[ASCIICode][0]=MyTable[ASCIICode][0]+1;
                                        // inverser les 2 lignes ci-dessous prendre en compte que les caratères non imprimables
                                        // MyTable[ASCIICode][1]=(MyTable[ASCIICode][0]/TheText.length*100);
                                        MyTable[ASCIICode][1]=(MyTable[ASCIICode][0]/CountWithoutSpecial(TheText)*100).toFixed(2);
                                }
                                return MyTable
                        }
 
                        //fonction de verif (affiver le tableau)
                        function PrintTable(MyVerifTable, MyTextLen, TextLenNoSpecial) {
                                    // Start Table
                                    var body = document.getElementById("log");
                                    // on vide le div
                                    body.innerHTML="";
                                    var tbl = document.createElement("table");
                                    var tblBody = document.createElement("tbody");
                                    // Entête tableau
                                    var rowEntete = document.createElement("tr");
                                    var cellEntete = document.createElement("td");
                                    var cellText = document.createTextNode("Position");
                                    cellEntete.appendChild(cellText);
                                    rowEntete.appendChild(cellEntete);
                                    cellEntete = document.createElement("td");
                                    cellText = document.createTextNode("Caractere");
                                    cellEntete.appendChild(cellText);
                                    rowEntete.appendChild(cellEntete);
                                    cellEntete = document.createElement("td");
                                    cellText = document.createTextNode("Occurence");
                                    cellEntete.appendChild(cellText);
                                    rowEntete.appendChild(cellEntete);
                                    cellEntete = document.createElement("td");
                                    cellText = document.createTextNode("Frequence");
                                    cellEntete.appendChild(cellText);
                                    rowEntete.appendChild(cellEntete);
                                    tblBody.appendChild(rowEntete);
 
                                var verifNumCar=0;
                                var verifFreq=0;
 
                                for (var i = 0; i < MyVerifTable.length ; i++) {
                                               //start line
                                        var row = document.createElement("tr");
                                        if(typeof MyVerifTable[i] === 'undefined') {
                                                // inverser les 2 lignes ci-dessous prendre en compte que les caratères non imprimables
                                                           //document.getElementById('log').innerHTML += "<td>"+i+"</td><td>"+String.fromCharCode(i+65)+"</td><td>0</td><td>0</td>";
                                        var cell = document.createElement("td");
                                        var cellText2 = document.createTextNode(i);
                                        cell.appendChild(cellText2);
                                        row.appendChild(cell);
 
                                        cell = document.createElement("td");
                                        cellText2 = document.createTextNode(String.fromCharCode(i+65));
                                        cell.appendChild(cellText2);
                                        row.appendChild(cell);
 
                                         cell = document.createElement("td");
                                        cellText2 = document.createTextNode("0");
                                        cell.appendChild(cellText2);
                                        row.appendChild(cell);
 
                                        cell = document.createElement("td");
                                        cellText2 = document.createTextNode("0");
                                        cell.appendChild(cellText2);
                                        row.appendChild(cell);
 
                                        tblBody.appendChild(row);
                                        console.log ( "Element:"+i+" "+String.fromCharCode(i+65) +" non présent dans le texte");
                                                //console.log ( "Element:"+i+" "+String.fromCharCode(i) +" non présent dans le texte");
                                        } else {
 
 
                                        var cell = document.createElement("td");
                                        var cellText2 = document.createTextNode(i);
                                        cell.appendChild(cellText2);
                                        row.appendChild(cell);
 
                                        cell = document.createElement("td");
                                        cellText2 = document.createTextNode(String.fromCharCode(i+65));
                                        cell.appendChild(cellText2);
                                        row.appendChild(cell);
 
                                        cell = document.createElement("td");
                                        cellText2 = document.createTextNode(MyVerifTable[i][0]);
                                        cell.appendChild(cellText2);
                                        row.appendChild(cell);
 
                                        cell = document.createElement("td");
                                        cellText2 = document.createTextNode(MyVerifTable[i][1]);
                                        cell.appendChild(cellText2);
                                        row.appendChild(cell);
 
                                        tblBody.appendChild(row);
 
                                        // inverser les 2 lignes ci-dessous prendre en compte que les caratères non imprimables
                                        console.log ( "Element:"+i+" "+String.fromCharCode(i+65) +" Occurence:"+MyVerifTable[i][0]+" Frequence:"+MyVerifTable[i][1]);
                                        //console.log ( "Element:"+i+" "+String.fromCharCode(i) +" Occurence:"+MyVerifTable[i][0]+" Frequence:"+MyVerifTable[i][1]);
                                        verifNumCar=verifNumCar+MyVerifTable[i][0];
                                        verifFreq=verifFreq+MyVerifTable[i][1];
                                        }
                                               // End line
                                               //document.getElementById('log').innerHTML += "</tr>";
                                }
                        //end Table
                        //document.getElementById('log').innerHTML += "</TABLE>";
                        tbl.appendChild(tblBody);
                        body.appendChild(tbl);
                        tbl.setAttribute("border", "1");
                        console.log ("Total reference : "+verifNumCar+" (Compte dans texte : "+MyTextLen+", Compte dans le texte carateres imprimables uniquement : "+TextLenNoSpecial+")");
                        console.log ("Total frequence : "+verifFreq);
                        }
 
                        // Main Program
                        function JustDoit(){
                        //         var Mytext="I'm tuning SQL queries on an Oracle database. I want to ensure that all cached items are cleared before running each query in order to prevent misleading performance results. I clear out the shared pool (to get rid     of cached SQL/explain plans) and buffer cache (to get rid of cached data) by running the following commands";
                                    var Mytext=document.getElementById('text2').value;
                                    var MyTableTest = [];
                                    MyTableTest=calcFreq(Mytext);

                                    PrintTable(MyTableTest,Mytext.length,CountWithoutSpecial(Mytext));
                        }