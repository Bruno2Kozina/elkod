import Link from 'next/link'
import {
	CategoryTitle,
	ContentContainer,
	MainContainer,
	Services,
	SingleCategory,
	SingleService,
	SingleServiceData,
	SingleServiceDataDesc,
	SingleServiceDataTitle,
	Title,
	ViewServices
} from './ServicesSection.style'
import { StructuredDataIcon, RunIcon, NetworkChartIcon, PeopleIcon, TargetIcon, SearchIcon, UXIcon, ArrowRightIcon } from 'icons'

export const ServicesSection = () => {
	return (
		<MainContainer>
			<ContentContainer>
				<Title>
					Services <b>we offer</b>
				</Title>
				<SingleCategory>
					<CategoryTitle>Business Development</CategoryTitle>
					<Services>
						<SingleService>
							<NetworkChartIcon />
							<SingleServiceData>
								<SingleServiceDataTitle>Lead Generation</SingleServiceDataTitle>
								<SingleServiceDataDesc>Crafting and optimizing targeted campaigns to attract valuable prospects.</SingleServiceDataDesc>
							</SingleServiceData>
						</SingleService>
						<SingleService>
							<StructuredDataIcon />
							<SingleServiceData>
								<SingleServiceDataTitle>Lead Nurturing</SingleServiceDataTitle>
								<SingleServiceDataDesc>
									Utilising customised content to advance leads&apos; sales readiness with each interaction.
								</SingleServiceDataDesc>
							</SingleServiceData>
						</SingleService>
						<SingleService>
							<RunIcon />
							<SingleServiceData>
								<SingleServiceDataTitle>Account Management</SingleServiceDataTitle>
								<SingleServiceDataDesc>Proactive account management that ensures optimal value and growth alignment.</SingleServiceDataDesc>
							</SingleServiceData>
						</SingleService>
					</Services>
				</SingleCategory>
				<SingleCategory>
					<CategoryTitle>Growth</CategoryTitle>
					<Services>
						<SingleService>
							<PeopleIcon />
							<SingleServiceData>
								<SingleServiceDataTitle>User Acquisition</SingleServiceDataTitle>
								<SingleServiceDataDesc>Acquiring high-value users through custom-crafted advertising strategies.</SingleServiceDataDesc>
							</SingleServiceData>
						</SingleService>
						<SingleService>
							<TargetIcon />
							<SingleServiceData>
								<SingleServiceDataTitle>User Engagement</SingleServiceDataTitle>
								<SingleServiceDataDesc>
									Multi-channel engagement strategies that keep your users retained and active at each step of the lifecycle.
								</SingleServiceDataDesc>
							</SingleServiceData>
						</SingleService>
					</Services>
					<Services>
						<SingleService>
							<SearchIcon />
							<SingleServiceData>
								<SingleServiceDataTitle>Product Analytics</SingleServiceDataTitle>
								<SingleServiceDataDesc>
									Fueling product growth with insights gathered through in-depth analyses and custom real-time dashboards.
								</SingleServiceDataDesc>
							</SingleServiceData>
						</SingleService>
						<SingleService>
							<UXIcon />
							<SingleServiceData>
								<SingleServiceDataTitle>UX Research</SingleServiceDataTitle>
								<SingleServiceDataDesc>
									Applying user-centered design through comprehensive UX research and competitive analysis.
								</SingleServiceDataDesc>
							</SingleServiceData>
						</SingleService>
					</Services>
				</SingleCategory>
				<Link href="/services" style={{ textDecoration: 'none' }}>
					<ViewServices>
						<span>View services</span>
						<ArrowRightIcon />
					</ViewServices>
				</Link>
			</ContentContainer>
		</MainContainer>
	)
}
