function introduction(name){
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, lan){
    return `Hi, my name is ${name} and I am learning to program in ${lan}.`
}

function introductionWithLanguageOptional(name, lan = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${lan}.`
}