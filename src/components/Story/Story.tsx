'use client';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Story.module.scss';

const cx = classNames.bind(styles);

function Story() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section className='section' id='ourstory'>
      <h1 className={`section-header ${cx('story-header')}`}>About Us</h1>
      <p
        className={cx('story-description')}
        style={{
          WebkitLineClamp: showMore ? 'unset' : 10,
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quidem
        quis repudiandae laboriosam fuga quod autem, officiis impedit possimus
        ipsum provident odio quas esse, aliquid ab, sed earum? Facilis, dolorem.
      </p>
      <span
        className={cx('story-see-more')}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'Show more'}
      </span>
    </section>
  );
}

export default Story;
