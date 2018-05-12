
var WTF = (function() {

    'use strict';

    /*
      ------------------------------------------------------------

        Constants & variables

      ------------------------------------------------------------
    */

    var RE_QUOTE = /\"([^\"]+)\"/gi;
    var RE_JSON = /\.json$/i;
    var RE_COL = /^gsx\$(.+)$/i;
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


    var firstname;
    var dynasticname;
    var race;
	var role;
	var age;
	var appearance;
    var humans;
	var dwarfData;
	var tabaxiData;
	var tortleData;
	var batiriData;
	var grungData;
	var rollData;
	var npcData;
	var atmosphereData;
    var regex;
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

        Converts JSON data to a regular humans object
        @see sample.json

      ------------------------------------------------------------
    */

    function parseJSON( json ) {

        var i, n, key, val, map = {}, keys = {}, data = {}, rows = json.feed.entry;

        for ( key in rows[0] ) {
            if ( RE_COL.test( key ) ) {
                map[ key ] = key.match( RE_COL )[ 1 ].toLowerCase();
                keys[ key ] = [];
            }
        }

        for ( key in keys ) {
            
            data[ map[ key ] ] = keys[ key ];

            for ( i = 0, n = rows.length; i < n; i++ ) {

                val = rows[ i ][ key ].$t;

                if ( val && val.length ) {

                    keys[ key ].push( val );
                }
            }
        }

        return data;
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
            output: $( '#output' )
        };

        /*dom.generate.click( function() {
            generate();
            return false;
        });*/
    }

    function generate() {
        var type, text, part, iter = 0, // Safety mechanism
			firstName,
			dynasticName,
			humanAge,
			humanAppearance;
			var table = $("#humans").find("tbody");
			
			for (var x = 0; x < 10; x++) {
				table.append("<tr id='humans" + x + "'>")
				var row = $("#humans" + x); 
				var npc = getNPCData();
				firstName = randomItem( humans.firstname );
				dynasticName = randomItem(humans.dynasticname);
				humanAge = randomItem(humans.age);
				humanAppearance = randomItem(humans.appearance);
				
				row.append("<td>" + firstName + "</td>");
				row.append("<td>" + dynasticName + "</td>");
				row.append("<td>" + npc["occupation"] + "</td>");
				row.append("<td>" + humanAppearance + "</td>");
				row.append("<td>" + humanAge + "</td>");
				row.append("<td>" + npc["highability"] + "</td>");
				row.append("<td>" + npc["lowability"] + "</td>");
				row.append("<td>" + npc["talent"] + "</td>");
				row.append("<td>" + npc["mannerism"] + "</td>");
				row.append("<td>" + npc["interactions"] + "</td>");
				row.append("<td>" + npc["ideal"] + "</td>");
				row.append("<td>" + npc["bond"] + "</td>");
				row.append("<td>" + npc["flaw"] + "</td>");
				row.append("<td>" + npc["knowledge"] + "</td>");
				row.append("<td>" + npc["knowledge"] + "</td>");
			}

        // Toggle animation

        setTimeout( showOutput, 0 );
        hideOutput();
    }

    function hideOutput() {

        dom.output.removeClass( 'animate' ).css( 'opacity', 0 );
    }

    function showOutput() {

        dom.output.addClass( 'animate' ).css( 'opacity', 1 );
    }

    function randomItem( list, remove ) {

        var index = ~~( Math.random() * list.length );
        var item = list[ index ];

        if ( remove )

            list.splice( index, 1 );

        return item;
    }
	
	function getNPCData() {
		var npc = {};
		npc["occupation"] = randomItem(npcData.occupationhistory);
		npc["appearance"] = randomItem(npcData.appearance);
		npc["highability"] = randomItem(npcData.highability);
		npc["lowability"] = randomItem(npcData.lowability);
		npc["talent"] = randomItem(npcData.talent);
		npc["mannerism"] = randomItem(npcData.mannerism);
		npc["interactions"] = randomItem(npcData.interactionswithothers);
		npc["knowledge"] = randomItem(npcData.usefulknowledge);
		npc["ideal"] = randomItem(npcData.ideal);
		npc["bond"] = randomItem(npcData.bond);
		npc["flaworsecret"] = randomItem(npcData.flaworsecret);
		
		return npc;
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

        // Expose certain methods
        //generate: generate
    };

})();
