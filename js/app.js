
const todos =[
    {
        text: 'Fare i compiti',
        done: false
    },
    {
        text: 'Fare la spesa',
        done: false
    },
    {
        text: 'Buttare i pattumi',
        done: true
    },
    {
        text: 'Fare la doccia',
        done: false
    },
]

const app = new Vue({
    el: '#app',
    data: {
        todos,
        classiTodos: 'todo',
        newTodo: ''
    },
    computed:{

    },
    methods: {
        addTask(){
            this.newTodo = this.newTodo.trim()
            if(!this.newTodo) return

            this.todos.push({
                text: this.newTodo,
                done: false
            })
            this.newTodo = ''
        },
    }
})
