import { QuotesIcon } from 'icons/QuotesIcon'
import { SingleFeedbackContainer, ClientData, ClientJob, ClientName, ClientNameAndJob, ParagraphWrapper } from './ClientFeedback.style'
import { ReactNode } from 'react'
import Image from 'next/image'

interface Props {
	paragraph: ReactNode
	clientName: string
	clientJob: string
	img: any
}

export const SingleFeedback = ({ paragraph, clientName, clientJob, img }: Props) => {
	return (
		<SingleFeedbackContainer>
			<QuotesIcon />
			<ParagraphWrapper>{paragraph}</ParagraphWrapper>
			<ClientData>
				<Image src={img} alt="avatar img" width={40} height={40} />
				<ClientNameAndJob>
					<ClientName>{clientName}</ClientName>
					<ClientJob>{clientJob}</ClientJob>
				</ClientNameAndJob>
			</ClientData>
		</SingleFeedbackContainer>
	)
}
