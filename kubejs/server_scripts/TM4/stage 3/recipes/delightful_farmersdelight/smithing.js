ServerEvents.recipes((event) => {
  const prefix = 'tm4:smithing/shaped/';
  const recipes = [
    { // Warden Knife
      type: 'minecraft:smithing',
      addition: {tag: 'deeperdarker:reinforced_echo_shard'},
      base: {item: 'delightful:draco_arcanus_knife'},
      result: {item: 'delightful:warden_knife'},
      id: `${prefix}warden_knife`
    },
  ];

    recipes.forEach(recipe => {
    event.custom({
      type: recipe.type,
      addition: recipe.addition,
      base: recipe.base,
      result: recipe.result
    })
  })
});