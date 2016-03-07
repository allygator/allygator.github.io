function getPrice() {
	
	var name = document.getElementById("ingredientName").value.toLowerCase();
	name =name.replace(/\s/g, '');
	var item = window[name];
	
	if(item == undefined)
	{

	}
	else {
		$("#results").append("Price: "+item.price);
	}
}

function getReward() {
	var name = document.getElementById("recipeName").value.toLowerCase();
	name =name.replace(/\s/g, '');
	var item = window[name];
	
	if(item == undefined)
	{
		console.log("testundefined");
	} else if (item.reward == undefined){
		console.log("testnoreward");
	}
	else {
		var content = "<table class='table table-striped'>";
		content += "<thead><tr><th>Reward</th><th>Amount</th></tr></thead>";
		content+='<tr><td>'+ item.reward[0][0]+"</td><td>"+ item.reward[0][1]+"</td></tr>";
		content+="</table>";
		
		$("#results").append(content);
	}
}

function getItems(){
	
	var name = document.getElementById("recipeName").value.toLowerCase();
	name =name.replace(/\s/g, '');
	var item = window[name];
	
	if(item == undefined)
	{
		$("#results").html("");
		$("#results").append("That isnt in Stardew Valley.");
		console.log("UNDEFINED");
	}
	else {
		$("#results").html("");
		var content = "<table class='table table-striped'>";
		content += "<thead><tr><th>Item</th><th>Amount</th></tr></thead>";
		var i;
		for(i=0;i<item.items.length;i++){
			content+='<tr><td>'+ item.items[i][0]+"</td><td>"+ item.items[i][1]+"</td></tr>";
		}
		content+="</table>";
		$("#results").append(content);
		//Make a for-loop through all of uses, puting uses[x][0] and uses[x][1]
		//to fill the results box.
		
	}
}

$("#ingredientName").keyup(function(event){
    if(event.keyCode == 13){
        $("#ingredientButton").click();
    }
});

$("#recipeName").keyup(function(event){
    if(event.keyCode == 13){
        $("#recipeButton").click();
    }
});

