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
    ]
  },
  methods: {
    findTask (id) {
      return this.todos.find((task) => task.id == id)
    },
    addTask () {
      const ipnutEl = this.$refs.taskInput;
      if (ipnutEl.value) {
        const taskId = this.todos.length + 1;
        this.todos.push({
          id: taskId,
          text: ipnutEl.value,
          isDone: false,
          isDeleted: false
        });
        ipnutEl.value = '';
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
