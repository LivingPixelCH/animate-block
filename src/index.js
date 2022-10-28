import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

import icons from "./icons.js";

registerBlockType(metadata.name, {
	icon: icons.block,
	edit: Edit,
	save,
});
