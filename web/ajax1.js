
/*
 * 
 * @returns a new XMLHttpRequest object. 
 * If the browser doesn't support it, the the function returns false
 */
function newXMLHttpRequest() {

  var xmlreq = false;

  // Create XMLHttpRequest object in non-Microsoft browsers
  if (window.XMLHttpRequest) {
    xmlreq = new XMLHttpRequest();

  } else if (window.ActiveXObject) {

    try {
      // Try to create XMLHttpRequest in later versions
      // of Internet Explorer

      xmlreq = new ActiveXObject("Msxml2.XMLHTTP");
      
    } catch (e1) {

      // Failed to create required ActiveXObject
      
      try {
        // Try version supported by older versions
        // of Internet Explorer
      
        xmlreq = new ActiveXObject("Microsoft.XMLHTTP");

      } catch (e2) {

        // Unable to create an XMLHttpRequest by any means
        xmlreq = false;
      }
    }
  }

return xmlreq;
}

 /*The readyState property of XMLHttpRequest is a numeric value that gives 
  * the status of the request's lifecycle. It changes from 0 for "uninitialized" 
  * through to 4 for "complete."
	* Returns a function that waits for the specified XMLHttpRequest
	* to complete, then passes it XML response to the given handler function.
  * req - The XMLHttpRequest whose state is changing
  * responseXmlHandler - Function to pass the XML response to
  */
 /*
 function getReadyStateHandler(req, responseXmlHandler) {

   // Return an anonymous function that listens to the XMLHttpRequest instance
   return function () {

     // If the request's status is "complete"
     if (req.readyState == 4) {
       
       // Check that we received a successful response from the server
       if (req.status == 200) {

         // Pass the XML payload of the response to the handler function.
         responseXmlHandler(req.responseXML);
        

       } else {

         // An HTTP problem has occurred
         alert("HTTP error "+req.status+": "+req.statusText);
       }
     }
   }
 }
 */

function getReadyStateHandler(req, responseJSONhandler) {

   // Return an anonymous function that listens to the XMLHttpRequest instance
   return function () {

     // If the request's status is "complete"
     if (req.readyState == 4) {
       
       // Check that we received a successful response from the server
       if (req.status == 200) {

         // Pass the JSON payload of the response to the handler function.
         responseJSONhandler(req.responseText);
        

       } else {

         // An HTTP problem has occurred
         alert("HTTP error "+req.status+": "+req.statusText);
       }
     }
   }
 }