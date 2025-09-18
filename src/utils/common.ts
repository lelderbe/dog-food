export function plural(n: number, variants: [string, string, string]) {
    let index = 2;
    if (n % 10 === 1 && n % 100 !== 11) {
        index = 0;
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
        index = 1;
    }
    return variants[index];
}

export function isLiked(currentLikes: IFavoriteUser[] = [], userId = '') {
    return currentLikes.some((item) => item.userId === userId);
}
