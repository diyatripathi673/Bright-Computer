const displayINRCurrency = (amount) => {
  return amount?.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  });
};

export default displayINRCurrency; 