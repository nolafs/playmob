import * as fs from "fs";
import * as path from "path";
import extract from "extract-zip"
import now from "performance-now"
const scanDirectory = "./site/content/clients";
const exportDirectory = "./dist/clients";


const getFiles = async (dir) => {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });

    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : (path.extname(dirent.name) === '.zip') ? path.join(res) : null;
    }));

    return files.filter(el => {return el !== null}).flat();
}

const unzipFiles = async (files) => {
    await Promise.all(files.map(async (file) => {
        console.log(path.dirname(file))
        const exportDir = path.resolve(path.dirname(file), 'app', path.basename(file, path.extname(file)));
        const zipFile = path.resolve(file);
        await unzip(zipFile, exportDir)
    }))
}

const unzip = async (zipPath , unzipToDir) => {

    try {
        // Create folder if not exists
        console.log(unzipToDir)
        await fs.promises.mkdir(path.resolve(unzipToDir), {recursive: true});
        await extract(zipPath, {dir: unzipToDir});

    } catch (err) {
        console.log("Oops: extractZip failed", err);
    }

}

const readFiles = async () => {
    const start = now();
    try {
        // Get the files as an array
        const files = await getFiles( scanDirectory );
        await unzipFiles(files)
        // End for...of
        const end = now();
        console.log('Ended in: ',(start -end).toFixed(3))
    }
    catch( e ) {
        // Catch anything bad that happens
        console.error( "We've thrown! Whoops!", e );
    }
}


readFiles();