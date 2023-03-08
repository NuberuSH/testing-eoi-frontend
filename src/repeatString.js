// repeatString("hola", 3) => "holaholahola"
// repeatString("Casa", 2) => "CasaCasa"
// repeatString("Hola", 0) => ""

export function repeatString(text, times) {
    const repeatedString = text.repeat(times);
    return repeatedString;
}