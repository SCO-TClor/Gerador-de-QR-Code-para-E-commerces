import prompt from "prompt";
import promptSchemaMain from "./prompts/schema-main.js";
import createQRCode from "./services/qr-code/createQR.js";
import createPassword from "./services/password/createPW.js";

async function mainInit() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();  
    })
};

mainInit();