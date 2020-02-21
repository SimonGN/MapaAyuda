import styled from 'styled-components';

const ButtonStyle = styled.button`
	border: none;
	padding: 15px 20px;
	display: inline-block;
	width: ${props => (props.width ? props.width : 'auto')};
	background-color: ${props => (props.backgroundColor ? props.backgroundColor : props.theme.colors.indigo)};
	border-radius: 8px;
	display: flex;
	justify-content: center;
	cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
	font-family: ${props => (props.light ? 'GT-Regular' : 'GT–Medium')};
	color: ${props => (props.color ? props.color : props.theme.colors.dark80)};
	font-style: normal;
	font-size: ${props => (props.size ? props.size : '14px')};
	line-height: 20px;
	letter-spacing: 0.2px;
	text-align: center;
	&:focus {
		outline: none;
	}

	@media only screen and (min-width: 415px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		display: inline-block;
		padding: 14px 35px;
	}
`;

export { ButtonStyle };
