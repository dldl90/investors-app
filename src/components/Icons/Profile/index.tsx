import * as React from 'react';
import { colors } from '../../../constants/';

export interface IProfileProps {
  /**
   * The width and height size
   * @default 24px
   */
  size?: string;
  /**
   * Targets the svg's `fill` attribute
   * @default colors.extended.blue300
   */
  activeColor?: string;
  /**
   * Targets the svg's `fill` attribute
   * @default colors.extended.blue500
   */
  inactiveColor?: string;
  /** For the default active state */
  active?: boolean;
}

export interface IProfileState {
  active: boolean;
}

export default class Profile extends React.Component<IProfileProps, IProfileState> {
  constructor(props: any) {
    super(props);

    this.state = {
      active: !!this.props.active,
    };
  }

  public toggleActive = () => {
    this.setState({ active: !this.state.active });
  };

  public render() {
    const {
      size = '30px',
      active = false,
      activeColor = colors.extended.blue300,
      inactiveColor = colors.extended.blue500,
    } = this.props;
    const color = active ? activeColor : inactiveColor;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 49 49"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={this.toggleActive}
      >
        <path
          fill={color}
          // tslint:disable-next-line:max-line-length
          d="M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M37.3,38.2c-1.3-2-3.2-3.4-5.4-4.1l-2.9-0.8c-1-0.3-1.5-1.3-1.2-2.3c0-0.2,0.2-0.4,0.3-0.5l2.1-2.3c1.4-1.5,2.1-3.6,1.8-5.6l-0.4-2.8c-0.3-2.1-1.5-4.1-3.3-5.2h0c-2.5-1.5-5.6-1.5-8.1,0.1c-1.7,1.1-2.8,2.9-3.1,4.8l-0.5,3c-0.4,2.1,0.3,4.3,1.8,5.9l2,2.2c0.1,0.1,0.2,0.3,0.3,0.5c0.4,0.9-0.2,2-1.2,2.3l-2.9,0.8c-2.3,0.6-4.2,2.1-5.4,4.1c-4-3.5-6.5-8.7-6.5-14.3c0-10.6,8.8-19.3,19.6-19.3s19.6,8.7,19.6,19.3C43.8,29.5,41.2,34.6,37.3,38.2L37.3,38.2z"
        />
      </svg>
    );
  }
}
