import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Document, Block, Inline } from '@contentful/rich-text-types'
import { JSX } from 'react'
import { RichTextContainer } from './RichText.style'

interface RenderOptions {
	renderNode: {
		[BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => JSX.Element
		[BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => JSX.Element
		[BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => JSX.Element
		[BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => JSX.Element | null
		[BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => JSX.Element
	}
}

const renderAsset = (node: Block | Inline) => {
	return (
		<img
			src={`https://${node.data.target.fields.file.url}`}
			height={node.data.target.fields.file.details.image.height}
			width={node.data.target.fields.file.details.image.width}
			alt={node.data.target.fields.description}
			style={{ maxWidth: '100%', objectFit: 'contain' }}
		/>
	)
}

const renderOptions: RenderOptions = {
	renderNode: {
		[BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
		[BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
		[BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
		[BLOCKS.EMBEDDED_ASSET]: node => renderAsset(node),
		[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
	}
}

export const RichText = ({ content }: { content?: Document }) => {
	if (!content) return null
	return <RichTextContainer>{documentToReactComponents(content, renderOptions)}</RichTextContainer>
}
