import React from "react";
import "./Blog.css";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.avif";
import blog3 from "../../images/blog3.jpg";

const Blog = () => {
  return (
    <>
      <main>
        <center>
          <h1>DonorNetwork Blogs</h1>
        </center>
        <br />
        <div class="blogs">
          <div class="column">
            <div class="card">
              <a href="post1.html">
                <img src={blog1} alt="lblog1go" height="300" width="300" />
              </a>
              <h3>Why donate blood?</h3>
              <p>
                Blood donation is a selfless act that can save lives. Every two
                seconds, someone in the world needs blood. By donating blood,
                you can make a real difference in someone's life. Blood is used
                to treat a variety of medical conditions, including anemia,
                cancer, and trauma. Without blood donations, many of these
                treatments would not be possible. In addition to helping others,
                donating blood also has health benefits for the donor. It can
                reduce the risk of heart disease, improve blood flow, and lower
                blood pressure. It can also help the body regenerate new blood
                cells, which can improve overall health. If you're thinking
                about donating blood, there are a few things to keep in mind.
                You must be in good health, weigh at least 110 pounds, and be at
                least 17 years old (or 16 with parental consent). Most
                importantly, you must be willing to give without expectation of
                receiving anything in return. By donating blood, you can make a
                real difference in someone's life. It's a simple act of kindness
                that can have a big impact.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src={blog2} alt="lblog1go" height="300" width="300" />
              <h3>The importance of donating blood during a pandemic</h3>
              <p>
                The COVID-19 pandemic has created unprecedented challenges for
                our healthcare system. Hospitals and medical facilities are
                facing a critical shortage of blood donations. This shortage is
                due to canceled blood drives and a decrease in donor turnout.
                Despite the challenges, donating blood during a pandemic is more
                important than ever. Blood donations are needed to treat
                patients with COVID-19 and other medical conditions. They are
                also needed for surgeries, trauma care, and cancer treatments.
                Donating blood during a pandemic is safe. Blood donation centers
                are taking extra precautions to ensure the safety of donors and
                staff. These precautions include increased sanitation, social
                distancing, and the use of personal protective equipment. If
                you're healthy and able to donate blood, please consider doing
                so. It's a simple way to make a big difference during a
                challenging time. Our blood donation app makes it easy to find a
                donation center near you and schedule an appointment. Together,
                we can help ensure that our healthcare system has the blood it
                needs to save lives.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src={blog3} alt="lblog1go" height="300" width="300" />
              <h3>Tips for preparing to donate blood</h3>
              <p>
                Donating blood is a selfless act that can save lives. However,
                it's important to prepare properly to ensure that the donation
                process goes smoothly. Here are some tips for preparing to
                donate blood: Stay hydrated: Drink plenty of water in the days
                leading up to your donation. This will help ensure that your
                veins are plump and easy to access. Eat a nutritious meal: Eat a
                healthy, balanced meal before your donation. This will help
                ensure that your body has the nutrients it needs to recover
                after the donation. Get plenty of rest: Make sure to get a good
                night's sleep before your donation. This will help ensure that
                you feel alert and energetic during the donation process. Wear
                comfortable clothing: Wear loose-fitting clothing that will
                allow you to roll up your sleeves easily. This will help the
                donation process go more smoothly. Bring a friend: Consider
                bringing a friend or family member with you to your donation
                appointment. Having someone there for support can make the
                experience less stressful. By following these tips, you can help
                ensure that your blood donation is successful and that you feel
                good afterward.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
