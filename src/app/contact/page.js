"use client";
import { useState, useEffect } from "react";
import styles from "./contact.module.scss";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHiking,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trip: "",
    message: "",
    participants: "1",
    date: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    
    return () => clearInterval(timer);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.trip.trim()) newErrors.trip = "Please select a trip";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          trip: formData.trip,
          message: formData.message,
          participants: formData.participants,
          date: formData.date,
          submission_time: new Date().toLocaleString(),
        }
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          trip: "",
          message: "",
          participants: "1",
          date: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const isOfficeOpen = () => {
    if (!isMounted) return false;
    const hours = currentTime.getHours();
    return hours >= 8 && hours < 20;
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <FaHiking className={styles.heroIcon} />
          <h1>Start Your Adventure Today</h1>
          <p>
            Contact our expert guides to plan your perfect trekking or
            expedition experience
          </p>
        </div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.infoCard}>
          <h2>Expedition Headquarters</h2>
          <p>
            Our team is available to answer your questions and help plan your
            next adventure.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Base Camp Office</h3>
                <p>
                  Chauhan Bhawan, Opposite - Apline Public Schol, Tiloth Road
                  <br />
                  Uttarkashi, Uttarakhand
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaPhoneAlt />
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91-8266882595</p>
                <p className={styles.contactNote}>
                  Mon-Fri, 8:00 AM - 6:00 PM (GMT+5:45)
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaWhatsapp />
              </div>
              <div>
                <h3>WhatsApp</h3>
                <p>+91-8266882595</p>
                <p className={styles.contactNote}>
                  Fast response for international clients
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>info@himalayaheights.com</p>
                <p className={styles.contactNote}>Response within 12 hours</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaClock />
              </div>
              <div>
                <h3>Current Status</h3>
                <p>{isOfficeOpen() ? "Available" : "On Expedition"}</p>
                {isMounted && (
                  <p className={styles.contactNote}>
                    Local time: {formatTime(currentTime)} (GMT+5:45)
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <h3>Follow Our Adventures</h3>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/profile.php?id=61577948457253"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/himalaya_heights/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/918266882595"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
          <h2>Summit Your Next Adventure</h2>

          <div className={styles.formColumns}>
            <div className={styles.formColumn}>
              <div
                className={`${styles.formGroup} ${
                  errors.name ? styles.hasError : ""
                }`}
              >
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
                {errors.name && (
                  <span className={styles.errorText}>{errors.name}</span>
                )}
              </div>

              <div
                className={`${styles.formGroup} ${
                  errors.email ? styles.hasError : ""
                }`}
              >
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>

              <div
                className={`${styles.formGroup} ${
                  errors.phone ? styles.hasError : ""
                }`}
              >
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 9876543210"
                />
                {errors.phone && (
                  <span className={styles.errorText}>{errors.phone}</span>
                )}
              </div>
            </div>

            <div className={styles.formColumn}>
              <div className={styles.formGroup}>
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="participants">Participants</label>
                <select
                  id="participants"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, "9+", "Private Group"].map(
                    (num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div
                className={`${styles.formGroup} ${
                  errors.trip ? styles.hasError : ""
                }`}
              >
                <label htmlFor="trip">Trip Interest *</label>
                <select
                  id="trip"
                  name="trip"
                  value={formData.trip}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a trek/expedition</option>
                  <option value="Mt. Shivling">Mt. Shivling Expedition</option>
                  <option value="Auden's Col">
                    Auden&apos;s Col Expedition
                  </option>
                  <option value="Kalindi Khal">Kalindi Khal Expedition</option>
                  <option value="Meru">
                    Meru Expedition (Shark&apos;s Fin)
                  </option>
                  <option value="Mayali Pass">Mayali Pass Expedition</option>
                  <option value="Lamkhaga Pass">
                    Lamkhaga Pass Expedition
                  </option>
                  <option value="Thalay Sagar">Thalay Sagar Circuit</option>
                  <option value="Gaumukh Tapovan">Gaumukh Tapovan Trek</option>
                  <option value="Kedarkantha">Kedarkantha Trek</option>
                  <option value="Kedartal">Kedartal Trek</option>
                  <option value="Kyarkoti">Kyarkoti Trek</option>
                  <option value="Dayara Bugyal">Dayara Bugyal Trek</option>
                  <option value="Gidara Bugyal">Gidara Bugyal Trek</option>
                  <option value="Dodital">Dodital Trek</option>
                  <option value="Nandanvan">Nandanvan Trek</option>
                  <option value="Gaumukh Glacier">Gaumukh Glacier Trek</option>
                  <option value="Sat Tal">Sat Tal Trek</option>
                  <option value="Dodital Darwa">Dodital Darwa Pass Trek</option>
                  <option value="Custom Trek">Custom Trek Itinerary</option>
                  <option value="Other">Other Inquiry</option>
                </select>
                {errors.trip && (
                  <span className={styles.errorText}>{errors.trip}</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your group, experience level, special requests..."
            ></textarea>
          </div>

          <div className={styles.formFooter}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className={styles.spinner} viewBox="0 0 50 50">
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      strokeWidth="5"
                    ></circle>
                  </svg>
                  Sending Inquiry...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </button>
            <p className={styles.requiredNote}>* Required fields</p>
          </div>

          {/* Moved messages below the submit button */}
          {submitStatus === "success" && (
            <div className={styles.successMessage}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 4L12 14.01L9 11.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3>Inquiry Received!</h3>
                <p>
                  Our expedition team will contact you within 12 hours to
                  discuss your adventure plans.
                </p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className={styles.errorMessage}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3>Submission Error</h3>
                <p>
                  There was an issue sending your inquiry. Please try again or
                  contact us directly.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.586857286226!2d78.44340467563131!3d30.730012974585613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908ed0fd1899c3f%3A0xe5a51c395897b5c5!2sHimalayas%20Expedition!5e0!3m2!1sen!2sin!4v1743050055103!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Trekking Company Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;