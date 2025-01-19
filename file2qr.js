const fs = require('fs');
const path = require('path');
const qrCode = require('qrcode');

/**
 * @param {string} inputPath - Path to the file to be converted to QR code
 * @param {string} outputPath - Path to save the QR code image
 */

function file2qr(inputPath, outputPath) {
    try {
        const resolvedPath = path.resolve(inputPath);
        const data = fs.readFileSync(resolvedPath, 'utf8');

        const qrPath = outputPath || 'qr-code.png';
        qrCode.toFile(qrPath, data, (error) => {
            if (error) {
                console.error(error);
                return;
            }
            console.log(`QR code generated and saved to: ${qrPath}`);
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = { file2qr };