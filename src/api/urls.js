const urls = {
    blog: 'https://www.hilltop.ge/api/blog/?page=1',
    // blog: (pageNum) => `https://www.hilltop.ge/api/blog/?page=${pageNum}`,
    blogDetail: (slug) => `https://www.hilltop.ge/api/blog/${slug}`,
    slider: 'https://www.hilltop.ge/api/slider/',
    roomTypes: 'https://www.hilltop.ge/api/room-types/',
    service: 'https://www.hilltop.ge/api/service/',
    about: 'https://www.hilltop.ge/api/about/',
    contact: 'https://www.hilltop.ge/api/contact/'
}

export default urls