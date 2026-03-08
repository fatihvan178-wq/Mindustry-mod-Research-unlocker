Events.on(ClientLoadEvent, e => {
    Vars.content.each(c => {
        if(c instanceof UnlockableContent){
            c.alwaysUnlocked = true;
        }
        if(c instanceof SectorPreset){
            c.alwaysUnlocked = true;
        }
    });
});
