import * as React from 'react';
import { Container } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
  public render() {
    return (
      <React.Fragment>
        <Header title="Demo Website" />
        <Container>
          {this.props.children}
        </Container>
        <Footer
          title=""
          description=""
        />
      </React.Fragment>
    );
  }
}