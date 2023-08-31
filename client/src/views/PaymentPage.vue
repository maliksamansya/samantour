<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card mt-5">
          <div class="card-header">
            <h3 class="text-center">Payment Details</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Name on Card</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter name on card"
                />
              </div>
              <div class="form-group">
                <label for="cardNumber">Card Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="cardNumber"
                  placeholder="Enter card number"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    class="form-control"
                    id="expiryDate"
                    placeholder="MM/YY"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="cvv">CVV</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cvv"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="amount">Amount</label>
                <input
                  type="text"
                  class="form-control"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
