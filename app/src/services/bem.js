export function namify(name, modifiers) {
    if(!Array.isArray(modifiers)){
        return name;
    }

    return [name, ...modifiers.map((mod) =>
        name + '--' + mod
    )].join(' ');
}
