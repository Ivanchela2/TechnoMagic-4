ClientEvents.tick(event => {
    let gameTime = event.level.getTime();
    let gameDays = Math.floor(gameTime / 24000);
    let gameHours = Math.floor((gameTime % 24000) / 1000); 
    let gameMinutes = Math.floor(((gameTime % 24000) % 1000) * 60 / 1000);

    let currentDayString = `День ${gameDays}`;
    let currentTimeString = `${gameHours.toString().padStart(2, '0')}:${gameMinutes.toString().padStart(2, '0')}`;

    let x = 8;
    let y = 8;
    let w = 40 + currentDayString.length * 5;
    let h = 18;

    event.player.paint({
        SHADOWbackgroundImageS: {
            type: 'rectangle',
            color: '#172210',
            x: x + 1.5,
            y: y + 1.5,
            w: w,
            h: h,
            alignX: 'left',
            alignY: 'top',
            draw: 'always',
            remove: false,
            visible: global.isVisible
        },
        SHADOWbackgroundImageF: {
            type: 'rectangle',
            color: '#172210',
            x: x + 2.5 + 1.5,
            y: y - 2.5 + 1.5,
            w: w - 5,
            h: h + 5,
            alignX: 'left',
            alignY: 'top',
            draw: 'always',
            remove: false,
            visible: global.isVisible
        },
        backgroundImageF: {
            type: 'rectangle',
            color: '#4d4d4d',
            x: x + 2.5,
            y: y - 2.5,
            w: w - 5,
            h: h + 5,
            alignX: 'left',
            alignY: 'top',
            draw: 'always',
            remove: false,
            visible: global.isVisible
        },
        backgroundImageS: {
            type: 'rectangle',
            color: '#4d4d4d',
            x: x,
            y: y,
            w: w,
            h: h,
            alignX: 'left',
            alignY: 'top',
            draw: 'always',
            remove: false,
            visible: global.isVisible
        },
    });

    event.player.paint({
        tex: {
            type: 'text',
            text: currentDayString,
            shadow: true,
            x: x / 2 + (w - currentDayString.length * 8) / 2 + 2,
            y: y / 2 + h / 2 - 1.5,
            scale: 1.5,
            alignX: 'left',
            alignY: 'top',
            draw: 'always',
            remove: false,
            visible: global.isVisible
        }
    });
});
