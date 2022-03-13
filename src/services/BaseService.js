const BaseService = (Repository) => {
  const findAll = () => Repository.findAll();
  const getById = (id) => Repository.getById(id);
  const update = (id, newModel) => Repository.update(id, newModel);
  const destroy = (id) => Repository.destroy(id);
  const create = async (newModel) => Repository.create(newModel);

  return {
    findAll,
    getById,
    update,
    destroy,
    create,
  };
};

export default BaseService;
