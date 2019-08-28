let app = new Vue({
    el: '#taskApp',
    data: {
        nameApp: 'MIS NOTAS',
        tasks:[
            {   
                id: 1,
                titulo: 'Assign a handler for uncaught errors during component render function and watchers. The handler gets called with the error and the Vue instance.',
                done: true
            },
            {   
                id: 2,
                titulo: 'Returns a Promise if no callback is provided and Promise is supported in the execution environment.',
                done: false
            },
            {
                id: 3,
                titulo: 'Install a Vue.js plugin. If the plugin is an Object, it must expose an install method. If it is a function itself, it will be treated as the install method. ',
                done: true
            },
            {
                id: 4,
                titulo: 'The data object for the Vue instance. Vue will recursively convert its properties into getter/setters to make it “reactive”.',
                done: false
            }
        ],
    },
    methods: {
            Eliminar: function(task){
                this.tasks.splice(this.tasks.indexOf(task),1)
               console.log()
            },
            addTask: function(tasks){
                if(this.tasks.titulo.trim() !== "" && this.tasks.titulo !== undefined){
                    console.log(this.tasks.titulo )
                this.tasks.reverse().push({
                       titulo: this.tasks.titulo
                })
                this.tasks.reverse();
               this.tasks.titulo = '';
                }
            },
            
        }
})