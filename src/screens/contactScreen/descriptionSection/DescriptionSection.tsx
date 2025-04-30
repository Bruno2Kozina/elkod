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
							<span>Ured +385 21 487 222</span>
						</ContactSingleInfo>
						<ContactSingleInfo>
							<MailIcon />
							<span>Fax: +385 21 314 368</span>
						</ContactSingleInfo>
						<ContactSingleInfo>
							<MailIcon />
							<span>Boško Kozina +385 98 280 511</span>
						</ContactSingleInfo>
					</SingleData>
					<SingleData>
						<h3>email</h3>
						<ContactSingleInfo>
							<MailIcon />
							<span>kozinaprojekti@kozinaprojekti.hr</span>
						</ContactSingleInfo>
						<ContactSingleInfo>
							<MailIcon />
							<span>bosko.kozina@kozinaprojekti.hr</span>
						</ContactSingleInfo>
					</SingleData>
					<SingleData>
						<h3>radno vrijeme</h3>
						<ContactSingleInfo>
							<MailIcon />
							<span>Ponedjeljak – Petak 8 - 16</span>
						</ContactSingleInfo>
					</SingleData>
				</DescriptionContainer>
			</ContentContainer>
		</MainContainer>
	)
}
