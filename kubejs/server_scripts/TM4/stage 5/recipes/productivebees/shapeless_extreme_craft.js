ServerEvents.recipes(event => {
    const prefix = "tm4:avaritia/shapeless_extreme_craft/";
    const recipes = [
        {
            inputs: [
              
                { type: "forge:nbt", item: 'productivebees:honeycomb_powdery'},
                { type: "forge:nbt", item: 'productivebees:honey_treat'},
                { type: "forge:nbt", item: 'productivebees:honeycomb_ghostly'},
                { type: "forge:nbt", item: 'productivebees:honeycomb_milky'},
                { type: "forge:nbt", item: 'minecraft:honeycomb'},
                { type: "forge:nbt", item: 'gribtweaks:infinity_honeycomb'},
                { type: "forge:nbt", item: 'gribtweaks:neutronium_honeycomb'},
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:spirit\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:copper\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:aluminum\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:glowing\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:draconic\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:experience\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:amethyst\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:blazing\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:elementium\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:slimy\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:bronze\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:titanium\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:coal\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:desh\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:prismarine\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:terrasteel\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:silver\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:sculk\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:crimson\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:rune\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:iesnium\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:emerald\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zinc\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:ostrum\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:tin\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:spacial\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:crimson_iron\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:azure_silver\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:tea\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:sulfur\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:diamond\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:kingmetal\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:fiery\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:iron\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:netherite\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:ender\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:magmatic\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:fluix\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:nickel\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:warped\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:brown_shroom\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:lead\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:osmium\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:carminite\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:platinum\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:manasteel\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:frosty\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:tungsten\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:etherium\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:red_shroom\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:bismuth\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:silicon\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:iridium\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:crystalline\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:calorite\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:withered\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:lapis\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:cobalt\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:brass\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:gold\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:obsidian\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:redstone\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:oily\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:chocolate\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:skeletal\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:silky\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:steel\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:radioactive\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:enderium\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:iron_wood\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:witch_ingot\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:iridium_shard\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:ametrine\"}}" }
                
            ],
            output: { item: 'gribtweaks:creative_honeycomb', count: 1 },
            id: `${prefix}creative_honeycomb`
        }

    ];

    recipes.forEach((recipe) => {
            recipe.type = 'avaritia:shapeless_extreme_craft';
            recipe.ingredients = Ingredient.of(recipe.inputs).toJson();
            recipe.result = recipe.output;

            event.custom(recipe).id(recipe.id);
    });
});
