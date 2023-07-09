import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Story.module.scss';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Story() {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <section className='section' id='ourstory'>
      <h1 className={`section-header ${cx('story-header')}`}>
        {t('story.header')}
      </h1>
      <p
        className={cx('story-description')}
        style={{
          WebkitLineClamp: showMore ? 'unset' : 10,
        }}
      >
        {t('story.description')}
      </p>
      <span
        className={cx('story-see-more')}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? t('story.see_less') : t('story.see_more')}
      </span>
    </section>
  );
}

export default Story;
