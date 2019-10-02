export default {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Make sweet tunes' },
    'task-3': { id: 'task-3', content: 'Rock out' },
    'task-4': { id: 'task-4', content: 'Take down the government' },
    'task-5': { id: 'task-5', content: 'Hang with Rachel and Stove' },
    'task-6': { id: 'task-6', content: 'Hoobis doobis' },
    'task-7': { id: 'task-7', content: 'Drink milkshake' },
    'task-8': { id: 'task-8', content: 'Take down another government' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'To do',
      taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
    }
  },
  columnOrder: ['column-1', 'column-2'],
}
