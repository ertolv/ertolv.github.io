import * as React from 'react';
import NavMenu from "../NavMenu";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  // const { sections, title } = props;
  return (
    <React.Fragment>
      <header margin-bottom="1em">
        <NavMenu />
      </header>
    </React.Fragment>
  );
}