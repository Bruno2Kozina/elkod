import { ReactNode } from 'react'
import avatarImg from 'public/images/clientAvatarExample.png'
import avatarImg2 from 'public/images/Nowfactor logo.svg'
import avatarImg3 from 'public/images/logo3.png'

export const clientFeedbacks: {
	paragraph: ReactNode
	clientName: string
	clientJob: string
	img: any
}[] = [
	{
		paragraph: (
			<div>
				<b>Their expertise and knowledge of tools were extremely valuable to our company</b>. Thanks to the ReadyScale team, the client successfully
				built a network of over 300 app publishers.
			</div>
		),
		clientName: 'Doris Calic',
		clientJob: 'Growth Executive @REVLUM',
		img: avatarImg
	},
	{
		paragraph: (
			<div>
				<b>All of their efforts are carefully planned and communicated with us</b>. Thanks to ReadyScale&apos;s work, the client has garnered five new
				end customers and generated other leads.
			</div>
		),
		clientName: 'Denis Buric',
		clientJob: 'CEO @Nowfactor',
		img: avatarImg2
	},
	{
		paragraph: (
			<div>
				Data-driven and analytical,
				<b> they carefully plan and communicate their efforts and provide reliable</b> top-notch business development guidance in support of the
				client&apos;s success.
			</div>
		),
		clientName: 'Teo Toplak',
		clientJob: 'FOUNDER @JAYONE',
		img: avatarImg3
	}
]
