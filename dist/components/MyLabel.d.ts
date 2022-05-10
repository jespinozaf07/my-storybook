/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * label contents
     */
    label: string;
    /**
     * Size label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize label
     */
    allCaps: boolean;
    /**
     * Color label
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Font-Color label
     */
    fontColor?: string;
    /**
     * Background Color label
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
