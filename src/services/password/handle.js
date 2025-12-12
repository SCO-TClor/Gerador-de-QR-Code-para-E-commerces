import permittedCharacters from "./utils/permittedCharacters.js";

async function handle() {
    let password = "";
    let characters = await permittedCharacters();

    const passwordLength = process.env.PASSWORD_LENGTH;


    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length) + 1;
        password += characters[index]
    };

    return password;
};

export default handle;