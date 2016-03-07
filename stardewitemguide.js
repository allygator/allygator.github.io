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
}
var constructionbundle = {
	"items" :[["Wood",99],["Wood",99],["Stone",99],["Hardwood",10]],
	"reward" :[["Charcoal Kiln",1]]
}
var apricot ={
	"uses":[["Fruit Salad",1]],
	"price": 50,
};
var artichoke ={
	"uses":[["Artichoke Dip",1]],
	"price": 160,
};
var batwing ={};
var batterypack ={};
var beet ={};
var blackberry ={
	"uses":[["Fall Foraging Bundle",1]],
	"price":0,
};
var bluejazz ={};
var blueberry ={};
var bokchoy ={};
var bread ={};
var bream ={};
var bugmeat ={};
var carp ={};
var cauliflower ={};
var cavecarrot ={};
var cheese ={};
var clam ={};
var clay ={};
var cloth ={};
var coal ={};
var coconut ={};
var commonmushroom ={
	"uses":[["Fall Foraging Bundle",1]],
	"price":0
};
var copperbar ={};
var copperore ={};
var corn ={};
var crab ={};
var cranberry ={
	
};
var crayfish ={};
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
var dandelion ={
	"uses":[["Spring Foraging Bundle",1]],
	"price":0
};
var diamond ={};
var earthcrystal ={};
var eel ={};
var egg ={};
var eggplant ={};
var fiber ={};
var fiddleheadfern ={};
var firequartz ={};
var fish ={};
var friedegg ={};
var frozentear ={};
var garlic ={};
var goldbar ={};
var goldore ={};
var grape ={
	"uses":[["Summer Foraging Bundle",1]],
	"price":0
};
var greenalgae ={};
var greenbean ={};
var hardwood ={
	"uses":[["Construction Bundle",10]],
	"price":0
};
var hashbrowns ={};
var hazelnut ={
	"uses":[["Fall Foraging Bundle",1]],
	"price":0
};
var hotpepper ={};
var iridiumbar ={};
var iridiumore ={};
var ironbar ={};
var ironore ={};
var kale ={};
var largemouthbass ={};
var leek ={
	"uses":[["Spring Foraging Bundle",1]],
	"price":0
};
var lobster ={};
var maplesyrup ={};
var mayonnaise ={};
var melon ={};
var milk ={};
var morel ={};
var mussel ={};
var oakresin ={};
var oil ={};
var omelet ={};
var pancakes ={};
var parsnip ={};
var periwinkle ={};
var pinetar ={};
var poppy ={};
var potato ={};
var pumpkin ={};
var quartz ={};
var radish ={};
var rainbowtrout ={};
var redcabbage ={};
var refinedquartz ={};
var rhubarb ={};
var rice ={};
var salmon ={};
var sap ={};
var sardine ={};
var seacucumber ={};
var seaweed ={};
var shrimp ={};
var slime ={};
var snail ={};
var snowyam ={
	"uses":[["Winter Foraging Bundle",1]],
	"price":0
};
var solaressence ={};
var spiceberry ={
	"uses":[["Summer Foraging Bundle",1]],
	"price":0
};
var squid ={};
var stone ={
	"uses":[["Construction Bundle",99]],
	"price":0
};
var sugar ={};
var sunfish ={};
var sweetpea ={
	"uses":[["Summer Foraging Bundle",1]],
	"price":0
};
var tomato ={};
var tortilla ={};
var tuna ={};
var vinegar ={};
var voidessence ={};
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
var winterroot ={
	"uses":[["Winter Foraging Bundle",1]],
	"price":0
};
var wood ={
	"uses":[["Construction Bundle",(99+99)]],
	"price":0
};
var yam ={};
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

function getPrice() {
	
	var name = document.getElementById("ingredientName").value.toLowerCase();
	name =name.replace(/\s/g, '');
	var item = window[name];
	
	if(item == undefined)
	{
		bundle
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

$("#recipeButton").keyup(function(event){
    if(event.keyCode == 13){
        $("#recipeButton").click();
    }
});