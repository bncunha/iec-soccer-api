const BaseRepository = (Model) => {
  const findAll = () => Model.findAll();

  const getById = (id) => Model.findByPk(id);

  const update = async (id, newModel) => {
    const instance = await getById(id);
    if (!instance) {
      throw new Error('Não encontrado');
    }
    return instance.update({ ...newModel });
  };

  const destroy = async (id) => {
    const instance = await getById(id);
    if (!instance) {
      throw new Error('Não encontrado');
    }
    return instance.destroy();
  };

  const create = async (newModel) => Model.create(newModel);

  return {
    findAll,
    getById,
    update,
    destroy,
    create,
  };
};

export default BaseRepository;
