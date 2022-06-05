const Banner = require('../model/banner')


const createBanners = async ({ film, banner, show }) => {
    const createdBanner = await Banner.create({
        film,
        banner,
        show
    })

    return createdBanner

}

const BannersCount = async () => {
    const bannersCount = await Banner.countDocuments();

    return bannersCount;
};

const getBanners = async (params) => {
    const bannersCount = await BannersCount();

    const page = parseInt(params.page);
    const pageSize = parseInt(params.pageSize);
    const banners = await Banner.find({})
        .limit(pageSize)
        .skip(page === 1 ? 0 : (page - 1) * pageSize);

    return { banners, count: bannersCount };
}


module.exports = {
    createBanners,
    getBanners
}