export const scrollToElement = (sectionName) => {
  const htmlEle = document.getElementById(`${sectionName}`);
  if (htmlEle) {
    window.scrollTo({
      top:
        htmlEle.offsetTop -
        (window.scrollY <= htmlEle.offsetTop ? 100 : 120),
    });
  }
};
