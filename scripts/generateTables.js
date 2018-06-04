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
	var rowItems = ["firstname", "dynasticname", "appearance", "age", "abilityhigh", "abilitylow", "talent", "mannerism", "interactions", "ideal", "bond",
		"flaworsecret", "knowledge", "history"];
	var table = generateTableAndHeaders("humans", columnHeaders);
	var tableBody = $(table).find("tbody");
	generateTableRows(10, tableBody, rowItems, humans, npcData, "humans");
	
	$("#humansList").append(table);
}

function generateDwarfTable(dwarves, npcData) {
	$("#dwarvesList").empty();
				
	var columnHeaders = ["First Name", "Son of...", "Occupation or Affiliation", "Age",  
		"Ability: High", "Ability: Low", "Look", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	var rowItems = ["firstname", "lastname", "role", "age", "abilityhigh", "abilitylow", "appearance", "talent", "mannerism", "interactions",
		"ideal", "bond", "flaworsecret", "knowledge", "history"];
	var table = generateTableAndHeaders("dwarves", columnHeaders);
	var tableBody = $(table).find("tbody");
	generateTableRows(10, tableBody, rowItems, dwarves, npcData, "dwarves");
	
	$("#dwarvesList").append(table);
}

function generateTabaxiTable(tabaxi, npcData) {
	$("#tabaxiList").empty();
				
	var columnHeaders = ["Name", "Clan Name", "Occupation or Affiliation", "Appearance", "Obsession", "Quirk", "Age", 
		"Ability: High", "Ability: Low", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	var rowItems = ["firstname", "clanname", "occupation", "appearance", "obsession", "quirk", "age", "abilityhigh", "abilitylow", "talent",
		"mannerism", "interactions", "ideal", "bond", "flaworsecret", "knowledge", "history"];
	
	var table = generateTableAndHeaders("tabaxi", columnHeaders);
	var tableBody = $(table).find("tbody");
	generateTableRows(10, tableBody, rowItems, tabaxi, npcData, "tabaxi");
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