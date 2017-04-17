/*
custom function to produce BEM class names for a component

params:
    name        - block name for component
    modifiers   - array of block's modifiers

example:
    namify('smartb-btn', ['green', 'big', 'login'])
    => "smartb-btn smartb-btn--smartb smartb-btn--big smartb-btn--login"
 */
export function classify(name, modifiers) {
    if(!Array.isArray(modifiers)){
        // no modifiers, then reutrn just the name
        return name;
    }

    return [name, ...modifiers.map((mod) =>
        name + '--' + mod
    )].join(' ');
}
