
const capitalize = s => s.replace(/./, c => c.toUpperCase());
module.exports = {
    create: async (data) => {
        let items = [];
        for (var item of data) {
            for (var item1 in item) {
                //ite((val, ))
                console.log("item", item[item1]);
                if (typeof item[item1] == 'object') {
                    if (item[item1]) {
                        var name = capitalize(`${item1}`).toString()
                        console.log("ceate::", name);
                        if (name.endsWith('es')) {
                            if (!items.includes(`${name}`)) {
                                items.push(`${name}`);
                            };
                        } else {
                            if (name.endsWith('s')) {
                                items.push(`${name}`);
                            } else {
                                items.push(`${name}s`);
                            };
                        }

                    }
                }
            }
        }
        return items;
    },
    edit: async (item) => {
        let items = [];
        for (let item1 in item) {
            console.log("helps items::", item);
            console.log("edit::", item[item1]);
            console.log("item1", item1);
            if (typeof item[item1] == 'object') {
                if (item[item1]) {
                    var name = capitalize(`${item1}`).toString()
                    if (name.endsWith('es')) {
                        if (!items.includes(`${name}`)) {
                            items.push(`${name}`);
                        };
                    } else {
                        if (name.endsWith('s')) {
                            items.push(`${name}`);
                        } else {
                            items.push(`${name}s`);
                        };
                    }

                }
            }
        }
        return items;
    },
}