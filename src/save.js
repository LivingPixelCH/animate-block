import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import "aos/dist/aos.css";

export default function save({ attributes }) {
	const { once, animation, duration, delay, offset } = attributes;

	return (
		<div
			{...useBlockProps.save()}
			data-aos={animation}
			data-aos-duration={duration}
			data-aos-delay={delay}
			data-aos-offset={offset}
			data-aos-once={once}
		>
			<InnerBlocks.Content />
		</div>
	);
}
