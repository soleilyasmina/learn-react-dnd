export default {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Make sweet tunes' },
    'task-3': { id: 'task-3', content: 'Rock out' },
    'task-4': { id: 'task-4', content: 'Take down the government' },
  },
  columns: {
    'column-1' : {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    }
  },
  columnOrder: ['column-1'],
}
