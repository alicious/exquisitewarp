    var stubModel = {
        lastWarpId : 2,
        currentWarps : [

            //created, no registration
            {
                id: 0,
                title: "a string of ice and fire",
                admin: "me",

                invites: [
                {
                    id: 0,
                    accepted: false,
                },
                {
                    id: 1,
                    accepted: false,
                },
                {
                    id: 2,
                    accepted: false,
                },
                ],

                subWarps: [ ],
                currentTurn: {
                    subWarp: 0,
                    round: 0,
                },
            }, 

            //all weavers registered, 1 complete subWarp, 1 in progress, 1 empty
            {
                id: 1,
                title: "Moore Kids",
                admin: "this guy",
                subWarps: [ 
                {
                    weaver: "Bella",
                    ends: 42,
                    maxPalette: 9,
                    palette: ["#cfbeac", "#d27822", "#312726", "#ffffff"],
                    colorPlan: [
                    [0, 1, 2, 1, 0, 1, 2, 1, 2, 2, 1, 0, 0, 0],
                    [2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
                    [3, 2, 3, 2, 3, 2, 1, 1, 0, 0, 1, 0, 2, 0],
                    ],
                },
                {
                    weaver: "Lyra",
                    ends: 52,
                    maxPalette: 12,
                    palette: ["#1a9463", "#dc5c75", "#557840", "#9a9949", 
                    "#b72d69", "#bd0102", "#df8773", "#e4e6d8", "bc5256"],
                    colorPlan: [
                    [0, 1, 2, 1, 5, 0, 4, 1, 2, 1, 3, 2, 2, 1, 0, 0, 0],
                    [2, 2, 2, 6, 1, 1, 1, 7, 2, 2, 2, 1, 8, 1, 1, 1, 1],
                    [ ],
                    ],
                }, 
                {
                    weaver: "Hazel",
                    ends: 23,
                    maxPalette: 20,
                    palette: [ ],
                    colorPlan: [
                    [ ],
                    [ ],
                    [ ],
                    ],
                },
                {
                    weaver: "Fourpaws",
                    ends: 700,
                    maxPalette: 16,
                    palette: [ ],
                    colorPlan: [
                    [ ],
                    [ ],
                    [ ],
                    ],
                },
                ],
                currentTurn: {
                    subWarp: 1,
                    round: 1,
                },
            }, 
        ] };
