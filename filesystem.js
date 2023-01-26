//NodeJS module for working with small files.
const fs = require('fs');

//Reading files
//ReadFile is used to read from the files.
fs.readFile('files/file.txt', (error, data) => {
    if(error){
        console.log(error);
    }
    console.log(data.toString());
});

//Writing files
//WriteFile is used to writing in to the files.
fs.writeFile('files/file.txt', 'NodeJS Developers!', (error, data) => {
    console.log("Text has been written to the file.")
});

//Deleting Files
//ExistsSync will check if the file exists or not
if(fs.existsSync('files/file.txt')){
    //Unlink is used to delete the files.
    fs.unlink('files/file.txt', (error) => {
        if(error){
            console.log(error);
        }
    });
    console.log("File deleted!");
}

//Working with directories
//ExistsSync will check if the directory exists or not
if(!fs.existsSync('./assets')){
    //Mkdir is used to create directory.
    fs.mkdir('./assets', (error, data) => {
        if(error){
            console.log(error);
        }
        console.log("Directory is created!");
    });
}else{
    //Rmdir is used to delete the directory.
    fs.rmdir('./assets', (error) => {
        if(error){
            console.log(error);
        }
    });
    console.log("Directory has been deleted!");
}
