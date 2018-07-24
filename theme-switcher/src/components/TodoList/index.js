import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
background: #0C0B0B;
color: #FFFFFF;
font-family: sans-sarif;
font-size: 18px;

li {
line-height: 36px; 
}
`;

const TodoList = () => (
	<List>
		<li>Make coffee</li>
		<li>To study</li>
		<li>ReactJS</li>
	</List>
	);

export default TodoList;