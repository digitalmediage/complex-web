/* eslint-disable react/prop-types */
import React from 'react';

import Tab from './Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      aciveTab: this.props.children[0].props.label,
    };
  }

  componentDidMount() {
    this.onClickTabItem('Complexes');
  }

  onClickTabItem = tab => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
