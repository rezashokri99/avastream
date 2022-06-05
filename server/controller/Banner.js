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
    //   console.log(films);
    return { banners, count: bannersCount };
  };


const updateBanner = async ({ bannerId, banner, film, show }) => {
    if (!bannerId) {
      return { status: 400, message: "banner_id_is_not_defined" };
    } else {
      const update = await Banner.findByIdAndUpdate(
        bannerId,
        { banner, film, show },
        { new: true }
      );
      console.log(update);
      return { status: 200, data: update };
    }
  };
  
  const deleteBanner = async ({ bannerId }) => {
    const dltBanner = await Banner.findByIdAndDelete(bannerId);
  
    if (!bannerId) {
      return { status: 400, message: "banner_id_is_not_defined" };
    } else {
      return { status: 200, data: dltBanner };
    }
  };

module.exports = {
    createBanners,
    getBanners,
    updateBanner,
    deleteBanner
}