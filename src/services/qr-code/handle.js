import chalk from "chalk";
import qr from "qrcode-terminal";

async function handler(err, resultado) {
    if (err) {
        console.log("errer on application");
        return;
    };

    const isSmall = resultado.type == 2;
    
    qr.generate(resultado.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:\n"));
        console.log(qrcode);
    });
};

export default handler;