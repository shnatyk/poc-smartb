export function blockMods(camp, extraMods) {
    let blockMods = extraMods || [];
    if(camp.total.profit < 0) {
        blockMods.push('loss');
    }

    if(camp.total.profit > 0) {
        blockMods.push('gain');
    }

    if(camp.total.dailySpend > 0.5) {
        blockMods.push('warning-spend');
    }

    if(camp.total.dailySpend > 0.5) {
        if(camp.total.dailySpend > 0.9) {
            blockMods.push('danger-spend');
        }
        else {
            blockMods.push('warning-spend');
        }
    }
    else {
        blockMods.push('ok-spend');
    }



    return blockMods;
}

export function dataForCampRow(camp) {
    let data = {
        status: camp.isActive.toString(),
        name: camp.name,
        clicks: camp.total.clicks.toString(),
        dailySpend: camp.total.dailySpend * 100 + '%',
        impressions: camp.total.impressions + 'M',
        profit: '$' + camp.total.profit,
        revenue: '$' + camp.total.revenue,
        roi: camp.total.roi + '%',
        spend: '$' + camp.total.spend
    };

    return data;
}