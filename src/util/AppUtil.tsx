function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const getRandomString = (strings: string[]) => {
    return strings[getRandomInt(strings.length)]
}