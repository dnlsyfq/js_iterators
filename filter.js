const words = [
    'chair','music','pillow','brick','pen','door'
];

const shortWords = words.filter(
    word => {
        return word.length < 6;
    }
)

console.log(words);
console.log(shortWords);

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(
    num => {return num < 250}
)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7
})



