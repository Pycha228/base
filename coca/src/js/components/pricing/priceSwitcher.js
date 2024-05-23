export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const setPeriod = document.querySelectorAll('[data-price="period"]');

  const priceList = {
    starter: {
      default: 4,
      withSale: 100,
    },
    popular: {
      default: 56,
      withSale: 1400,
    },
    enterprise: {
      default: 84,
      withSale: 2100,
    },
  };

  const periodList = {
    plan: {
      default: '/day',
      withSale: '/mo',
    },
  };

  const setPricesWithSale = () => {
    setPeriod.forEach((el) => {
      el.textContent = periodList.plan.withSale;
    });
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    enterprisePrice.textContent = priceList.enterprise.withSale;
  };

  const setDefaultPrices = () => {
    setPeriod.forEach((el) => {
      el.textContent = periodList.plan.default;
    });
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;
  };

  switcher.checked = true;
  setPricesWithSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWithSale();
    } else {
      setDefaultPrices();
    }
  });
};
