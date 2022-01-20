import styles from "../styles/Work.module.css";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const SwipperlItem = ({ children }) => {
  return <div className={styles.carouselItem}>{children}</div>;
};

const Swipper = ({ children, isExternalButton }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(true);
  const [isSmall] = useState(true);
  const [isVerySmall] = useState(false);
  const dividingFactor = isSmall ? (isVerySmall ? 1 : 2) : 3;
  const arrayLength = Math.ceil(
    React.Children.count(children) / dividingFactor
  );
  const repeat = Array.from(Array(arrayLength).keys());

  useEffect(() => {
    setActiveIndex(0);
  }, [dividingFactor]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = arrayLength - 1;
    } else if (newIndex >= arrayLength) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className={styles.carousel}
      id="blogs"
      data-aos="fade-up"
    >
      <div
        className={styles.inner}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          left: isExternalButton ? "60px" : null,
          position: isExternalButton ? "relative" : null,
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            width: isSmall ? (isVerySmall ? "100%" : "50%") : "33.33%",
          });
        })}
      </div>
      {isExternalButton ? (
        <div className={styles.indicatorsExternal}>
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            &lt;
          </button>

          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            &gt;
          </button>
        </div>
      ) : (
        <div className={styles.indicators}>
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            &lt;
          </button>

          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Swipper;
