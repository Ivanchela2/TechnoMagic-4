// ClientEvents.tick(event => {
//     let gameTime = event.level.getTime();
//     let gameDays = Math.floor(gameTime / 24000);
//     let gameHours = Math.floor((gameTime % 24000) / 1000); 
//     let gameMinutes = Math.floor(((gameTime % 24000) % 1000) * 60 / 1000);

//     let currentDayString = `День ${gameDays}`;
//     let currentTimeString = `${gameHours.toString().padStart(2, '0')}:${gameMinutes.toString().padStart(2, '0')}`;

//     let x = 8;
//     let y = 8;
//     let w = 86;
//     let h = 24;
//     let borderThickness = 1;

//     event.player.paint({
//         backgroundImageBorderTop: {
//             type: 'rectangle',
//             color: '#ff999999',
//             x: x - borderThickness,
//             y: y - borderThickness,
//             w: w,
//             h: borderThickness,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         },
//         backgroundImageBorderBottom: {
//             type: 'rectangle',
//             color: '#ff999999',
//             x: x - borderThickness,
//             y: y + h - borderThickness,
//             w: w,
//             h: borderThickness,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         },
//         backgroundImageBorderLeft: {
//             type: 'rectangle',
//             color: '#ff999999',
//             x: x - borderThickness,
//             y: y,
//             w: borderThickness,
//             h: h - borderThickness,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         },
//         backgroundImageBorderRight: {
//             type: 'rectangle',
//             color: '#ff999999',
//             x: x + w - borderThickness,
//             y: y - borderThickness,
//             w: borderThickness,
//             h: h + borderThickness,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         },
//     });

//     event.player.paint({
//         backgroundImage: {
//             type: 'rectangle',
//             color: '#4d006699',
//             x: x,
//             y: y,
//             w: w - borderThickness,
//             h: h - borderThickness,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         },
//         timeManagerLine: {
//             type: 'rectangle',
//             color: '#FFFFFF',
//             x: x + borderThickness,
//             y: h + y - borderThickness * 2 - 1,
//             w: (gameHours * 60 + gameMinutes) / (24 * 60) * 83,
//             h: 1,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         },
//         tex: {
//             type: 'text',
//             text: currentDayString,
//             shadow: true,
//             x: x / 2 + (w - currentDayString.length * 5) / 2 + borderThickness,
//             y: y + (h - 8 * 2) / 2 - borderThickness * 2,
//             scale: 1,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         },
//         time: {
//             type: 'text',
//             text: currentTimeString,
//             shadow: true,
//             x: x / 2 + (w - currentTimeString.length * 5) / 2 + 4,
//             y: y + (h - 8) - borderThickness * 4,
//             scale: 1,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         }
//     });
// });
