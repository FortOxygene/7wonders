/* to do 
- fonctionnement mobile
- signifier qu'une cellule est modifiable;
- exporter en CSV
- préselectionner l'input suivant
- premier test d'hébergement
https://css-tricks.com/responsive-data-tables/  thanks for the help for the Table in mobile mode 
https://www.digitalocean.com/community/tutorials/css-attr-function
https://css-tricks.com/css-attr-function-got-nothin-custom-properties/
https://stackoverflow.com/questions/15547198/export-html-table-to-csv
*/
let tableau = document.getElementById('tableau');
let player = document.getElementById('player-select');
let submit=document.getElementById('submit');
let merveille=document.getElementById('Merveille0');
let ligneS=document.getElementsByClassName('ligne');
let classarmy=document.getElementsByClassName('militaire');
let joueur1 =document.getElementsByClassName('scoreJoueur1');
let joueur2 =document.getElementsByClassName('scoreJoueur2');
let joueur3 =document.getElementsByClassName('scoreJoueur3');
let joueur4 =document.getElementsByClassName('scoreJoueur4');
let joueur5 =document.getElementsByClassName('scoreJoueur5');
let joueur6 =document.getElementsByClassName('scoreJoueur6');
let joueur7 =document.getElementsByClassName('scoreJoueur7');
let joueur8 =document.getElementsByClassName('scoreJoueur8');
let nom1=document.getElementsByClassName('nom1');
let nom2=document.getElementsByClassName('nom2');
let nom3=document.getElementsByClassName('nom3');
let nom4=document.getElementsByClassName('nom4');
let nom5=document.getElementsByClassName('nom5');
let nom6=document.getElementsByClassName('nom6');
let nom7=document.getElementsByClassName('nom7');
let nom8=document.getElementsByClassName('nom8');
let nomS=[nom1,nom2,nom3,nom4,nom5,nom6,nom7,nom8];
let sumScores=document.getElementsByClassName('scoreTot');
let nbPlayer=document.getElementsByClassName('nbPlayer');
let leaderid= document.getElementById('Leaders');
let cities= document.getElementById('Cities');
let armada=document.getElementById('Armada');
let babel=document.getElementById('Babel');
let reset = document.getElementById('reset');
let extension=document.getElementById('extension');
let delplayer = document.getElementById('delplayer');
let nameJoueur1=document.getElementById('joueurs1');
let scores =[];
let scJoueurs= [joueur1,joueur2,joueur3,joueur4,joueur5,joueur6,joueur7,joueur8];
let compte = 0,pos=10,maxSc;
let nbreJoueur = 0;
let i = 4;
var classL;
var test; 
let num=0,num2=0, nomJoueur='';
var cells=[];

tableau.addEventListener('change',updateScore);
submit.addEventListener('click',ajoutplayer);
reset.addEventListener('click',resetfc);
delplayer.addEventListener('click',delPlayer);
leaderid.addEventListener('click',extensionleader);
cities.addEventListener('click',extensioncities);

function updateScore() { //fonction pour récupérer les valeurs et mettre à jour le score
	scores[0] =0;
	scores[1] =0;
	scores[2] =0;
	scores[3] =0;
	scores[4] =0;
	scores[5] =0;
	scores[6] =0;
	scores[7] =0;
	for(let k=0;k<(nbreJoueur||3);k++){
		num = 0;
		nomJoueur=nbPlayer[k+1].value;
		for(let l=0;l<joueur1.length;l++){
			num=(isNaN(parseInt(scJoueurs[k][l].value))? 0:parseInt(scJoueurs[k][l].value))+num;
			scores[k]=num;
			nomS[l][k].dataset.nom = nomJoueur;
// vérifier pourquoi la boucle ne fonctionne pas
		}
	}
	for(let l=0;l<(nbreJoueur||3);l++){// ne fontionne pas si intégré dans la précédente boucle for
	sumScores[l].innerHTML=scores[l]
	sumScores[l].id='osef';
	maxSc = Math.max(...scores); 
	pos = scores.indexOf(maxSc); 
	sumScores[pos].id='meilleur';
	}
}
	/*scoreScience =isNaN(parseInt(science.value))? 0 : parseInt(science.value);// condition pour vérifier si c'est bien un nombre*/
