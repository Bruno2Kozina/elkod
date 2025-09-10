import Image from 'next/image'
import {
	MainContainer,
	Title,
	TitleContainer,
	BottomContainer,
	ClutchBox,
	ReviewsContainer,
	ClutchText,
	LogoWrapper,
	ClutchRating,
	StarsContainer,
	ContentContainer,
	Button
} from './ClientFeedback.style'
import clutchLogo from 'public/icons/Clutch.svg'
import { ArrowRightIcon, StarIcon } from 'icons'
import { SingleFeedback } from './SingleFeedback'
import { clientFeedbacks } from './data'
import { useScreenSize } from 'hooks'
import Link from 'next/link'
import { ViewServices } from '../servicesSection/ServicesSection.style'

export const ClientFeedback = () => {
	const { width } = useScreenSize()

	const nakedDivWidth = () => {
		if (width && width < 1440) {
			return 144
		} else {
			return width && (width - 1440) / 2 + 144
		}
	} // screen width - width of container divided by 2 + padding left (164px) - gap (20px)

	return (
		<MainContainer>
			<TitleContainer>
				<Title>
					What <b>Clients</b> Say About Us
				</Title>
				{width && width >= 1024 && (
					<Link href="https://clutch.co/profile/readyscale#reviews" target="_blank" style={{ textDecoration: 'none' }}>
						<Button>
							<span>Read all reviews</span>
							<ArrowRightIcon />
						</Button>
					</Link>
				)}
			</TitleContainer>
			<ContentContainer>
				<BottomContainer>
					{width && width > 1024 && <div style={{ minWidth: `${nakedDivWidth()}px`, maxWidth: `${nakedDivWidth()}px` }}></div>}
					<ClutchBox onClick={() => window.open('https://clutch.co/profile/readyscale#reviews', '_blank')}>
						<LogoWrapper>
							<ClutchText>Reviewed on</ClutchText>
							<Image src={clutchLogo} alt="clutch logo" />
						</LogoWrapper>
						<ClutchRating>
							<span>5.0</span>
							<StarsContainer>
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
							</StarsContainer>
						</ClutchRating>
						<ClutchText>
							The <b>quality of our work</b> is reflected in a <b>5.0 review rating</b> on <b>Clutch</b>
						</ClutchText>
					</ClutchBox>
					<ReviewsContainer>
						{clientFeedbacks.map(feedback => (
							<SingleFeedback
								key={feedback.clientName}
								clientName={feedback.clientName}
								clientJob={feedback.clientJob}
								img={feedback.img}
								paragraph={feedback.paragraph}
							/>
						))}
						{width && width > 1024 && <div style={{ minWidth: `${nakedDivWidth()}px`, maxWidth: `${nakedDivWidth()}px` }}></div>}
					</ReviewsContainer>
				</BottomContainer>
				{width && width < 1024 && (
					<Link href="https://clutch.co/profile/readyscale#reviews" target="_blank" style={{ textDecoration: 'none' }}>
						<ViewServices>
							<span>Read all reviews</span>
							<ArrowRightIcon />
						</ViewServices>
					</Link>
				)}
			</ContentContainer>
		</MainContainer>
	)
}
