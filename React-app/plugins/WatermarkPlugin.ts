import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';




export function WatermarkPlugin() {
    
    const options = {
        text: 'Sample Watermark',
        position: 'center',
        color: 'white',
        fontsize: 48
    }



    return {
        name: 'vite-image-text-plugin',
        async transform(_src: string, id: string) {
            /* skipping log
            console.log('Id:' + id)
            console.log('Src:' + _src)
            */
            // Only process image files (png, jpg, jpeg, webp)
            if (!id.match(/\.(png|jpg|jpeg|webp)$/i)) {
                return null;
            }

            try {
                const imageBuffer = await fs.readFile(id);
                const image = sharp(imageBuffer);
                const metadata = await image.metadata();

                //Create SVG with the watermark text
                const svgText = `
                <svg width="${metadata.width}" height="${metadata.height}">
                <style>
                    .text { fill: ${options.color}; font-size: ${options.fontsize}px; font-family: sans-serif; }
                </style>
                <text x="50%" y="50%" text-anchor="middle" class="text" dominant-baseline="middle">${options.text}</text>
                </svg>
                `;
            
                const processedImage = await image
                    .composite([
                        {
                            input: Buffer.from(svgText),
                            gravity: options.position,
                        }
                    ])
                    .toBuffer();

                    // Return the processed image as a base64 string
                    const base64Image = processedImage.toString('base64');
                    return `export default "data:image/${path.extname(id).slice(1)};base64,${base64Image}"`;

                } catch (error) {
                    console.error('Error processing image:', error);
                    return null;
            }

        }
    }
}