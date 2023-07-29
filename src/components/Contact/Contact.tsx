import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { CONTACT_LIST, QR_CODE } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../../hooks/useWindowSize';

const cx = classNames.bind(styles);

function Contact() {
  const { width } = useWindowSize();
  const { t } = useTranslation();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: any) => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    if (!name || !email || !message) return;
    // TODO: send message to mail
    e.preventDefault();
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-header">{t('contact.contact')}</h2>
      <div className={cx('contact-body')}>
        <div className={cx('contact-info')}>
          <div>
            {CONTACT_LIST.map((item) => (
              <div key={item.label} className={cx('contact-info-item')}>
                <img src={item.icon} alt={item.label} width={24} height={24} />
                <span>{item.description}</span>
              </div>
            ))}
          </div>
          {/* <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.631779807817!2d106.68029371471823!3d10.76283559233076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sUniversity%20of%20Science%20-%20VNUHCM!5e0!3m2!1sen!2sus!4v1677393072993!5m2!1sen!2sus"
            className={cx('google-map')}
          ></iframe> */}
          <div>
            <img src={QR_CODE} alt="Qr code" className={cx('qr-code')} />
          </div>
        </div>

        <form
          style={{
            width: width < 632 ? width - 32 : 600,
          }}
        >
          <div className={cx('contact-group')}>
            <label className={cx('contact-label')} htmlFor="contact-name">
              {t('contact.full_name')}
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder={t('contact.full_name_placeholder')}
              className={cx('contact-input')}
              ref={nameRef}
              required
            />
          </div>
          <div className={cx('contact-group')}>
            <label className={cx('contact-label')} htmlFor="contact-email">
              {t('contact.email')}
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder={t('contact.email_placeholder')}
              className={cx('contact-input')}
              ref={emailRef}
              required
            />
          </div>
          <div className={cx('contact-group')}>
            <label className={cx('contact-label')} htmlFor="contact-message">
              {t('contact.message')}
            </label>
            <textarea
              name="Message"
              id="contact-message"
              cols={30}
              rows={10}
              className={cx('contact-input')}
              required
              ref={messageRef}
              placeholder={t('contact.message_placeholder')}
            />
          </div>
          <button className={cx('contact-submit')} onClick={handleSubmit} type="submit">
            {/* <a href={`mailto:${EMAIL}?subject='Hello shop!'&body='Just popped in to say hello'`}> */}
            {t('contact.submit')}
            {/* </a> */}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
