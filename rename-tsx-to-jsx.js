const fs = require('fs');
const path = require('path');

function findAndRenameFiles(directory) {
    // Read all files in the directory
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // Recursively process subdirectories
            findAndRenameFiles(filePath);
        } else if (file.endsWith('.tsx')) {
            // Rename .tsx files to .jsx
            const newPath = filePath.replace('.tsx', '.jsx');
            fs.renameSync(filePath, newPath);
            console.log(`Renamed: ${filePath} -> ${newPath}`);
        }
    });
}

// Get the target directory from command line argument, or use current directory
const targetDir = process.argv[2] || '.';

try {
    // Verify the directory exists
    if (!fs.existsSync(targetDir)) {
        console.error(`Directory not found: ${targetDir}`);
        process.exit(1);
    }

    console.log(`Starting rename process in: ${targetDir}`);
    findAndRenameFiles(targetDir);
    console.log('Rename process completed successfully!');
} catch (error) {
    console.error('An error occurred:', error.message);
    process.exit(1);
}