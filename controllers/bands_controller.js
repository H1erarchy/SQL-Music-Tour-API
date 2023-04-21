const bands = require ('express').Router()
const db = require('../models')
const { Band, meet_greet, Event , set_time} = db

// DEPENDENCIES 
const { Op } = require('sequelize')
const { Events } = require('pg')
   
// FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})




// FIND A SPECIFC BAND
bands.get('/: name', async (req, res) => {
    try{
        const foundBand = await Band.findOne({
            where: {name: req.paramas.name},
            include:[ {
                model: meet_greet,
                 as: "meet_greet"},
                 include, {
                    model: Events,
                    as: "events",
                    where: {
                        name: { [op.like]: `%$(req.query.event ? req.query.event :''}`}
                    }
                 },
                 {
                    model: set_time,
                    as: "set_time",
                    include: {
                        model: Event,
                        as: "event",
                        where: {
                            name: { [op.like]: `%$(req.query.event ? req.query.event :''}`}
                        }
                    }
                 }
                ],
        })
        console.log (foundBand)
        if (foundBand == null) {
            res.status (404).json ("Band not found.")
        } else  {
            res.status (200).json (foundBand)
        }
        res.status(200).json (foundBand)
    } catch (error) {
        res.status (500).json (error)
    }
})


// CREATE A BAND
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = bands