// ClientEvents.tick(event => {
//     let gameTime = event.level.getTime();
//     let gameDays = Math.floor(gameTime / 24000);
//     let gameHours = Math.floor((gameTime % 24000) / 1000); 
//     let gameMinutes = Math.floor(((gameTime % 24000) % 1000) * 60 / 1000);

//     let currentDayString = `День ${gameDays}`;
//     let currentTimeString = `${gameHours.toString().padStart(2, '0')}:${gameMinutes.toString().padStart(2, '0')}`;

//     let x = 6;
//     let y = 6;
//     let w = 221 / 10 + currentDayString.length * 5;
//     let h = 65 / 5;

//     event.player.paint({
//         backgroundImage: {
//             type: 'rectangle',
//             texture: 'timer:day_panel_70tp.png',
//             x: x,
//             y: y,
//             w: w,
//             h: h,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         },
//     });

//     event.player.paint({
//         tex: {
//             type: 'text',
//             text: currentDayString,
//             shadow: true,
//             x: x / 2 + (w - currentDayString.length * 5) / 2,
//             y: y / 2 + h / 2 - 1,
//             scale: 1,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'always',
//             remove: false,
//             visible: true
//         }
//     });
// });