var exoticforagingbundle = {
	"items":[["Cactus Fruit",1],["Cave Carrot",1],["Coconut",1],["Maple Syrup",1],["Morel",1],["Oak Resin",1],["Pine Tar",1],["Purple Mushroom",1],["Red Mushroom",1]],
	"reward":[["Autumn's Bounty",1]]
};
var adventurersbundle = {
	"items":[["Bat Wing",1],["Slime",1],["Solar Essence",1],["Void Essence",1]],
	"reward" :[["Small Magnet Ring",1]],
	"price":0,
};
var animalbundle = {
	"items":[,["Duck Egg",1],["Large White Egg",1],["Large Brown Egg",1],["Large Goat Milk",1],["Wool",1]],
	"reward" :[["Cheese Press",1]],
	"price":0,
};
var artisanbundle = {
	"items":[["Apple",1],["Apricot",1],["Cheese",1],["Cherry",1],["Cloth",1],["Goat Cheese",1],["Honey",1],["Jelly",1],["Orange",1],["Peach",1],["Pomegranate",1],["Truffle Oil",1]],
	"reward" :[["Keg",1]]
};
var blacksmithsbundle = {
	"items":[["Copper Bar",1],["Gold Bar",1],["Iron Bar",1],],
	reward:[["Furnace",1]]
};
var chefsbundle = {
	"items":[["Fiddlehead Fern",1],["Fried Egg",1],["Maki Roll",1],["Maple Syrup",1],["Poppy",1],["Truffle",1]],
	"reward":[["Pink Cake",3]],
	"price":0,
};
var constructionbundle = {
	"items":[["Hardwood",10],["Stone",99],["Wood",198]],
	"reward":[["Charcoal Kiln",1]]
};
var crabpotbundle = {
	"items":[["Clam",1],["Cockle",1],["Crab",1],["Crayfish",1],["Lobster",1],["Mussel",1],["Oyster",1],["Periwinkle",1],["Shrimp",1],["Snail",1]],
	"reward":[["Crab Pot",3]]
};
var dyebundle = {
	"items":[["Aquamarine",1],["Duck Feather",1],["Red Cabbage",1],["Red Mushroom",1],["Sea Urchin",1],["Sunflower",1]],
	"reward":[["Seed Maker",1]]
};
var enchantersbundle = {
	"items":[["Oak Resin",1],["Pomegranate",1],["Rabbits Foot",1],["Wine",1]],
	"reward":[["Gold Bar",5]]
};
var exoticforagingbundle = {
	"items":[,["Cactus Fruit",1],["Cave Carrot",1],["Coconut",1],["Maple Syrup",1],["Morel",1],["Oak Resin",1],["Pine Tar",1],["Purple Mushroom",1],["Red Mushroom",1],],
	"reward":[["Autumn's Bounty",5]]
};
var fallcropsbundle = {
	"items":[["Corn",1],["Eggplant",1],["Pumpkin",1],["Yam",1],],
	"reward":[["Bee House",1]]
};
var fieldresearchbundle = {
	"items":[["Chub",1],["Frozen Geode",1],["Nautilus Shell",1],["Purple Mushroom",1],],
	"reward":[["Recycling Machine",1]]
};
var fodderbundle = {
	"items":[["Apple",1],["Hay",1],["Wheat",1],],
	"reward":[["Heater",1]]
};
var geologistssbundle = {
	"items":[["Earth Crystal",1],["Fire Quartz",1],["Frozen Tear",1],["Quartz",1],],
	"reward":[["Omni Geode",5]]
};
var lakefishbundle = {
	"items":[["Bullhead",1],["Carp",1],["Largemouth Bass",1],["Sturgeon",1],],
	"reward":[["Dressed Spinner",1]]
};
var nightfishingbundle = {
	"items":[["Bream",1],["Eel",1],["Walleye",1],],
	"reward":[["Small Glow Ring",1]]
};
var oceanfishbundle = {
	"items":[["Red Snapper",1],["Sardine",1],["Tilapia",1],["Tuna",1]],
	"reward":[["Warp Totem Beach",5]]
};
var qualitycropsbundle = {
	"items":[["(Gold) Parsnip",5],["(Gold) Corn",5],["(Gold) Pumpkin",5],["(Gold) Melon",5],],
	"reward":[["Preserves Jar",1]]
};
var riverfishbundle = {
	"items":[,["Catfish",1],["Shad",1],["Sunfish",1],["Tiger Trout",1],],
	"reward":[["Bait",30]]
};
var specialtyfishbundle = {
	"items":[["Ghostfish",1],["Pufferfish",1],["Sandfish",1],["Woodskip",1],],
	"reward":[["Dish O' The Sea",1]]
};
var springcropsbundle = {
	"items":[["Cauliflower",1],["Green Bean",1],["Parsnip",1],["Potato",1],],
	"reward":[["Speed-Gro",1]]
};
var summercropsbundle = {
	"items":[["Blueberry",1],["Hot Pepper",1],["Melon",1],["Tomato",1],],
	"reward":[["Quality Sprinkler",1]]
};
var springforagingbundle = {
	"items" :[["Wild Horseradish",1],["Daffodil",3],["Leek",1],["Dandelion",1]],
	"reward" :[["Spring Seeds",30]]
}
var summerforagingbundle = {
	"items" :[["Grape",1],["Spice Berry",3],["Sweet Pea",1]],
	"reward" :[["Summer Seeds",30]]
}
var fallforagingbundle = {
	"items" :[["Common Mushroom",1],["Wild Plum",3],["Hazelnut",1],["Blackberry",1]],
	"reward" :[["Fall Seeds",30]]
}
var winterforagingbundle = {
	"items" :[["Winter Root",1],["Crystal Fruit",3],["Snow Yam",1],["Crocus",1]],
	"reward" :[["Winter Seeds",30]]
};
var amaranth ={
	"uses":[["Salmon Dinner",1]],
	"price": 150,
};
var ancientseed ={
	"uses":[["Museum",1]],
	"price": 5,
};
var ancientfruit ={
	"uses":[[,]],
	"price": 750,
};
var apple ={
	"uses":[["Cranberry Candy",1],["Fodder Bundle",3],["Artisan Bundle",1]],
	"price": 100,
};
var apricot ={
	"uses":[["Fruit Salad",1],["Artisan Bundle",1]],
	"price": 50,
};
var artichoke ={
	"uses":[["Artichoke Dip",1]],
	"price": 160,
};
var aquamarine = {
	"uses":[["Dye Bundle",1]],
	"price":0,
};
var batwing ={
	"uses":[["Adventurer's Bundle",10],],
	"price":0,
};
var batterypack ={};
var beet ={};
var blackberry ={
	"uses":[["Fall Foraging Bundle",1]],
	"price":0,
};
var bluejazz ={};
var blueberry ={
	"uses":[["Summer Crops Bundle",1],],
	"price":0,
};
var bokchoy ={};
var bread ={};
var bream ={
	"uses":[["Night Fishing Bundle",1]],
	"price":0,
};
var bullhead = {
	"uses":[["Lake Fish Bundle",1]],
	"price":0,
}
var bugmeat ={};
var cactusfruit = {
	"uses":[["Exotic Foraging Bundle",1]],
	"price":0,
};
var carp ={
	"uses":[["Lake Fish Bundle",1]],
	"price":0,
};
var catfish = {
	"uses":[["River Fish Bundle",1]],
	"price":0,
};
var cauliflower ={
	"uses":[["Spring Crops Bundle",1]],
	"price":0,
};
var cavecarrot ={
	"uses":[["Exotic Foraging Bundle",1]],
	"price":0,
};
var cheese ={
	"uses":[["Artisan Bundle",1]],
	"price":0,
};
var cherry = {
	"uses":[["Artisan Bundle",1]],
	"price":0,
};
var chub = {
	"uses":[["Field Research Bundle",1]],
	"price":0,
};
var clam ={
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var clay ={};
var cloth ={
	"uses":[["Artisan Bundle",1]],
	"price":0,
};
var coal ={};
var cockle = {
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var coconut ={
	"uses":[["Exotic Foraging Bundle",1]],
	"price":0,
};
var commonmushroom ={
	"uses":[["Fall Foraging Bundle",1]],
	"price":0
};
var copperbar ={
	"uses":[["Blacksmith's Bundle",1]],
	"price":0,
};
var copperore ={};
var corn ={
	"uses":[["Fall Crops Bundle",1]],
	"price":0,
};
var crab ={
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var cranberry ={
	
};
var crayfish ={
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var crocus ={
	"uses":[["Winter Foraging Bundle",1]],
	"price":0
};
var crystalfruit ={
	"uses":[["Winter Foraging Bundle",1]],
	"price":0
};
var daffodil ={
	"uses":[["Spring Foraging Bundle",1]],
	"price":0
};
var dishothesea = {
	"items":[[]],
	"price":0,
};
var dandelion ={
	"uses":[["Spring Foraging Bundle",1]],
	"price":0
};
var diamond ={};
var duckegg = {};
var largeduckegg = {
	"uses":[["Animal Bundle",1]],
	"price":0,
};
var duckfeather = {
	"uses":[["Dye Bundle",1]],
	"price":0,
};
var earthcrystal ={
	"uses":[["Geologists's Bundle",1]],
	"price":0,
};
var eel ={
	"uses":[["Night Fishing Bundle",1]],
	"price":0,
};
var largebrownegg ={
	"uses":[["Animal Bundle",1]],
	"price":0,
};
var largewhiteegg ={
	"uses":[["Animal Bundle",1]],
	"price":0,
};
var egg ={};
var eggplant ={
	"uses":[["Fall Crops Bundle",1]],
	"price":0,
};
var fiber ={};
var fiddleheadfern ={
	"uses":[["Chef's Bundle",1]],
	"price":0,
};
var firequartz ={
	"uses":[["Geologists's Bundle",1]],
	"price":0,
};
var fish ={};
var friedegg ={
	"uses":[["Chef's Bundle",1]],
	"price":0,
};
var frozengeode = {
	"uses":[["Field Research Bundle",1]],
	"price":0,
};
var frozentear ={
	"uses":[["Geologists's Bundle",1]],
	"price":0,
};
var garlic ={};
var ghostfish = {
	"uses":[["Specialty Fish Bundle",1]],
	"price":0,
};
var goatcheese = {
	"uses":[["Artisan Bundle",1]],
	"price":0,
};
var largegoatmilk = {
	"uses":[["Animal Bundle",1]],
	"price":0,
};
var goldbar ={
	"uses":[["Blacksmith's Bundle",1],["Enchanter's Bundle",5]],
	"price":0,
};
var goldore ={
	"uses":[["Gold Bar"][5]],
	"price":0,
};
var grape ={
	"uses":[["Summer Foraging Bundle",1]],
	"price":0
};
var greenalgae ={};
var greenbean ={
	"uses":[["Spring Crops Bundle",1]],
	"price":0,
};
var hardwood ={
	"uses":[["Construction Bundle",10]],
	"price":0
};
var hashbrowns ={};
var hay = {
	"uses":[["Fodder Bundle",10]],
	"price":0,
};
var hazelnut ={
	"uses":[["Fall Foraging Bundle",1]],
	"price":0
};
var honey = {
	"uses":[["Artisan Bundle",1]],
	"price":0,
};
var hotpepper ={
	"uses":[["Summer Crops Bundle",1]],
	"price":1,
};
var iridiumbar ={};
var iridiumore ={
	"uses":[["Iridium Bar"][5]],
	"price":0,
};
var ironbar ={
	"uses":[["Blacksmith's Bundle",1]],
	"price":0,
};
var ironore ={
	"uses":[["Iron Bar"][5]],
	"price":0,
};
var jelly = {
	"uses":[["Artisan Bundle",1]],
	"price":0,
};
var kale ={};
var largemouthbass ={
	"uses":[["Lake Fish Bundle",1]],
	"price":0,
};
var leek ={
	"uses":[["Spring Foraging Bundle",1]],
	"price":0
};
var lobster ={
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var makiroll = {
	"uses":[["Chef's Bundle",1]],
	"price":0,
};
var maplesyrup ={
	"uses":[["Chef's Bundle",1],["Exotic Foraging Bundle",1]],
	"price":0,
};
var mayonnaise ={
	"items:":[["Egg"][1]],
	"price":0,
};
var melon ={
	"uses":[["Summer Crops Bundle",1]],
	"price":0,
};
var largemilk ={
	"uses":[["Animal Bundle",1]],
	"price":0,
};
var milk ={};
var morel ={
	"uses":[["Exotic Foraging Bundle",1]],
	"price":0,
};
var mussel ={
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var nautilusshell = {
	"uses":[["Field Research Bundle",1]],
	"price":0,
};
var oakresin ={
	"uses":[["Enchanter's Bundle",1],["Exotic Foraging Bundle",1]],
	"price":0,
};
var oil ={};
var orange = {
	"uses":[["Artisan Bundle",1]],
	"price":0,
};
var omelet ={};
var oyster = {
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var pancakes ={};
var parsnip ={
	"uses":[["Spring Crops Bundle",1]],
	"price":0,
};
var peach = {
	"uses":[["Artisan Bundle",1]],
	"price":0,
};
var periwinkle ={
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var pinetar ={
	"uses":[["Exotic Foraging Bundle",1]],
	"price":0,
};
var poppy ={
	"uses":[["Chef's Bundle",1]],
	"price":0,
};
var potato ={
	"uses":[["Spring Crops Bundle",1]],
	"price":0,
};
var pomegranate = {
	"uses":[["Artisan Bundle",1],["Enchanter's Bundle",1]],
	"price":0,
};
var pufferfish = {
	"uses":[["Specialty Fish Bundle",1]],
	"price":0,
};
var pumpkin ={
	"uses":[["Fall Crops Bundle",1]],
	"price":0,
};
var purplemushroom = {
	"uses":[["Exotic Foraging Bundle",1],["Field Research Bundle",1]],
	"price":0,
};
var qualityfertilizer = {
	"items":[["sap",2],["Any Fish",1]],
	"price":0,
};
var qualitysprinkler = {
	"items":[["Iron Bar",1],["Gold Bar",1],["Refined Quartz",1]],
	"price":0,
};
var quartz ={
	"uses":[["Geologists's Bundle",1]],
	"price":0,
};
var rabbitsfoot = {
	"uses":[["Enchanter's Bundle",1]],
	"price":0,
};
var radish ={};
var rainbowtrout ={};
var redcabbage ={
	"uses":[["Dye Bundle",1]],
	"price":0,
};
var redmushroom = {
	"uses":[["Dye Bundle",1],["Exotic Foraging Bundle",1]],
	"price":0,
};
var redsnapper = {
	"uses":[["Ocean Fish Bundle",1]],
	"price":0,
};
var sandfish = {
	"uses":[["Specialty Fish Bundle",1]],
	"price":0,
};
var refinedquartz ={};
var rhubarb ={};
var rice ={};
var salmon ={};
var sap ={};
var sardine ={
	"uses":[["Ocean Fish Bundle",1]],
	"price":0,
};
var seacucumber ={};
var seaurchin = {
	"uses":[["Dye Bundle",1]],
	"price":0,
};
var seaweed ={};
var shad = {
	"uses":[["River Fish Bundle",1]],
	"price":0,
};
var shrimp ={
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var slime ={
	"uses":[["Adventurer's Bundle",99]],
	"price":0,
};
var snail ={
	"uses":[["Crab Pot Bundle",1]],
	"price":0,
};
var snowyam ={
	"uses":[["Winter Foraging Bundle",1]],
	"price":0
};
var solaressence ={
	"uses":[["Adventurer's Bundle",1]],
	"price":0,
};
var spiceberry ={
	"uses":[["Summer Foraging Bundle",1]],
	"price":0
};
var squid ={};
var stone ={
	"uses":[["Construction Bundle",99]],
	"price":0
};
var sturgeon = {
	"uses":[["Lake Fish Bundle",1]],
	"price":0,
};
var sugar ={};
var sunfish ={
	"uses":[["River Fish Bundle",1]],
	"price":0,
};
var sunflower = {
	"uses":[["Dye Bundle",1]],
	"price":0,
};
var sweetpea ={
	"uses":[["Summer Foraging Bundle",1]],
	"price":0
};
var tigertrout = {
	"uses":[["River Fish Bundle",1]],
	"price":0,
};
var tilapia = {
	"uses":[["Ocean Fish Bundle",1]],
	"price":0,
};
var tomato ={
	"uses":[["Summer Crops Bundle",1]],
	"price":0,
};
var tortilla ={};
var truffle = {
	"uses":[["Chef's Bundle",1]],
	"price":0,
};
var truffleoil = {
	"uses":[["Artisan Bundle",1]],
	"price":0,
};
var tuna ={
	"uses":[["Ocean Fish Bundle",1]],
	"price":0,
};
var vinegar ={};
var voidessence ={
	"uses":[["Adventurer's Bundle",1]],
	"price":0,
};
var walleye = {
	"uses":[["Night Fishing Bundle",1]],
	"price":0,
};
var wheat = {
	"uses":[["Fodder Bundle",10]],
	"price":0,
};
var wheatflour ={};
var whitealgae ={};
var wildhorseradish ={
	"uses":[["Spring Foraging Bundle",1]],
	"price":0
};
var wildplum ={
	"uses":[["Fall Foraging Bundle",1]],
	"price":0
};
var wine = {
	"uses":[["Enchanter's Bundle",1]],
	"price":0,
};
var winterroot ={
	"uses":[["Winter Foraging Bundle",1]],
	"price":0
};
var wood ={
	"uses":[["Construction Bundle",(99+99)]],
	"price":0
};
var woodskip = {
	"uses":[["Specialty Fish Bundle",1]],
	"price":0,
};
var wool = {
	"uses":[["Animal Bundle",1]],
	"price":0,
};
var yam ={
	"uses":[["Fall Crops Bundle",1]],
	"price":0,
};
var trash ={};
var brokencd ={};
var driftwood ={};
var jojacola ={};
var brokenglasses ={};
var soggynewspaper ={};

function getUses()
{
	var name = document.getElementById("ingredientName").value.toLowerCase();
	name =name.replace(/\s/g, '');
	var item = window[name];
	
	if(item == undefined)
	{
		$("#results").html("");
		$("#results").append("Item not found.");
		console.log("UNDEFINED");
	}
	else {
		$("#results").html("");
		var content = "<table class='table table-striped'>";
		content += "<thead><tr><th>Use</th><th>Amount</th></tr></thead>";
		var i;
		for(i=0;i<item.uses.length;i++){
			content+='<tr><td>'+ item.uses[i][0]+"</td><td>"+ item.uses[i][1]+"</td></tr>";
		}
		content+="</table>";
		$("#results").append(content);
		//Make a for-loop through all of uses, puting uses[x][0] and uses[x][1]
		//to fill the results box.
		
	}
};

