import config from '../../config'
let link_api = {}
let url = global.MeetingSet + '/link'
// 带页数获取案件类型，若不输入页码则页数默认为1，pagesize默认为10
link_api.add_friendlyLink = function (form, data) {
    return this.post(url + '/add_friendlyLink', form, data)
}
link_api.search_friendlyLink_list = function (form, data) {
    return this.post(url + '/search_friendlyLink_list', form, data)
}
link_api.del_friendlyLink = function (form, data) {
    return this.post(url + '/del_friendlyLink', form, data)
}
link_api.change_friendlyLink = function (form, data) {
    return this.post(url + '/change_friendlyLink', form, data)
}
link_api.search_friendlyLink = function (form, data) {
    return this.post(url + '/search_friendlyLink', form, data)
}

// 调用get方法
link_api.get = function (Url, form) {
    return form.axios.get(Url)
}
// 调用post方法
link_api.post = function (Url, form, data) {
    return form.axios.post(Url, data)
}

export default link_api
