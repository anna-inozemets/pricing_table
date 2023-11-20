const radioInputs = document.querySelectorAll('input[name="billingPlan"]');
const pricingList = document.querySelectorAll('.table__body__cell--pricing ul');
const billingLabels = document.querySelectorAll('.pricing-table__billing label');

radioInputs.forEach((radioInput) => {
  radioInput.addEventListener('change', function () {
    const parentLabel = this.closest('label');

    billingLabels.forEach((label) => {
      label.classList.remove('active');
    });

    pricingList.forEach((pricingListItem) => {
      pricingListItem.setAttribute('data-billing-plan', this.value);
    });

    if (this.checked) {
      parentLabel.classList.add('active');
    }
  });
});
