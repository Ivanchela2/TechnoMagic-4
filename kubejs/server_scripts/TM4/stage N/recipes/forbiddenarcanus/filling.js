ServerEvents.recipes(e => {
    let recipes = [
        {
            output: 'forbidden_arcanus:edelwood_water_bucket',
            input: [
                'forbidden_arcanus:edelwood_bucket',
                Fluid.of('water', 1000)
            ],
            id: 'edelwood_water_bucket'
        }
    ]


    recipes.forEach(recipe => {
        e.recipes.createFilling(recipe.output, recipe.input).id(`gribtweaks:create/filling/${recipe.id}`)
    })
})