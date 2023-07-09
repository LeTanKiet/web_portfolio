import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import contactImage from '../../assets/contact/1.jpg';
import { CONTACT_LIST } from '../../utils/constants';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Contact() {
  const { width } = useWindowSize();
  const { t } = useTranslation();

  return (
    <section className='section' id='contact'>
      <h2 className='section-header'>{t('contact.contact')}</h2>
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
          <iframe
            title='google-map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.631779807817!2d106.68029371471823!3d10.76283559233076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sUniversity%20of%20Science%20-%20VNUHCM!5e0!3m2!1sen!2sus!4v1677393072993!5m2!1sen!2sus'
            className={cx('google-map')}
          ></iframe>
        </div>

        <div className={cx('contact-image')}>
          <img
            className={cx('studio-image')}
            src={contactImage}
            alt='Studio'
            width={width < 680 ? width - 32 : 600}
            height={width < 680 ? width - 32 : 600}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
