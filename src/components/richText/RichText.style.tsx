import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const RichTextContainer = styled.div`
	font-weight: 300;
	color: #625f5f;
	padding: 16px;

	p {
		margin-bottom: 24px;
	}

	ul {
		padding-left: 60px;
		list-style-type: none;
		margin-bottom: 36px;

		li {
			padding-left: 10px;

			p {
				margin: 0px;
			}
		}
	}

	ul li::marker {
		content: '•';
		color: #000;
		font-size: 18px;
		font-weight: bold;
		padding-right: 8px;
	}
`
