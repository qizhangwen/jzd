import config from '../../config'
let search_api = {}
let url = global.MeetingSet + '/meeting'
// 带页数获取案件类型，若不输入页码则页数默认为1，pagesize默认为10
search_api.add_meeting = function (form, data) {
  return this.post(url + '/add_meeting', form, data)
}
search_api.search_meeting_list = function (form, data) {
  return this.post(url + '/search_meeting_list', form, data)
}
search_api.del_meeting = function (form, data) {
  return this.post(url + '/del_meeting', form, data)
}
search_api.change_meeting = function (form, data) {
  return this.post(url + '/change_meeting', form, data)
}
search_api.search_meeting = function (form, data) {
  return this.post(url + '/search_meeting', form, data)
}

// 调用get方法
search_api.get = function (Url, form) {
  return form.axios.get(Url)
}
// 调用post方法
search_api.post = function (Url, form, data) {
  return form.axios.post(Url, data)
}

export default search_api
