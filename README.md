# InCCsight

O inCCsight é uma ferramenta desktop open source para processar, explorar e analisar dados do Corpo Caloso (CC). 

## Instalação

### Da fonte
Para instalar a ferramenta diretamente a partir da fonte (Github) e ter acesso aos códigos:
1. No terminal, digite `git clone https://github.com/MICLab-Unicamp/inCCsight`
2. Caminhe até o local que foi realizado o download e realize o comando: `npm install`
3. **Tipos de Uso:** 
   3.1. **Desenvolvedor:** use o comando `yarn electron:serve`. Isso iniciará a ferramenta como desenvolvedor, permitindo realizar alterações no código e visualiza-las em tempo real.
   3.2 **Usuário:** Use o comando `yarn electron:build`. Isso irá transformar a ferramenta em um executável Windows, Linux e Mac.

Após a instalação, a primeira vez que abrir a ferramenta pode demorar um pouco para a inicialização, pois o anti-virus verificará a segurança.

### Website
Para instalar a partir do Website, basta seguir os passos:
1. Acessar o website: www.inCCsight.com.br
2. Aba de Download e selecionar o seu sistema operacional.
3. Clique em baixar.

## Uso

## Como Criar um Novo Método
Para criar um novo método dentro do Software, o usuário deve:
- Possuir uma pasta com o nome do método.
- Um arquivo "main.py" dentro da pasta.
- O arquivo "main.py" deve ter o seguinte código para leitura dos dados:
  ```python
    import argparse
    import glob
    import os
    import your_segmentation_method

    parser = argparse.ArgumentParser()
    parser.add_argument('-p', '--parent', nargs='*', dest='parents')

    args = parser.parse_args()
        
    # Read files
    folder_mri = args.parents

    all_subjects = []

    for folder in folder_mri:
        subjects = glob.glob(os.path.join(folder, "*"))

        for subject in subjects:
            all_subjects.append(subject)

    your_segmentation_method.segment(all_subject)
  ```
- O seu método deve receber uma lista com o caminho de cada sujeito a ser processado.
- Para que os dados sejam exibidos nos gráficos e tabelas da interface, o código deve gerar um arquivo CSV na pasta "../methods/csv"


## Exemplo

## Contribuição

## Contato

## Licença

## Avisos 

No Linux, em package.json, adicionar os scripts:
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build"

No Windows:
    "start": "react-scripts start",
    "build": "react-scripts build"