import config from '../../config'
let dict_apt = {}
let url = global.MeetingSet + '/dict'
// 带页数获取案件类型，若不输入页码则页数默认为1，pagesize默认为10
dict_apt.add_dict = function (form, data) {
    return this.post(url + '/add_dict', form, data)
}
dict_apt.search_dict_list = function (form, data) {
    return this.post(url + '/search_dict_list', form, data)
}
dict_apt.del_dict = function (form, data) {
    return this.post(url + '/del_dict', form, data)
}
dict_apt.change_dict = function (form, data) {
    return this.post(url + '/change_dict', form, data)
}
dict_apt.search_dict = function (form, data) {
    return this.post(url + '/search_dict', form, data)
}

// 调用get方法
dict_apt.get = function (Url, form) {
    return form.axios.get(Url)
}
// 调用post方法
dict_apt.post = function (Url, form, data) {
    return form.axios.post(Url, data)
}

export default dict_apt
