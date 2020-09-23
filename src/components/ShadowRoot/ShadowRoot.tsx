import * as React from 'react';
import root from 'react-shadow';

// eslint-disable-next-line
import antdCssStyles from '!!raw-loader!./antd_css.txt';

interface ShadowRootProps {
  children: any;
}

interface ShadowRootState {}

class ShadowRoot extends React.Component<ShadowRootProps, ShadowRootState> {
  render() {
    const { children } = this.props;
    return (
      <>
        <root.div>
          <>
            <html
              style={{
                borderRadius: '4px',
                overflow: 'hidden'
              }}
            >
              <head>
                <style>{antdCssStyles}</style>
              </head>
              <body>{children}</body>
            </html>
          </>
        </root.div>
      </>
    );
  }
}

export default ShadowRoot;
