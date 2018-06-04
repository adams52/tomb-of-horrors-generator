function show(el, id) {
	$( ".output" ).each(function() {
		$( this ).hide();
	});
	
	$( "li a" ).each(function() {
		$(this).removeClass("active");
	});
	
	$(el).addClass("active");
	$("#" + id).show();
}

var WTF = (function() {

    'use strict';

    /*
      ------------------------------------------------------------

        Constants & variables

      ------------------------------------------------------------
    */

    var RE_QUOTE = /\"([^\"]+)\"/gi;
    var RE_JSON = /\.json$/i;
    var RE_KEY = /[a-z0-9_-]{32,}/i;
    var HUMANS_DATA = "https://spreadsheets.google.com/feeds/list/{key}/1/public/values?alt=json";
	var DWARF_DATA = "https://spreadsheets.google.com/feeds/list/{key}/2/public/values?alt=json";
	var TABAXI_DATA = "https://spreadsheets.google.com/feeds/list/{key}/3/public/values?alt=json";
	var TORTLE_DATA = "https://spreadsheets.google.com/feeds/list/{key}/4/public/values?alt=json";
	var BATIRI_DATA = "https://spreadsheets.google.com/feeds/list/{key}/5/public/values?alt=json";
	var GRUNG_DATA = "https://spreadsheets.google.com/feeds/list/{key}/6/public/values?alt=json";
	var ROLL_DATA = "https://spreadsheets.google.com/feeds/list/{key}/7/public/values?alt=json";
	var NPC_DATA = "https://spreadsheets.google.com/feeds/list/{key}/8/public/values?alt=json";
	var ATMOSPHERE_DATA = "https://spreadsheets.google.com/feeds/list/{key}/9/public/values?alt=json";

    var humans;
	var dwarfData;
	var tabaxiData;
	var tortleData;
	var batiriData;
	var grungData;
	var rollData;
	var npcData;
	var atmosphereData;
    var dom;

    /*
      ------------------------------------------------------------

        Called once initialisation as finished

      ------------------------------------------------------------
    */

    function start() {

        // Enable UI and generate first idea

        initUI();
        generate();
    }

    /*
      ------------------------------------------------------------

        Binds event handlers to control the interface

      ------------------------------------------------------------
    */

    function initUI() {

        $( '.loading' ).remove();

        dom = {
            //generate: $( '#generate' ),
            output: $( '.output' )
        };
		
		$( ".output" ).each(function() {
			$( this ).hide();
		});
		
		$("#mainScreen").show();
		$("#showMainScreen").addClass("active");
        /*dom.generate.click( function() {
            generate();
            return false;
        });*/
    }

    function generate() {
		generateMainScreen(rollData, atmosphereData);
        generateHumanTable(humans, npcData);
		generateTabaxiTable(tabaxiData, npcData);
		generateDwarfTable(dwarfData, npcData);
		generateTortleTable(tortleData, npcData);
		generateBatiriTable(batiriData, npcData);
		generateGrungTable(grungData, npcData);
        setTimeout( showOutput, 0 );
        hideOutput();
    }

    function hideOutput() {

        dom.output.removeClass( 'animate' ).css( 'opacity', 0 );
    }

    function showOutput() {

        dom.output.addClass( 'animate' ).css( 'opacity', 1 );
    }
	

    /*
      ------------------------------------------------------------

        Public API

      ------------------------------------------------------------
    */

    return {

        init: function( data ) {

            if ( !data ) throw data + ' is not a valid corpus';
			
			$.when(
				$.ajax({
					url: HUMANS_DATA.replace( '{key}', data ),
					success: function( data, status, xhr ) {
						humans = parseJSON( data );
					},
					error: function( xhr, errorType, error ) {
						throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
					}
				}),
				
				$.ajax({
					url: DWARF_DATA.replace( '{key}', data ),
					success: function( data, status, xhr ) {
						dwarfData = parseJSON( data );
					},
					error: function( xhr, errorType, error ) {
						throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
					}
				}),
				
				$.ajax({
					url: TABAXI_DATA.replace( '{key}', data ),
					success: function( data, status, xhr ) {
						tabaxiData = parseJSON( data );
					},
					error: function( xhr, errorType, error ) {
						throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
					}
				}),
				
				$.ajax({
					url: TORTLE_DATA.replace( '{key}', data ),
					success: function( data, status, xhr ) {
						tortleData = parseJSON( data );
					},
					error: function( xhr, errorType, error ) {
						throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
					}
				}),
				
				$.ajax({
					url: BATIRI_DATA.replace( '{key}', data ),
					success: function( data, status, xhr ) {
						batiriData = parseJSON( data );
					},
					error: function( xhr, errorType, error ) {
						throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
					}
				}),
				
				$.ajax({
					url: GRUNG_DATA.replace( '{key}', data ),
					success: function( data, status, xhr ) {
						grungData = parseJSON( data );
					},
					error: function( xhr, errorType, error ) {
						throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
					}
				}),
				
				$.ajax({
					url: ROLL_DATA.replace( '{key}', data ),
					success: function( data, status, xhr ) {
						rollData = parseJSON( data );
					},
					error: function( xhr, errorType, error ) {
						throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
					}
				}),
				
				$.ajax({
					url: NPC_DATA.replace( '{key}', data ),
					success: function( data, status, xhr ) {
						npcData = parseJSON( data );
					},
					error: function( xhr, errorType, error ) {
						throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
					}
				}),
				
				$.ajax({
					url: ATMOSPHERE_DATA.replace( '{key}', data ),
					success: function( data, status, xhr ) {
						atmosphereData = parseJSON( data );
					},
					error: function( xhr, errorType, error ) {
						throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
					}
				})
			).then( function() {
				start();
			})
        },
    };

})();
