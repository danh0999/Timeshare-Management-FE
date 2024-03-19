import React from "react";
import "./agreement.css";

function AgreementPage() {
  return (
    <div className="agreement-container">
      <h1 className="title">Rental Agreement</h1>

      <div className="agreement-section">
        <h2 className="section-title">Resort Policies</h2>
        <ul className="policy-list">
          <li>No pets</li>
          <li>No smoking</li>
          <li>Minimum check-in age: 18</li>
        </ul>
      </div>

      <div className="agreement-section">
        <h2 className="section-title">Terms and Conditions</h2>
        <p className="paragraph">
          This Rental Agreement ("Agreement") is between the above identified
          Owner and the Renter for the rental of the unit described above
          ("Unit") for the term described above ("Rental Period"). The Owner has
          contracted with timeshare, Inc. (“timeshare”), which serves as the
          processor and facilitator of the transaction between the two parties.
          While timeshare has verified the Unit information listed above with
          the resort, and provides assistance with the transaction, the Owner is
          ultimately responsible for the accuracy of the posting, changing the
          guest name with the resort, and ensuring the resort provides the
          correct unit type.
        </p>
        <p className="paragraph">
          This Agreement will become effective upon the completion of the Review
          Period as described in section 3.1.
        </p>
        <h3 className="subsection-title">Renter Obligations</h3>
        <p className="paragraph">
          2.1. Renter may use the Unit during the term without interference
          subject to the terms of this Agreement. If the Unit is uninhabitable
          or inaccessible per section 5 on the day that the term starts, Renter
          shall notify timeshare immediately using the dispute process described
          in section 6. Any dispute regarding the unit or anticipated evacuation
          event will delay payment to the Owner, pending resolution by
          timeshare, the sole arbiter.
        </p>
        {/* Add more content for Renter Obligations */}

        {/* Content for Renter Obligations */}

        <h3 className="subsection-title">Rental Payment Terms</h3>
        <p className="paragraph">
          3.1. Upon being notified of Renter's full Rental Payment due under
          this Agreement, timeshare will begin a review of the transaction
          (hereinafter "Review Period"). timeshare may, in its sole discretion,
          require additional documentation, proof of identity, a change to the
          Renter's payment method, or other such information deemed necessary to
          confirm the rental and protect all parties. Owner agrees to change the
          name on the reservation and forward a new confirmation. Both Renter
          and Owner agree to make a best-faith effort to comply with any such
          requests in a timely fashion. Upon completion of the Review Period,
          timeshare will issue an email confirmation ("Confirmation") to both
          Owner and Renter, at which point this Agreement in its entirety
          becomes effective (but is not in effect until such Confirmation is
          issued). If timeshare does not issue a Confirmation, timeshare will
          refund the Rent Payment to the Renter, at which time Renter, Owner,
          and timeshare are relieved of all further obligations under this
          Agreement.
        </p>
        {/* Add more content for Rental Payment Terms */}

        {/* Content for Rental Payment Terms */}

        <h3 className="subsection-title">Cancellations</h3>
        <p className="paragraph">
          Renter and Owner agree to the following Cancellation Policy once
          timeshare issues the Confirmation: If Renter cancels at least 60 days
          prior to check-in, 100% of the total rental amount will be refunded to
          the Renter. For cancellations less than 60 days prior to check-in,
          100% of the total rental amount will be paid to the Owner, less
          agreed-upon fees.
        </p>
        {/* Add more content for Cancellations */}

        {/* Content for Cancellations */}

        <h3 className="subsection-title">Force Majeure</h3>
        <p className="paragraph">
          If the Unit is uninhabitable or inaccessible on the day the Rental
          Period commences by reason of flood, fire, storm, force majeure, or
          other natural disaster, and a satisfactory substitute is not made
          available, the total Rent Payment will be refunded to the Renter. If
          the Renter is required to evacuate the Unit at any point during the
          Rental Term, the Renter is entitled to a pro-rated refund for unused
          nights from the point of evacuation order through the remainder of the
          Rental Period. In such events, the Owner will have no further
          liability to the Renter. Renter's inability to complete their travel
          for any other reason beyond the Owner's control (including, but not
          limited to, illness, airline interruptions, job loss, government
          mandate or restrictions) are the sole responsibility of the Renter,
          and the Cancellation Policy in section 4 applies. Renter is encouraged
          to purchase trip interruption and cancellation insurance for such
          matters.
        </p>
        {/* Add more content for Force Majeure */}

        {/* Content for Force Majeure */}

        <h3 className="subsection-title">Disputes</h3>
        <p className="paragraph">
          6.1. If the Renter does not receive the Unit as described in the Unit
          Details section, they should open a dispute directly with timeshare at
          https://www.timeshare.com/dispute by 12 pm (noon) PT on Nov 19, 2024.
        </p>
        <p className="paragraph">
          6.2. If there is a material discrepancy between the Unit received and
          the Unit Details described in this Agreement, timeshare will attempt
          to resolve the issue. However, the information provided on Renter's
          Reservation Confirmation is based on information obtained from the
          resort/hotel or other reliable resources. timeshare makes reasonable
          efforts to ensure that information provided by timeshare is accurate
          and complete as of the date such information is published; however,
          timeshare expressly disclaims liability for inaccurate, incomplete or
          misleading resort information. Renters and their guests should reach
          out to the Resort directly to verify accuracy of information as
          needed. timeshare reserves all rights to modify these Terms and
          Conditions at any time in its sole discretion.
        </p>
        {/* Add more content for Disputes */}

        {/* Content for Disputes */}

        <h3 className="subsection-title">Travel Insurance</h3>
        <p className="paragraph">
          If Renter purchased the optional travel insurance, the policy or
          description of coverage for the trip can be found here:
          https://www.csatravelprotection.com/certpolicy.do?product=g-330csa.
          The travel protection, if purchased, provides coverage for unused,
          nonrefundable payments if the trip must be canceled due to a covered
          reason. Covered reasons include: mandatory hurricane evacuations;
          sickness, injury or death; extension of school year; armed service
          revocation; involuntary termination of employment or other specific
          reasons listed in the policy/Description of Coverage. Terms and
          conditions apply. Plan is underwritten by GENERALI US Branch, A Stock
          Company. For coverage inquiries or customer service call (866)
          999-4018.12345
        </p>
        {/* Add more content for Travel Insurance */}

        {/* Content for Travel Insurance */}

        {/* Add more sections as needed */}
      </div>
    </div>
  );
}

export default AgreementPage;
