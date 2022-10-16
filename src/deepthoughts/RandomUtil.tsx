const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const getRandomImage = (images: any[]) => {
    return images[getRandomInt(images.length)]
}

export const getRandomString = (strings: string[]) => {
    return strings[getRandomInt(strings.length)]
}
