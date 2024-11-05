import "./faq.css";
function FAQsPage() {
  return (
    <div className="row" style={{ padding: "3%" }}>
      <div className="small-12 columns main-well main-well-large">
        <h1 className="display small">Frequently Asked Questions</h1>
        <p>
          Here are some of the most frequently asked questions received by our
          customer service team. If your question wasn't answered here, please{" "}
          <a href="/contact-us" title="Contact timeshare customer service">
            contact us
          </a>
          .
        </p>

        <div id="topfaq" className="main-well-solid mb-6">
          <h2 className="display small mb-4">Our Most Asked FAQ</h2>
          <dl>
            <dt id="posting"></dt>
            <dd></dd>
            <dt id="pricing"></dt>
            <dd></dd>
            <dt id="search">
              <h4>How do I find a timeshare for rent or sale?</h4>
            </dt>
            <dd>
              <p>
                The user sees the homepage, and upon clicking on the details,
                the timeshare's details are shown. Any timeshare that may be
                reserved is one that has already been reserved.{" "}
              </p>{" "}
            </dd>
            <dt id="contact-owner">
              <h4>How do I contact an owner?</h4>
            </dt>
            <dd>
              <p>
                When a user rents a timeshare, the owner will contact the user
                and exchange personal information
              </p>
            </dd>
            <dt id="agreement">
              <h4>Do you have a rental agreement?</h4>
            </dt>
            <dd>
              <p>
                Yes - Click I have read the Rental Agreement, and agree to all
                terms.{" "}
              </p>{" "}
            </dd>

            <dd></dd>
          </dl>
        </div>

        <div id="rentingandbuying" className="main-well-solid mb-6">
          <h2 className="display small mb-4">Renting a Timeshare</h2>
          <dl>
            <dt id="inquiries">
              <h4>How do I inquire about a posting?</h4>
            </dt>
            <dd>
              <p>
                You will need to contact the owner of the posting directly. You
                can send an email inquiry by choosing the "Ask a question"
                option on any posting page. Membership is required, but if you
                are unable to complete the transaction, please{" "}
                <a href="/contact-us">contact us</a> within 30 days for a full
                refund of your membership fee.
              </p>{" "}
            </dd>

            <dt id="rental-transactions">
              <h4>How do I complete a rental transaction?</h4>
            </dt>
            <dd>
              <p>
                After the Owner accepts the request, you need to see the
                contract and agree, then click the accept payment button to
                proceed with the payment.{" "}
              </p>{" "}
            </dd>

            <dd>
              <p></p>{" "}
            </dd>
            <dt id="posting-number"></dt>
            <dd></dd>
            <dt id="delay">
              <h4> </h4>
            </dt>
            <dd>
              <p>
                <a
                  href="/contact-us"
                  title="Contact RedWeek.com customer service"
                ></a>{" "}
              </p>{" "}
            </dd>
            <dt id="nightly"></dt>
            <dd></dd>
            <dt id="currency"></dt>
            <dd></dd>
          </dl>
        </div>

        <div id="addingpostings" className="main-well-solid mb-6">
          <h2 className="display small mb-4">Adding Timeshare Postings</h2>
          <dl>
            <dt id="renting">
              <h4>How do I rent my timeshare?</h4>
            </dt>
            <dd>
              <p>
                You just need to visit the timeshare details page, then view
                details about the timeshare and send a request to book for the
                owner to review.{" "}
              </p>
            </dd>
            <dt id="sell">
              <h4>How do I post my timeshare?</h4>
            </dt>
            <dd>
              <p>
                Users need to contact the admin to have the right to post their
                posts.
              </p>{" "}
            </dd>
            <dt id="rent-sell-cost"></dt>
            <dd></dd>
            <dt id="edit">
              <h4>How do I edit my posting?</h4>
            </dt>
            <dd>
              <p>
                Just go to managetimeshare and select update timeshare to edit
                your timeshare.
              </p>
            </dd>
            <dt id="floating"></dt>
            <dd>
              <p></p>

              <p className="text-center"></p>
            </dd>
            <dt id="posting-contact">
              <h4>How will I know when I have a renter or buyer?</h4>
            </dt>
            <dd>
              <p>
                The user sends a request and the owner will check in see of
                order.
              </p>
            </dd>
            <dt id="points"></dt>
            <dd></dd>
            <dt id="missing">
              <h4>Why isn't my posting showing up?</h4>
            </dt>
            <dd>
              <p>
                There are several possible reasons your posting may not be
                appearing on TimeshareManagement.com:
              </p>
              <ol className="styled">
                {" "}
                <li>
                  {" "}
                  Your account has been banned so you can't post. .{" "}
                </li>{" "}
                <li>
                  {" "}
                  The system is under maintenance to update new features. .{" "}
                </li>{" "}
                <li>
                  {" "}
                  admin or staff do not approve your timeshare. .{" "}
                </li> .{" "}
              </ol>{" "}
            </dd>

            <dd></dd>
            <dt id="online"></dt>
            <dd></dd>
          </dl>
        </div>

        <div id="youraccount" className="main-well-solid mb-2">
          <h2 className="display small mb-4">Your Account</h2>
          <dl>
            <dt id="change-info">
              <h4>How do I change my information?</h4>
            </dt>
            <dd>
              <p>Click view-profile to change personal information. </p>
            </dd>
            <dt id="renew"></dt>
            <dd>
              <p>
                <a
                  href="/account/postings"
                  title="view your timeshare postings"
                ></a>{" "}
                <a href="/account" title="View your Account page"></a>.
              </p>{" "}
            </dd>
            <dt id="payment">
              <h4>Can I pay by bank transfer?</h4>
            </dt>
            <dd>
              <p>
                Of course, my website supports payment by bank transfer and
                international card.
              </p>{" "}
            </dd>
            <dt id="refund">
              <h4>What is your refund policy?</h4>
            </dt>
            <dd>
              <p>
                Generally, purchases made on TimeshareManagement are
                non-refundable, with a few exceptions.{" "}
                <a href="/tos#refunds">View our full refund policy</a> in the
                terms of service.
              </p>{" "}
            </dd>
          </dl>
        </div>

        <h2>Contact Customer Service</h2>
        <p>
          If your question wasn't answered here, please{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100011848508730"
            title="Contact timeshare customer service"
          >
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default FAQsPage;
