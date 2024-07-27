// BlockEvents.rightClicked(event => {
//     const { block, player, level } = event
//     const radius = 0;
//     let targetPos;
    
//     switch (player.mainHandItem.id) {
//         case "gribtweaks:watering_can": 
//             radius = 3;
//             break;
//         case "gribtweaks:advanced_watering_can": 
//             radius = 7;
//             break;
//         case "gribtweaks:ultimate_watering_can": 
//             radius = 15;
//             break;
//         default:
//             return;
//     }
    
//     player.tell(block.pos);
    
//     const fertilize = (pos) => {
//         const LEVEL_CAULDRON = BlockProperties.LEVEL_CAULDRON;

//         const possibleValues = LEVEL_CAULDRON.getPossibleValues();
//         player.tell(`Possible Values (as JSON): ${JSON.stringify(possibleValues)}`);
        
//         player.tell(`Type: ${typeof possibleValues}`);
//         player.tell(`Constructor: ${possibleValues.type}`);
        
//         if (Array.isArray(possibleValues)) {
//             player.tell('Possible Values is an array');
//         } else {
//             player.tell('Possible Values is not an array');
//         }
        
//         const newValue = 1;
        
//         if (Array.isArray(possibleValues) && possibleValues.includes(newValue)) {
//             block.setBlockState(
//                 block.blockState.setValue(LEVEL_CAULDRON, newValue),
//                 0
//             );
//         } else {
//             player.tell(`Error: Level ${newValue} is not allowed for this block.`);
//         }
//     };

//     for (let x = -radius; x <= radius; x++) {
//         for (let y = -radius; y <= radius; y++) {
//             for (let z = -radius; z <= radius; z++) {
//                 targetPos = block.pos.offset(x, y, z);
//                 fertilize(targetPos);
//             }
//         }
//     }

//     event.cancel(); 
// });