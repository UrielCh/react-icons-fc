import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dislike icon from Devicons
 * @module
 */
export function FcDislike(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#F44336",d:"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"}},{tag:"rect",attr:{x:"22",y:"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)",fill:"#37474F","width":"4","height":"53.7"},child:[]}]})(props);
}
export default FcDislike;
