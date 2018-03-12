new Vue({
  el: '#vue-todo',
  data: {
    todos: [
      {
        id: 1,
        text: "Master of Puppets?",
        isDone: true,
        isDeleted: false
      },
      {
        id: 2,
        text: "Go to the Ozzy Osbourne's concert",
        isDone: false,
        isDeleted: false
      },
      {
        id: 3,
        text: "Buy the new 3DG's album",
        isDone: false,
        isDeleted: false
      }
    ],
    inputValue: ''
  },
  methods: {
    findTask (id) {
      return this.todos.find((task) => task.id == id)
    },
    addTask () {
      const text = this.inputValue;
      if (text) {
        const taskId = this.todos.length + 1;
        this.todos.push({
          id: taskId,
          text: this.inputValue,
          isDone: false,
          isDeleted: false
        });
        this.inputValue = '';
      }
    },
    markAsDone (taskId) {
      this.findTask(taskId).isDone = true;
    },
    deleteTask (taskId) {
      this.findTask(taskId).isDeleted = true;
    }
  }
})
