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
	
function generateHumanTable(humans, npcData) {
	$("#humansList").empty();
				
	var columnHeaders = ["Name", "Dynastic Name", "Occupation or Affiliation", "Appearance", "Age", 
		"Ability: High", "Ability: Low", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	
	var table = generateTable("humans", columnHeaders);
	var tableBody = $(table).find("tbody");
	for (var x = 0; x < 10; x++) {
		tableBody.append("<tr id='humans" + x + "'>")
		var row = $(tableBody).find("#humans" + x); 
		var human = getNPC(humans, npcData);
		
		
		row.append("<td>" + human["firstname"] + "</td>");
		row.append("<td>" + human["dynasticname"] + "</td>");
		row.append("<td>" + human["occupation"] + "</td>");
		row.append("<td>" + human["appearance"] + "</td>");
		row.append("<td>" + human["age"] + "</td>");
		row.append("<td>" + human["abilityhigh"] + "</td>");
		row.append("<td>" + human["abilitylow"] + "</td>");
		row.append("<td>" + human["talent"] + "</td>");
		row.append("<td>" + human["mannerism"] + "</td>");
		row.append("<td>" + human["interactions"] + "</td>");
		row.append("<td>" + human["ideal"] + "</td>");
		row.append("<td>" + human["bond"] + "</td>");
		row.append("<td>" + human["flaworsecret"] + "</td>");
		row.append("<td>" + human["knowledge"] + "</td>");
		row.append("<td>" + human["history"] + "</td>");
	}
	$("#humansList").append(table);
}

function generateDwarfTable(dwarves, npcData) {
	$("#dwarvesList").empty();
				
	var columnHeaders = ["First Name", "Son of...", "Occupation or Affiliation", "Age",  
		"Ability: High", "Ability: Low", "Look", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	
	var table = generateTable("dwarves", columnHeaders);
	var tableBody = $(table).find("tbody");
	var row;
	var dwarf;
	for (var x = 0; x < 10; x++) {
		tableBody.append("<tr id='dwarves" + x + "'>")
		row = $(tableBody).find("#dwarves" + x); 
		dwarf = getNPC(dwarves, npcData);
		
		row.append("<td>" + dwarf["firstname"] + "</td>");
		row.append("<td>" + dwarf["lastname"] + "</td>");
		row.append("<td>" + dwarf["role"] + "</td>");
		row.append("<td>" + dwarf["age"] + "</td>");
		row.append("<td>" + dwarf["abilityhigh"] + "</td>");
		row.append("<td>" + dwarf["abilitylow"] + "</td>");
		row.append("<td>" + dwarf["appearance"] + "</td>");
		row.append("<td>" + dwarf["talent"] + "</td>");
		row.append("<td>" + dwarf["mannerism"] + "</td>");
		row.append("<td>" + dwarf["interactions"] + "</td>");
		row.append("<td>" + dwarf["ideal"] + "</td>");
		row.append("<td>" + dwarf["bond"] + "</td>");
		row.append("<td>" + dwarf["flaworsecret"] + "</td>");
		row.append("<td>" + dwarf["knowledge"] + "</td>");
		row.append("<td>" + dwarf["history"] + "</td>");
	}
	$("#dwarvesList").append(table);
}

function generateTabaxiTable(tabaxi, npcData) {
	$("#tabaxiList").empty();
				
	var columnHeaders = ["Name", "Clan Name", "Occupation or Affiliation", "Appearance", "Obsession", "Quirk", "Age", 
		"Ability: High", "Ability: Low", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	
	var table = generateTable("tabaxi", columnHeaders);
	var tableBody = $(table).find("tbody");
	for (var x = 0; x < 10; x++) {
		tableBody.append("<tr id='tabaxi" + x + "'>")
		var row = $(tableBody).find("#tabaxi" + x); 
		var tabaxis = getNPC(tabaxi, npcData);
		
		
		row.append("<td>" + tabaxis["firstname"] + "</td>");
		row.append("<td>" + tabaxis["clanname"] + "</td>");
		row.append("<td>" + tabaxis["occupation"] + "</td>");
		row.append("<td>" + tabaxis["appearance"] + "</td>");
		row.append("<td>" + tabaxis["obsession"] + "</td>");
		row.append("<td>" + tabaxis["quirk"] + "</td>");
		row.append("<td>" + tabaxis["age"] + "</td>");
		row.append("<td>" + tabaxis["abilityhigh"] + "</td>");
		row.append("<td>" + tabaxis["abilitylow"] + "</td>");
		row.append("<td>" + tabaxis["talent"] + "</td>");
		row.append("<td>" + tabaxis["mannerism"] + "</td>");
		row.append("<td>" + tabaxis["interactions"] + "</td>");
		row.append("<td>" + tabaxis["ideal"] + "</td>");
		row.append("<td>" + tabaxis["bond"] + "</td>");
		row.append("<td>" + tabaxis["flaworsecret"] + "</td>");
		row.append("<td>" + tabaxis["knowledge"] + "</td>");
		row.append("<td>" + tabaxis["history"] + "</td>");
	}
	$("#tabaxiList").append(table);
}

function generateTortleTable(tortles, npcData) {
	$("#tortlesList").empty();
				
	var columnHeaders = ["Name", "Appearance", "Role", "Age",  
		"Ability: High", "Ability: Low", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	
	var table = generateTable("tortles", columnHeaders);
	var tableBody = $(table).find("tbody");
	var row;
	var tortle;
	for (var x = 0; x < 10; x++) {
		tableBody.append("<tr id='tortles" + x + "'>")
		row = $(tableBody).find("#tortles" + x); 
		tortle = getNPC(tortles, npcData);
		
		row.append("<td>" + tortle["firstname"] + "</td>");
		row.append("<td>" + tortle["appearance"] + "</td>");
		row.append("<td>" + tortle["role"] + "</td>");
		row.append("<td>" + tortle["age"] + "</td>");
		row.append("<td>" + tortle["abilityhigh"] + "</td>");
		row.append("<td>" + tortle["abilitylow"] + "</td>");
		row.append("<td>" + tortle["talent"] + "</td>");
		row.append("<td>" + tortle["mannerism"] + "</td>");
		row.append("<td>" + tortle["interactions"] + "</td>");
		row.append("<td>" + tortle["ideal"] + "</td>");
		row.append("<td>" + tortle["bond"] + "</td>");
		row.append("<td>" + tortle["flaworsecret"] + "</td>");
		row.append("<td>" + tortle["knowledge"] + "</td>");
		row.append("<td>" + tortle["history"] + "</td>");
	}
	$("#tortlesList").append(table);
}

function generateBatiriTable(batiris, npcData) {
	$("#batirisList").empty();
	
	var columnHeaders = ["Name", "Role", "Clan", "Age", "Look", "Trait", "Trait2", "Knows about or has history with"];
	
	var table = generateTable("batiris", columnHeaders);
	var tableBody = $(table).find("tbody");
	var regex = buildRexExp(batiris);
	for (var x = 0; x < 10; x++) {
		tableBody.append("<tr id='batiris" + x + "'>")
		var row = $(tableBody).find("#batiris" + x); 
		var batiri = getNPC(batiris, npcData);
		
		var item = populateTemplate(batiri, "name");
		
		row.append("<td>" + item + "</td>");
		row.append("<td>" + batiri["role"] + "</td>");
		row.append("<td>" + batiri["clan"] + "</td>");
		row.append("<td>" + batiri["age"] + "</td>");
		row.append("<td>" + batiri["appearance"] + "</td>");
		row.append("<td>" + batiri["personality1"] + "</td>");
		row.append("<td>" + batiri["personality2"] + "</td>");
		row.append("<td>" + batiri["history"] + "</td>");
	}
	$("#batirisList").append(table);
}

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

function generateTable(id, columnHeaders) {
	var table = $("<table id='" + id + "'></table>");
	
	table.append("<thead></thead>");
	
	for (var x = 0; x < columnHeaders.length; x++) {
		$(table).find("thead").append("<th>" + columnHeaders[x] + "</th>");
	}
	
	
	table.append("<tbody></tbody>");
	
	
	return table;
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