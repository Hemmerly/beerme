const Sequelize = require('sequelize')
const db = require('../db')

const Beer = db.define('beer', {
beer_name:{
    type: Sequelize.STRING
},
brewery_name:{
    type: Sequelize.STRING
},
beer_type:{
    type: Sequelize.STRING
},
beer_abv:{
    type: Sequelize.DECIMAL
},
beer_ibu:{
    type: Sequelize.SMALLINT
},
comment:{
    type: Sequelize.TEXT
},
venue_name:{
    type: Sequelize.STRING
},
venue_city:{
    type: Sequelize.STRING
},
venue_state:{
    type: Sequelize.STRING
},
venue_country:{
    type: Sequelize.STRING
},
venue_lat:{
    type: Sequelize.DECIMAL
},
venue_lng:{
    type: Sequelize.DECIMAL
},
rating_score:{
    type: Sequelize.DECIMAL
},
created_at:{
    type: Sequelize.TIME
},
checkin_url:{
    type: Sequelize.STRING
},
beer_url:{
    type: Sequelize.STRING
},
brewery_url:{
    type: Sequelize.STRING
},
brewery_country:{
    type: Sequelize.STRING
},
brewery_city:{
    type: Sequelize.STRING
},
brewery_state:{
    type: Sequelize.STRING
},
flavor_profiles:{
    type: Sequelize.STRING
},
purchase_venue:{
    type: Sequelize.STRING
},
serving_type:{
    type: Sequelize.STRING
},
checkin_id:{
    type: Sequelize.INTEGER
},
bid:{
    type: Sequelize.INTEGER
},
brewery_id:{
    type: Sequelize.INTEGER
},
photo_url:{
    type: Sequelize.STRING
},
global_rating_score:{
    type: Sequelize.DECIMAL
},
global_weighted_rating_score:{
    type: Sequelize.DECIMAL
},
createdAt:{
    type: Sequelize.STRING
},
updatedAt:{
    type: Sequelize.STRING
}
})

module.exports = Beer