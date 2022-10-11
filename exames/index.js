const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const exames = {};
contador = 0;

app.get ('/exames', (req, res) => {
    res.send(exames);
});

app.put ('/exames', (req, res) => {
    contador++;
    const { nomePaciente, sexoPaciente, idadePaciente, 
            exame, nomeMedico, localExame,
            dataLaudo, conteudoLaudo, horaLaudo, prioridadeLaudo 
          } = req.body;

    exames[contador] = { nomePaciente, sexoPaciente, idadePaciente, 
                         exame, nomeMedico, localExame,
                         dataLaudo, conteudoLaudo, horaLaudo, prioridadeLaudo 
                       } 

    res.status(201).send(exames[contador]);
});

app.listen(4000, () => {
 console.log('Exames. Porta 4000');
});