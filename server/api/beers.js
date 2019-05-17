const router = require('express').Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {Beer} = require('../db/models')
module.exports = router

router.get('/:type', async (req, res, next) => {
  try {
    let style = req.params.type + `%`
    console.log(style)
    const beers = await Beer.findAll({
      where: {
          beer_type: {
              [Op.like]: style
          }
      }
    })
    res.json(beers)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const beers = await Beer.findAll()
    res.json(beers)
  } catch (err) {
    next(err)
  }
})
