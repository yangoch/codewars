const rateProfile = (profile, swipeLeft, swipeRight) => {
  return profile.bio.match(/javascript/i) ? swipeRight() : swipeLeft();
};
