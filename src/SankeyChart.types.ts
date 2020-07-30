import { ITheme, IStyle } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';
import * as d3Sankey from 'd3-sankey';


interface ISNodeExtra {
    nodeId: number | string;
    name: string;
    color: string;
  }
  
  interface ISLinkExtra {
    source: number;
    target: number;
    value: number;
  }

export type SNode = d3Sankey.SankeyNode<ISNodeExtra, ISLinkExtra>;
export type SLink = d3Sankey.SankeyLink<ISNodeExtra, ISLinkExtra>;

export interface ISankeyChartData {
    nodes: SNode[];
    links: SLink[];
  }

  export interface ILineChartDataPoint {
    /**
     * Independent value of the data point, rendered along the x-axis.
     * If x is a number, then each y-coordinate is plotted at its x-coordinate.
     * If data type on x is Date, then the data is spaced evenly by d3-scale
     */
    x: number | Date;
  
    /**
     * Dependent value of the data point, rendered along the y-axis.
     */
    y: number;
  
    /**
     * Defines the function that is executed on clicking  line
     */
    onDataPointClick?: () => void;
  
    /**
     * Callout data for x axis
     */
    xAxisCalloutData?: string;
  
    /**
     * Callout data for y axis
     */
    yAxisCalloutData?: string;
  }

export interface ILineChartPoints {
    /**
     * Legend text for the datapoint in the chart
     */
    legend: string;
  
    /**
     * dataPoints for the line chart
     */
    data: ILineChartDataPoint[];
  
    /**
     * color for the legend in the chart
     */
    color: string;
  
    /**
     * Defines the function that is executed on clicking this legend
     */
    onLegendClick?: (selectedLegend: string | null) => void;
  
    /**
     * Defines the function that is executed on clicking  line
     */
    onLineClick?: () => void;
  }
  

export interface IHorizontalDataPoint {
    /**
     * Independent value of the data point, rendered along the x-axis.
     * If x is a number, then each y-coordinate is plotted at its x-coordinate.
     * If x is a string, then the data is evenly spaced along the x-axis.
     */
    x: number;
  
    /**
     * Dependent value of the data point, rendered along the y-axis.
     */
    y: number;
  }

export interface IChartDataPoint {
    /**
     * Legend text for the datapoint in the chart
     */
    legend?: string;
  
    /**
     * data the datapoint in the chart
     */
    data?: number;
  
    /**
     * data the datapoint in the chart
     */
    horizontalBarChartdata?: IHorizontalDataPoint;
  
    /**
     * onClick action for each datapoint in the chart
     */
    onClick?: VoidFunction;
  
    /**
     * color for the legend in the chart
     */
    color?: string;
  
    /**
     * placeholder data point
     */
    placeHolder?: boolean;
  
    /**
     * Callout data for x axis
     * This is an optional prop, If haven;t given legend will take
     */
    xAxisCalloutData?: string;
  
    /**
     * Callout data for y axis
     * This is an optional prop, If haven't given data will take
     */
    yAxisCalloutData?: string;
  }

export interface IChartProps {
    /**
     * chart title for the chart
     */
    chartTitle?: string;
  
    /**
     * data for the points in the chart
     */
    chartData?: IChartDataPoint[];
  
    /**
     * data for the points in the line chart
     */
    lineChartData?: ILineChartPoints[];
  
    /**
     * data for the points in the line chart
     */
    SankeyChartData?: ISankeyChartData;
  }

export interface ISankeyChartProps {
  /**
   * Data to render in the chart.
   */
  data: IChartProps;

  /**
   * Width of the chart.
   */
  width?: number;

  /**
   * Height of the chart.
   */
  height?: number;

  /**
   * Additional CSS class(es) to apply to the SankeyChart.
   */
  className?: string;

  /**
   * Theme (provided through customization.)
   */
  theme?: ITheme;

  /**
   * Do not show tooltips in chart
   *
   * @default false
   */
  hideTooltip?: boolean;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<ISankeyChartStyleProps, ISankeyChartStyles>;

  /**
   * this prop takes its parent as a HTML element to define the width and height of the Sankey chart
   */
  parentRef?: HTMLElement | null;

  /**
   * should chart resize when parent resize.
   */
  shouldResize?: number;

  /**
   * Color for path
   */
  pathColor?: string;
}

export interface ISankeyChartStyleProps {
  theme: ITheme;
  className?: string;
  width: number;
  height: number;
  pathColor?: string;
  calloutColor?: string;
}

export interface ISankeyChartStyles {
  /**
   *  Style for the root element.
   */
  root?: IStyle;

  /**
   *  Style for the nodes.
   */
  nodes?: IStyle;

  /**
   *  Style for the links.
   */
  links?: IStyle;

  /**
   *  Style for the links.
   */
  path?: IStyle;

  /**
   * styles for callout root-content
   */
  calloutContentRoot?: IStyle;

  /**
   * styles for callout Date time container
   */
  calloutDateTimeContainer?: IStyle;

  /**
   * styles for callout Date time container
   */
  calloutInfoContainer?: IStyle;

  /**
   * styles for callout Date time container
   */
  calloutBlockContainer?: IStyle;

  /**
   * styles for callout y-content
   */
  calloutlegendText?: IStyle;

  /**
   * styles for callout x-content
   */
  calloutContentX?: IStyle;
  /**
   * styles for callout y-content
   */
  calloutContentY?: IStyle;
}
