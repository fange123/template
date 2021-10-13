declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  const content: string;
  export const ReactComponent: any;
  export default content;
}

interface Window {
  ga: string;
}

declare module 'rc-tabs';
declare module 'rc-tabs/lib/TabContent';
declare module 'rc-tabs/lib/ScrollableTabBar';
declare module 'rc-tabs/lib/ScrollableInkTabBar';
