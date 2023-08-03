import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { EMAIL, QR_CODE } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../../hooks/useWindowSize';

const cx = classNames.bind(styles);

function Contact() {
  const { width } = useWindowSize();
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className="section" id="contact">
      <h2 className="section-header">{t('contact.contact')}</h2>
      <div className={cx('contact-body')}>
        <div className={cx('contact-info')}>
          {/* <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.631779807817!2d106.68029371471823!3d10.76283559233076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sUniversity%20of%20Science%20-%20VNUHCM!5e0!3m2!1sen!2sus!4v1677393072993!5m2!1sen!2sus"
            className={cx('google-map')}
          ></iframe> */}
          <span className={cx('zalo')}>Zalo</span>
          <div className={cx('qr-code-wrapper')}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('contact.message_placeholder')}
            />
          </div>
          <button
            className={cx('contact-submit', {
              disable: !name || !email || !message,
            })}
          >
            <a href={`mailto:${EMAIL}?subject=Hello from ${name}!&body=${message}`}>{t('contact.submit')}</a>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
