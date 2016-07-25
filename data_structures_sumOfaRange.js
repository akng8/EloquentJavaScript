var range = function( start , end , action) {
  if( action == null)  {
    action = 1;
  }
  var data = [];
  
  if(action > 0) {
    for(var i = start ; i <= end ; i+=action ) {
    	data.push(i);
    }
  }
  else if ( action < 0)  {
	for ( var d = start; d >= end ; d+=action) {
      data.push(d);
    }
  }
  return data;
}

var sum = function(data) {
  var total = 0;
  for(var i = 0 ; i < data.length ; i ++ ) {
    total = total + data[i];
	}
  return total;
}
