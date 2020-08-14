const Projects = [
  {
    username: 'Dessie',
    name: 'Template PSD',
    deadline: '2 days later',
    progress: 90,
    color: 'pink',
    id: '1',
  },
  {
    username: 'Jakayla',
    name: 'Logo Design',
    deadline: '1 weeks later',
    progress: 70,
    color: 'success',
    id: '2',
  },
  {
    username: 'Ludwiczakpawel',
    name: 'REST API',
    deadline: '1 Month later',
    progress: 50,
    color: 'info',
    id: '3',
  },
  {
    username: 'Damenleeturks',
    name: 'API Unit Test',
    deadline: '2 Month later',
    progress: 30,
    color: 'teal',
    id: '4',
  },
  {
    username: 'Caspergrl',
    name: 'Project Deploy',
    deadline: 'half year later',
    progress: 15,
    color: 'grey',
    id: '5',
  },
]

const getProject = limit => {
  return limit ? Projects.slice(0, limit) : Projects
}

export { Projects, getProject }
