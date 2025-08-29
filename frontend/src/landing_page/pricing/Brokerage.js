import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-8 p-5 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul></ul>
        </div>
        <div className="col-4 p-5 text-center">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>

        {/* Added Brokerage Tabs Section */}
        <div className="mt-5 border-top pt-4">
          {/* Tabs */}
          <ul className="nav nav-tabs" id="brokerageTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="equity-tab"
                data-bs-toggle="tab"
                data-bs-target="#equity"
                type="button"
                role="tab"
              >
                Equity
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="currency-tab"
                data-bs-toggle="tab"
                data-bs-target="#currency"
                type="button"
                role="tab"
              >
                Currency
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="commodity-tab"
                data-bs-toggle="tab"
                data-bs-target="#commodity"
                type="button"
                role="tab"
              >
                Commodity
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content mt-4 mb-5" id="brokerageTabsContent">
            {/* Equity */}
            <div
              className="tab-pane fade show active p-3"
              id="equity"
              role="tabpanel"
            >
              <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th></th>
                    <th>Equity delivery</th>
                    <th>Equity intraday</th>
                    <th>F&amp;O - Futures</th>
                    <th>F&amp;O - Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brokerage</td>
                    <td>Zero Brokerage</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>
                      Flat Rs. 20 per executed order
                      <br />
                      0.125% intrinsic value on exercised options
                      <br />
                      0.1% on sell side (premium)
                    </td>
                  </tr>
                  <tr className="table-light">
                    <td>STT/CTT</td>
                    <td>0.1% on buy &amp; sell</td>
                    <td>0.025% on sell side</td>
                    <td>0.02% on sell side</td>
                    <td>As above</td>
                  </tr>
                  <tr>
                    <td>Transaction charges</td>
                    <td>
                      NSE: 0.00297%
                      <br />
                      BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00297%
                      <br />
                      BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00173%
                      <br />
                      BSE: 0
                    </td>
                    <td>
                      NSE: 0.03503%
                      <br />
                      BSE: 0.0325%
                    </td>
                  </tr>
                  <tr className="table-light">
                    <td>GST</td>
                    <td colSpan="4">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td>SEBI charges</td>
                    <td colSpan="4">₹10 / crore</td>
                  </tr>
                  <tr className="table-light">
                    <td>Stamp charges</td>
                    <td>0.015% or ₹1500 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Currency */}
            <div className="tab-pane fade p-3" id="currency" role="tabpanel">
              <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th></th>
                    <th>Currency Futures</th>
                    <th>Currency Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brokerage</td>
                    <td>₹20 per executed order</td>
                    <td>₹20 per executed order</td>
                  </tr>
                  <tr className="table-light">
                    <td>STT/CTT</td>
                    <td>Nil</td>
                    <td>Nil</td>
                  </tr>
                  <tr>
                    <td>Transaction charges</td>
                    <td>NSE: 0.0009%</td>
                    <td>NSE: 0.03503% (on premium)</td>
                  </tr>
                  <tr className="table-light">
                    <td>GST</td>
                    <td colSpan="2">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td>SEBI charges</td>
                    <td colSpan="2">₹10 / crore</td>
                  </tr>
                  <tr className="table-light">
                    <td>Stamp charges</td>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Commodity */}
            <div className="tab-pane fade p-3" id="commodity" role="tabpanel">
              <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th></th>
                    <th>Commodity Futures</th>
                    <th>Commodity Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brokerage</td>
                    <td>₹20 per executed order</td>
                    <td>₹20 per executed order</td>
                  </tr>
                  <tr className="table-light">
                    <td>STT/CTT</td>
                    <td>0.01% on sell side</td>
                    <td>0.05% on sell side (on premium)</td>
                  </tr>
                  <tr>
                    <td>Transaction charges</td>
                    <td>0.0026%</td>
                    <td>0.05% (on premium)</td>
                  </tr>
                  <tr className="table-light">
                    <td>GST</td>
                    <td colSpan="2">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td>SEBI charges</td>
                    <td colSpan="2">₹10 / crore</td>
                  </tr>
                  <tr className="table-light">
                    <td>Stamp charges</td>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Calculate costs */}
            <p className="text-center">
              <a href="" style={{ textDecoration: "none" }}>
                Calculate your costs upfront
              </a>{" "}
              using our brokerage calculator
            </p>
          </div>
        </div>
      </div>

      {/* Charges for account opening */}
      <div className="mt-5 p-5" style={{ marginBottom: "100px" }}>
        <h4>Charges for account opening</h4>
        <table className="table table-borderless border">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td className="text-success fw-bold">FREE</td>
            </tr>
            <tr className="table-light">
              <td>Offline account</td>
              <td className="text-success fw-bold">FREE</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr className="table-light">
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Demat AMC */}
      <div className="mt-5 p-5" style={{ marginBottom: "100px" }}>
        <h4>Demat AMC (Annual Maintenance Charge)</h4>
        <table className="table table-borderless border">
          <thead className="table-light">
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td className="text-success fw-bold">FREE*</td>
            </tr>
            <tr className="table-light">
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Charges for optional value added services */}
      <div className="mt-5 mb-5 pt-4 p-5">
        <h4>Charges for optional value added services</h4>
        <table className="table table-borderless border">
          {/* <thead className="table-light"> */}
          <thead className="table-light">
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr className="table-light">
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy &amp; Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row text-muted p-5">
        <div className="col-6 ps-5 ">
          <h3 className="text-muted mb-n5">Charges explained</h3>
        </div>
        <div className="col-6"></div>
        <div className="col-6 p-5">
          <h6>Securities/Commodities transaction tax</h6>
          <p className="small">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="small">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h6>Transaction/Turnover Charges</h6>
          <p className="small">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="small">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="small">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="small">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p className="small">
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h6>Call & trade</h6>
          <p className="small">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h6>Stamp charges</h6>
          <p className="small">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <div>
            <h6>NRI brokerage charges</h6>
            <ul className="small">
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </div>

          <h6>Account with debit balance</h6>
          <p className="small">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <div>
            <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
            <ul className="small">
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </div>

          <div>
            <h6>Margin Trading Facility (MTF)</h6>
            <ul className="small">
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-6 p-5">
          <h6>GST</h6>
          <p className="small">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h6>SEBI Charges</h6>
          <p className="small">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h6>DP (Depository participant) charges</h6>
          <p className="small">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="small">
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="small">
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h6>Pledging charges</h6>
          <p className="small">₹30 + GST per pledge request per ISIN.</p>
          <h6>AMC (Account maintenance charges)</h6>
          <p className="small">
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA,{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Click here
            </a>
          </p>
          <p className="small">
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC,{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Click here
            </a>
          </p>
          <h6>Corporate action order charges</h6>
          <p className="small">
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h6>Off-market transfer charges</h6>
          <p className="small">₹25 per transaction.</p>
          <h6>Physical CMR request</h6>
          <p className="small">
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h6>Payment gateway charges</h6>
          <p className="small">
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <h6>Delayed Payment Charges</h6>
          <p className="small">
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Learn more.
            </a>
          </p>
          <div>
            <h6>Trading using 3-in-1 account with block functionality</h6>
            <ul className="small">
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-muted p-5 ">
        <h6>Disclaimer</h6>
        <p className="small">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
