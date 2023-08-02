ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:chemlib/sequenced_assembly/';
    const recipes = [];
    let ingotsTypes = [
        {
            loops: 8,
            ingots: [
				{
                    base: 'chemlib:time_ingot',
                    material: 'gribtweaks:neutronium_catalyst',
                    result: 'chemlib:infinity_neutronium_ingot',
                    id: 'chemlib:infinity_neutronium_ingot'
                }
            ]
        }
    ];

    ingotsTypes.forEach((ingotsType) => {
        ingotsType.ingots.forEach((ingot) => {
            recipes.push({
                input: Ingredient.customNBT(
                    Item.of(ingot.base, '{Damage:0}').weakNBT(),
                    (nbt) => !nbt.SequencedAssembly
                ),
                outputs: [ingot.result],
                transitionalItem: ingot.base,
                loops: ingotsType.loops,
                sequence: [
                    {
                        type: 'deploying',
                        input: [ingot.base, ingot.material],
                        output: ingot.base
                    },
                    {
                        type: 'pressing',
                        input: ingot.base,
                        output: ingot.base
                    },
                    {
                        type: 'pressing',
                        input: ingot.base,
                        output: ingot.base
                    },
                    {
                        type: 'pressing',
                        input: ingot.base,
                        output: ingot.base
                    }
                ],
                id: ingot.id
            });
        });
    });


    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            if (step.type == 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input));
            } else if (step.type == 'cutting') {
                sequence.push(
                    event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                );
            } else if (step.type == 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input));
            } else if (step.type == 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input));
            }
        });

        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem)
            .id(recipe.id);
    });
});
