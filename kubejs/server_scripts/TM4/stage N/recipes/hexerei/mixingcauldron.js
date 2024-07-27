ServerEvents.recipes((event) => {
	const prefix = 'gribtweaks:hexerei/mixingcauldron/';
	const prefixt = 'gribtweaks:twilightforest/mixingcauldron/';
	const prefixs = 'gribtweaks:sorcerium/mixingcauldron/';

	const recipes = [
		{ // Ивовая метла
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'minecraft:water'},
			ingredients: [
				{item: 'sorcerium:sorcerers_broom_item'},
				{item: 'hexerei:mandrake_root'},
				{item: 'sorcerium:mana_crystal_block'},
				{item: 'hexerei:willow_log'},
				{item: 'twilightforest:torchberries'},
				{item: 'hexerei:willow_log'},
				{item: 'sorcerium:mana_crystal_block'},
				{item: 'hexerei:mandrake_root'},
			],	
			output: {item: 'hexerei:willow_broom'},
			liquidOutput: {fluid: 'hexerei:blood_fluid'},
			fluidLevelsConsumed: 1000,
			id: `${prefix}willow_broom`
		},
		{ // Метла из красного дерева
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'hexerei:life_liquid_essence'},
			ingredients: [
				{item: 'hexerei:willow_broom'},
				{item: 'hexerei:mandrake_root'},
				{item: 'hexerei:mahogany_log'},
				{item: 'gribtweaks:focus_element'},
				{item: 'gribtweaks:dry_ingot_combining'},
				{item: 'gribtweaks:focus_element'},
				{item: 'hexerei:mahogany_log'},
				{item: 'hexerei:mandrake_root'},
			],
			output: {item: 'hexerei:mahogany_broom'},
			liquidOutput: {fluid: 'hexerei:blood_fluid'},
			fluidLevelsConsumed: 1000,
			id: `${prefix}mahogany_broom`
		},
		{ // Маленькая сумка
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'minecraft:water'},
			ingredients: [
				{item: 'minecraft:string'},
				{item: 'minecraft:leather'},
				{item: 'minecraft:leather'},
				{item: 'sorcerium:earth_crystal'},
				{item: 'minecraft:gold_nugget'},
				{item: 'sorcerium:earth_crystal'},
				{item: 'minecraft:leather'},
				{item: 'minecraft:leather'},
			],
			output: {item: 'hexerei:small_satchel'},
			liquidOutput: {fluid: 'hexerei:blood_fluid'},
			fluidLevelsConsumed: 500,
			id: `${prefix}small_satchel`
		},
		{ // Средняя сумка
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'minecraft:water'},
			ingredients: [
				{item: 'hexerei:small_satchel'},
				{item: 'sorcerium:earth_crystal'},
				{item: 'minecraft:string'},
				{item: 'minecraft:leather'},
				{item: 'minecraft:string'},
				{item: 'minecraft:leather'},
				{item: 'minecraft:string'},
				{item: 'sorcerium:earth_crystal'}
			],
			output: {item: 'hexerei:medium_satchel'},
			liquidOutput: {fluid: 'hexerei:blood_fluid'},
			fluidLevelsConsumed: 1000,
			id: `${prefix}medium_satchel`
		},
		{ // Большая сумка
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'minecraft:water'},
			ingredients: [
				{item: 'hexerei:medium_satchel'},
				{item: 'minecraft:string'},
				{item: 'sorcerium:earth_crystal'},
				{item: 'minecraft:leather'},
				{item: 'hexerei:small_satchel'},
				{item: 'minecraft:leather'},
				{item: 'sorcerium:earth_crystal'},
				{item: 'minecraft:string'}
			],
			output: {item: 'hexerei:large_satchel'},
			liquidOutput: {fluid: 'hexerei:blood_fluid'},
			fluidLevelsConsumed: 1500,
			id: `${prefix}blood_fluid`
		},
		{ // Водостойкий наконечник
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'minecraft:water'},
			ingredients: [
				{item: 'minecraft:conduit'},
				{item: 'minecraft:dark_prismarine'},
				{item: 'minecraft:prismarine_shard'},
				{item: 'minecraft:mossy_cobblestone'},
				{item: 'minecraft:prismarine'},
				{item: 'minecraft:mossy_cobblestone'},
				{item: 'minecraft:prismarine_shard'},
				{item: 'minecraft:dark_prismarine'},
			],
			liquidOutput: {fluid: 'minecraft:water'},
			output: {item: 'hexerei:broom_waterproof_tip'},
			fluidLevelsConsumed: 2000,
			id: `${prefix}large_satche`
		},
		{ // Пестик и ступка
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'minecraft:lava'},
			ingredients: [
				{item: 'minecraft:quartz'},
				{item: 'minecraft:iron_ingot'},
				{item: 'twilightforest:raw_ironwood'},
				{item: 'minecraft:stone'},
				{item: 'minecraft:stone'},
				{item: 'minecraft:stone'},
				{item: 'twilightforest:raw_ironwood'},
				{item: 'minecraft:iron_ingot'},
				{item: 'minecraft:quartz'},
			],
			liquidOutput: {fluid: 'minecraft:lava'},
			output: {item: 'hexerei:pestle_and_mortar'},
			fluidLevelsConsumed: 333,
			id: `${prefix}pestle_and_mortar`
		},
		{ // Элемент фокуса
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'minecraft:water'},
			ingredients: [
				{item: 'minecraft:glowstone_dust'},
				{item: 'hexerei:dried_mugwort_leaves'},
				{item: 'hexerei:dried_mugwort_flowers'},
				{item: 'hexerei:dried_belladonna_flowers'},
				{item: 'twilightforest:firefly'},
				{item: 'hexerei:dried_belladonna_flowers'},
				{item: 'hexerei:dried_mugwort_flowers'},
				{item: 'hexerei:dried_mugwort_leaves'},
			],
			liquidOutput: {fluid: 'hexerei:life_liquid_essence'},
			output: {item: 'gribtweaks:focus_element'},
			fluidLevelsConsumed: 2000,
			id: `${prefixt}focus_element`
		},
		{ // Мокрый соеденяющий слиток
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'hexerei:life_liquid_essence'},
			ingredients: [
				{item: 'twilightforest:ironwood_ingot'},
				{item: 'naturesaura:infused_iron'},
				{item: 'create:brass_ingot'},
				{item: 'create:zinc_ingot'},
				{item: 'create:brass_ingot'},
				{item: 'naturesaura:infused_iron'},
				{item: 'twilightforest:ironwood_ingot'},
				{item: 'create:zinc_ingot'},
			],
			liquidOutput: {fluid: 'minecraft:water'},
			output: {item: 'gribtweaks:wet_ingot_combining'},
			fluidLevelsConsumed: 2000,
			id: `${prefix}wet_ingot_combining`
		},
		{ // Earth Crystal
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'hexerei:life_liquid_essence'},
			ingredients: [
				{item: 'minecraft:dirt'},
				{item: 'naturesaura:infused_iron'},
				{item: 'naturesaura:infused_iron'},
				{item: 'naturesaura:infused_iron'},
				{item: 'minecraft:dirt'},
				{item: 'naturesaura:infused_iron'},
				{item: 'naturesaura:infused_iron'},
				{item: 'naturesaura:infused_iron'},
			],
			liquidOutput: {fluid: 'minecraft:water'},
			output: {item: 'sorcerium:earth_crystal'},
			fluidLevelsConsumed: 2000,
			id: `${prefixs}earth_crystal`
		},
		{ // Вороновая ткань
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'minecraft:water'},
			ingredients: [
				{item: 'hexerei:mandrake_flowers'},
				{item: 'twilightforest:raven_feather'},
				{item: 'minecraft:glow_berries'},
				{item: 'twilightforest:raven_feather'},
				{item: 'hexerei:mandrake_flowers'},
				{item: 'twilightforest:raven_feather'},
				{item: 'minecraft:glow_berries'},
				{item: 'twilightforest:raven_feather'},
			],
			liquidOutput: {fluid: 'minecraft:water'},
			output: {item: 'gribtweaks:wet_raven_cloth'},
			fluidLevelsConsumed: 1000,
			id: `${prefixs}wet_raven_cloth`
		},		
		{ // Смесь комбинаций слитков
			type: 'hexerei:mixingcauldron',
			liquid: {fluid: 'minecraft:lava'},
			ingredients: [
				{item: 'naturesaura:infused_iron'},
				{item: 'gribtweaks:dry_ingot_combining'},
				{item: 'minecraft:netherite_scrap'},
				{item: 'gribtweaks:dry_ingot_combining'},
				{item: 'naturesaura:infused_iron'},
				{item: 'gribtweaks:dry_ingot_combining'},
				{item: 'minecraft:netherite_scrap'},
				{item: 'gribtweaks:dry_ingot_combining'},
			],
			liquidOutput: {fluid: 'minecraft:water'},
			output: {item: 'gribtweaks:mix_of_ingot_combinations'},
			fluidLevelsConsumed: 2000,
			id: `${prefixs}mix_of_ingot_combinations`
		}
	]


	recipes.forEach(recipe => {
		event.custom({
			type: recipe.type,
			liquid: recipe.liquid,
			ingredients: recipe.ingredients,
			output: recipe.output,
			liquidOutput: recipe.liquidOutput,
			fluidLevelsConsumed: recipe.fluidLevelsConsumed,
		}).id(recipe.id)
		})
	})