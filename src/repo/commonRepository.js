class CommonRepository {
  constructor(model) {
    this.model = model
  }

  async findById(id) {
    return this.model.findByPk(id)
  }

  async findOne(query = {}) {
    return this.model.findOne({ where: { ...query } })
  }

  async findMany(query = {}) {
    return this.model.findAll({ where: { ...query } })
  }

  async create(data) {
    return this.model.create(data)
  }

  async createMany(data) {
    return this.model.bulkCreate(data)
  }

  async updateById(id, data) {
    return this.model.update(data, { where: { id } })
  }

  async updateByQuery(query, data) {
    return this.model.update(data, { where: { ...query } })
  }

  async deleteById(id) {
    return this.model.destroy({ where: { id } })
  }

  async deleteByQuery(query, data) {
    return this.model.destroy(data, { where: { ...query } })
  }
}

module.exports = CommonRepository
