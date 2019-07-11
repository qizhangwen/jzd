<template>
    <div>
        <div class="quill-wrap">

            <quill-editor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption">
            </quill-editor>
        </div>
    </div>
</template>

<script>
// 可参考
// https://www.awesomes.cn/repo/surmon-china/vue-quill-editor
// https://surmon-china.github.io/vue-quill-editor/
// https://www.npmjs.com/package/quill-image-extend-module
import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

Quill.register('modules/ImageExtend', ImageExtend)
export default {
  components: {quillEditor},
  props: ['type','content'],
  data () {
    return {
      // 富文本框参数设置
      editorOption: {
        theme: 'bubble',
        placeholder: "加载中...",
        readOnly: true,
        modules: {
          // toolbar: [
          //     ['bold', 'italic', 'underline', 'strike'],
          //     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          //     [{ 'color': [] }, { 'background': [] }],
          //     [{ 'font': [] }],
          //     [{ 'align': [] }],
          //     ['link', 'image'],
          //     ['clean']
          // ]
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        }
      }
    }
  },

  watch: {

  },
  methods: {
    onEditorFocus (editor, type) { // 富文本获得焦点时的事件
      console.log('我是type' + type)
      if (type == 88 || type == 3 || type == 7 || type == 5) {
        console.log('我是type')
        // console.log(editor); // 富文本获得焦点时的内容
        editor.enable(false) // 在获取焦点的时候禁用
      }
    }
  }
}
</script>

<style scoped>

</style>
