import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import AOS from "aos";
import "aos/dist/aos.css";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { animation, duration, delay, offset } = attributes;

	useEffect(() => {
		AOS.init();
	});

	return (
		<>
			<InspectorControls key="aos-settings">
				<Panel header={__("Settings", "animate-block")}>
					<PanelBody title={__("Settings", "animate-block")} initialOpen={true}>
						<PanelRow>
							<SelectControl
								label={__("Animation", "animate-block")}
								value={animation}
								options={[
									{ label: "Fade up", value: "fade-up" },
									{ label: "Fade down", value: "fade-down" },
									{ label: "Fade right", value: "fade-right" },
									{ label: "Fade left", value: "fade-left" },
									{ label: "Fade up right", value: "fade-up-right" },
									{ label: "Fade up left", value: "fade-up-left" },
									{ label: "Fade down right", value: "fade-down-right" },
									{ label: "Fade down left", value: "fade-down-left" },
									{ label: "Flip left", value: "flip-left" },
									{ label: "Flip right", value: "flip-right" },
									{ label: "Flip up", value: "flip-up" },
									{ label: "Zoom in", value: "zoom-in" },
									{ label: "Zoom in up", value: "zoom-in-up" },
									{ label: "Zoom in down", value: "zoom-in-down" },
									{ label: "Zoom in left", value: "zoom-in-left" },
									{ label: "Zoom in right", value: "zoom-in-right" },
									{ label: "Zoom out", value: "zoom-out" },
									{ label: "Zoom out up", value: "zoom-out-up" },
									{ label: "Zoom out down", value: "zoom-out-down" },
									{ label: "Zoom out right", value: "zoom-out-right" },
									{ label: "Zoom out left", value: "zoom-out-left" },
								]}
								onChange={(animation) => setAttributes({ animation })}
							/>
						</PanelRow>

						<PanelRow>
							<NumberControl
								label={__("Duration", "animate-block")}
								isShiftStepEnabled={true}
								onChange={(duration) => setAttributes({ duration })}
								shiftStep={10}
								value={duration}
							/>
						</PanelRow>

						<PanelRow>
							<NumberControl
								label={__("Delay", "animate-block")}
								isShiftStepEnabled={true}
								onChange={(delay) => setAttributes({ delay })}
								shiftStep={10}
								value={delay}
							/>
						</PanelRow>

						<PanelRow>
							<NumberControl
								label={__("Offset", "animate-block")}
								isShiftStepEnabled={true}
								onChange={(offset) => setAttributes({ offset })}
								shiftStep={10}
								value={offset}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div
					data-aos={animation}
					data-aos-duration={duration}
					data-aos-delay={delay}
					data-aos-offset={offset}
				>
					<InnerBlocks />
				</div>
			</div>
		</>
	);
}
