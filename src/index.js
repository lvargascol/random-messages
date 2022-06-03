const messages = [
    "Leonardo",
    "Betania",
    "Sara",
    "Trinidad",
    "Emilio",
    "Yulieth",
    "Marilandis"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};