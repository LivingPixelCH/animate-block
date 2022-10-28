import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import AOS from "aos";
import "aos/dist/aos.css";

export default function save() {
	return (
		<div {...useBlockProps.save()} data-aos="fade-up">
			<InnerBlocks.Content />
		</div>
	);
}
