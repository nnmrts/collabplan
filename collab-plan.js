/*
CHANGELOG:

alpha 3:
linien die vom mittelpunkt ausgehen sind jetzt ENDLICH farbig und dicker und so und linien auf dem zweiten kreis haben andere farbe (ich hab den fucking source code in der library umändern müssen, pfff, das war langwierig)
changelog erstellt
sido erstmal entfernt, weil alles viel zu langsam ist oida
wieder hinzugefügt, weils doch scheißegal ist
wieder weggegeben, weil keinen bock, alle jahreszahlen zu seinen features rauszusuchen
jahreszahlen zu jedem feature eingetragen...alter...ich bin tot...das traurigste ist ja, dass man die gerade gemachte arbeit gar nicht sieht, also man sieht gar keinen unterschied auf der website...aber nur derweil, da kommt was ganz ganz großes bald, in version alpha 4 oder so hoffentlich
- 9.7.16 - 10.7.16

alpha 2: alles bissl verschönert
log bissl verändert
popup, about und hilfe hinzugefügt und endlich geschafft das rapperbild da rechts über den features anzuzeigen
das erste mal einen versionsnamen ausgedacht und alpha 2 für richtig empfunden
- irgendwann zwischen 23.6.16 - 9.7.16

alpha 1: grundcode geschrieben und paar rapper als test schon mal eingefügt (alligatoah, bartek, edgar wasser, fatoni, k.i.z., kaas, maeckes, sido, tua, weekend)
- 23.6.16
*/



var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
  }
};

