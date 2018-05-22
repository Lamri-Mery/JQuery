$(function(){
// Quand le document est prêt
	var myScrollTop = 0;
	// myScrollTop est égale à 0

	$(window).scroll(function() {
		// Sélectionne la page, quand tu scroll
		/* Act on the event */
		var montop = $(this).scrollTop();
		//montop est égale à cette élément, quand tu obtiens la position verticale actuelle de la barre de défilement quand tu scroll
			
			console.log(montop);
			
			if(myScrollTop < montop){
			// Si myScrollTop est plus petit que montop
				$('p').css('color','red');
				// Sélectionne les paragraphes, prend leur css et change la couleur en rouge
			}else{
			// Ou autre
				$('p').css('color','black');
				// Sélectionne les paragraphes, prend leur css et change la couleur en sinon
			}
			myScrollTop = montop
			// J'indique myScrollTop est égale à la position verticale actuelle	
	});
});