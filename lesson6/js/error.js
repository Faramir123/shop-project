Vue.component('errors', {
    template: `<p v-show="$parent.error">Ошибка соединения с сервером</p>`
})