(function(angular) {

  function objectFromXml(xml) {
  	// Create the return object
  	var obj = {};

  	if (xml.nodeType == 1) { // element
  		// do attributes
  		if (xml.attributes.length > 0) {
  			for (var j = 0; j < xml.attributes.length; j++) {
  				var attribute = xml.attributes.item(j);
  				obj[attribute.nodeName] = attribute.nodeValue;
  			}
      }
  	} else if (xml.nodeType == 2 || xml.nodeType == 3) { // text
  		obj = xml.nodeValue;
  	}

  	// do children
  	if (xml.hasChildNodes() && xml.nodeType != 2) {
  		for(var i = 0; i < xml.childNodes.length; i++) {
  			var item = xml.childNodes.item(i);
  			var nodeName = item.nodeName;
  			if (typeof(obj[nodeName]) == "undefined") {
  				obj[nodeName] = fromXml(item);
  			} else {
  				if (typeof(obj[nodeName].push) == "undefined") {
  					var old = obj[nodeName];
  					obj[nodeName] = [];
  					obj[nodeName].push(old);
  				}
  				obj[nodeName].push(fromXml(item));
  			}
  		}
  	}
  	return obj;
  }

  function objectToXml(name, obj) {
    var xmlString = '', i;
    if(!(obj instanceof Array || obj instanceof Function || obj instanceof Object)) {
      return '<'+name+'>'+obj+'</'+name+'>';
    }

    if(obj instanceof Date) {
      return '<'+name+'>'+obj+'</'+name+'>';
    } else if(obj instanceof Array) {
      for(i=0; i<obj.length; i++) {
        xmlString += objectToXml(name, obj[i]);
      }
    } else if(obj instanceof Object) {
      xmlString = '<'+name+'>';
      for(i in obj) {
        xmlString += objectToXml(i, obj[i]);
      }
      xmlString += '</'+name+'>';
    }

    return xmlString;
  }

  function parseXml(xmlString) {
    var xmlDoc, parser;
    if (window.DOMParser) {
      parser=new DOMParser();
      xmlDoc=parser.parseFromString(xmlString,"text/xml");
    } else {// Internet Explorer
      xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async=false;
      xmlDoc.loadXML(xmlString);
    }
    return xmlDoc;
  }

  function xmlToString(xml) {
    var xmlString;
    //IE
    if (window.ActiveXObject){
        xmlString = xml.xml;
    }
    // code for Mozilla, Firefox, Opera, etc.
    else{
        xmlString = (new XMLSerializer()).serializeToString(xml);
    }
    return xmlString;
  }

  angular.module("AP.utility")
    .service("$convertions", [function() {
      this.objectFromXml = objectFromXml;
      this.objectToXml = objectToXml;
      this.parseXml = parseXml;
      this.xmlToString = xmlToString;
    }]);

})(angular);
