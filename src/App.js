import React, { useState } from 'react';
import styled from 'styled-components';

import TodoApp from './Todo';
import Counter from './Counter';
import {Timer, Seconds} from './Timer';

const Main = styled.main`
  height: 100vh;
`;

function MountOrUnmount() {
  const [checkedApp, setCheckedApp] = useState(false);
  const [checkedTimer, setCheckedTimer] = useState(false);
  const [checkedTodo, setCheckedTodo] = useState(false);

  return (
    <Main>
      <label>
        Mount App or Unmount
        <input
          checked={checkedApp}
          onChange={() => {
            setCheckedApp(!checkedApp);
          }}
          type="checkbox"
        />
      </label>

      <label style={{ display: 'block' }}>
        Mount Timer or Unmount
        <input
          checked={checkedTimer}
          onChange={() => {
            setCheckedTimer(!checkedTimer);
          }}
          type="checkbox"
        />
      </label>

      <label style={{ display: 'block' }}>
        Mount Todo or Unmount
        <input
          checked={checkedTodo}
          onChange={() => {
            setCheckedTodo(!checkedTodo);
          }}
          type="checkbox"
        />
      </label>

      {checkedApp ? <Counter /> : null}
      {checkedTimer && <Timer />}
      {checkedTodo && <TodoApp />}
      <Seconds children={(currentSecond)=><div>Seconds:{currentSecond}</div>}/>
    </Main>
  );
}

export default MountOrUnmount;
