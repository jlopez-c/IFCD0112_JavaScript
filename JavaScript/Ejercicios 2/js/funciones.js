/* 
	Función que genera un número aleatorio entre el numMinimo y numMaximo.
*/
function genAleatorio( numMinimo, numMaximo ) {
	var numAleat = Math.floor( Math.random() * ( numMaximo - numMinimo + 1 ) + numMinimo );
	
	return numAleat;
}

/* 
	Función retorna el número máximo de un array.
*/
function getMax( arTmp ) {
	var i;
	var numMax; // Es la var. que contiene el número máximo.
	numMax = arTmp[ 0 ];
	 
	for ( i = 0; i < arTmp.length; i++ ) {
		if ( arTmp[ i ] > numMax ) {
			numMax = arTmp[ i ];
		}
	}
	
	return numMax;
}

/* 
	Función que calcula la media de un array numérico.
*/
function getMediaArray( arTmp ) {
	var suma = 0;
	var i;
	var media;
	
	for ( i = 0; i < arTmp.length; i++ ) {
		suma+= arTmp[ i ];
	}
	media = suma / arTmp.length;
	
	return media;
}

/* 
	Función retorna el número mínimo de un array.
*/
function getMin( arTmp ) {
	var i;
	var numMin; // Es la var. que contiene el número máximo.
	numMin = arTmp[ 0 ];
	 
	for ( i = 0; i < arTmp.length; i++ ) {
		if ( arTmp[ i ] < numMin ) {
			numMin = arTmp[ i ];
		}
	}
	
	return numMin;
}

