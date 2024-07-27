ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:dimstorage/mechanical_crafting/shaped/';
    const recipes = [
        {
            pattern: [ 
                ' AABAA ', 
                'ACABAFA',
                'QQCWFRR',
                'TTWGWTT',
                'RRFWCQQ',
                'AFABACA',
                ' AABAA '
            ],
            key: { 
                A: 'enigmaticlegacy:etherium_ingot', 
                B: 'arclight:bloodstone_ingot', 
                C: 'arclight:arclight_ingot', 
                F: 'arclight:moonlight_ingot', 
                Q: 'arclight:cryorium_ingot',
                W: 'minecraft:diamond', 
                G: 'arclight:moonlight_core', 
                T: 'arclight:jade_ingot', 
                R: 'arclight:sculk_ingot'
            },
            output: 'dimstorage:dim_core',
            id: `${prefix}dim_core`
        },
        {
            pattern: [ 
                'ABABABA', 
                'BABABAB',
                'ABQWEBA',
                'BARTRAB',
                'ABEWQBA',
                'BABABAB',
                'ABABABA'
            ],
            key: { 
                A: 'minecraft:redstone', 
                B: 'createbigcannons:cast_iron_ingot', 
                Q: 'chemlib:zinc_ingot', 
                W: 'chemlib:titanium_ingot', 
                E: 'chemlib:barium_ingot',
                R: 'chemlib:palladium_ingot', 
                T: 'arclight:cryorium_core'
            },
            output: '3x dimstorage:dim_wall',
            id: `${prefix}dim_wall`
        },
        {
            pattern: [ 
                'AAAAA', 
                'AQWEA',
                'ARTRA',
                'AEWQA',
                'AAAAA'
            ],
            key: { 
                A: 'createbigcannons:cast_iron_ingot',
                Q: 'chemlib:manganese_ingot',
                W: 'chemlib:samarium_ingot', 
                E: 'chemlib:gadolinium_ingot', 
                T: 'dimstorage:dim_core', 
                R: 'chemlib:francium_ingot'
            },
            output: '3x dimstorage:solid_dim_core',
            id: `${prefix}solid_dim_core`
        },
        {
            pattern: [ 
                'ABABA', 
                'BQWEB',
                'ARTRA',
                'BEWQB',
                'ABABA'
            ],
            key: { 
                A: 'dimstorage:dim_wall', 
                B: 'dimstorage:solid_dim_core', 
                Q: 'chemlib:nickel_ingot',
                W: 'chemlib:barium_ingot', 
                E: 'chemlib:terbium_ingot', 
                T: 'dimstorage:dim_core', 
                R: 'chemlib:dysprosium_ingot'
            },
            output: 'dimstorage:dimensional_chest',
            id: `${prefix}dimensional_chest`
        },
        {
            pattern: [ 
                'ABABA', 
                'BQWEB',
                'ARTRA',
                'BEWQB',
                'ABABA'
            ],
            key: { 
                A: 'dimstorage:dim_wall', 
                B: 'dimstorage:solid_dim_core',
                Q: 'chemlib:gadolinium_ingot',
                W: 'chemlib:silver_ingot', 
                E: 'chemlib:lutetium_ingot', 
                T: 'dimstorage:dim_core', 
                R: 'chemlib:rhodium_ingot'
            },
            output: 'dimstorage:dimensional_tank',
            id: `${prefix}dimensional_tank`
        }

    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

