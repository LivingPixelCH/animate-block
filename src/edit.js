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
	CheckboxControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import easingOptions from "./options/easing";
import animationOptions from "./options/animation";
import AOS from "aos";
import "aos/dist/aos.css";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { once, animation, duration, delay, offset, easing } = attributes;

	useEffect(() => {
		AOS.init();
	});

	return (
		<>
			<InspectorControls key="aos-settings">
				<Panel header={__("Settings", "animate-block")}>
					<PanelBody title={__("Settings", "animate-block")} initialOpen={true}>
						<PanelRow>
							<CheckboxControl
								label={__("Play only once", "animate-block")}
								help={
									once
										? __("Animation plays only once", "animate-block")
										: __("Animation plays every time", "animate-block")
								}
								checked={once}
								onChange={(once) => setAttributes({ once })}
							/>
						</PanelRow>

						<PanelRow>
							<SelectControl
								label={__("Animation", "animate-block")}
								value={animation}
								options={animationOptions}
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

						<PanelRow>
							<SelectControl
								label={__("Easing", "animate-block")}
								value={easing}
								options={easingOptions}
								onChange={(easing) => setAttributes({ easing })}
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
					data-aos-once={once}
					data-aos-easing={easing}
				>
					<InnerBlocks />
				</div>
			</div>
		</>
	);
}
