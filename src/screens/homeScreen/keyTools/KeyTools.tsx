/* eslint-disable react/jsx-key */
import {
	AmplitudeLogo,
	ApolloIoLogo,
	BrazeLogo,
	CustomerIoLogo,
	GoogleAnalyticsLogo,
	HubSpotLogo,
	IterableLogo,
	KlaviyoLogo,
	LookerStudioLogo,
	MixPanelLogo,
	MoengageLogo,
	OutreachLogo,
	SalesforceLogo,
	TaskManagerLogo,
	ZoominfoLogo
} from 'icons'
import { ContentContainer, MainContainer, SingleLogo, Title, LogosContainer } from './KeyTools.style'

const logos: React.ReactNode[] = [
	<AmplitudeLogo />,
	<GoogleAnalyticsLogo />,
	<MixPanelLogo />,
	<TaskManagerLogo />,
	<LookerStudioLogo />,
	<BrazeLogo />,
	<IterableLogo />,
	<MoengageLogo />,
	<CustomerIoLogo />,
	<KlaviyoLogo />,
	<SalesforceLogo />,
	<HubSpotLogo />,
	<ApolloIoLogo />,
	<OutreachLogo />,
	<ZoominfoLogo />
]

export const KeyTools = () => {
	return (
		<MainContainer>
			<ContentContainer>
				<Title>
					<b>Key tools </b>we use
				</Title>
				<LogosContainer>
					{logos.map((logo, index) => (
						<SingleLogo key={index}>{logo}</SingleLogo>
					))}
				</LogosContainer>
			</ContentContainer>
		</MainContainer>
	)
}
