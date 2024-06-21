import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//useDispatch 객체는 dispatch로 재선언 후, dispatch 변수를 활용해 액션 호출
//redux의 액션 생성함수를 실행하여 리덕스 스토어에 변경된 상태값을 저장하기 위해서 useDispatch 리액트 훅을 통해 액션을 실행해야함
import { add } from '../../redux/todoSlice';

export default function InputTodo() {
  const dispatch = useDispatch();

  const [todoList, setTodoList] = useState({
    id: 0,
    text: '',
  });

  function handleText(e) {
    setTodoList({ text: e.target.value });
  }

  function onReset() {
    setTodoList({ text: '' });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todoList.text.trim() !== '') {
            dispatch(add(todoList.text));
          } else alert('할 일을 입력해주세요!');
          onReset();
        }}
      >
        <div>
          <input type="text" value={todoList.text} onChange={handleText} />
          <input type="submit" value="+" />
        </div>
      </form>
    </div>
  );
}
