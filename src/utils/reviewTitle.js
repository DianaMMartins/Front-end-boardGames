export const reviewTitle = (titleToChange) => {
    const capitalizedTitle =
      titleToChange.charAt(0).toUpperCase() + titleToChange.slice(1);
    return capitalizedTitle.replace(/-/g, " ");
  };