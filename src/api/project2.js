const Projects = [
  {
    username: 'Dessie',
    name: '北京隧道项目1',
    range: '1-200',
    progress: 20,
    color: 'pink',
    id: '1',
  },
  {
    username: 'Jakayla',
    name: '北京隧道项目2',
    range: '1-200',
    progress: 70,
    color: 'success',
    id: '2',
  },
  {
    username: 'Ludwiczakpawel',
    name: '北京隧道项目3',
    range: '1-200',
    progress: 50,
    color: 'info',
    id: '3',
  },
  {
    username: 'Damenleeturks',
    name: '北京隧道项目4',
    range: '1-200',
    progress: 30,
    color: 'teal',
    id: '4',
  },
  {
    username: 'Caspergrl',
    name: '北京隧道项目5',
    range: '1-200',
    progress: 15,
    color: 'grey',
    id: '5',
  },
]

const getProject = limit => {
  return limit ? Projects.slice(0, limit) : Projects
}

export { Projects, getProject }
