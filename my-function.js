exports.handler = async (event) => {
     // TODO implement     
	if(event.httpMethod === 'GET') {
          if(event && event.queryStringParameters && event.queryStringParameters.keyword){
             console.log("Received keyword: " + event.queryStringParameters.keyword);
             let key = event.queryStringParameters.keyword
             let responseBody = "Kayli Garwood says " + key
             return {
                 statusCode :200,
                 body: JSON.stringify(responseBody)
             }         
}          
	
	if (event && (!event.queryStringParameters || !event.queryStringParameters.keyword)) {
             return {
                  statusCode:400,
                  body:JSON.stringify({error:"No parameter entered. Please try again."})             
			}         
		}     
	} 
};
