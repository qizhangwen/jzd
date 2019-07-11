import config from '../../config'
let council_api = {}
let url = global.MeetingSet + '/council'
// 带页数获取案件类型，若不输入页码则页数默认为1，pagesize默认为10
council_api.add_council = function (form, data) {
    return this.post(url + '/add_council', form, data)
}
council_api.search_council_list = function (form, data) {
    return this.post(url + '/search_council_list', form, data)
}
council_api.del_council = function (form, data) {
    return this.post(url + '/del_council', form, data)
}
council_api.change_council = function (form, data) {
    return this.post(url + '/change_council', form, data)
}
council_api.search_council = function (form, data) {
    return this.post(url + '/search_council', form, data)
}

// 调用get方法
council_api.get = function (Url, form) {
    return form.axios.get(Url)
}
// 调用post方法
council_api.post = function (Url, form, data) {
    return form.axios.post(Url, data)
}

export default council_api
