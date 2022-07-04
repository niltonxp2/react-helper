import React from 'react';

const defaultValuesByTopic: Record<string, string> = {
  training: 'I would like some training',
  consulting: 'I have consulting needs',
  question: 'I have some questions',
};

export const ReactKey = () => {
  const [topic, setTopic] = React.useState('training');

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        margin: '0 auto',
        paddingTop: 100,
      }}
    >
      <label htmlFor="topic">Topic</label>
      <select id="topic" value={topic} onChange={e => setTopic(e.target.value)}>
        <option value="training">Training</option>
        <option value="consulting">Consulting</option>
        <option value="question">Question</option>
      </select>
      <label htmlFor="subject">Email Subject</label>
      <input
        id="subject"
        key={topic} // with key react can handle updates right
        defaultValue={defaultValuesByTopic[topic]}
      />
      <label htmlFor="body">Email body</label>
      <textarea id="body" />
    </form>
  );
};
