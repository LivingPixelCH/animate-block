import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import "aos/dist/aos.css";

export default function save({ attributes }) {
	const {
		once,
		animation,
		duration,
		delay,
		offset,
		easing,
		anchor,
		anchorPlacement,
	} = attributes;

	return (
		<div
			{...useBlockProps.save()}
			data-aos={animation}
			data-aos-duration={duration}
			data-aos-delay={delay}
			data-aos-offset={offset}
			data-aos-once={once}
			data-aos-easing={easing}
			data-aos-anchor={anchor}
			data-aos-anchor-placement={anchorPlacement}
		>
			<InnerBlocks.Content />
		</div>
	);
}
