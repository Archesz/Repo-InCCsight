const { exec } = require('child_process');
const { stderr } = require('process');

function saveTime(time1, time2){
    return new Promise((resolve, reject) => {
        command = exec(`cd ./methods/csvs && python saveTime.py -t ${time1} ${time2}`, { shell: true }, (error, stdout, stderr) => {
            if(error){
                reject(error);
            } else{
                resolve();
            }
        });
    });
}


function viewSegmentation(){
    command = exec(`.\\view3d\\venv\\Scripts\\activate && python .\\view3d\\viewCC.py`)
}

function viewBrain(){
    command = exec(`.\\view3d\\venv\\Scripts\\activate && python .\\view3d\\viewBrain.py`)

}

/* Chamar a ferramenta */ 

function startThais2(){
    
    //command = exec(`cd ../methods/thais && python app.py -p /home/jovi/Dados/teste`)
    //command = exec(`cd ./methods/thais && dir`)
    command = exec("cd ./methods/thais && python app.py -p /home/jovi/Dados/teste")
}


function startThais(lista){
    const folders = lista.join(" ");
    console.log("Executando Watershed e ROQS");
    return new Promise((resolve, reject) => {
        const command = exec(`cd ./methods/thais && bash -c 'source ./venv/bin/activate && python app.py -p ${folders}'`, { shell: true });
        command.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        command.stderr.on('data', (data) => {
            console.error(data.toString());
        });
        command.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Processo terminou com código ${code}`));
            }
        });
    });

}

function startJoany(lista){
    console.log("Executando Santarosa")
    const folders = lista.join(" ");
    return new Promise((resolve, reject) => {
        const command = exec(`deactivate && cd ./methods/joany && bash -c 'source ./venv/bin/activate && python main3D.py -p ${folders}'`, { shell: true });
        command.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        command.stderr.on('data', (data) => {
            console.error(data.toString());
        });
        command.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Processo terminou com código ${code}`));
            }
        });
    })
}


function transformJson(){
    console.log("Transformando em JSON")
    return new Promise((resolve, reject) => {
        command = exec("cd ./methods/csvs && python transformInJson.py", { shell: true }, (error, stdout, stderr) => {
            if(error){
                reject(error);
            } else{
                resolve();
            }
        });
    });
}