const { exec } = require('child_process')

function teste(){  
    const command = exec("node -v")

    command.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    
    console.log('okkkk')
}

function callTool(path){
    if(process.platform == "linux"){
        console.log("LINUX detected")
        // console.log("python app.py -f /home/jovi/Data/subject_01")
        command = exec(`cd .. && cd inCCsight && python app.py -f ${path} --port 5858`)
        console.log(path)
    }
}

function viewSegmentation(){
    command = exec(`.\\view3d\\venv\\Scripts\\activate && python .\\view3d\\viewCC.py`)
}

function viewBrain(){
    command = exec(`.\\view3d\\venv\\Scripts\\activate && python .\\view3d\\viewBrain.py`)

}

/* Chamar a ferramenta */ 

function startThais(){
    
    command = exec(`cd ../methods/thais && python app.py -p /home/jovi/Dados/teste`)
    //command = exec(`cd ./methods/thais && dir`)
}

function startROQS(folders){
    let folder = folders
    console.log(folder)
    const parts = folder.split("\\")
    console.log(parts)
    const pathExceptLast = parts.slice(0, -1).join("\\");
    console.log(pathExceptLast)
    console.log('ok')
    // command = exec(`cd ../methods/roqs && venv/Scripts/activate && python `)
}