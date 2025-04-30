import { P } from 'components/headings/Headings.style'
import { DescriptionContainer, ContentContainer, MainContainer } from './DescriptionSection.style'

export const DescriptionSection = () => {
	return (
		<MainContainer>
			<ContentContainer>
				<DescriptionContainer isReverseFlex={false}>
					<P>
						Društvo KOZINA PROJEKTI d.o.o. osnovano je 2002.g. Osnovna djelatnost društva je konzalting i inženjering na području niskogradnje i
						visokogradnje, izrada investicijske dokumentacije i nadzor nad gradnjom. Stalno je zaposleno 9 inženjera građevinarstva, tajnica te broj
						vanjskih suradnika koji varira u ovisnosti o vrsti ugovorenog posla.
					</P>
				</DescriptionContainer>
			</ContentContainer>
		</MainContainer>
	)
}
