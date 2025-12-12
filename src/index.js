import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/createQR.js";
import createPassword from "./services/password/createPW.js";

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();  
    })
};

main();