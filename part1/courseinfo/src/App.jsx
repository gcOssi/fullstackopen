const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {

  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
    { props.parts.map((p) => (
      <Part name={p.name} exercises={p.exercises} />
    ))}
    </div>
  )
}

const Total = (props) => {
  let total = 0
  props.parts.forEach(p => {
  total += p.exercises
})

  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App