new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({

        drawer: null,
        items: [
            {text: 'Note', icon: 'mdi-microsoft-onenote'},
            {text: 'Movies', icon: 'mdi-filmstrip'},

        ],

        admins: [
            ['Management', 'mdi-account-multiple-outline'],
            ['Settings', 'mdi-cog-outline'],
        ],
        cruds: [
            ['Create', 'mdi-plus-outline'],
            ['Read', 'mdi-file-outline'],
            ['Update', 'mdi-update'],
            ['Delete', 'mdi-delete'],
        ],

        page: 1,
    }),
    mounted: function () {
        this.getCurrentPage();

    },
    methods: {
        // 跳转页面上一页或下一页
        jumpPage(url) {
            window.location.href = '/' + url
        },
        // 获取当前页码
        getCurrentPage() {
            console.log(window.location.href)
            // this.page = parseInt(window.location.href.substr(-2, 1))
            //正则匹配url中的页码
            let currentPageArray = window.location.href.match(/page\/(\S*)\//)
            console.log(currentPageArray)

            if (currentPageArray && currentPageArray.length !== 0) {
                this.page = parseInt(currentPageArray[1])
            }

        },
        // 切换到准确页面
        onPageChange() {
            let page = this.page;
            let url = window.location.href
            // 如果跳转到第一页删除 '/page/1'
            if (page === 1) {
                window.location.href = url.replace(/page\/(\S*)\//, "")
                return false
            }
            let jumpurl = url.replace(/page\/(\S*)\//, "/page/" + page)
            // 第一页没有'/page/1/'
            if (url === jumpurl) {
                window.location.href = url + 'page/' + page;
            } else {
                window.location.href = jumpurl
            }
        }

    }


})
