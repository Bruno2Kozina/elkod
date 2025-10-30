import { MailIcon } from 'icons'
import { DescriptionContainer, ContentContainer, MainContainer, SingleData, ContactSingleInfo } from './DescriptionSection.style'

export const DescriptionSection = () => {
	return (
		<MainContainer>
			<ContentContainer>
				<DescriptionContainer>
					<SingleData>
						<h3>telefon</h3>
						<ContactSingleInfo>
							<MailIcon />
							<span>Damir Kozina +385 95 586 3015</span>
						</ContactSingleInfo>
					</SingleData>
					<SingleData>
						<h3>email</h3>
						<ContactSingleInfo>
							<MailIcon />
							<span>damir.kozina@st.t‐com.hr</span>
						</ContactSingleInfo>
						<ContactSingleInfo>
							<MailIcon />
							<span>damirkozina11@gmail.com</span>
						</ContactSingleInfo>
					</SingleData>
				</DescriptionContainer>
			</ContentContainer>
		</MainContainer>
	)
}
