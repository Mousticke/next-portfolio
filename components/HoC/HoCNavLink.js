import React from "react";

const HoCNavLink = (
  WrappedComponent,
  ListItemComponent,
  LinkComponent,
  navLinks,
  navType,
  setShowSide,
) => {
  const handleAsideClosing = () => {
    setShowSide((prevState) => !prevState);
  };

  return (
    <WrappedComponent>
      {navLinks &&
        navLinks.map(({ id, url, name }) => (
          <ListItemComponent key={id}>
            <LinkComponent href={url} passHref={true}>
              {navType === "AsideNav" ? (
                <a onClick={handleAsideClosing} aria-label={name}>
                  {name}
                </a>
              ) : (
                <a aria-label={name}>{name}</a>
              )}
            </LinkComponent>
          </ListItemComponent>
        ))}
    </WrappedComponent>
  );
};

export default HoCNavLink;
