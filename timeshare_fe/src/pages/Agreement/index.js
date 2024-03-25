import React from "react";
import "./agreement.css";

function AgreementPage() {
  return (
    <div className="agreement-container">
      <h1 className="title">Rental Agreement</h1>

      <div className="agreement-section">
        <h2 className="section-title">Resort Policies</h2>
        <ul className="policy-list">
          <li>No pets allowed on premises.</li>
          <li>No smoking allowed in the unit or common areas.</li>
          <li>Minimum check-in age: 18 years old.</li>
        </ul>
      </div>

      <div className="agreement-section">
        <h2 className="section-title">Terms and Conditions</h2>
        <p className="paragraph">
          This Rental Agreement ("Agreement") is a legally binding contract
          between the Owner and the Renter for the rental of the described unit
          ("Unit") for the specified term ("Rental Period"). The Owner has
          partnered with timeshare, Inc. ("timeshare") to facilitate this
          transaction. While timeshare assists with the transaction and verifies
          the Unit information, the Owner remains responsible for accuracy and
          coordination with the resort.
        </p>
        <p className="paragraph">
          This Agreement takes effect after the Review Period described in
          section 3.1.
        </p>
        <h3 className="subsection-title">Renter Obligations</h3>
        <p className="paragraph">
          2.1. Renter agrees to use the Unit during the term without
          interference, following the terms of this Agreement. In the event that
          the Unit is uninhabitable or inaccessible as per section 5 on the
          start date, Renter must notify timeshare immediately using the dispute
          process outlined in section 6. Any dispute regarding the Unit or
          potential evacuation delays payment to the Owner until resolved by
          timeshare.
        </p>

        <h3 className="subsection-title">Rental Payment Terms</h3>
        <p className="paragraph">
          3.1. Upon receiving Renter's full Rental Payment, timeshare begins a
          review ("Review Period"). timeshare may request additional
          documentation or information to confirm the rental. Upon completing
          the Review Period, timeshare issues a Confirmation email to both Owner
          and Renter, activating this Agreement. If no Confirmation is issued,
          timeshare refunds the Rent Payment, releasing all parties from
          obligations.
        </p>

        <h3 className="subsection-title">Cancellations</h3>
        <p className="paragraph">
          Renter and Owner agree to this Cancellation Policy: If Renter cancels
          at least 60 days before check-in, 100% rental amount is refunded. For
          cancellations within 60 days, 100% rental amount is paid to the Owner,
          minus agreed fees.
        </p>

        <h3 className="subsection-title">Force Majeure</h3>
        <p className="paragraph">
          If the Unit becomes uninhabitable due to natural disasters, Renter
          receives a full refund. In case of evacuation during the Rental Term,
          Renter receives a pro-rated refund. Renter's inability to travel for
          other reasons doesn't alter the Cancellation Policy. Renter is advised
          to consider purchasing trip insurance for unforeseen circumstances.
        </p>

        <h3 className="subsection-title">Disputes</h3>
        <p className="paragraph">
          6.1. If Renter receives a Unit not as described, they should dispute
          directly with timeshare by Nov 19, 2024, noon PT.
        </p>
        <p className="paragraph">
          6.2. timeshare aims to resolve disputes about Unit discrepancies.
          However, timeshare is not liable for inaccurate resort information.
          Renter should verify information with the Resort. timeshare reserves
          the right to modify Terms and Conditions.
        </p>
      </div>
    </div>
  );
}

export default AgreementPage;
