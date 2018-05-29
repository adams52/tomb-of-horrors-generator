function populateTemplate(corpus, templateColumn) {
	
	var chosen = corpus[templateColumn];
	
	if (chosen != null && chosen.startsWith("template:")) {
		var idea = chosen.substring(9).trim();
		var regex = buildRexExp(corpus);

		var item = regex.exec(idea);



		var type, text, part, iter = 0;
		while ( item && ++iter < 1000 ) {

			type = item[ 0 ];
			text = item[ 1 ];

			part = corpus[text];
			idea = idea.replace( type, part );

			regex.lastIndex = 0;
			item = regex.exec( idea );
		}
		
		chosen = idea;
	}

	return chosen;
}

function generateTableAndHeaders(id, columnHeaders) {
	var table = $("<table id='" + id + "'></table>");
	
	table.append("<thead></thead>");
	
	for (var x = 0; x < columnHeaders.length; x++) {
		$(table).find("thead").append("<th>" + columnHeaders[x] + "</th>");
	}
	
	
	table.append("<tbody></tbody>");
	
	
	return table;
}

function generateTableRows(numRows, tableBody, itemList, corpus, npcData, race) {
	
	for (var x = 0; x < numRows; x++) {
		tableBody.append("<tr id='" + race + x + "'>")
		var row = $(tableBody).find("#" + race + x); 
		var npc = getNPC(corpus, npcData);
		
		var count = itemList.length;

		for(var i = 0; i < count; i++) {
			var item = itemList[i];
			row.append("<td>" + populateTemplate(npc, item) + "</td>");
		}
	}
}

function randomItem( list) {
	
	var index = ~~( Math.random() * list.length );
	var item = list[ index ];

	return item;
}

function buildRexExp(corpus) {

	var types = [];

	for ( var type in corpus )

		types.push( type );

	types = types.sort(function (a, b) {
		if (a.length == b.length) {
			return 0
		}
		return a.length > b.length ? -1 : 1
	})
	
	var content = '@(type)'.replace( 'type', types.join( '|' ) );

	regex = new RegExp( content, 'gi' );
	return regex;
}

function getNPC(npcType, npcData) {
	var npcAttributes = {};
	var npc = getNPCData(npcData);
	
	var item;
	for (var key in npcType) {
		item = randomItem(npcType[key]);
		npcAttributes[key] = item;
	}
	for (var key in npc) {
		item = npc[key];
		npcAttributes[key] = item;
	}
	
	return npcAttributes;
}

function getNPCData(npcData) {
	var npc = {};
	npc["occupation"] = randomItem(npcData.occupationhistory);
	npc["appearance"] = randomItem(npcData.appearance);
	npc["abilityhigh"] = randomItem(npcData.highability);
	npc["abilitylow"] = randomItem(npcData.lowability);
	npc["talent"] = randomItem(npcData.talent);
	npc["mannerism"] = randomItem(npcData.mannerism);
	npc["interactions"] = randomItem(npcData.interactionswithothers);
	npc["knowledge"] = randomItem(npcData.usefulknowledge);
	npc["history"] = randomItem(npcData.usefulknowledge);
	npc["ideal"] = randomItem(npcData.ideal);
	npc["bond"] = randomItem(npcData.bond);
	npc["flaworsecret"] = randomItem(npcData.flaworsecret);
	
	return npc;
}