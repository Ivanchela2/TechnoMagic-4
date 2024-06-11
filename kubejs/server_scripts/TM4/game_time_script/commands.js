ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    let debugMode = false;
    event.register(
        Commands.literal("gametimer")
            .executes(ctx => {
                let player = ctx.source.player;
                player.tell("Доступные аргументы: debug | add | remove | show | sync");

                return 1;
            })
            .requires(src => src.hasPermission(2))
            .then(Commands.argument("mode", Arguments.STRING.create(event))
                .executes(ctx => {
                    let player = ctx.source.player;
                    let level = ctx.source.level;
                    const mode = Arguments.STRING.getResult(ctx, "mode");

                    switch (mode) {
                        case "sync":
                            ctx.source.level.setDayTime(level.getTime());
                            player.tell("Клиент и Сервер успешно синхронизированы!");
                            break;
                        case "show":
                            global.isVisible = !global.isVisible;
                            if (global.isVisible) {
                                player.tell("Счетчик Показан! Если видите визуальные баги - перезайдите в мир!");
                            } else {
                                player.tell("Счетчик Скрыт! Если видите визуальные баги - перезайдите в мир!");
                            }
                            break;
                        case "debug":
                            debugMode = !debugMode;
                            player.tell(`debug mode: ${debugMode}`);
                            break;
                        case "add":
                            player.tell("После add | remove укажите время в тиках!");
                            break;
                        case "remove":
                            player.tell("После add | remove укажите время в тиках!");
                        default:
                            player.tell("Доступные аргументы: debug | add | remove | show | sync");
                            break;
                    }

                    return 1;
                })

                .then(Commands.argument("time", Arguments.FLOAT.create(event))
                    .executes(ctx => {
                        let player = ctx.source.player;
                        let level = ctx.source.level;
                        const mode = Arguments.STRING.getResult(ctx, "mode");
                        const time = Arguments.FLOAT.getResult(ctx, "time");

                        if (debugMode) {
                            player.tell(`клиентское время: ${level.getTime()}`);
                        }

                        switch (mode) {
                            case "add":
                                if (level.getTime() + time >= 2147483645) {
                                    player.tell("Превышен лимит! Время не поменялось!");
                                    break;
                                }    
                                level.setTime(level.getTime() + time);
                                break;
                            case "remove":
                                if (level.getTime() - time < 0) {
                                    level.setTime(0);
                                    break;
                                } 
                                level.setTime(level.getTime() - time);
                                break;
                            default:
                                player.tell("Ошибка! Напишите команду в таком формате: /gametimer add | remove 0...2147483647");
                                break;
                        }

                        if (debugMode) {
                            player.tell(`клиентское время после команды: ${level.getTime()}`);
                        }

                        return 1;
                    })
                )
            )
    );
});