import config from '../../config'
let cooperate_api = {}
let url = global.MeetingSet + '/cooperate'
// 带页数获取案件类型，若不输入页码则页数默认为1，pagesize默认为10
cooperate_api.add_cooperate = function (form, data) {
    return this.post(url + '/add_cooperate', form, data)
}
cooperate_api.search_cooperate_list = function (form, data) {
    return this.post(url + '/search_cooperate_list', form, data)
}
cooperate_api.del_cooperate = function (form, data) {
    return this.post(url + '/del_cooperate', form, data)
}
cooperate_api.change_cooperate = function (form, data) {
    return this.post(url + '/change_cooperate', form, data)
}
cooperate_api.search_cooperate = function (form, data) {
    return this.post(url + '/search_cooperate', form, data)
}

// 调用get方法
cooperate_api.get = function (Url, form) {
    return form.axios.get(Url)
}
// 调用post方法
cooperate_api.post = function (Url, form, data) {
    return form.axios.post(Url, data)
}

export default cooperate_api
