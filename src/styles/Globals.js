import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
 * {
	box-sizing: border-box;
}

body {
	background-color: #694489;
	font-family: 'Open Sans', sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	margin: 0;
}


`;

export { Globals };
