import config from '../../config'
let expert_library_api = {};
let url = global.MeetingSet + '/expert_library';
// 带页数获取案件类型，若不输入页码则页数默认为1，pagesize默认为10
expert_library_api.add_expert_library = function (form, data) {
    return this.post(url + '/add_expert_library', form, data)
}
expert_library_api.search_expert_library_list = function (form, data) {
    return this.post(url + '/search_expert_library_list', form, data)
}
expert_library_api.del_expert_library = function (form, data) {
    return this.post(url + '/del_expert_library', form, data)
}
expert_library_api.change_expert_library = function (form, data) {
    return this.post(url + '/change_expert_library', form, data)
}
expert_library_api.search_expert_library = function (form, data) {
    return this.post(url + '/search_expert_library', form, data)
}

// 调用get方法
expert_library_api.get = function (Url, form) {
    return form.axios.get(Url)
}
// 调用post方法
expert_library_api.post = function (Url, form, data) {
    return form.axios.post(Url, data)
}

export default expert_library_api
