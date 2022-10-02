/* About Me | Modal */
const openAboutMe = document.querySelector("#openAboutMe");
const closeAboutMe = document.querySelector("#closeAboutMe");
const aboutMe = document.querySelector("#aboutMe");
const fadeAboutMe = document.querySelector("#fadeAboutMe");

const toggleAboutMeModal = () => {
  aboutMe.classList.toggle("hideModal");
  fadeAboutMe.classList.toggle("hideModal");
};

[openAboutMe, closeAboutMe, fadeAboutMe].forEach((el) => {
  el.addEventListener("click", () => toggleAboutMeModal());
});

/* Portfolio | Modal */
const openPortfolio = document.querySelector("#openPortfolio");
const closePortfolio = document.querySelector("#closePortfolio");
const portfolio = document.querySelector("#portfolio");
const fadePortfolio = document.querySelector("#fadePortfolio");

const togglePortfolioModal = () => {
  portfolio.classList.toggle("hideModal");
  fadePortfolio.classList.toggle("hideModal");
};

[openPortfolio, closePortfolio, fadePortfolio].forEach((el) => {
  el.addEventListener("click", () => togglePortfolioModal());
});