function ajoutdeLigne(){ // à conserver pour le moment pour les extensions
	var ligne =tableau.insertRow(-1);
	for (var i = 0; i < nbreJoueur; i++) {
		var cellule =ligne.insertCell();
		var texte = document.createTextNode('nouvelle cellule');
		cellule.appendChild(texte);
	}
	compte++;
}
function ajoutplayer()
{
	var textes=[];
	var nomjouer='joueur';
	nbreJoueur=player.value;
	for(;(classarmy.length-1) <=nbreJoueur;i++){
		cells[0]=ligneS[0].insertCell(-1);
		var input2=document.createElement('input');
		input2.type = 'text';
		input2.value='Joueur '+ i;
		input2.className='nbPlayer';
		cells[0].appendChild(input2);

		for (var j =1;(j<ligneS.length-1); j++) {
			cells[j] = ligneS[j].insertCell(-1);
			cells[j].className='nom'+j;
			var input = document.createElement('input');
			input.type='number';
			classL=ligneS[j].id+0;
			test =document.getElementById(classL).className+' '+ 'scoreJoueur'+i;
			input.className=test;
			input.id=ligneS[j].id+i;
			//cells[j].class='nameJoueur1.value';
  			cells[j].appendChild(input);
			//nomJoueur=nbPlayer[i].value;
  			//cells[j].data=nomJoueur;
		}
		cells[j] = ligneS[j].insertCell(-1);
		cells[j].className='scoreTot';
  	}
}
function resetfc(){
	for(let k=0;k<(nbreJoueur||3);k++){
		for(let l=0;l<joueur1.length;l++){
			scJoueurs[k][l].value=0;  
		}
	sumScores[k].innerHTML=0;
	}
}
function delPlayer(){
	if(nbPlayer.length>4){
		nbreJoueur--;
	for(let j=0 ;j<ligneS.length; j++)
	{
		ligneS[j].deleteCell(-1);
	}}
	else
	{
	}
}
function extensionleader(){
	if( leaderid.checked === true){
		let leader; 
	let cellExt=[];
	leader=tableau.insertRow(ligneS.length-1);
	leader.className='leader ligne';
	leader.id='Blanc';
	cellExt[0]=leader.insertCell(-1);
	cellExt[0].id='Blanc0';
	input=document.createTextNode('Leader');
	cellExt[0].appendChild(input);
	for(let j=1; (j<=3)||(j<=nbreJoueur);j++){
		cellExt[j]=leader.insertCell(-1);
		input=document.createElement('input');
		input.type='number';
		input.id='leader'+j;
		input.className= 'scoreJoueur'+j;
		cellExt[j].appendChild(input);
	}
}else{
	for(let k=0; k<ligneS.length;k++){
		if( ligneS[k].id==='Blanc'){
			tableau.deleteRow(k);
			updateScore();// lance la fonction update score pour vérifier les données de la ligne supprimée
		}
	}
}
}
function extensioncities(){
	if( cities.checked === true){
		let citiesL; 
	let cellExt=[];
	citiesL=tableau.insertRow(ligneS.length-1);
	citiesL.className='cities ligne';
	citiesL.id='Noir';
	cellExt[0]=citiesL.insertCell(-1);
	cellExt[0].id='Noir0';
	input=document.createTextNode('Cities');
	cellExt[0].appendChild(input);
	for(let j=1; (j<=3)||(j<=nbreJoueur);j++){
		cellExt[j]=citiesL.insertCell(-1);
		input=document.createElement('input');
		input.type='number';
		input.id='cities'+j;
		input.className= 'scoreJoueur'+j;
		cellExt[j].appendChild(input);
	}
}else{
	for(let k=0; k<ligneS.length;k++){
		if(ligneS[k].id==='Noir'){
		tableau.deleteRow(k);
		updateScore();
		}
	}
}
}
function extensionArmada(){
	if( armada.checked === true){
		let Armada; 
	let cellExt=[];
	armadaL=tableau.insertRow(ligneS.length-1);
	armadaL.className='armada ligne';
	armadaL.id='Turquoise';
	cellExt[0]=armadaL.insertCell(-1);
	cellExt[0].id='Turquoise0';
	cellExt[0].innerHTML='Armada &#9973 &#127965;&#65039';
	input=document.createTextNode('Armada &#9973 &#127965');
	for(let j=1; (j<=3)||(j<=nbreJoueur);j++){
		cellExt[j]=armadaL.insertCell(-1);
		input=document.createElement('input');
		input.type='number';
		input.id='Armada'+j;
		input.className= 'scoreJoueur'+j;
		cellExt[j].appendChild(input);
	}
}else{
	for(let k=0; k<ligneS.length;k++){
		if(ligneS[k].id==='Turquoise'){
		tableau.deleteRow(k);
		updateScore();
		}
	}
}
}
function extensionBabel(){
		if( babel.checked === true){
			merveille.innerHTML='Merveille &#127983; &#127984; \n <br>et Babel &#128508;';
		}else{
			merveille.innerHTML='Merveille &#127983; &#127984;';
		}
}