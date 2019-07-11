import config from '../../config'
let join_us_api = {}
let url = global.MeetingSet + '/join_us'
// 带页数获取案件类型，若不输入页码则页数默认为1，pagesize默认为10
join_us_api.add_join_us = function (form, data) {
    return this.post(url + '/add_join_us', form, data)
}
join_us_api.search_join_us_list = function (form, data) {
    return this.post(url + '/search_join_us_list', form, data)
}
join_us_api.del_join_us = function (form, data) {
    return this.post(url + '/del_join_us', form, data)
}
join_us_api.change_join_us = function (form, data) {
    return this.post(url + '/change_join_us', form, data)
}
join_us_api.search_join_us = function (form, data) {
    return this.post(url + '/search_join_us', form, data)
}

// 调用get方法
join_us_api.get = function (Url, form) {
    return form.axios.get(Url)
}
// 调用post方法
join_us_api.post = function (Url, form, data) {
    return form.axios.post(Url, data)
}

export default join_us_api
