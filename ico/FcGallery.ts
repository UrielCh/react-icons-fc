import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gallery icon from Devicons
 * @module
 */
export function FcGallery(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#E65100",d:"M41,42H13c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C45,40.2,43.2,42,41,42z"}},{tag:"path",attr:{fill:"#F57C00",d:"M35,36H7c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C39,34.2,37.2,36,35,36z"},child:[]},{tag:"circle",attr:{fill:"#FFF9C4","cx":"30","cy":"16","r":"3"},child:[]},{tag:"polygon",attr:{fill:"#942A09","points":"17,17.9 8,31 26,31"},child:[]},{tag:"polygon",attr:{fill:"#BF360C","points":"28,23.5 22,31 34,31"},child:[]}]})(props);
}
export default FcGallery;
