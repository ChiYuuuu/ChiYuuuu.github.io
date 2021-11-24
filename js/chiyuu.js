new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({

        drawer: null,
        items: [
            { text: 'Note', icon: 'mdi-microsoft-onenote' },
            { text: 'Movies', icon: 'mdi-filmstrip' },

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
    })

})
