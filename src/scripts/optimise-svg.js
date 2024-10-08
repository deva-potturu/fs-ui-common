import { svgOptimizer } from '../utils/svg-optimiser.js';

const stagedSvgFiles = process.argv.slice(2);
const inlineSVGSourceDirectory = ['public/assets/inline-svgs'];
const rootDirectory = '';

svgOptimizer({ stagedSvgFiles, inlineSVGSourceDirectory, rootDirectory });