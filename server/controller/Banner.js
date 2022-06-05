const Banner = require('../model/banner')


const createBanners = async({film , banner , show}) => {
    const createdBanner = await Banner.create({
        film,
        banner,
        show
    })

    return createdBanner

}



module.exports = {
    createBanners
}