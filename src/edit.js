import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import AOS from "aos";
import "aos/dist/aos.css";

import "./editor.scss";

export default function Edit() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div {...useBlockProps()} data-aos="fade-up">
			<InnerBlocks />
		</div>
	);
}
