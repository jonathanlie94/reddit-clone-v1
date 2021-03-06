/*
  A component that contains submitted time for a topic, used in both
  list and detail content for a topic
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from 'ui';
import messages from './messages';
import { FormattedRelative, FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
  color: ${theme.colors.grey};
  margin-left: ${theme.margins.small};
  margin-top: ${theme.margins.smallX};
  font-size: ${theme.fontSizes.small};
`;

class TopicTime extends Component {
  render() {
    return (
      <Wrapper className={this.props.className}>
        <FormattedMessage
          {...messages.text}
          values={{
            relativeTime: <FormattedRelative value={this.props.value} />,
          }}
        />
        {this.props.children}
      </Wrapper>
    );
  }
}

TopicTime.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.instanceOf(Date),
};

export default TopicTime;
