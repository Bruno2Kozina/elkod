import { people } from './data'
import { MainContainer } from './PeopleSection.style'
import SingleEmployer from './SingleEmployer'
import Image from 'next/image'
import TeamImg from 'public/images/TeamImg.jpeg'

export const PeopleSection = () => {
	return (
		<MainContainer>
			{people.map(person => (
				<SingleEmployer key={person.id} name={person.name} role={person.role} degree={person.degree} imageUrl={person.image} />
			))}
			<Image src={TeamImg} alt="TeamImg" layout="responsive" style={{ maxWidth: '80%', height: 'auto' }} />
		</MainContainer>
	)
}
