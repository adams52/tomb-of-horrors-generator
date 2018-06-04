function generateMainScreen(rollData, atmosphereData) {
	var cache = randomItem(rollData["cachestable"]);
	$("#cache").text(cache);
	
	var treasure = randomItem(rollData["treasuredrops"]);
	$("#treasureDrops").text(treasure);
	
	var deadExplorer = randomItem(rollData["deadexplorers"]);
	$("#deadExplorers").text(deadExplorer);
	
	var complication = randomItem(rollData["complications"]);
	$("#complications").text(complication);
	
	var weatherForecast = "Temp: " + randomItem(atmosphereData["chulttemp"]) 
		+ ". Wind: " + randomItem(atmosphereData["chultwind"]) 
		+ ". Precipitation: " + randomItem(atmosphereData["chultpercip"]);
	$("#weatherForecast").text(weatherForecast);
	
	var nearbyIs = randomItem(atmosphereData["nearbyterrain"]);
	$("#nearbyIs").text(nearbyIs);
	
	var findExplore = randomItem(atmosphereData["nearbyterrain"]);
	$("#findExplore").text(findExplore);
	
	var tricksterGod = randomItem(rollData["trickstergod"]);
	$("#tricksterGod").text(tricksterGod);
	
	var beachEncounter = randomItem(rollData["beachencounter"]);
	$("#beachEncounter").text(beachEncounter);
	
	var jungleNoUndeadEncounter = randomItem(rollData["junglenoundeadencounter"]);
	$("#jungleNoUndeadEncounter").text(jungleNoUndeadEncounter);
	
	var jungleLesserUndeadEncounter = randomItem(rollData["junglelesserundeadencounter"]);
	$("#jungleLesserUndeadEncounter").text(jungleLesserUndeadEncounter);
	
	var jungleGreaterUndeadEncounter = randomItem(rollData["junglegreaterundeadencounter"]);
	$("#jungleGreaterUndeadEncounter").text(jungleGreaterUndeadEncounter);
	
	var mountainsEncounter = randomItem(rollData["mountainsencounter"]);
	$("#mountainsEncounter").text(mountainsEncounter);
	
	var riversEncounter = randomItem(rollData["riversencounter"]);
	$("#riversEncounter").text(riversEncounter);
	
	var ruinsEncounter = randomItem(rollData["ruinsencounter"]);
	$("#ruinsEncounter").text(ruinsEncounter);
	
	var swampEncounter = randomItem(rollData["swampencounter"]);
	$("#swampEncounter").text(swampEncounter);
	
	var wastelandsEncounter = randomItem(rollData["wastelandsencounter"]);
	$("#wastelandsEncounter").text(wastelandsEncounter);
	
	var omuRuinsEncounter = randomItem(rollData["omuruinsencounter"]);
	$("#omuRuinsEncounter").text(omuRuinsEncounter);
	
	var omuPalaceEncounter = randomItem(rollData["omupalaceencounter"]);
	$("#omuPalaceEncounter").text(omuPalaceEncounter);
	
	var omuSwampEncounter = randomItem(rollData["omuswampencounter"]);
	$("#omuSwampEncounter").text(omuSwampEncounter);
}

function generateHumanTable(humans, npcData) {
	$("#humansList").empty();
				
	var columnHeaders = ["Name", "Dynastic Name", "Occupation or Affiliation", "Appearance", "Age", 
		"Ability: High", "Ability: Low", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	
	var table = generateTableAndHeaders("humans", columnHeaders);
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
	
	var table = generateTableAndHeaders("dwarves", columnHeaders);
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
	
	var table = generateTableAndHeaders("tabaxi", columnHeaders);
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
	var rowItems = ["firstname", "appearance", "role", "age", "abilityhigh", "abilitylow", "talent", 
		"mannerism", "interactions", "ideal", "bond", "flaworsecret", "knowledge", "history"];
	
	var table = generateTableAndHeaders("tortles", columnHeaders);
	var tableBody = $(table).find("tbody");
	generateTableRows(10, tableBody, rowItems, tortles, npcData, "tortles");
	$("#tortlesList").append(table);
}

function generateBatiriTable(batiris, npcData) {
	$("#batirisList").empty();
	
	var columnHeaders = ["Name", "Role", "Clan", "Age", "Look", "Trait", "Trait2", "Knows about or has history with"];
	var rowItems = ["name", "role", "clan", "age", "appearance", "personality1", "personality2", "history"];
	
	var table = generateTableAndHeaders("batiris", columnHeaders);
	var tableBody = $(table).find("tbody");
	var regex = buildRexExp(batiris);
	
	generateTableRows(10, tableBody, rowItems, batiris, npcData, "batiris");
	
	$("#batirisList").append(table);
}

function generateGrungTable(grungs, npcData) {
	$("#grungsList").empty();
	
	var columnHeaders = ["First Name", "Role", "Color", "Age", "Look", "Trait", "Trait2", "Doesn't like", "Knows about or has history with"];
	var rowItems = ["name", "role", "color", "age", "appearance", "personality1", "personality2", "hates", "history"];
	
	var table = generateTableAndHeaders("grungs", columnHeaders);
	var tableBody = $(table).find("tbody");
	var regex = buildRexExp(grungs);
	
	generateTableRows(10, tableBody, rowItems, grungs, npcData, "grungs");
	
	$("#grungsList").append(table);
}