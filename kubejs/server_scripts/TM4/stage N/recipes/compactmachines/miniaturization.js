ServerEvents.recipes(e => {
    let cc = 'compactcrafting'
    let cm = 'compactmachines'
    let filled = cc + ':filled'
    let hollow = cc + ':hollow'
    let mixed = cc + ':mixed'
    let m = ':machine_'
    let blocktype = cc + ':block'
    const recipes = [
        {
            output: [{
                id: cm + m + 'tiny',
                Count: 1
            }],
            size: 5,
            layers: [
                {
                    type: filled,
                    component: 'A'
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: mixed,
                    pattern: [
                        ['A','A','A','A','A'],
                        ['A',' ',' ',' ','A'],
                        ['A',' ','B',' ','A'],
                        ['A',' ',' ',' ','A'],
                        ['A','A','A','A','A']
                    ]
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: filled,
                    component: 'A'
                }
            ],
            components: {
                'A': {
                    type: blocktype,
                    block: 'compactmachines:wall'
                },
                'B': {
                    type: blocktype,
                    block: 'copper_block'
                }
            },
            catalyst: {
                id: 'ender_pearl',
                Count: 1
            },
            id: 'machine_tiny'
        },
        {
            output: [{
                id: cm + m + 'small',
                Count: 1
            }],
            size: 5,
            layers: [
                {
                    type: filled,
                    component: 'A'
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: mixed,
                    pattern: [
                        ['A','A','A','A','A'],
                        ['A',' ',' ',' ','A'],
                        ['A',' ','B',' ','A'],
                        ['A',' ',' ',' ','A'],
                        ['A','A','A','A','A']
                    ]
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: filled,
                    component: 'A'
                }
            ],
            components: {
                'A': {
                    type: blocktype,
                    block: 'compactmachines:wall'
                },
                'B': {
                    type: blocktype,
                    block: 'iron_block'
                }
            },
            catalyst: {
                id: 'ender_pearl',
                Count: 1
            },
            id: 'machine_small'
        },
        {
            output: [{
                id: cm + m + 'normal',
                Count: 1
            }],
            size: 5,
            layers: [
                {
                    type: filled,
                    component: 'A'
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: mixed,
                    pattern: [
                        ['A','A','A','A','A'],
                        ['A',' ',' ',' ','A'],
                        ['A',' ','B',' ','A'],
                        ['A',' ',' ',' ','A'],
                        ['A','A','A','A','A']
                    ]
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: filled,
                    component: 'A'
                }
            ],
            components: {
                'A': {
                    type: blocktype,
                    block: 'compactmachines:wall'
                },
                'B': {
                    type: blocktype,
                    block: 'gold_block'
                }
            },
            catalyst: {
                id: 'ender_pearl',
                Count: 1
            },
            id: 'machine_normal'
        },
        {
            output: [{
                id: cm + m + 'large',
                Count: 1
            }],
            size: 5,
            layers: [
                {
                    type: filled,
                    component: 'A'
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: mixed,
                    pattern: [
                        ['A','A','A','A','A'],
                        ['A',' ',' ',' ','A'],
                        ['A',' ','B',' ','A'],
                        ['A',' ',' ',' ','A'],
                        ['A','A','A','A','A']
                    ]
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: filled,
                    component: 'A'
                }
            ],
            components: {
                'A': {
                    type: blocktype,
                    block: 'compactmachines:wall'
                },
                'B': {
                    type: blocktype,
                    block: 'obsidian'
                }
            },
            catalyst: {
                id: 'ender_pearl',
                Count: 1
            },
            id: 'machine_large'
        },
        {
            output: [{
                id: cm + m + 'giant',
                Count: 1
            }],
            size: 5,
            layers: [
                {
                    type: filled,
                    component: 'A'
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: mixed,
                    pattern: [
                        ['A','A','A','A','A'],
                        ['A',' ',' ',' ','A'],
                        ['A',' ','B',' ','A'],
                        ['A',' ',' ',' ','A'],
                        ['A','A','A','A','A']
                    ]
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: filled,
                    component: 'A'
                }
            ],
            components: {
                'A': {
                    type: blocktype,
                    block: 'compactmachines:wall'
                },
                'B': {
                    type: blocktype,
                    block: 'diamond_block'
                }
            },
            catalyst: {
                id: 'ender_pearl',
                Count: 1
            },
            id: 'machine_giant'
        },
        {
            output: [{
                id: cm + m + 'maximum',
                Count: 1
            }],
            size: 5,
            layers: [
                {
                    type: filled,
                    component: 'A'
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: mixed,
                    pattern: [
                        ['A','A','A','A','A'],
                        ['A',' ',' ',' ','A'],
                        ['A',' ','B',' ','A'],
                        ['A',' ',' ',' ','A'],
                        ['A','A','A','A','A']
                    ]
                },
                {
                    type: hollow,
                    wall: 'A'
                },
                {
                    type: filled,
                    component: 'A'
                }
            ],
            components: {
                'A': {
                    type: blocktype,
                    block: 'compactmachines:wall'
                },
                'B': {
                    type: blocktype,
                    block: 'netherite_block'
                }
            },
            catalyst: {
                id: 'ender_pearl',
                Count: 1
            },
            id: 'machine_maximum'
        },
        {
            output: [{
                id: cm + ':wall',
                Count: 16
            }],
            size: 3,
            layers: [
                {
                    type: mixed,
                    pattern: [
                        ['A','A','A'],
                        ['A','B','A'],
                        ['A','A','A']
                    ]
                }
            ],
            components: {
                'A': {
                    type: blocktype,
                    block: 'supplementaries:gunpowder'
                },
                'B': {
                    type: blocktype,
                    block: 'twilightforest:mazestone_brick'
                }
            },
            catalyst: {
                id: 'twilightforest:armor_shard_cluster',
                Count: 1
            },
            id: 'wall'
        }
    ]



    recipes.forEach(recipe => {
        e.custom({
            type: cc + ':miniaturization',
            recipeSize: recipe.size,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.output
        }).id(`gribtweaks:compactcrafting/miniaturization/${recipe.id}`)
    })
})