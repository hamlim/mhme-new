import React from 'react';
import Avatar from '@atlaskit/avatar';
import { Transition } from 'react-transition-group';
import { css } from 'react-emotion';
import me from '../../../public/static/me.jpg';

const title = css`
  display: inline-block;
  opacity: 0;
  margin-left: 2rem;
  transition: opacity 200ms ease-in-out;
`;

const nav = css`
  display: flex;
`;

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ isHovering: true });
  }
  handleMouseLeave() {
    this.setState({ isHovering: false });
  }
  render() {
    return (
      <nav
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={nav}
      >
        <Avatar
          name="Matt Hamlin"
          size="xlarge"
          src={me}
          href="/"
          presence="online"
        />
        <Transition in={this.state.isHovering} timeout={200}>
          {status => (
            <h1 style={{ ...transitionStyles[status] }} className={title}>
              Matt Hamlin
            </h1>
          )}
        </Transition>
      </nav>
    );
  }
}

export default Navigation;
