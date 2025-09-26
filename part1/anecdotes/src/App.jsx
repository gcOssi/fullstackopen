import { useState } from 'react'

const Title= ({ children }) => (<h2>{children}</h2>)
const Button = ({ onClick, children }) => (<button onClick={onClick}>{children}</button>)
const AnecdoteText = ({ text }) => (<p>{text}</p>)
const VoteInfo = ({ count }) =>(<p>has {count} votes</p>)

const CurrentAnecdoteSection = ({ text, voteCount, onVote, onNext }) => {
  return (
    <section>
      <Title>Anecdote of the day</Title>
      <AnecdoteText text={text} />
      <VoteInfo count={voteCount} />
      <div>
        <Button onClick={onVote}>vote</Button>
        <Button onClick={onNext}>next anecdote</Button>
      </div>
    </section>
  );
}

const TopAnecdoteSection = ({ text, votes }) => {
  return (
    <section>
      <Title>Anecdote with most votes</Title>
      {votes === 0 ? (
        <p>No votes yet</p>
      ) : (
        <>
          <AnecdoteText text={text} />
          <VoteInfo count={votes} />
        </>
      )}
    </section>
  );
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const next = () => {
    const i = Math.floor(Math.random() * anecdotes.length)
    setSelected(i)
  }
  
  const vote = () => {
    setVotes((prev) => {
      const copy = [...prev]
      copy[selected] += 1
      return copy
    })
  }
  
  const maxVotes = Math.max(...votes)
  const topIndex = votes.indexOf(maxVotes)

  return (
<div>
      <CurrentAnecdoteSection
        text={anecdotes[selected]}
        voteCount={votes[selected]}
        onVote={vote}
        onNext={next}
      />

      <TopAnecdoteSection
        text={anecdotes[topIndex]}
        votes={maxVotes}
      />
    </div>
  )
}

export default App