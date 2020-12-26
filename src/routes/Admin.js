import React, { useState } from 'react';
import { dbService } from 'fbase';

const Admin = () => {
  const [subject, setSubject] = useState("");
  const [url, setUrl] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dbService.collection('gallery').add({
      subject,
      url,
      createAt: Date.now(),
    });
    setSubject("");
    setUrl("");
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'subject') {
      setSubject(value);
    } else if (name === 'url') {
      setUrl(value);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="subject" onChange={onChange} value={subject} placeholder="please input gallery subject"/>
        <input type="text" name="url" onChange={onChange} value={url} placeholder="please input gallery url"/>
        <input type="submit" value="Add Gallery"/>
      </form>
    </div>
  );
};

export default Admin;