function init(){
	var zeitraum = document.getElementById('zeitraum');

	noUiSlider.create(zeitraum, {
		start: [ 2005, 2010 ], // Handle start position
		step: 1, // Slider moves in increments of '10'
		margin: 0, // Handles must be more than '20' apart
		connect: true, // Display a colored bar between the handles
		direction: 'rtl',
		format: wNumb({
			decimals: 0
		}),
		orientation: 'vertical', // Orient the slider vertically
		behaviour: 'tap-drag', // Move handle on tap, bar is draggable
		range: { // Slider can select '0' to '100'
			'min': 2005,
			'max': 2010
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 2
		}
	});
	jahr1text = document.getElementById('jahr1');
	jahr2text = document.getElementById('jahr2');
	function leftValue ( handle ) {
		return handle.parentElement.style.left;
	}
	
	var lowerValue = document.getElementById('jahr1'),
	lowerOffset = document.getElementById('lower-offset'),
	upperValue = document.getElementById('jahr2'),
	upperOffset = document.getElementById('upper-offset'),
	handles = zeitraum.getElementsByClassName('noUi-handle');
	
	// When the slider value changes, update the input and span
	zeitraum.noUiSlider.on('update', function ( values, handle ) {
		if ( !handle ) {
			lowerValue.innerHTML = values[handle];
		} else {
			upperValue.innerHTML = "- " + values[handle];
		}
	});
	
	zeitraum.noUiSlider.on('end', function(){
		jahr1 = zeitraum.noUiSlider.get()[0];
		jahr2 = zeitraum.noUiSlider.get()[1];
		if (jahr1 == 1995) {
			if (jahr2 == 1996) {
				jsontemp = $.extend( true, json1995, json1996 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 1997) {
				jsontemp = $.extend( true, json1995, json1996, json1997 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 1998) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 1999) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2000) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2001) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2002) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2003) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2004) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2005) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json1995, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 1996) {
			if (jahr2 == 1997) {
				jsontemp = $.extend( true, json1996, json1997 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 1998) {
				jsontemp = $.extend( true, json1996, json1997, json1998 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 1999) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2000) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2001) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2002) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2003) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2004) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2005) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json1996, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 1997) {
			if (jahr2 == 1998) {
				jsontemp = $.extend( true, json1997, json1998 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 1999) {
				jsontemp = $.extend( true, json1997, json1998, json1999 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2000) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2001) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2002) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2003) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2004) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2005) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true,  json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json1997, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 1998) {
			if (jahr2 == 1999) {
				jsontemp = $.extend( true, json1998, json1999 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2000) {
				jsontemp = $.extend( true, json1998, json1999, json2000 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2001) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2002) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2003) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2004) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2005) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json1998, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 1999) {
			if (jahr2 == 2000) {
				jsontemp = $.extend( true, json1999, json2000 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2001) {
				jsontemp = $.extend( true, json1999, json2000, json2001 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2002) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2003) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2004) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2005) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json1999, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2000) {
			if (jahr2 == 2001) {
				jsontemp = $.extend( true, json2000, json2001 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2002) {
				jsontemp = $.extend( true, json2000, json2001, json2002 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2003) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2004) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2005) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2000, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2001) {
			if (jahr2 == 2002) {
				jsontemp = $.extend( true, json2001, json2002 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2003) {
				jsontemp = $.extend( true, json2001, json2002, json2003 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2004) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2005) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2001, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2002) {
			if (jahr2 == 2003) {
				jsontemp = $.extend( true, json2002, json2003 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2004) {
				jsontemp = $.extend( true, json2002, json2003, json2004 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2005) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2002, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2003) {
			if (jahr2 == 2004) {
				jsontemp = $.extend( true, json2003, json2004 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2005) {
				jsontemp = $.extend( true, json2003, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2003, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2004) {
			if (jahr2 == 2005) {
				jsontemp = $.extend( true, json2004, json2005 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2006) {
				jsontemp = $.extend( true, json2004, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2004, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2005) {
			if (jahr2 == 2006) {
				jsontemp = $.extend( true, json2005, json2006 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2007) {
				jsontemp = $.extend( true, json2005, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2005, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2006) {
			if (jahr2 == 2007) {
				jsontemp = $.extend( true, json2006, json2007 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2008) {
				jsontemp = $.extend( true, json2006, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2006, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2007) {
			if (jahr2 == 2008) {
				jsontemp = $.extend( true, json2007, json2008 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2009) {
				jsontemp = $.extend( true, json2007, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2007, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2008) {
			if (jahr2 == 2009) {
				jsontemp = $.extend( true, json2008, json2009 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2008, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2008, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2009) {
			if (jahr2 == 2010) {
				jsontemp = $.extend( true, json2009, json2010 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2009, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2009, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2009, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2009, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2009, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2009, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2010) {
			if (jahr2 == 2011) {
				jsontemp = $.extend( true, json2010, json2011 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2010, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2010, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2010, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2010, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2010, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2010, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2011) {
			if (jahr2 == 2012) {
				jsontemp = $.extend( true, json2011, json2012 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2011, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2011, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2011, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2011, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2011, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2011, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2012) {
			if (jahr2 == 2013) {
				jsontemp = $.extend( true, json2012, json2013 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2012, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2012, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2012, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2012, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2012, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2012, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2013) {
			if (jahr2 == 2014) {
				jsontemp = $.extend( true, json2013, json2014 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2013, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2013, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2013, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2013, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2013, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2013, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2014) {
			if (jahr2 == 2015) {
				jsontemp = $.extend( true, json2014, json2015 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2014, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2014, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2014, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2014, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2014, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2015) {
			if (jahr2 == 2016) {
				jsontemp = $.extend( true, json2015, json2016 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2015, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2015, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2015, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2015, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2016) {
			if (jahr2 == 2017) {
				jsontemp = $.extend( true, json2016, json2017 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2016, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2016, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2016, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2017) {
			if (jahr2 == 2018) {
				jsontemp = $.extend( true, json2017, json2018 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2017, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2017, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2018) {
			if (jahr2 == 2019) {
				jsontemp = $.extend( true, json2018, json2019 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
			else if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2018, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		else if (jahr1 == 2019) {
			if (jahr2 == 2020) {
				jsontemp = $.extend( true, json2019, json2020 );
				rgraph.loadJSON(jsontemp, 8);
				rgraph.refresh();
			}
		}
		jsontext = JSON.stringify(jsontemp);
		console.log(jsontext);
	});
    //init data
    //If a node in this JSON structure
    //has the "$type" or "$dim" parameters
    //defined it will override the "type" and
    //"dim" parameters globally defined in the
    //RGraph constructor.
	
	json1995 = [
		
	];
	
	json1996 = [
		
	];
		
	json1997 = [
		
	];
	
	json1998 = [
		
	];
	
	json1999 = [
		
	];
	
	json2000 = [
		
	];
	
	json2001 = [
		
	];

	json2002 = [
		
	];

	json2003 = [
		
	];

	json2004 = [
		
	];
	
	json2005 = [
		// ----- RAPPER -----
		// MAECKES
		{
			"id": "Maeckes",
			"name": "Maeckes",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [ ]
		},
		// BARTEK
		{
			"id": "Bartek",
			"name": "Bartek",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// EDGAR WASSER
		{
			"id": "Edgar Wasser",
			"name": "Edgar Wasser",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// WEEKEND
		{
			"id": "Weekend",
			"name": "Weekend",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// KAAS <><><>
		{
			"id": "Kaas",
			"name": "Kaas",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// FATONI
		{
			"id": "Fatoni",
			"name": "Fatoni",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// ALLIGATOAH
		{
			"id": "Alligatoah",
			"name": "Alligatoah",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// K.I.Z. <><><>
		{
			"id": "K.I.Z.",
			"name": "K.I.Z.",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Reko MC",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Spleen",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// TUA <><><>
		{
			"id": "Tua",
			"name": "Tua",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Sucuk Ufuk",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vasee",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
	];
	
	json2006 = [
		// ----- RAPPER -----
		// MAECKES
		{
			"id": "Maeckes",
			"name": "Maeckes",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [ ]
		},
		// BARTEK
		{
			"id": "Bartek",
			"name": "Bartek",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// EDGAR WASSER
		{
			"id": "Edgar Wasser",
			"name": "Edgar Wasser",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// WEEKEND
		{
			"id": "Weekend",
			"name": "Weekend",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// KAAS
		{
			"id": "Kaas",
			"name": "Kaas",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// FATONI
		{
			"id": "Fatoni",
			"name": "Fatoni",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// ALLIGATOAH <><><>
		{
			"id": "Alligatoah",
			"name": "Alligatoah",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "ATM",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "G-o'style",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Hassler Scrub",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "King Malice",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MC Alfredo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MC Komplex",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Selbstjustizz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Talent",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tobi-Tait",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// K.I.Z. <><><>
		{
			"id": "K.I.Z.",
			"name": "K.I.Z.",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Atek",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Massimo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Rhymin Simon",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tua",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// TUA <><><>
		{
			"id": "Tua",
			"name": "Tua",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "K.I.Z.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kaas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
	];

	json2007 = [
		// ----- RAPPER -----
		// MAECKES <><><>
		{
			"id": "Maeckes",
			"name": "Maeckes",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Marsimoto",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// BARTEK
		{
			"id": "Bartek",
			"name": "Bartek",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// EDGAR WASSER
		{
			"id": "Edgar Wasser",
			"name": "Edgar Wasser",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// WEEKEND
		{
			"id": "Weekend",
			"name": "Weekend",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// KAAS
		{
			"id": "Kaas",
			"name": "Kaas",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// FATONI
		{
			"id": "Fatoni",
			"name": "Fatoni",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// ALLIGATOAH <><><>
		{
			"id": "Alligatoah",
			"name": "Alligatoah",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Dude",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "HD",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "ParaDogg",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Spittfaia",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tobi-Tait",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// K.I.Z. <><><>
		{
			"id": "K.I.Z.",
			"name": "K.I.Z.",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Boba Fettt",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Frauenarzt",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MC Motherfucker",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mach One",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Massimo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tony D",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// TUA <><><>
		{
			"id": "Tua",
			"name": "Tua",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Kaas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Samy Deluxe",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sucuk Ufuk",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
	];

	json2008 = [
		// ----- RAPPER -----
		// MAECKES <><><>
		{
			"id": "Maeckes",
			"name": "Maeckes",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Laas Unltd.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Bartek",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kaas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vega",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Germany",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Phreaky Flave",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jifusi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Franky Kubrick",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kid Kobra",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Ercandize",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MoTrip",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Caput",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Favorite",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Olli Banjo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Amar",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Affenboss",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Biztram",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Casper",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "E-Rich",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// BARTEK <><><>
		{
			"id": "Bartek",
			"name": "Bartek",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vega",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Germany",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Phreaky Flave",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jifusi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Franky Kubrick",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kid Kobra",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Ercandize",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MoTrip",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Caput",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Favorite",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Olli Banjo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Amar",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Maeckes",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Laas Unltd.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// EDGAR WASSER
		{
			"id": "Edgar Wasser",
			"name": "Edgar Wasser",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// WEEKEND
		{
			"id": "Weekend",
			"name": "Weekend",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// KAAS <><><>
		{
			"id": "Kaas",
			"name": "Kaas",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Amar",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Bartek",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Caput",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Dervizz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Ercandize",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Favorite",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Franky Kubrick",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Germany",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jifusi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kid Kobra",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Laas Unltd.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MoTrip",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Olli Banjo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Phreaky Flave",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vega",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// FATONI
		{
			"id": "Fatoni",
			"name": "Fatoni",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// ALLIGATOAH <><><>
		{
			"id": "Alligatoah",
			"name": "Alligatoah",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Mighty Morris",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Philliz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Prayamond",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Selbstjustizz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Snew",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tobi-Tait",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// K.I.Z. <><><>
		{
			"id": "K.I.Z.",
			"name": "K.I.Z.",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Drama Kuba",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MC Bogy",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// TUA <><><>
		{
			"id": "Tua",
			"name": "Tua",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Emory",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "K.I.Z.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vega",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
	];

	json2009 = [
		// ----- RAPPER -----
		// MAECKES
		{
			"id": "Maeckes",
			"name": "Maeckes",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [ ]
		},
		// BARTEK
		{
			"id": "Bartek",
			"name": "Bartek",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// EDGAR WASSER
		{
			"id": "Edgar Wasser",
			"name": "Edgar Wasser",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// WEEKEND
		{
			"id": "Weekend",
			"name": "Weekend",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// KAAS <><><>
		{
			"id": "Kaas",
			"name": "Kaas",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// FATONI
		{
			"id": "Fatoni",
			"name": "Fatoni",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// ALLIGATOAH
		{
			"id": "Alligatoah",
			"name": "Alligatoah",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// K.I.Z. <><><>
		{
			"id": "K.I.Z.",
			"name": "K.I.Z.",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Corus 86",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "King Orgasmus One",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mr. Hyde",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sido",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// TUA <><><>
		{
			"id": "Tua",
			"name": "Tua",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vasee",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
	];

	json2010 = [
		// ----- RAPPER -----
		// MAECKES <><><>
		{
			"id": "Maeckes",
			"name": "Maeckes",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Bartek",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kaas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tua",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// BARTEK <><><>
		{
			"id": "Bartek",
			"name": "Bartek",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Maeckes",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// EDGAR WASSER
		{
			"id": "Edgar Wasser",
			"name": "Edgar Wasser",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// WEEKEND
		{
			"id": "Weekend",
			"name": "Weekend",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// KAAS <><><>
		{
			"id": "Kaas",
			"name": "Kaas",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Amar",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Curse",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Ercandize",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Fiva",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Franky Kubrick",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kitty Kat",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MoTrip",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Olli Banjo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Patrick mit Absicht",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sinan",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tone",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tua",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vega",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// FATONI
		{
			"id": "Fatoni",
			"name": "Fatoni",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// ALLIGATOAH <><><>
		{
			"id": "Alligatoah",
			"name": "Alligatoah",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Philliz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Testo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// K.I.Z.
		{
			"id": "K.I.Z.",
			"name": "K.I.Z.",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": []
		},
		// TUA <><><>
		{
			"id": "Tua",
			"name": "Tua",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Amar",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Bartek",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Chakuza",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Curse",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "D-Bo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Ercandize",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Fiva",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Franky Kubrick",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "JokA",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kaas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kitty Kat",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Maeckes",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MoTrip",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Patrick mit Absicht",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Silla",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sinan",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tarek K.I.Z.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tone",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vasee",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
	];

	json2011 = [			];

	json2012 = [			];

	json2013 = [			];

	json2014 = [			];

	json2015 = [			];

	json2016 = [			];

	json2017 = [			];

	json2018 = [			];

	json2019 = [			];

	json2020 = [			];
	
	json2021 = [
		
	];
	
    json = [
		// ----- RAPPER -----
		// MAECKES
		{
			"id": "Maeckes",
			"name": "Maeckes",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Gerard",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Laas Unltd.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Edgar Wasser",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Bartek",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kaas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tua",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Marteria",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Enoq",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Fatoni",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vega",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Germany",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Phreaky Flave",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jifusi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Franky Kubrick",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kid Kobra",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Ercandize",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MoTrip",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Caput",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Favorite",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Olli Banjo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Amar",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Affenboss",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Biztram",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Casper",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "E-Rich",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Marsimoto",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "JAW",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				
			]
		},
		// BARTEK
		{
			"id": "Bartek",
			"name": "Bartek",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Palina Power",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vega",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Germany",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Phreaky Flave",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jifusi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Franky Kubrick",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kid Kobra",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Ercandize",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MoTrip",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Caput",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Favorite",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Olli Banjo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Amar",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Maeckes",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Denyo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "ASD",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jan Delay",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Megaloh",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Laas Unltd.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sido",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Cro",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Celo & Abdi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008":
"false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Prinz Pi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Afrob",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Teesy",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// EDGAR WASSER
		{
			"id": "Edgar Wasser",
			"name": "Edgar Wasser",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Johnny Rakete",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Morlockk Dilemma",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Marz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "LUX",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "true",
						"$2014": "true",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Cap Kendricks",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Juse Ju",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Gossenboss mit Zett",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tufu",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Fatoni",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "true",
						"$2014": "true",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sickless",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Dobbo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Emkay",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Weekend",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "true",
						"$2014": "true",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "E-Rich",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Maeckes",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "3Plusss",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Slowy",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Dr. Lucs",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jay",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Prezident",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Schote",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// WEEKEND
		{
			"id": "Weekend",
			"name": "Weekend",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "3Plusss",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "257ers",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "4Tune",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Alligatoah",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Arbok48",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "AudioMax",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Battleboi Basti",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "true",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Crystal F",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Daniel Gun",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Djin",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Dobbo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "true",
						"$2013": "true",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Donetasy",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Duzoe",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Edgar Wasser",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "true",
						"$2014": "true",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Emkay",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "true",
						"$2013": "true",
						"$2014": "true",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Fatoni",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "FiST",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Gold Roger",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Großmaul",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Illoyal",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jephza",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Johnzen",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kaas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kex Kuhl",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Laca",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Lakmann",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Lance Butters",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mach One",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Marz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Meister Elch",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mikzn 70",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Milo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mr. Mike",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Naya Isso",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Nikiz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Olson",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Pat Riot",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Patrick mit Absicht",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Pimf",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Rako",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Rockstah",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Schote",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Schwartz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Serious Dan",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sickless",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sido",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sime",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Spello",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sudden",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Timi Hendrix",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Veedel Kaztro",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// KAAS
		{
			"id": "Kaas",
			"name": "Kaas",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Amar",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Bartek",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Caput",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Curse",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Dervizz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Ercandize",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Favorite",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Fiva",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Franky Kubrick",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Germany",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jifusi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kid Kobra",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kitty Kat",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Laas Unltd.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MoTrip",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Olli Banjo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Patrick mit Absicht",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Phreaky Flave",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Schwesta Ewa",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sinan",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tone",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tua",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vega",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Wandam",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// FATONI
		{
			"id": "Fatoni",
			"name": "Fatoni",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "3Plusss",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Audio88",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Audio88 & Yassin",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Danger Dan",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Dexter",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Edgar Wasser",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "true",
						"$2014": "true",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Enoq",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Felix Brummer",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Johnny Rakete",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Juse Ju",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Koljah",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kryptik Joe",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "LUX",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Maeckes",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Marz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Panik Panzer",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sir Serch",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// ALLIGATOAH
		{
			"id": "Alligatoah",
			"name": "Alligatoah",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "ATM",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Arbok48",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "AudioMax",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Battleboi Basti",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Blumentopf",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Crystal F",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Curse",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Daniel Gun",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Dendemann",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Dima Richman",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "DNP",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Dude",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "G-o'style",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "HD",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Hassler Scrub",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Illoyal",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jamal",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jan Böhmermann",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jan Delay",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Johnzen",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "King Malice",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kollegah",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MC Alfredo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MC Komplex",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Meister Elch",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mighty Morris",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Morlockk Dilemma",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Nikiz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Olson",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Paff Meisi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "ParaDogg",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Patrick mit Absicht",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Philliz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Pimpulsiv",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Prayamond",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Prinz Pi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Rako",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Rockstah",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Samy Deluxe",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Schwartz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Selbstjustizz",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Serious Dan",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Shneezin 257",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sime",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Smudo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Snew",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Spello",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Spittfaia",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sudden",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Talent",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Testo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Timi Hendrix",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "true",
						"$2014": "true",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tobi-Tait",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Weekend",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// K.I.Z.
		{
			"id": "K.I.Z.",
			"name": "K.I.Z.",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Akes",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Atek",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Audio88 & Yassin",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Basstard",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Boba Fettt",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Bärbel",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kannibal Rob",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Casper",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Corus 86",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Defi",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Drama Kuba",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Felix Brummer",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Flexis",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Frauenarzt",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jan Delay",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jesse MC",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Jimi Blu",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "June",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kalusha",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "King Orgasmus One",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MC Bogy",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MC Bomber",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MC Motherfucker",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mach One",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Manny Marc",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Massimo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mr. Hyde",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Reko MC",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Rhymin Simon",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Said",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Schnicki Schnacki Schnura",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Shacke One",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "true",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sido",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Smoky",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Spleen",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tony D",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tua",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vork",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Wilson Gonzales",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// TUA
		{
			"id": "Tua",
			"name": "Tua",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Amar",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Bartek",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Chakuza",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Chefket",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "true",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Curse",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "true",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "D-Bo",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Emory",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Ercandize",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Fiva",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Franky Kubrick",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "JokA",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "K.I.Z.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kaas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "true",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kitty Kat",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Kool Savas",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Maeckes",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "true",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "MoTrip",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "true",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Mädness",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "true",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Patrick mit Absicht",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Samy Deluxe",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Silla",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sinan",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Sucuk Ufuk",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "true",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tarek K.I.Z.",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Tone",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vasee",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "true",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "true",
						"$2010": "true",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
				{
					"nodeTo": "Vega",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "true",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		// ALPA GUN
		{
			"id": "Alpa Gun",
			"name": "Alpa Gun",
			"data": {
				"some other key": "some other value"
			},
			"adjacencies": [
				{
					"nodeTo": "Sido",
					"data": {
						"$lineWidth": 1.1,
						"$1995": "false",
						"$1996": "false",
						"$1997": "false",
						"$1998": "false",
						"$1999": "false",
						"$2000": "false",
						"$2001": "false",
						"$2002": "false",
						"$2003": "false",
						"$2004": "false",
						"$2005": "false",
						"$2006": "false",
						"$2007": "false",
						"$2008": "false",
						"$2009": "false",
						"$2010": "false",
						"$2011": "false",
						"$2012": "false",
						"$2013": "false",
						"$2014": "false",
						"$2015": "false",
						"$2016": "false",
						"$2017": "false",
						"$2018": "false",
						"$2019": "false",
						"$2020": "false",
					}
				},
			]
		},
		
		//	____ _ _  _ ____ ____ ___ ____ ____ ____ ____ _  _ ____    ____ ____ ___  ___  ____ ____ 
		//	|___ | |\ | | __ |___  |  |__/ |__| | __ |___ |\ | |___    |__/ |__| |__] |__] |___ |__/ 
		//	|___ | | \| |__] |___  |  |  \ |  | |__] |___ | \| |___    |  \ |  | |    |    |___ |  \ 
		
		// ALLIGATOAH
		// BARTEK
		// EDGAR WASSER
		// FATONI
		// K.I.Z.
		// KAAS
		// MAECKES
		// SIDO
		// TUA
		// WEEKEND
		
		// ----- KEINE RAPPER -----
		// ANDREAS BOURANI
		//{
		//	"id": "Andreas Bourani",
		//	"name": "Andreas Bourani",
		//	"data": {
		//		"some other key": "some other value"
		//	},
		//	"adjacencies": [
		//		{
		//			"nodeTo": "Sido",
		//			"data": {
		//				"$lineWidth": 1.1,
		//				"$1995": "false",
		//				"$1996": "false",
		//				"$1997": "false",
		//				"$1998": "false",
		//				"$1999": "false",
		//				"$2000": "false",
		//				"$2001": "false",
		//				"$2002": "false",
		//				"$2003": "false",
		//				"$2004": "false",
		//				"$2005": "false",
		//				"$2006": "false",
		//				"$2007": "false",
		//				"$2008": "false",
		//				"$2009": "false",
		//				"$2010": "false",
		//				"$2011": "false",
		//				"$2012": "false",
		//				"$2013": "false",
		//				"$2014": "false",
		//				"$2015": "false",
		//				"$2016": "false",
		//				"$2017": "false",
		//				"$2018": "false",
		//				"$2019": "false",
		//				"$2020": "false",
		//				"$color": "#ff0064",
		//			}
		//		},
		//	]
		//},
		// ----- PRODUCER -----
		// TAI JASON
		//{
		//	"id": "Tai Jason",
		//	"name": "Tai Jason",
		//	"data": {
		//		"some other key": "some other value"
		//	},
		//	"adjacencies": [
		//		{
		//			"nodeTo": "Sido",
		//			"data": {
		//				"$lineWidth": 1.1,
		//				"$1995": "false",
		//				"$1996": "false",
		//				"$1997": "false",
		//				"$1998": "false",
		//				"$1999": "false",
		//				"$2000": "false",
		//				"$2001": "false",
		//				"$2002": "false",
		//				"$2003": "false",
		//				"$2004": "false",
		//				"$2005": "false",
		//				"$2006": "false",
		//				"$2007": "false",
		//				"$2008": "false",
		//				"$2009": "false",
		//				"$2010": "false",
		//				"$2011": "false",
		//				"$2012": "false",
		//				"$2013": "false",
		//				"$2014": "false",
		//				"$2015": "false",
		//				"$2016": "false",
		//				"$2017": "false",
		//				"$2018": "false",
		//				"$2019": "false",
		//				"$2020": "false",
		//				"$color": "grey",
		//			}
		//		},
		//	]
		//},
	];
    //end
    //init RGraph
    var rgraph = new $jit.RGraph({
      'injectInto': 'infovis',
      //Optional: Add a background canvas
      //that draws some concentric circles.
      'background': {
        'CanvasStyles': {
          'strokeStyle': '#555',
        }
      },
	  'width': 2500,
	  'height': 2500,
	  'left': '-20%',
	  Navigation: {
	  'enable': true,
	  'panning': true,
	  'zooming': 20,
	  
	  },
        //Nodes and Edges parameters
        //can be overridden if defined in 
        //the JSON input data.
        //This way we can define different node
        //types individually.
        Node: {
            'overridable': true,
			 'alpha': 1,
			 'dim': 0,
			 'width': 0,
			 'height': 0,
        },
        Edge: {
            'overridable': true,
            'color': 'rgba(200, 200, 200, 0.7)',
			'type': 'line',
			'lineWidth': 0.3,
        },
		Label: {
            'overridable': true,
			'type': 'HTML',
        },
		NodeStyles: {  
			'enable': true,
			'type': 'HTML',
			'stylesHover': {
			'color': '#ffffff',
		},  
		duration: 600
		},
        //Set polar interpolation.
        //Default's linear.
        interpolation: 'polar',
        //Change the transition effect from linear
        //to elastic.
        transition: $jit.Trans.linear,
        //Change other animation parameters.
        duration: 2000,
        fps: 30,
        //Change father-child distance.
        levelDistance: 200,
        //This method is called right before plotting
        //an edge. This method is useful to change edge styles
        //individually.
        onBeforePlotLine: function(adj, node) {
            if (node._depth===0) {  
                adj.data.$color = "rgba(255, 255, 100, 1)";  
                adj.data.$lineWidth = 2;  
            }
			else if (adj.nodeFrom._depth===1 && adj.nodeTo._depth===0) {
				adj.data.$color = "rgba(255, 255, 100, 1)";  
                adj.data.$lineWidth = 2;  
			}
			else if (adj.nodeFrom._depth===1 && adj.nodeTo._depth===1) {
				adj.data.$color = "rgba(153, 167, 238, 0.5)";
				adj.data.$lineWidth = 1.5;
			}
			else if (node._depth>=2 && adj.nodeTo._depth>=3) {
				adj.data.$color = "rgba(200, 200, 200, 0.2)";
				adj.data.$lineWidth = 0.2;
			}
			else if (node._depth===3 && adj.nodeTo._depth===2) {
				adj.data.$color = "rgba(200, 200, 200, 0.2)";
				adj.data.$lineWidth = 0.2;
			}
			else {  
                delete adj.data.$color;  
                delete adj.data.$lineWidth;  
            } 
		},
		onAfterPlotLine: function(adj) {
		
		},
		onBeforePlotNode: function(node){  
			//add some color to the nodes in the path between the  
			//root node and the selected node.  
			if (node.selected) {  
				node.data.$color = "#ff7";  
			}  
			else {  
				delete node.data.$color;  
				//if the node belongs to the last plotted level  
				if(!node.anySubnode("exist")) {  
					//count children number  
					var count = 0;  
					node.eachSubnode(function(n) { count++; });  
					//assign a node color based on  
					//how many children it has  
					node.data.$color = ['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];                      
				}  
			}  
		}, 
        onBeforeCompute: function(node){
            Log.write("alpha log: centering " + node.name + "...");
            
            //Make right column relations list.
			var html = "<img style='width: 100px;' src='/pumpn/mag/images/" + node.id + ".jpg'></img>";
            html += "<h4 id='title'>" + node.name + "</h4><b>Kollaborationen:</b>";
            html += "<ul id='myUL' style='margin-left: -20px;'>";
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                html += "<li>" + child.name + "</li>";
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
			
			var mylist = $('#myUL');
			var listitems = mylist.children('li').get();
			listitems.sort(function(a, b) {
			   return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
			})
			$.each(listitems, function(idx, itm) { mylist.append(itm); });
        },
        //Add node click handler and some styles.
        //This method is called only once for each node/label crated.
		onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function () {
                rgraph.onClick(node.id, { 
                    hideLabels: false,
                    onComplete: function() {
                        Log.write("alpha log: done");
                    }
                });
            };
            var style = domElement.style;
            style.cursor = 'pointer';
			
			var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / (Math.random() * 5) + 2) + 'px';
			var top = parseInt(style.top);
            style.top = (top - (Math.random() * 5) + 17) + 'px';
        },
        //This method is called when rendering/moving a label.
        //This is method is useful to make some last minute changes
        //to node labels like adding some position offset.
        onPlaceLabel: function(domElement, node){
			node.eachAdjacency(function(adj){
				jahrout = adj.data.$2010;
			});
            var style = domElement.style;
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
			var top = parseInt(style.top);
            style.top = (top - 17) + 'px';
			if (node._depth == 0) {
				style.fontSize = '16px';
			} else if(node._depth == 1){
				style.fontSize = '12px';
			} else if(node._depth == 2){
				style.fontSize = '8px';
			} else {
				style.display = 'none';
				var stype = $jit.id('select-type-remove-nodes');
			}
        }
    });
    //load graph.
    rgraph.loadJSON(json, 2);
    
    //compute positions and plot
    rgraph.refresh();
    //end
    rgraph.controller.onBeforeCompute(rgraph.graph.getNode(rgraph.root));
    Log.write('alpha log: done');
};