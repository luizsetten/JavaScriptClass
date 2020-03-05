import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz Gustavo',
      sobrenome: 'Chinelato Setten',
      email: 'luizgustavosetten@hotmail.com',
      idade: 21,
      peso: 73.5,
      altura: 1.74,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
