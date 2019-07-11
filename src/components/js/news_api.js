import config from '../../config'
let news_api = {}
let url = global.MeetingSet + '/news'
// 带页数获取案件类型，若不输入页码则页数默认为1，pagesize默认为10
news_api.add_news = function (form, data) {
    return this.post(url + '/add_news', form, data)
}
news_api.search_news_list = function (form, data) {
    return this.post(url + '/search_news_list', form, data)
};
news_api.del_news = function (form, data) {
    return this.post(url + '/del_news', form, data)
}
news_api.change_news = function (form, data) {
    return this.post(url + '/change_news', form, data)
}
news_api.search_news = function (form, data) {
    return this.post(url + '/search_news', form, data)
}

// 调用get方法
news_api.get = function (Url, form) {
    return form.axios.get(Url)
}
// 调用post方法
news_api.post = function (Url, form, data) {
    return form.axios.post(Url, data)
}

export default news_api
