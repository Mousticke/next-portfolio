import React from "react";

const HoCNavLink = (
  WrappedComponent,
  ListItemComponent,
  LinkComponent,
  navLinks,
) => {
  return (
    <WrappedComponent>
      {navLinks &&
        navLinks.map(({ id, url, name }) => (
          <ListItemComponent key={id}>
            <LinkComponent href={url}>
              <a>{name}</a>
            </LinkComponent>
          </ListItemComponent>
        ))}
    </WrappedComponent>
  );
};

export default HoCNavLink;
